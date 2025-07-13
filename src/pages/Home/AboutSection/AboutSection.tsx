import Title from "../../../components/Title";

const AboutSection = () => {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between ">
        {/* Left Side: Image + Card */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Main Image */}
          <img
            src="./about/man.png"
            alt="happy farmer"
            className="w-full max-w-xl object-contain z-10"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <Title title={"About us"} />
          <h2 className="text-left text-2xl md:text-4xl font-extrabold text-slate-900">
            About Fresh Harvest
          </h2>
          <p className="text-left text-gray-600 text-base leading-relaxed">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            freshest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
          <button className="flex  bg-white border-2 border-orange-500 hover:bg-orange-50 text-orange-500 font-semibold px-6 py-2 rounded-md transition cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
