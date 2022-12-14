import React from "react";
import Navbar from "../components/Navbar/TypePageNavbar";
import FoodTabs from "../components/FoodTabs/FoodTabs.component";
import ExploreSection from "../components/ExploreSection";
import Footer from "../components/Footer";

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
        <ExploreSection />
        <Footer />
      </>
    );
  };

export default TypePageLayout;
