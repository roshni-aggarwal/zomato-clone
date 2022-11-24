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

const CardData = ({ toggle, cart }) => {
  const continueToCheckout = useNavigate("/checkout/orders");

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
  const [cart, setCart] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/af1/fd1b012ebfbe82f2e5212b702ce19af1.jpg",
      name: "Butter Pancakes with Bacon",
      rating: 4.5,
      price: 200,
      description: "Rashers and bourbon caramel sauce.",
      quantity: 3,
      totalPrice: 600,
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/077/28e7baadea310b7b337fd2fb3f653077.jpg",
      name: "Amritsari Fish Tikka",
      rating: 5,
      price: 250,
      quantity: 1,
      totalPrice: 250,
      description:
        "Fish marinated in flavourful lemon-chilli masala roasted in the tandoor with care. Serves 2-3 people.",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);

  return (
    <>
      {cart.length && (
        <>
          {isOpen && (
            <div className="fixed bottom-14 w-full overflow-y-scroll h-48 bg-white z-50 p-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Your Order</h3>
                <IoCloseSharp onClick={closeCart} className="cursor-pointer" />
              </div>
              <div className="flex flex-col my-2 gap-2 md:px-20">
                {cart.map((food) => {
                  <FoodItem key={food._id} {...food} />;
                })}
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
