import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const NutritionHeroCarousel = () => {
  const [heroBanners, setHeroBanners] = useState([
    "https://b.zmtcdn.com/web/nutrition/assets/47fb421f35ca12ad3111e3d99d1737571620108828.png",
    "https://b.zmtcdn.com/web/nutrition/assets/0a8f2dad65904b89178905213efe886c1620108711.png",
    "https://b.zmtcdn.com/web/nutrition/assets/cfbb36a56a4203c7efac5de27318ea381620108756.png",
    "https://b.zmtcdn.com/web/nutrition/assets/3872dc3041e9633ba40b51e7dbff263a1620108770.png",
  ]);

  const slideConfig = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      dynamicBullets: true,
    },
    modules: [Autoplay, Pagination],
    className: "mySwiper",
  };
  return (
    <>
      <div>
        <Swiper {...slideConfig}>
          {heroBanners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img src={banner} alt="hero-banner" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default NutritionHeroCarousel;
