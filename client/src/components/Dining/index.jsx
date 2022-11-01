import React, { useState } from "react";

// components
import DiningCarousel from "./DiningCarousel";
import RestaurantCard from "../RestaurantCard";

const Dining = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "124ksjf435245jv34fg3",
      isPro: true,
      isOff: true,
      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      averageCost: "450",
      address: "Piplod Surat",
    },
    {
      _id: "sdffdsadadsfadfadsfadsf",
      isPro: true,
      isOff: false,
      name: "Master Koii's",
      restaurantReviewValue: "4.6",
      cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
      averageCost: "600",
      address: "Piplod Surat",
    },
    {
      _id: "124ksjf435245jfdfv34fg3",
      isPro: true,
      isOff: true,
      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      averageCost: "450",
      address: "Piplod Surat",
    },
    {
      _id: "124ksjf43524ch5jfdfv34fg3",
      isPro: true,
      isOff: true,
      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      averageCost: "450",
      address: "Piplod Surat",
    },
  ]);
  return (
    <div className="mb-10">
      <DiningCarousel />
      <h1 className="mt-5 md:text-3xl mb-7 text-2xl">
        Best Dining Restaurants near you in Surat
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-24 lg:mb-8">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </div>
  );
};

export default Dining;
