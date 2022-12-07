import React from "react";

// components
import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 border-b border-gray-200">
          <h2 id={props.target} className="text-xl tracking-wide font-medium">
            {props.name}
          </h2>
          <div className="flex flex-col items-start gap-6">
            {props.items.map((each, index) => (
              <FoodItem key={index} _id={each} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodList;
