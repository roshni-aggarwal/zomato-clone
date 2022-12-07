import React, { useState, useEffect } from "react";

// components
import DiningCarousel from "./DiningCarousel";
import RestaurantCard from "../RestaurantCard";

// redux
import { useSelector } from "react-redux";

const Dining = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.restaurants
  );

  useEffect(() => {
    reduxState && setRestaurantList(reduxState);
  }, [reduxState]);

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
