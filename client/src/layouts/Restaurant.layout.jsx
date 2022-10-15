import React from "react";

// components
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid.component";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo.component";
import InfoButton from "../components/Restaurant/InfoButton.component";
import Tabs from "../components/Restaurant/Tabs.component";
import CartContainer from "../components/Cart/CartContainer.component";

// icons
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

const RestaurantLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
          <ImageGrid images="" />
          <RestaurantInfo
            name=""
            restaurantRating=""
            deliveryRating=""
            cuisine=""
            address=""
          />
          <div className="my-4 flex flex-wrap gap-3 mx-auto">
            <InfoButton isActive="true">
              <TiStarOutline /> Add Review
            </InfoButton>
            <InfoButton isActive="false">
              <RiDirectionLine /> Direction
            </InfoButton>
            <InfoButton isActive="false">
              <BiBookmarkPlus /> Bookmark
            </InfoButton>
            <InfoButton isActive="false">
              <RiShareForwardLine /> Share
            </InfoButton>
          </div>
          <div className="my-10">
            <Tabs />
          </div>
          <Component {...props} />
        </div>
        <CartContainer />
      </>
    );
  };

export default RestaurantLayout;
