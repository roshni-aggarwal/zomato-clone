import React, { useState } from "react";

// component
import ReviewModal from "./ReviewModal";

const AddReviewCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("Dining");

  const openModal = () => {
    // if (!localStorage.zomatoUser) {
    //   return alert("Please signin to post a review.");
    // }

    setIsOpen(true);
  };

  const getReviewType = (type) => {
    setType(type);
  };

  return (
    <>
      <h4 className="font-medium text-lg">Rate your experience for</h4>
      <div className="flex gap-10 text-lg ">
        <div className="flex gap-2 items-center ">
          <input
            type="radio"
            id="dining"
            name="review"
            defaultChecked
            className="accent-zomato-300 w-4 h-4 hover:text-zomato-300"
            onChange={(each) => getReviewType(each.target.id)}
          />
          <label htmlFor="rating" className="font-light">
            Dining
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="delivery"
            name="review"
            className="accent-zomato-300 w-4 h-4"
            onChange={(each) => getReviewType(each.target.id)}
          />
          <label htmlFor="rating" className="font-light">
            Delivery
          </label>
        </div>
      </div>
      <button
        className="text-zomato-400 font-light text-left hover:text-zomato-600"
        onClick={openModal}
      >
        Write a Review
      </button>
      <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} type={type} />
    </>
  );
};

export default AddReviewCard;
