import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const GetTheApp = () => {
  const [isEmail, setIsEmail] = useState(true);

  const changingType = () => {
    setIsEmail((prev) => !prev);
  };

  return (
    <div className="bg-[#fffbf7] mt-16 md:mt-24 px-8 md:px-16 lg:px-52 py-10 flex flex-col justify-center md:flex-row gap-4">
      <div className="hidden w-full md:w-1/3 h-2/3 md:flex items-center justify-center">
        <img
          src="\images\mobileBanner.png"
          alt="mobile banner"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full md:w-2/3 gap-4 md:gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-center md:text-left">
          Get the Zomato app
        </h1>
        <h2 className="font-light md:text-lg tracking-wide text-center md:text-left">
          We will send you a link, open it on your phone to download the app
        </h2>
        <form className="flex flex-col gap-2 text-lg font-light">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                id="email"
                className="accent-zomato-400 w-4 h-4"
                defaultChecked
                onChange={changingType}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                id="phone"
                className="accent-zomato-400 w-4 h-4"
                onChange={changingType}
              />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <div className="flex gap-2 lg:w-2/3">
            {isEmail ? (
              <input
                type="email"
                placeholder="Email"
                className="bg-white border border-gray-300 rounded-lg py-1 px-2 w-3/4 md:w-3/5 focus:outline-teal-500 focus:outline-1"
              />
            ) : (
              <div className="flex bg-white border border-gray-300 rounded-lg py-1 px-2 w-3/4 md:w-3/5 focus:outline-teal-500 focus:outline-1">
                <div className="flex items-center justify-center gap-1 border-r border-gray-300 w-1/3">
                  <h5 className="text-base">+91</h5> <FiChevronDown />
                </div>
                <input
                  type="text"
                  placeholder="type here..."
                  className="outline-none w-3/4 pl-2"
                />
              </div>
            )}
            <button className="md:hidden bg-zomato-300 text-white px-2 rounded-md hover:bg-zomato-500 transition ease-in">
              Share
            </button>
            <button className="hidden md:block bg-zomato-300 text-white py-2 px-4 rounded-md hover:bg-zomato-500 transition ease-in">
              Share App Link
            </button>
          </div>
        </form>
        <div>
          <h4 className="text-gray-500 text-sm font-light text-center md:text-left">
            Download app from
          </h4>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-1/2 md:w-1/3 lg:w-1/4">
              <a
                href="https://play.google.com/store/apps/details?id=com.application.zomato&_branch_match_id=1131554419140477298&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3STcxLKcrPTAEABp6kzyEAAAA%3D"
                target={"_blank"}
                rel="norefferer"
              >
                <img
                  src="\images\playStore.png"
                  alt="play store"
                  className="w-full h-full"
                />
              </a>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4">
              <a
                href="https://apps.apple.com/in/app/zomato-food-restaurant-finder/id434613896?_branch_match_id=1131554419140477298&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3Kz00sydfNzC8GAFKYbuoiAAAA"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src="\images\appleStore.png"
                  alt="app store"
                  className="w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTheApp;
