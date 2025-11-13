import { Link } from "react-router-dom";
import bgImg from "../assets/photo-1673530936001-9a62842746c7.avif";
const Hero = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="1500">
      <div
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
    <div className="absolute inset-0 custom_opacity bg-black bg-opacity-100 z-10"></div>

        <div className="hero-content text-neutral-content text-center relative z-20">
          <div className="max-w-md">
            <h1 className="text-center text-5xl mb-4 pt-20 text-green-150 text-shadow-2xs">Share Food. Build Community. Reduce Waste.</h1>
            <p className="mb-5">
             PlateShare is your local food-sharing network. Post available meals, request food you need, and help create a sustainable tomorrow.
            </p>
            <div>
              <Link
                to={"/available-foods"}
                className="mt-0 cursor-pointer inline-block bg-green-900 hover:bg-green-600 text-white font-semibold py-3 px-14 rounded-sm transition duration-300 ease-in-out  "
              >
                <span>View Available Foods</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
