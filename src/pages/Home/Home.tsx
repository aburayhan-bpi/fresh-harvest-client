import Hero from "../../components/Hero/Hero";
import AboutSection from "./AboutSection/AboutSection";
import ProductSection from "./ProductSection/ProductSection";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <ProductSection />
      </div>
      <div>
        <AboutSection />
      </div>
    </div>
  );
};

export default Home;
