import Hero from "../../components/Hero/Hero";
import AboutSection from "./AboutSection/AboutSection";
import BlogSection from "./BlogSection/BlogSection";
import ProductSection from "./ProductSection/ProductSection";
import SeasonalBundle from "./SeasonalBundle/SeasonalBundle";
import TestimonialSection from "./TestimonialSection/TestimonialSection";

const Home = () => {
  return (
    <div className="">
      <div>
        <Hero />
      </div>
      <div>
        <ProductSection />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <SeasonalBundle />
      </div>
      <div>
        <TestimonialSection />
      </div>
      <div>
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
