import { useRegisterUserMutation } from "@/redux/api/baseApi";
import { setToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { IoIosEye, IoIosEyeOff, IoMdClose } from "react-icons/io";
import { LuLoaderCircle } from "react-icons/lu";
import type { IModalToggleProps, IRegisterInputs } from "Type";

const RegisterModal = ({ toggleModal }: IModalToggleProps) => {
  const [showPass, setShowPass] = useState(false);

  const dispatch = useAppDispatch();
  //   const token = useAppSelector(selectAuthToken);
  //   console.log(token);
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterInputs>();

  const onSubmit: SubmitHandler<IRegisterInputs> = async (data) => {
    // console.log(data);
    try {
      const res = await registerUser(data).unwrap(); // ✅ unwrap the actual response

      toast.success(res.message);
    //   console.log("Dispatching token:", res.data.token);
      dispatch(setToken(res?.data?.token));
    //   console.log("Login successful:", res);
      reset();
      (document.getElementById("my_modal_1")! as HTMLDialogElement).showModal();
      (document.getElementById("my_modal_2")! as HTMLDialogElement).close();
    } catch (error) {
      console.error("Error logging in user:", error);
      toast.error("An error occurred during login.");
    }
  };
  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div>
            <div className="">
              <div className="bg-white rounded-xl p-6 relative">
                {/* Close Icon */}
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="absolute top-4 right-4 text-xl text-gray-800 hover:text-red-500">
                      <IoMdClose />
                    </button>
                  </form>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-slate-900 mb-6">
                  Register
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Full Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...register("fullName", { required: true })}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-sm">
                        Full Name is required!
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", { required: true })}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        Email is required!
                      </span>
                    )}
                  </div>

                  {/* Password */}
                  {/* Password */}
                  <div className="mb-2 relative">
                    <label className="block text-sm font-medium mb-1">
                      Password
                    </label>

                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required!",
                        minLength: {
                          value: 8,
                          message:
                            "Password must be at least 8 characters long",
                        },
                      })}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <div
                      onClick={() => setShowPass(!showPass)}
                      className="absolute top-9 right-4 hover:cursor-pointer"
                    >
                      {showPass ? (
                        <IoIosEye className="text-xl" />
                      ) : (
                        <IoIosEyeOff className="text-xl" />
                      )}
                    </div>

                    {errors.password && (
                      <span className="text-red-500 text-sm">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex mt-6 justify-center items-center w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md hover:cursor-pointer"
                  >
                    {isLoading ? (
                      <LuLoaderCircle className="animate-spin text-2xl text-orange-200" />
                    ) : (
                      "Register"
                    )}
                  </button>
                </form>

                {/* Or Divider */}
                <div className="flex items-center my-4">
                  <hr className="flex-grow border-gray-300" />
                  <span className="mx-2 text-gray-500 text-sm">
                    Or Sign up with
                  </span>
                  <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Buttons */}
                <div className="flex gap-4 justify-center">
                  <button className="w-1/2 flex items-center justify-center gap-2 border py-2 rounded-md">
                    <FaGoogle className="text-red-500" /> Google
                  </button>
                  <button className="w-1/2 flex items-center justify-center gap-2 border py-2 rounded-md">
                    <FaFacebookF className="text-blue-600" /> Facebook
                  </button>
                </div>

                {/* Footer Text */}
                <p className="text-sm text-center mt-6">
                  Already have an account?{" "}
                  <button
                    onClick={() => toggleModal("showLogin")}
                    className="text-orange-500 font-semibold hover:cursor-pointer"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default RegisterModal;
