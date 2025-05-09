import Banner from "@/components/ui/Home/Banner";
import Faq from "@/components/ui/Home/Faq";
import FeaturedCars from "@/components/ui/Home/FeaturedCars";
import DynamicCategories from "@/components/ui/Home/DynamicCategories";
import SpecialOffers from "@/components/ui/Home/SpecialOffers";
import BlogSection from "@/components/ui/Home/BlogSection";
import Newsletter from "@/components/ui/Home/Newsletter";
import Testimonials from "@/components/ui/Home/Testimonials";
import AboutUs from "@/components/ui/Home/AboutUs";
import Services from "@/components/ui/Home/Services";
import ProductSection from "@/components/ui/Home/ProductSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <DynamicCategories />
      <FeaturedCars />
      <ProductSection />
      <SpecialOffers />
      <Services />
      <AboutUs />
      <Testimonials />
      <BlogSection />
      <Newsletter />
      <Faq />
    </div>
  );
};

export default Home;
