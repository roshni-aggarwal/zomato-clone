import React, { useState } from "react";

// components
import DeliveryCarousel from "./DeliveryCarousel";
// import RestaurantCard from "../RestaurantCard"

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  return (
    <>
      <DeliveryCarousel />
      <h1 className="mt-4 md:text-3xl mb-7 text-2xl">
        Delivery Restaurants in Surat
      </h1>
      <div className="flex justify-between flex-wrap mt-5">
        {/* {restaurantList.map((restaurant) => (
      <RestaurantCard {...restaurant} key={restaurant._id} />
    ))} */}
      </div>
    </>
  );
};

export default Delivery;
