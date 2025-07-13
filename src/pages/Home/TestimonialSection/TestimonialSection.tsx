import Title from "../../../components/Title";

export default function TestimonialSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-32 mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <div className="flex justify-center">
          <Title title={"Testimonial"} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
          What Our Customers Say
        </h2>
        <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
          Don’t just take our word for it—here’s what some of our customers have
          to say about their experience with Fresh Harvest:
        </p>
      </div>

      {/* Testimonial Body */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
        {/* Image & Quote Icon */}
        <div className="relative w-52 h-[280px] flex justify-center items-center">
          <img
            src="/testimonialman.png"
            alt="Customer"
            className="rounded-full w-52 object-cover border-4 border-green-100"
          />
          <div className="absolute -top-7 text-orange-400 text-4xl font-bold">
            “
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md w-fit max-w-xl">
          <p className="text-gray-700 text-base leading-relaxed">
            “I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It’s always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs.”
          </p>
          <p className="mt-4 text-sm text-gray-800 font-semibold">
            Jane Doe{" "}
            <span className="font-normal text-gray-500">
              – Professional chef
            </span>
          </p>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 space-x-2">
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
}
