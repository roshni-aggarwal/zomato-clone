import React from "react";

const AddReviewCard = () => {
  return (
    <>
      <h4 className="font-medium text-lg">Rate your experience for</h4>
      <div className="flex gap-10 text-lg ">
        <div className="flex gap-2 items-center ">
          <input
            type="radio"
            id="rating"
            name="rating"
            value="Dining"
            defaultChecked
            className="accent-zomato-300 w-4 h-4 hover:text-zomato-300"
          />
          <label htmlFor="rating" className="font-light">
            Dining
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="rating"
            name="rating"
            value="Dining"
            className="accent-zomato-300 w-4 h-4"
          />
          <label htmlFor="rating" className="font-light">
            Delivery
          </label>
        </div>
          </div>
          <button className="text-zomato-400 font-light text-left">Write a Review</button>
    </>
  );
};

export default AddReviewCard;
