import AboutSection from "../../components/sections/AboutSection";
import FeatureSection from "../../components/sections/FeatureSection";
import FrequentQuestions from "../../components/sections/FrequentQuestions";
import HeroSection from "../../components/sections/HeroSection";
import HowItWorksSection from "../../components/sections/HowItWorksSection";
import OurDoctorsSection from "../../components/sections/OurDoctorsSection";
import ServicesSection from "../../components/sections/ServicesSection";
import TetimonialsSection from "../../components/sections/TetimonialsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <AboutSection />
      <ServicesSection />
      <FeatureSection />
      <OurDoctorsSection />
      <FrequentQuestions />
      <TetimonialsSection />
    </>
  );
};

export default HomePage;
