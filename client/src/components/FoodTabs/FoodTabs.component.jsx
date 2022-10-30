import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BiDrink } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoNutritionOutline, IoFastFoodOutline } from "react-icons/io5";
import classnames from "classnames";

const MobileTabs = () => {
  const [allTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
    },
    {
      id: "dining",
      icon: <IoFastFoodOutline />,
      name: "Dining Out",
    },
    {
      id: "night",
      icon: <BiDrink />,
      name: "Night Life",
    },
    {
      id: "nutrition",
      icon: <IoNutritionOutline />,
      name: "Nutrition",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="lg:hidden flex items-center justify-between fixed bottom-0 z-10 bg-white border text-gray-500 md:justify-evenly shadow-lg w-full">
        {allTypes.map((item) => (
          <Link key={item.id} to={`/${item.id}`} className="w-1/4">
            <div
              className={
                type === item.id
                  ? "flex flex-col items-center text-center relative text-zomato-400 text-xl"
                  : "flex flex-col items-center text-center text-xl"
              }
            >
              <div
                className={
                  type === item.id
                    ? "w-full h-full  flex flex-col items-center  border-zomato-400 border-t-2 pt-3"
                    : "flex flex-col items-center pt-3"
                }
              >
                {item.icon}
              </div>
              <h5 className="text-sm pb-3">{item.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const FoodTabs = () => {
  return (
    <>
      <div>
        <MobileTabs />
      </div>
    </>
  );
};

export default FoodTabs;
