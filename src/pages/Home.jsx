import React, { useEffect } from "react";
import Hero from "../components/Hero";
import FeaturedFood from "../components/FeaturedFood";
import Aos from "aos";

const Home = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (ms)
    });
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedFood />
    </div>
  );
};

export default Home;
