import { useState } from "react";
import { Link, NavLink } from "react-router";

import { CiMenuFries } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import LoginModal from "../LoginModal";
import RegisterModal from "../RegisterModal";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleModal = (action: string) => {
    // console.log("click from login modal, going to sign up");
    // console.log(action);

    if (action === "showSignUp") {
      (document.getElementById("my_modal_1")! as HTMLDialogElement).close();
      (document.getElementById("my_modal_2")! as HTMLDialogElement).showModal();
    } else if (action === "showLogin") {
      (document.getElementById("my_modal_1")! as HTMLDialogElement).showModal();
      (document.getElementById("my_modal_2")! as HTMLDialogElement).close();
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            {/* logo */}
            <img
              src="https://i.ibb.co/nMPj4dtC/icon.png"
              alt="fresh_harvest_logo"
              className="w-8"
            />
            <span className="font-bold md:text-sm lg:text-lg">
              Fresh Harvest
            </span>
          </div>
        </Link>

        {/* nav links */}
        <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
          <li>
            <NavLink to="/" className="capitalize">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="capitalize">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="capitalize">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="capitalize">
              Blog
            </NavLink>
          </li>
        </ul>

        {/* action buttons */}
        <div className="items-center gap-[10px] flex">
          <Link
            to="/favorite"
            className="items-center gap-1 py-[7px] text-[1rem] sm:flex hidden"
          >
            <MdFavorite />
            Favorite
          </Link>

          <Link
            to="/cart"
            className="relative hidden md:flex items-center gap-3"
          >
            {/* Cart Icon */}
            <div className="relative">
              <FaCartShopping className="text-xl" />

              {/* Notification Badge */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[0.6rem] w-5 h-5 flex items-center justify-center rounded-full">
                10
              </span>
            </div>

            {/* Cart Text */}
            <span className="text-sm">Cart</span>
          </Link>

          {/* Sign In Modal Button */}
          <button
            onClick={() => {
              (
                document.getElementById("my_modal_1")! as HTMLDialogElement
              ).showModal();
            }}
            className="bg-transparent hover:bg-transparent px-3 py-1 text-[1rem] border hover:cursor-pointer sm:flex hidden"
          >
            Sign in
          </button>

          <Link onClick={() => setMobileSidebarOpen(false)} to="/cart">
            <div className="relative md:hidden">
              <FaCartShopping className="text-2xl dark:text-[#abc2d3]" />
              <div className=" absolute top-[-50%] right-[-20%] text-white min-w-[20px] min-h-[20px] text-center">
                <span className="text-[0.5rem] bg-red-500 py-1 px-1 rounded-full w-full h-full">
                  10
                </span>
              </div>
            </div>
          </Link>

          <CiMenuFries
            className="text-[1.8rem] dark:text-[#abc2d3] mr-1 text-[#424242] cursor-pointer md:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>

        {/* mobile sidebar */}
        <aside
          className={` ${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-20"
              : "translate-x-auto hidden z-[-1]"
          } md:hidden bg-green-100 p-4 text-center absolute top-[65px] dark:bg-slate-700 right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
        >
          <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
            <li>
              <NavLink
                to="/"
                onClick={() => setMobileSidebarOpen(false)}
                className="capitalize"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                onClick={() => setMobileSidebarOpen(false)}
                className="capitalize"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                onClick={() => setMobileSidebarOpen(false)}
                className="capitalize"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={() => setMobileSidebarOpen(false)}
                className="capitalize"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <Link
                to="/favorite"
                onClick={() => setMobileSidebarOpen(false)}
                className="py-1"
              >
                Favorite
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  (
                    document.getElementById("my_modal_1")! as HTMLDialogElement
                  ).showModal();
                  setMobileSidebarOpen(false);
                }}
                className="bg-transparent hover:bg-transparent px-3 py-1 text-[1rem] border hover:cursor-pointer md:hidden"
              >
                Sign in
              </button>
            </li>
          </ul>
        </aside>
      </div>

      {/* Login Modal */}

      <LoginModal toggleModal={toggleModal} />

      {/* Register Modal */}

      <RegisterModal toggleModal={toggleModal} />
    </nav>
  );
};

export default Navbar;
