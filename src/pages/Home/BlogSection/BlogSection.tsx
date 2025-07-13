import { ArrowRight } from "lucide-react";
import Title from "../../../components/Title";

const blogPosts = [
  {
    image: "/blog/img1.png",
    date: "May 23, 2024",
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    link: "#",
  },
  {
    image: "/blog/img2.png",
    date: "May 23, 2024",
    title:
      "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    link: "#",
  },
  {
    image: "/blog/img3.png",
    date: "May 23, 2024",
    title:
      "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-14 lg:px-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        {/* <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
          Our Blog
        </span> */}
        <div className="flex justify-center">
          <Title title={"Our Blog"} />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          Fresh Harvest Blog
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="flex flex-col">
            <img
              src={post.image}
              alt={post.title}
              className="rounded-xl object-cover w-full h-60"
            />
            <p className="text-sm text-gray-500 mt-4">{post.date}</p>
            <h3 className="font-semibold text-lg mt-2 text-gray-900 leading-snug">
              {post.title}
            </h3>
            <a
              href={post.link}
              className="mt-4 inline-flex items-center text-orange-500 font-semibold group hover:underline w-fit"
            >
              Read More{" "}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
