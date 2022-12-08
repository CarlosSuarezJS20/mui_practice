import React from "react";
import ContactAndAboutSection from "./sections/contactAndAbout";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/servicesSection";
import RevolutionSection from "./sections/theRevolution";
import CallToActionSection from "./sections/callToAction";

interface HomeProps {
  routerValueHandler: (n: number) => void;
  toolTipValueHandler: (n: number | undefined) => void;
}

const HomePage: React.FC<HomeProps> = ({
  routerValueHandler,
  toolTipValueHandler,
}) => {
  return (
    <React.Fragment>
      <HeroSection routerValueHandler={routerValueHandler} />
      <ServicesSection
        routeValueHandler={routerValueHandler}
        toolTipValueHandler={toolTipValueHandler}
      />
      <RevolutionSection />
      <ContactAndAboutSection />
      <CallToActionSection routerValueHandler={routerValueHandler} />
    </React.Fragment>
  );
};

export default HomePage;
