import React from "react";
import { BsTrashFill } from "react-icons/bs";

//  redux
import { useDispatch } from "react-redux";
import {
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/Reducers/cart/cart.action";

const FoodItem = (props) => {
  const dispatch = useDispatch();

  const deleteFoodFromCart = () => {
    dispatch(deleteFromCart(props._id));
  };

  const increment = () => {
    dispatch(incrementQuantity(props._id));
  };

  const decrement = () => {
    props.quantity > 1
      ? dispatch(decrementQuantity(props._id))
      : dispatch(deleteFromCart(props._id));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h5 className="font-semibold">{props.name} </h5>
          <p className="font-medium text-sm">₹{props.price}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center justify-between outline outline-1 outline-zomato-300 bg-red-50 px-1 rounded-md gap-2">
              <button onClick={decrement} className="text-zomato-300 mx-1">
                -
              </button>
              <p className="font-medium text-sm">{props.quantity}</p>
              <button onClick={increment} className="text-zomato-300 mx-1">
                +
              </button>
            </div>
            <p className="font-medium text-sm">
              ₹ {parseInt(props.price) * parseInt(props.quantity)}
            </p>
          </div>
          <button onClick={deleteFoodFromCart} className="text-zomato-300 p-2">
            <BsTrashFill />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
