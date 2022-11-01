import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarouselCard = (props) => {
  return (
    <>
      <div className="w-full h-80 px-2 relative overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full rounded-lg object-cover object-center transition duration-700 ease-in-out"
          />
          <div
            className="w-full h-full absolute inset-0 rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.05)85%)",
            }}
          />
        </div>
        <div className="absolute bottom-3 left-6 text-white w-full">
          <h4 className="z-10">{props.title}</h4>
          <h6 className="z-10 flex items-center">
            {props.places}
            <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarouselCard;
