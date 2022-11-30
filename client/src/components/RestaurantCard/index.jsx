import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../../redux/Reducers/image/image.action";

const RestaurantCard = (props) => {
  const [image, setImage] = useState({
    images: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImage(props.photos)).then((data) => {
      const images = data.payload.images;
      setImage((prev) => ({ ...prev, images }));
    });
  }, [props.photos]);

  const { type } = useParams();

  return (
    <Link to={`/restaurant/${props._id}/overview`}>
      <div className="bg-white rounded-2xl p-4 shadow-md md:shadow-none hover:drop-shadow-lg transition duration-700 ease-in-out">
        <div className="relative w-full">
          <div className="w-full bottom-4 flex items-end justify-between">
            {type === "delivery" && (
              <div className="flex flex-col items-start gap-2 absolute bottom-24">
                {props.isPro && (
                  <span className="bg-zomato-400 text-white px-2 text-sm rounded-l">
                    Pro extra 10% OFF
                  </span>
                )}
                {props.isOff && (
                  <span className="bg-blue-600 text-white px-2 text-sm rounded-l">
                    $250 OFF
                  </span>
                )}
              </div>
            )}
            <img
              src={image.images.length && image.images[0].location}
              alt="food"
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div className="my-2 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h5 className="text-lg font-medium tracking-wide">
                {props.name}
              </h5>
              <span className="flex items-center rounded-md bg-green-700 text-white p-1 gap-1 text-sm font-medium">
                {props.restaurantReviewValue} <AiTwotoneStar />
              </span>
            </div>
            <div className="flex items-center text-black font-light justify-between">
              <p className="truncate w-3/5">{props.cuisine.join(", ")}</p>
              <p>₹ {props.averageCost} for one</p>
            </div>
            {type === "dining" && (
              <p className="text-gray-400 font-light text-sm">
                {props.address}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
