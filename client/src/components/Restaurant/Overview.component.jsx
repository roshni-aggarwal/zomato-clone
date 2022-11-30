import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoMdArrowDropright } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// components
import MenuCollection from "./MenuCollection";
import SimilarRestaurantCard from "./SimilarRestaurantCard";
import MapView from "./MapView";
import ReviewCard from "../Reviews/ReviewCard";
import AddReviewCard from "../Reviews/AddReviewCard";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getReview } from "../../redux/Reducers/reviews/review.action";
import { getImage } from "../../redux/Reducers/image/image.action";

const Overview = () => {
  const [restaurant, setRestaurant] = useState({});
  const [menuImages, setMenuImages] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [similarRestaurant, setSimilarRestaurant] = useState([
    {
      _id: "124ksjf435245jv34fg3",
      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      deliveryValue: "4.1",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      image:
        "https://b.zmtcdn.com/data/pictures/chains/4/19722844/c11fc85aadc1891ee896ff62f272e5ca_featured_v2.jpg?output-format=webp",
      phoneNumber: "152546231",
      address: "Adajan, Surat",
      mapLocation: "21.17020822753635, 72.79538940827193",
    },
    {
      _id: "sdffdsadadsfadfadsfadsf",

      isOff: false,
      name: "Master Koii's",
      deliveryValue: "4.1",
      restaurantReviewValue: "4.6",
      cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],

      image:
        "https://b.zmtcdn.com/data/pictures/5/18810265/60d63fc2da3627262038cf399a3d209a_featured_v2.jpg",
      phoneNumber: "152546231",
      address: "Bhatar,Surat",
      mapLocation: "21.178298175859783, 72.78973197558402",
    },
    {
      _id: "124ksjf435245jfdfv34fg3",

      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      deliveryValue: "4.1",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      address: "Bhatar,Surat",
      phoneNumber: "152546231",
      image:
        "https://b.zmtcdn.com/data/pictures/9/3800659/fb8b02dd3271dc474f6fb5c2aafed02b_featured_v2.jpg",
      mapLocation: "21.178298175859783, 72.78973197558402",
    },
    {
      _id: "124ksjf43524ch5jfdfv34fg3",
      name: "Nathu's Sweets",
      restaurantReviewValue: "3.7",
      deliveryValue: "4.1",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      phoneNumber: "152546231",
      address: "Bhatar,Surat",
      image:
        "https://b.zmtcdn.com/data/pictures/5/18616325/d1e804c6c1cff21de81bc0e2223b15a2_featured_v2.jpg",
      mapLocation: "21.172267137035547, 72.7890180423591",
    },
  ]);

  const dispatch = useDispatch();
  const { id } = useParams;

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  const updateReviews = useSelector(
    (globalState) => globalState.review.reviews
  );

  useEffect(() => {
    if (reduxState) setRestaurant(reduxState);
  }, [reduxState]);

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location));
        setMenuImages(images);
      });

      dispatch(getReview(reduxState?._id)).then((data) => {
        setReviews(data.payload.reviews);
      });
    }
  }, [reduxState]);

  useEffect(() => {
    if (updateReviews) setReviews(updateReviews);
  }, [updateReviews]);

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
    modules: [Pagination, Navigation],
    className: "mySwiper",
    navigation: true,
    pagination: true,
  };

  const getLatLan = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-5 relative">
      <div className="w-full md:w-8/12">
        <h2 className="text-lg md:text-xl my-4 font-semibold tracking-wide">
          About this place
        </h2>

        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium ">Menu</h4>
          <Link to={`/restaurant/${id}/menu`}>
            <span className="text-zomato-400 flex items-center">
              See all menu
              <IoMdArrowDropright size={20} />
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 my-4">
          <MenuCollection
            menuTitle="Menu"
            pages={menuImages.length}
            images={menuImages}
          />
        </div>

        <h4 className="text-lg font-medium">Cuisines</h4>
        <div className="flex flex-wrap gap-2">
          {restaurant.cuisine &&
            restaurant?.cuisine.map((cuisineName, index) => (
              <span
                key={index}
                className="text-teal-600 font-light rounded-full py-1 px-2 border border-gray-300"
              >
                {cuisineName}
              </span>
            ))}
        </div>

        <div className="my-4">
          <h4 className="font-medium text-lg">Average Cost</h4>
          <h6 className="font-light">
            ₹{restaurant.averageCost} for two people (approx.)
          </h6>
          <small className="text-gray-400 tracking-wider font-light">
            Exclusively of applicable taxes and charges, if any
          </small>
        </div>

        <div className="my-4">
          <h4 className="font-medium text-lg">Similar Restaurant</h4>
          <Swiper {...slideConfig}>
            {similarRestaurant.map((restaurant) => (
              <SwiperSlide key={restaurant._id}>
                <SimilarRestaurantCard {...restaurant} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="my-4">
          <AddReviewCard />
          <div className="my-2">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:hidden flex flex-col my-4 gap-4 z-0">
        <MapView
          title={restaurant.name}
          address={restaurant.address}
          center={getLatLan(restaurant?.mapLocation)}
          phoneNumber={restaurant.phoneNumber}
          mapLocation={restaurant.mapLocation}
        />
      </div>

      <aside className="hidden md:flex flex-col md:w-4/12 h-fit sticky rounded-xl top-52 bg-white p-3 shadow-md gap-4 mt-4">
        <MapView
          title={restaurant.name}
          address={restaurant.address}
          center={getLatLan(restaurant?.mapLocation)}
          phoneNumber={restaurant.phoneNumber}
          mapLocation={restaurant.mapLocation}
        />
      </aside>
    </div>
  );
};

export default Overview;

// _id: "124ksjf435245jv34fg3",

// name: "Nathu's Sweets",
// restaurantReviewValue: "3.7",
// cuisine: [
//   "Mithai",
//   "South Indian",
//   "Chinese",
//   "Street Food",
//   "Fast Food",
//   "Desserts",
//   "North Indian",
// ],
// averageCost: "450",
// phoneNumber: "152546231",
// address: "Vesu, Surat",
// mapLocation: "21.14800001839723, 72.75629285363928",
