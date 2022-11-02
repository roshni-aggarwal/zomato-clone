import React from "react";

const NutritionCarouselCard = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-full h-full rounded">
          <img
            src={props.image}
            alt="category"
            className="w-full h-full object-cover object-center rounded"
          />
        </div>
        <h3 className="text-sm font-light md:text-xl" >{props.title}</h3>
      </div>
    </>
  );
};

export default NutritionCarouselCard;
