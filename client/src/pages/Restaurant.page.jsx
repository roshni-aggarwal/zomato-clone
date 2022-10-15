import React from "react";
import RestaurantLayout from "../layouts/Restaurant.layout";
import { Outlet } from "react-router-dom";

const Restaurant = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RestaurantLayout(Restaurant);
