import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getFood } from "../../redux/Reducers/food/food.action";
import { getImage } from "../../redux/Reducers/image/image.action";
import { addToCart } from "../../redux/Reducers/cart/cart.action";

const FoodItem = (props) => {
  const [food, setFood] = useState();

  const dispatch = useDispatch();

  const cart = useSelector((globalState) => globalState.cart.cart);

  useEffect(() => {
    dispatch(getFood(props._id))
      .then((data) => {
        setFood(data.payload.food);
        dispatch(getImage(data.payload.food.photos)).then((data) =>
          setFood((prev) => ({
            ...prev,
            image: data.payload.images[0].location,
          }))
        );
        return data.payload.food;
      })
      .then((data) => {
        cart.forEach((each) => {
          if (each._id === data._id)
            setFood((prev) => ({ ...prev, isAddedToCart: true }));
        });
      });
  }, [cart]);

  // useEffect(() => {
  //   cart.forEach((each) => {
  //     if (each._id === food?._id) {
  //       setFood((prev) => ({ ...prev, isAddedToCart: true }));
  //       console.log(food?._id);
  //     }
  //     // alert("hello");
  //   });
  // }, [cart]);

  const addFoodToCart = () => {
    dispatch(addToCart({ ...food, quantity: 1, totalPrice: food.price }));
    setFood((prev) => ({ ...prev, isAddedToCart: true }));
  };

  return (
    <div className="flex items-start gap-4 px-2 w-full lg:w-4/5 h-48">
      {food?.image && (
        <div className="w-2/5 h-32 md:w-28 lg:w-3/12 overflow-hidden rounded-md">
          <img
            src={food?.image}
            alt="food item"
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      <div className="w-3/5 md:7/12 flex flex-col gap-1">
        <h2 className="tracking-wide font-semibold text-xl">{food?.name} </h2>
        <ReactStars count={5} edit={false} value={food?.rating} />
        <h5 className="text-gray-500 font-light text-base">₹{food?.price}</h5>
        <p className="text-gray-500 font-light truncate">{food?.description}</p>
        <button
          className="flex items-center gap-2 bg-zomato-50 px-2 py-1 rounded-md text-zomato-400 outline outline-1 outline-zomato-400 font-semibold md:hidden justify-center w-20 mt-1"
          onClick={addFoodToCart}
          disabled={food?.isAddedToCart}
        >
          {food?.isAddedToCart ? (
            <>ADDED</>
          ) : (
            <>
              <AiOutlinePlus /> ADD
            </>
          )}
        </button>
      </div>
      <div className="md:w-2/12 items-end hidden md:block">
        <button
          className="flex items-center gap-2 bg-zomato-50 px-2 py-1 rounded-md text-zomato-400 outline outline-1 outline-zomato-400 font-semibold"
          onClick={addFoodToCart}
          disabled={food?.isAddedToCart}
        >
          {food?.isAddedToCart ? (
            <>ADDED</>
          ) : (
            <>
              <AiOutlinePlus /> ADD
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
