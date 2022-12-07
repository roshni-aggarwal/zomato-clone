import React from "react";
import { BsShieldLockFill } from "react-icons/bs";

// layout
import CheckoutLayout from "../layouts/Checkout.layout";

// components
import FoodItem from "../components/Cart/FoodItem";
import AddressList from "../components/Checkout/AddressList";

// redux
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((globalState) => globalState.cart.cart);
  const user = useSelector((globalState) => globalState.user.user);

  const addressList = [
    {
      name: "Home",
      address: "Palama Street, 123 Main",
    },
    {
      name: "Work",
      address: "123 Main Street, CP",
    },
  ];

  const payNow = () => {
    let options = {
      key: "rzp_test_o2sigFYckwBba6",
      amount: cart.reduce((total, curr) => total + curr.totalPrice, 0) * 100,
      currency: "INR",
      name: "Zomato Clone",
      description: "Fast Delivery Service",
      handler: (data) => {
        alert("Payment Successful");
        console.log(data);
      },
      prefill: {
        name: user.fullName,
        email: user.email,
        contact: user.phoneNumber[0],
      },
      theme: {
        color: "#e23744",
      },
    };

    let razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <div className="flex flex-col items-center my-3 gap-3">
        <h1 className="text-center font-bold text-xl md:text-2xl">Checkout</h1>
        <div className="flex flex-col items-center gap-1 drop-shadow-2xl rounded-lg w-full md:w-3/5 p-4 bg-white">
          <h3 className="font-semibold text-lg">Summary</h3>
          <div className="flex flex-col items-center gap-2 w-full">
            <h5 className="text-base tracking-wider">ORDER FROM</h5>
            <div className="flex flex-col items-center text-gray-500 w-full">
              <h4>Domino's Pizza</h4>
              <small>GT World Mall, Magadi Road, NCR Noida</small>
            </div>
            <div className="flex flex-col gap-2 my-4 h-32 px-4 py-2 w-full lg:w-3/5">
              {cart.map((item, index) => (
                <FoodItem key={index} {...item} />
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 w-full md:w-3/5 my-4 ">
              <h4 className="text-lg font-semibold">Choose Address</h4>
              <AddressList address={addressList} />
            </div>
          </div>
          <button
            className="flex items-center justify-center my-4 gap-2 w-full md:w-4/5 text-lg h-14 bg-zomato-400 text-white rounded-lg p-2"
            onClick={payNow}
          >
            Pay Securely <BsShieldLockFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutLayout(Checkout);
