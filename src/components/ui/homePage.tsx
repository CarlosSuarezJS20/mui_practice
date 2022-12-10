import React from "react";
import ContactAndAboutSection from "./homepage-sections/contactAndAbout";
import HeroSection from "./homepage-sections/HeroSection";
import ServicesSection from "./homepage-sections/servicesSection";
import RevolutionSection from "./homepage-sections/theRevolution";
import CallToActionSection from "./homepage-sections/callToAction";

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
