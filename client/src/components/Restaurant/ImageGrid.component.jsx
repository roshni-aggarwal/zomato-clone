import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const ImageGrid = (props) => {
  return (
    <>
      <Swiper className="mySwiper">
        {props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-60 md:hidden">
              <img
                src={props.images.length && image.location}
                alt="restaurant"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden md:grid gap-2 grid-rows-2 grid-cols-6 h-64 lg:h-96">
        <div className="overflow-hidden col-span-4 row-span-2">
          <img
            src={props.images.length && props.images[0].location}
            alt="image"
            className=" w-full object-cover object-center transition duration-700 brightness-90 hover:scale-105 hover:brightness-100"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={props.images.length && props.images[1].location}
            alt="image"
            className="h-full object-cover object-center transition duration-700 brightness-90 hover:scale-105 hover:brightness-100"
          />
        </div>
        <div className="relative">
          <img
            src={props.images.length && props.images[3].location}
            alt="image"
            className="h-full object-cover object-center "
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <Link to={"photos"}>
            <h4 className="text-white text-center relative bottom-1/2">
              View Gallery
            </h4>
          </Link>
        </div>
        <div className="overflow-hidden">
          <img
            src={props.images.length && props.images[2].location}
            alt="image"
            className="h-full w-full object-cover object-center transition duration-700 brightness-90 hover:scale-105 hover:brightness-100"
          />
        </div>
        <div className="bg-gray-400 flex flex-col items-center justify-center text-white">
          <div className="rounded-full bg-gray-500 p-2">
            <AiOutlineCamera size={25} />
          </div>
          <h4>Add Photos</h4>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
