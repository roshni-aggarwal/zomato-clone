import React from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";

const FoodItem = (props) => {
  return (
    <div className="flex items-start gap-4 px-2 w-full lg:w-2/3 h-48">
      {props?.image && (
        <div className="w-2/5 h-32 md:h-32 md:w-32 lg:w-36 lg:h-36 overflow-hidden rounded-md">
          <img
            src={props?.image}
            alt="food item"
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      <div className="w-3/5 md:7/12 flex flex-col gap-1">
        <h2 className="tracking-wide font-semibold text-xl">{props.name} </h2>
        <ReactStars count={5} edit={false} value={props?.rating} />
        <h5 className="text-gray-500 font-light text-base">₹{props?.price}</h5>
        <p className="text-gray-500 font-light truncate">
          {props?.description}
        </p>
        <button className="flex items-center gap-2 bg-zomato-50 px-2 py-1 rounded-md text-zomato-400 outline outline-1 outline-zomato-400 font-semibold md:hidden justify-center w-20 mt-1">
          <AiOutlinePlus /> ADD
        </button>
      </div>
      <div className="w-1/5 md:2/12 items-end hidden md:block">
        <button className="flex items-center gap-2 bg-zomato-50 px-2 py-1 rounded-md text-zomato-400 outline outline-1 outline-zomato-400 font-semibold">
          <AiOutlinePlus /> ADD
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
