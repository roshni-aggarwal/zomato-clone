import React, { useState } from "react";

// components
import TypePageNavbar from "../components/Navbar/TypePageNavbar";
import ImageGrid from "../components/Restaurant/ImageGrid.component";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo.component";
import InfoButton from "../components/Restaurant/InfoButton.component";
import Tabs from "../components/Restaurant/Tabs.component";
import CartContainer from "../components/Cart/CartContainer.component";

// icons
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

const RestaurantLayout = (Component) => {
  return function Xyz(props) {
    const [restaurant, setRestaurant] = useState({
      images: [
        {
          location:
            "https://b.zmtcdn.com/data/pictures/1/19063791/874f9b9cecc1dd50364444a26a1b8e70.jpg",
        },
        {
          location:
            "https://b.zmtcdn.com/data/pictures/1/19063791/dce23bdd1bb19466e0785228beeba6d1.jpg",
        },
        {
          location:
            "https://b.zmtcdn.com/data/pictures/chains/1/19063791/d9d3a7604f71dc3b5329040ecae311e7.jpg",
        },
        {
          location:
            "https://b.zmtcdn.com/data/pictures/chains/8/301718/521b89e0710553cee262e5f0b13efb23.jpg",
        },
        {
          location:
            "https://b.zmtcdn.com/data/pictures/5/18216915/1cd1d09c0a137b5d8da7a7f7310cd919.jpg",
        },
      ],
      name: "Biryani Blues",
      cuisine: ["Biryani", "Kebab", "Desserts"],
      address: "Connaught Place, New Delhi",
      restaurantRating: 4.1,
      deliveryRating: 3.2,
    });

    return (
      <>
        <TypePageNavbar />
        <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
          <ImageGrid {...restaurant} />
          <RestaurantInfo {...restaurant} />
          <div className="py-4 flex flex-wrap gap-3 mx-auto">
            <InfoButton isActive="true">
              <TiStarOutline /> Add Review
            </InfoButton>
            <InfoButton>
              <RiDirectionLine size={18} color="#f9555d" /> Direction
            </InfoButton>
            <InfoButton>
              <BiBookmarkPlus size={18} color="#f9555d" /> Bookmark
            </InfoButton>
            <InfoButton>
              <RiShareForwardLine size={18} color="#f9555d" /> Share
            </InfoButton>
          </div>
          <div className="pt-5 sticky top-40 md:top-32 bg-white z-10">
            <Tabs />
          </div>
          <Component {...props} />
        </div>
        <CartContainer/>
      </>
    );
  };
};

export default RestaurantLayout;
