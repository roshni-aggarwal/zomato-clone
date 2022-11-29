import React from "react";
import { AiFillStar } from "react-icons/ai";

const RestaurantInfo = (props) => {
  return (
    <div className="py-2 sticky top-0 z-10 bg-white">
      <div className="flex flex-col-reverse md:flex-row gap-2 justify-between md:items-center">
        <h1 className="font-bold text-2xl tracking-wide">{props.name}</h1>
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-2 items-center">
            <div className="flex bg-green-600 text-white font-semibold rounded-md items-center px-2">
              {props.restaurantRating}
              <AiFillStar size={14} />
            </div>
            <div className="flex flex-col gap-1 border-b border-dashed border-gray-300">
              <span className="font-semibold">10</span>
              <p className="font-light text-sm">Dining Reviews</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex bg-green-600 text-white font-semibold rounded-md items-center px-2">
              {props.restaurantRating}
              <AiFillStar size={14} />
            </div>
            <div className="flex flex-col border-b border-dashed border-gray-300">
              <span className="font-semibold">10</span>
              <p className="font-light text-sm">Delivery Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-gray-700 font-light tracking-wide">
          {props.cuisine && props.cuisine.join(", ")}
        </p>
        <p className="text-gray-400 font-light text-sm lg:text-base">
          {props.address}
        </p>
        <p className="text-sm tracking-wide text-gray-500 font-light">
          <span className="text-orange-400">Open now</span> - 11am - 12midnight
          (Today)
        </p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
