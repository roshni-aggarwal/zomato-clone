import React from "react";
import { Link } from "react-router-dom";

const OfferCard = ({ type }) => {
  return (
    <>
      <Link to={`/${type.id}`}>
        <div className="flex flex-col rounded-xl border border-gray-300 hover:scale-105 cursor-pointer overflow-hidden h-72 w-[350px] transition ease-linear">
          <div className="h-2/3">
            <img
              src={type.image}
              alt="offer"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start gap-1 p-3">
            <h1 className="text-xl">{type.title} </h1>
            <h3 className="text-gray-600">{type.desc} </h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default OfferCard;
