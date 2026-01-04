import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import bannerImg1 from "../assets/bannerImg1.jpg";
import bannerImg2 from "../assets/bannerImg2.jpg";
import bannerImg3 from "../assets/bannerImg3.jpg";

const Hero = () => {
  const images = [
    { id: 1, src: bannerImg1, alt: "Description 1" },
    { id: 2, src: bannerImg2, alt: "Description 2" },
    { id: 3, src: bannerImg3, alt: "Description 3" },
  ];
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1500"
      className="pt-24 relative inset-0 z-10"
    >
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper relative  h-[500px]"
      >
        <div className="absolute inset-0 custom_opacity bg-black bg-opacity-100 z-2"></div>
        <div className="absolute  z-80 bg-cover bg-center top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="hero-content max-w-full text-neutral-content text-center relative z-20">
            <div className="max-w-md">
              <h1 className="text-center text-5xl mb-4 pt-20 text-green-150 text-shadow-2xs">
                Share Food. Build Community. Reduce Waste.
              </h1>
              <p className="mb-5">
                PlateShare is your local food-sharing network. Post available
                meals, request food you need, and help create a sustainable
                tomorrow.
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
            <div
              onClick={() => {
                window.scrollBy(0, 800);
              }}
              class="scroll-prompt -mt-13 cursor-pointer absolute bottom-[-10%]"
              scroll-prompt=""
              ng-show="showPrompt"
            >
              <div class="scroll-prompt-arrow-container">
                <div class="scroll-prompt-arrow">
                  <div></div>
                </div>
                <div class="scroll-prompt-arrow">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {images.map((image) => {
          return (
            <SwiperSlide className="relative bg-cover bg-center h-[20vh]" key={image.id}>
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
     
    </div>
  );
};

export default Hero;
