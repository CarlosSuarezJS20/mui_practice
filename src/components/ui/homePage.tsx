import React from "react";
import ContactAndAboutSection from "./sections/contactAndAbout";
import HeroSection from "./sections/HeroSection";
import ServicesPage from "./sections/servicesSection";
import RevolutionSection from "./sections/theRevolution";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ServicesPage />
      <RevolutionSection />
      <ContactAndAboutSection />
    </React.Fragment>
  );
};

export default HomePage;
