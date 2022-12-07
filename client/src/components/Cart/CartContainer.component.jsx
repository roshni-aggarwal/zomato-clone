import React, { useState } from "react";
import {
  IoMdArrowDropright,
  IoMdArrowDropup,
  IoMdArrowDown,
} from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// components
import FoodItem from "./FoodItem";

// redux
import { useSelector } from "react-redux";

const CardData = ({ toggle, cart }) => {
  const navigate = useNavigate();
  const continueToCheckout = () => navigate("/checkout/orders");

  return (
    <div className="flex items-center justify-between bg-zomato-500 p-2 rounded-md">
      <div className="flex flex-col items-start justify-between">
        <small
          className="flex items-center gap-1 cursor-pointer"
          onClick={toggle}
        >
          {cart.length} ITEM <IoMdArrowDropup />
        </small>
        <h4 className="flex items-center gap-2">
          ₹{cart.reduce((acc, currVal) => acc + currVal.totalPrice, 0)}
          <span className="text-xs">plus taxes</span>
        </h4>
      </div>
      <button
        className="flex items-center justify-between cursor-pointer"
        onClick={continueToCheckout}
      >
        Continue <IoMdArrowDropright />
      </button>
    </div>
  );
};

const CartContainer = () => {
  const cart = useSelector((globalState) => globalState.cart.cart);

  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);

  return (
    <>
      {cart.length && (
        <>
          {isOpen && (
            <div className="fixed bottom-14 w-full overflow-y-scroll h-48 bg-white z-50 p-3">
              <div className="flex items-center justify-between md:px-20">
                <h3 className="text-xl font-bold">Your Order</h3>
                <IoCloseSharp onClick={closeCart} className="cursor-pointer" />
              </div>
              <div className="flex flex-col my-2 gap-2 md:px-20">
                {cart.map((food) => (
                  <FoodItem key={food._id} {...food} />
                ))}
              </div>
            </div>
          )}
          <div className="bg-white text-white fixed bottom-0 p-3 w-full lg:px-20 z-50">
            <CardData toggle={toggleCart} cart={cart} />
          </div>
        </>
      )}
    </>
  );
};

export default CartContainer;
