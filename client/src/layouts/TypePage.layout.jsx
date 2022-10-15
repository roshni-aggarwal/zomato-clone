import React from "react";
import Navbar from "../components/Navbar/TypePageNavbar";
import FoodTabs from "../components/FoodTabs/FoodTabs.component";

const TypePageLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <FoodTabs />
        <div className="container mx-auto px-4 lg:px-20">
          <Component {...props} />
        </div>
      </>
    );
  };

export default TypePageLayout;
