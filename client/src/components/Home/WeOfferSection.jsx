import React from "react";
import OfferCard from "./OfferCard";

const WeOfferSection = () => {
  const types = [
    {
      image: "/images/item1.png",
      title: "Order Online",
      id: "delivery",
      desc: "Stay home and order to your doorstep",
    },
    {
      image: "/images/item2.png",
      title: "Dining",
      id: "dining",
      desc: "View the city's favourite dining venues",
    },
    {
      image: "/images/item3.png",
      title: "Nightlife and Clubs",
      id: "nightlife",
      desc: "Explore the city's top nightlife outlets",
    },
  ];
  return (
    <div className="mx-auto container flex flex-wrap justify-center items-center my-10 gap-8">
      {types.map((type, index) => (
        <OfferCard type={type} key={index} />
      ))}
    </div>
  );
};

export default WeOfferSection;
