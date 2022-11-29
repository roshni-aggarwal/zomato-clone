import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TypePageLayout from "../layouts/TypePage.layout";

// components
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import Nutrition from "../components/Nutrition";

// redux
import { useDispatch } from "react-redux";
import { getRestaurant } from "../redux/Reducers/restaurant/restaurant.action";

const Type = () => {
  const { type } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  },[]);

  return (
    <>
      {type === "delivery" && <Delivery />}
      {type === "dining" && <Dining />}
      {type === "nightlife" && <NightLife />}
      {type === "nutrition" && <Nutrition />}
    </>
  );
};

export default TypePageLayout(Type);
