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
      id: "nightlife",
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

const LargeTabs = () => {
  const [allTypes] = useState([
    {
      id: "delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name: "Delivery",
      activeColor: "yellow-50",
    },
    {
      id: "dining",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      activeColor: "sky-50",
      name: "Dining Out",
    },
    {
      id: "nightlife",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      activeColor: "purple-50",
      name: "Night Life",
    },
    {
      id: "nutrition",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
      activeColor: "yellow-50",
      name: "Nutrition",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="lg:border-b-2 mt-8">
        <div className="hidden lg:flex gap-14 container px-20 mx-auto">
          {allTypes.map((item) => (
            <Link key={item.id} to={`/${item.id}`} className="w-36">
              <div
                className={classnames(
                  "flex items-center gap-3 pb-2 transition duration-700 ease-in-out w-44",
                  {
                    "border-b-2 border-zomato-500": type === item.id,
                  }
                )}
              >
                <div
                  className={classnames(
                    "w-16 h-16 bg-gray-100 p-4 rounded-full",
                    {
                      [`bg-${item.activeColor}`]: type === item.id,
                    }
                  )}
                >
                  <img
                    src={
                      type === item.id ? item.imageActive : item.imageDefault
                    }
                    alt={item.id}
                    className="w-full h-full"
                  />
                </div>
                <h3
                  className={
                    type === item.id
                      ? "text-lg font-semibold text-zomato-400"
                      : "text-lg font-semibold text-gray-700"
                  }
                >
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const FoodTabs = () => {
  return (
    <>
      <div>
        <MobileTabs />
        <LargeTabs />
      </div>
    </>
  );
};

export default FoodTabs;
