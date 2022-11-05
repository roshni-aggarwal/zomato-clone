import React, { useState } from "react";

// components
import ReviewCard from "../Reviews/ReviewCard";
import AddReviewCard from "../Reviews/AddReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      rating: 1.5,
      isRestaurantReview: false,
      createdAt: "Fri Oct 14 2022 20:20:34 GMT+0530 (India Standard Time)",
      reviewText:
        "there is no taste. no masala in dabeli or pani puri. ans gulab jamun in like atta",
    },
    {
      rating: 4.5,
      isRestaurantReview: false,
      createdAt: "Fri Oct 14 2022 20:19:34 GMT+0530 (India Standard Time)",
      reviewText:
        "All-time hit combo was the best one though it has a huge variety in one plate and each item are delicious ❤",
    },
  ]);

  return (
    <>
      <div className="w-full flex flex-col md:flex md:flex-row gap-5 relative">
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          <div className="w-full md:hidden">
            <AddReviewCard />
          </div>
          <h2 className="text-xl font-medium">Reviews</h2>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        <aside className="hidden md:flex flex-col md:w-4/12 h-fit sticky rounded-xl top-52 bg-white p-3 shadow-md gap-4 mt-4">
          <AddReviewCard />
        </aside>
      </div>
    </>
  );
};

export default Reviews;
