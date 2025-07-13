import Title from "../../../components/Title";

const SeasonalBundle = () => {
  return (
    <section className="w-full relative py-16 bg-white overflow-hidden">
      {/* Background Illustration */}
      <img
        src="./r.png" // replace with your cleaned BG (no fruit, only line art)
        alt="Background Illustration"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="text-center md:text-left space-y-5 max-w-xl">
          <div className="flex justify-center md:justify-start">
            <Title title={"Special Offer"} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Seasonal Fruit Bundle
          </h2>
          <p className="text-xl text-gray-800 font-semibold">
            Discount up to <span className="text-orange-500">80% OFF</span>
          </p>

          {/* Countdown */}
          <div className="flex gap-2 md:gap-3 justify-center md:justify-start mt-4">
            {[
              { label: "Days", value: "03" },
              { label: "Hour", value: "18" },
              { label: "Min", value: "54" },
              { label: "Second", value: "21" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md px-4 py-2 text-center"
              >
                <p className="text-xl font-bold text-gray-800">{item.value}</p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Fruit image */}
          <div className="absolute md:-bottom-30 md:-right-60 lg:-right-10 lg:-bottom-20  hidden md:block">
            <img className="" src="./fruits.png" alt="" />
          </div>

          {/* Promo Code */}
          <div className="bg-green-800 text-white font-bold text-md px-6 py-2 rounded-full mt-2 inline-block">
            CODE : <span className="text-yellow-300">FRESH28</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalBundle;
