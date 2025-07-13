import { PiArrowBendUpRightBold } from "react-icons/pi";

const Hero = () => {
  return (
    <section
      className="w-full bg-no-repeat bg-cover bg-center flex items-center"
      //   style={{
      //     backgroundImage: `url('/hero/hero.png')`,
      //   }}
    >
      <div className="mt-60 md:mt-38 lg:mt-10 max-w-7xl w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Text content */}
        <div className="text-left space-y-6 -mt-40">
          <p className="px-1 rounded bg-lime-100 text-lime-700 font-semibold text-md w-fit">
            Welcome to Fresh Harvest
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Fresh Fruits and <br /> Vegetables
          </h1>
          <p className="text-gray-600 text-base max-w-xl">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <div className="relative flex gap-4 flex-wrap md:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 text-white font-medium rounded-md">
              Shop Now
            </button>
            {/* Arrow */}
            <div className="absolute -bottom-18 left-20 gap-2 items-center hidden md:block">
              <PiArrowBendUpRightBold className="text-6xl rotate-x-180" />
            </div>

            {/* Promo Card */}
            <div className="absolute top-18 md:top-14 md:left-40 flex items-center gap-4 bg-gray-100 rounded-xl px-5 py-3">
              <div className="flex flex-col justify-center text-left">
                <p className="text-sm text-gray-500">Special Offer</p>
                <h2 className="text-lg font-bold text-gray-800">Fresh Salad</h2>
                <p className="text-sm text-gray-600 mb-1">
                  Up to <span className="font-semibold text-md">70%</span> off
                </p>
                <p className="bg-green-800 rounded-full px-3 py-1 text-xs text-white font-semibold w-fit">
                  CODE: <span className="text-yellow-300">FRESH25</span>
                </p>
              </div>
              <img
                className="w-24 h-20 object-cover rounded-full"
                src="./hero/dish.png"
                alt="Salad"
              />
            </div>
          </div>
        </div>

        {/* Right: Optional image or empty if background contains full layout */}
        <div className="">
          <img
            className="mt-32 md:mt-0 w-[26rem]"
            src="./hero/girl.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
