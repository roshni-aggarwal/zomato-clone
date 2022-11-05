import React from "react";
import { TiStar } from "react-icons/ti";
import { Link } from "react-router-dom";

const SimilarRestaurantCard = (props) => {
  return (
    <Link to={`/restaurant/${props._id}/overview`}>
      <div className="bg-white rounded-md p-2">
        <div className="w-full h-36 lg:h-56 rounded-md">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-lg font-medium">{props.name}</h2>
          <div className="flex items-center justify-between text-sm md:text-xs">
            <div
              className="flex items-center justify-center gap-2 md:gap-1 border-r w-1/2
          "
            >
              <div className="flex items-center bg-green-600 text-white rounded-md px-1 font-semibold">
                {props.restaurantReviewValue} <TiStar />
              </div>
              <small className="text-sm font-light tracking-wide">DINING</small>
            </div>
            <div
              className="flex items-center justify-center gap-2 w-1/2
          "
            >
              <div className="flex items-center bg-green-600 text-white rounded-md px-1 font-semibold">
                {props.deliveryValue} <TiStar />
              </div>
              <small className="text-sm font-light tracking-wide">
                DELIVERY
              </small>
            </div>
          </div>
          <p className="truncate text-gray-800 font-light px-1 md:text-sm w-8/9">
            {props.cuisine.join(", ")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SimilarRestaurantCard;
