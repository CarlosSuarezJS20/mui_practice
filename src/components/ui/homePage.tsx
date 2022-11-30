import React from "react";
import { makeStyles } from "@mui/styles";
import HeroSection from "./sections/HeroSection";
import ServicesPage from "./sections/servicesSection";

const useStyle = makeStyles(() => ({}));

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ServicesPage />
    </React.Fragment>
  );
};

export default HomePage;
