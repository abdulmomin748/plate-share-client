import React, { useEffect } from "react";
import Hero from "../components/Hero";
import FeaturedFood from "../components/FeaturedFood";
import Aos from "aos";
import HowItWorks from "../components/HowItWorks";
import OurMission from "../components/OurMission";

const Home = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (ms)
    });
  }, []);
  document.title = "Home Page";

  return (
    <div>
      <Hero />
      <FeaturedFood />
      <HowItWorks />
      <OurMission />
    </div>
  );
};

export default Home;
