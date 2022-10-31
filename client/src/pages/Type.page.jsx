import React from "react";
import { useParams } from "react-router-dom";
import TypePageLayout from "../layouts/TypePage.layout";

// components
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import Nutrition from "../components/Nutrition";

const Type = () => {
  const { type } = useParams();

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
