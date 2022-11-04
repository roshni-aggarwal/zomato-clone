import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {
  return (
    <>
      <div className="bg-white rounded-2xl p-4 drop-shadow-md hover:drop-shadow-xl hover:cursor-pointer">
        <div
          className={`w-full h-72 md:h-56 lg:h-48 rounded-t-2xl bg-${props.bg}-100`}
        >
          <img
            src={props.image}
            alt="supplements"
            className="w-full h-full rounded object-center object-cover"
          />
        </div>
        <div className="flex flex-col border-b py-5 gap-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4">
              <img
                src="https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
            <ReactStars
              count={5}
              size={16}
              value={3}
              isHalf={true}
              emptyIcon={<BsStar />}
              halfIcon={<BsStarHalf />}
              filledIcon={<BsStarFill />}
              edit={false}
            />
            <span className="text-gray-400">15</span>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <h5 className="text-gray-700 font-bold text-xl">
              Burn - Weight Balance
            </h5>
            <p className="text-gray-500 font-light text-sm">
              This is a description of the product. You can add what ever you
              want
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1 pt-1">
            <p className="line-through text-gray-400 decoration-current">
              ₹600
            </p>
            <strong>₹350</strong>
          </div>
          <p className="font-light">Monthly pack - 30 capsules</p>
        </div>
      </div>
    </>
  );
};

export default NutritionCard;
