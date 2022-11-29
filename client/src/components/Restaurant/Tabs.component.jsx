import classNames from "classnames";
import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const Tab = (props) => {
  const { id } = useParams();

  return (
    <Link to={`/restaurant/${id}/${props.route}`}>
      <div
        className={classNames(
          "text-gray-500 font-semibold tracking-wide text-xl pb-4 px-4",
          {
            "text-zomato-300 md:border-b-2 border-zomato-300": props.isActive,
          }
        )}
      >
        <h2>{props.title}</h2>
      </div>
      <div
        className={classNames("md:hidden relative h-[2px] w-full -bottom-0", {
          " bg-zomato-300": props.isActive,
        })}
      ></div>
    </Link>
  );
};

const Tabs = () => {
  const { pathname } = useLocation();

  const tabs = [
    {
      title: "Overview",
      route: "overview",
      isActive: pathname.includes("overview"),
    },
    {
      title: "Order Online",
      route: "order-online",
      isActive: pathname.includes("order-online"),
    },
    {
      title: "Reviews",
      route: "reviews",
      isActive: pathname.includes("reviews"),
    },
    {
      title: "Menu",
      route: "menu",
      isActive: pathname.includes("menu"),
    },
    {
      title: "Photos",
      route: "photos",
      isActive: pathname.includes("photos"),
    },
  ];
  return (
    <>
      <div className="flex items-center gap-4 md:gap-10 lg:gap-16 md:justify-start overflow-x-scroll overflow-y-hidden md:overflow-x-auto border-b-2 md:border-none">
        {tabs.map((tab, index) => (
          <Tab {...tab} key={index} />
        ))}
      </div>
      <hr className="hidden md:block border-t-2" />
    </>
  );
};

export default Tabs;
