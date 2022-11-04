import React from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import RestaurantLayout from "../layouts/Restaurant.layout";
import { Outlet } from "react-router-dom";

const Restaurant = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  if (`/restaurant/${id}/` === pathname) {
    return <Navigate to="overview" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default RestaurantLayout(Restaurant);
