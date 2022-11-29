import React, { useState, useEffect } from "react";

// components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

// redux
import { useSelector } from "react-redux";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.restaurants
  );

  useEffect(() => {
    reduxState && setRestaurantList(reduxState);
  }, [reduxState]);

  return (
    <>
      <DeliveryCarousel />
      <h1 className="mt-5 md:text-3xl mb-7 text-2xl">
        Delivery Restaurants in Surat
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-24 lg:mb-8">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;

// {
//   _id: "124ksjf435245jv34fg3",
//   isPro: true,
//   isOff: true,
//   name: "Nathu's Sweets",
//   restaurantReviewValue: "3.7",
//   cuisine: [
//     "Mithai",
//     "South Indian",
//     "Chinese",
//     "Street Food",
//     "Fast Food",
//     "Desserts",
//     "North Indian",
//   ],
//   averageCost: "450",
// },
// {
//   _id: "sdffdsadadsfadfadsfadsf",
//   isPro: true,
//   isOff: false,
//   name: "Master Koii's",
//   restaurantReviewValue: "4.6",
//   cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
//   averageCost: "600",
// },
// {
//   _id: "124ksjf435245jfdfv34fg3",
//   isPro: true,
//   isOff: true,
//   name: "Nathu's Sweets",
//   restaurantReviewValue: "3.7",
//   cuisine: [
//     "Mithai",
//     "South Indian",
//     "Chinese",
//     "Street Food",
//     "Fast Food",
//     "Desserts",
//     "North Indian",
//   ],
//   averageCost: "450",
// },
// {
//   _id: "124ksjf43524ch5jfdfv34fg3",
//   isPro: true,
//   isOff: true,
//   name: "Nathu's Sweets",
//   restaurantReviewValue: "3.7",
//   cuisine: [
//     "Mithai",
//     "South Indian",
//     "Chinese",
//     "Street Food",
//     "Fast Food",
//     "Desserts",
//     "North Indian",
//   ],
//   averageCost: "450",
// },
