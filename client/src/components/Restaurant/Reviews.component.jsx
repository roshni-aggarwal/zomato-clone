import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import ReviewCard from "../Reviews/ReviewCard";
import AddReviewCard from "../Reviews/AddReviewCard";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../../redux/Reducers/reviews/review.action";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState();

  const dispatch = useDispatch();
  const { id } = useParams();

  const updatedReviews = useSelector(
    (globalState) => globalState.review.reviews
  );

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    dispatch(getReview(id)).then((data) => {
      setReviews(data.payload.reviews);
    });
  }, []);

  useEffect(() => {
    if (updatedReviews) setReviews(updatedReviews);
  }, [updatedReviews]);

  useEffect(() => {
    if (reduxState) setName(reduxState.name);
  }, [reduxState]);

  return (
    <>
      <div className="w-full flex flex-col md:flex md:flex-row gap-5 relative">
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          <div className="w-full md:hidden">
            <AddReviewCard />
          </div>
          <h2 className="text-xl font-medium">{name} Reviews</h2>
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
