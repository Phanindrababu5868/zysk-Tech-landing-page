import "./App.css";
import AdvanceFeaturesSection from "./components/AdvanceFeatures";
import BlogSections from "./components/BlogSections";
import CompaniesSection from "./components/CompaniesSection";
import FAQS from "./components/FAQS ";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/Header";
import HeroSection from "./components/HeroSection";
import TestimonialSection from "./components/Testimonial";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <HeroSection />
      <CompaniesSection />
      <FeaturesSection />
      <TestimonialSection />
      <AdvanceFeaturesSection />
      <FAQS />
      <BlogSections />
      <Footer />
    </>
  );
}

export default App;
