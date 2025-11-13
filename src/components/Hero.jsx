import { Link } from "lucide-react";
import bgImg from "../assets/photo-1673530936001-9a62842746c7.avif";
const Hero = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="1500">
      <div
        className="hero  bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div>
              <Link
                to={"/available-foods"}
                className="cursor-pointer bg-green-900 hover:bg-green-600 text-white font-semibold py-3 px-14 rounded-sm transition duration-300 ease-in-out  "
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
