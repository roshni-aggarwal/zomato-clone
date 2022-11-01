import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { VscTriangleRight } from "react-icons/vsc";

// components
import PictureCarouselCard from "../PictureCarouselCard";

const DiningCarousel = () => {
  const [dining] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/collections/019acf0c53e2ebf0e8658e471a20a2ab_1665210805.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/4872d7301e80d72fd18c4e1e43bf8789_1660738717.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/84317f74208f036be1936e32dc627d88_1660823494.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/51979569f85f4579e15336825f446188_1660738438.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/d9eea3ef785def3a1d4e19c89bf19b11_1660816040.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/ef4da4077aae068ea1e4410eefb5aec5_1660735784.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
  ]);

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
    modules: [Navigation],
    className: "mySwiper",
    navigation: true,
  };

  return (
    <>
      <div className="bg-gray-50 full-width pt-4 pb-10 px-4 lg:px-48 mb-20 md:mb-0">
        <div>
          <h1 className="md:text-3xl mb-7 text-2xl">
            Collections
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-lg font-light text-gray-900 tracking-wide text-justify">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Surat, based on trends
            </p>
            <button>
              <div className="hidden md:flex items-center gap-1 text-md font-light text-zomato-400">
                <p>All collections in Surat</p>
                <VscTriangleRight />
              </div>
            </button>
          </div>

          <div className="w-full mt-2">
            <Swiper {...slideConfig}>
              {dining.map((item, index) => (
                <SwiperSlide key={index}>
                  <PictureCarouselCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiningCarousel;
