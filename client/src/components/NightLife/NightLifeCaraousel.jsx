import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { VscTriangleRight } from "react-icons/vsc";

// components
import PictureCarouselCard from "../PictureCarouselCard";

const DiningCarousel = () => {
  const [nightlife] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/pictures/1/18983041/31109ef52f99ea794d705da5c706627a.jpg",
      title: "Buzzing Nightlife & Clubs",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/303960/68e61bd2a5fe97adf587d30496d94cfe.png",
      title: "Buzzing Nightlife & Clubs",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/5/19577475/a9150506655136673058d180c8167d9c.jpeg",
      title: "Buzzing Nightlife & Clubs",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/1/19567911/f3e8a1376225dfd3cc32c605097973c0.jpg",
      title: "Buzzing Nightlife & Clubs",
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
          <h1 className="md:text-3xl mb-7 text-2xl">Collections</h1>
          <div className="flex items-center justify-between">
            <p className="text-lg font-light text-gray-900 tracking-wide text-justify">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              the city, based on trends
            </p>
            <button>
              <div className="hidden md:flex items-center gap-1 text-md font-light text-zomato-400">
                <p>All collections</p>
                <VscTriangleRight />
              </div>
            </button>
          </div>

          <div className="w-full mt-2">
            <Swiper {...slideConfig}>
              {nightlife.map((item, index) => (
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
