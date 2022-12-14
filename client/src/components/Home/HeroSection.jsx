import React from "react";
import Navbar from "../Navbar";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[url('../public/images/heroSectionBackground.png')] bg-center bg-cover w-full">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-8 pt-10 pb-24">
          <div className="w-64 md:w-80">
            <img
              src="/images/heroSectionLogo.png"
              alt="logo"
              className="w-full h-full object-center"
            />
          </div>
          <h1 className="text-xl md:text-4xl text-white">
            Discover the best food & drinks in Surat
          </h1>
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-1/2 md:bg-white rounded-lg p-2 py-3">
            <div className="flex items-center gap-1 md:border-r-2 md:border-gray-200 bg-white rounded-lg md:rounded-none p-2 md:p-0 md:w-1/3">
              <HiLocationMarker className="text-zomato-200" size={24} />{" "}
              <input
                type="text"
                placeholder="City Light Town, Athwa"
                className="text-gray-600 font-light outline-none w-full"
              />{" "}
              <IoMdArrowDropdown size={20} />
            </div>
            <div className="flex items-center gap-1 w-full bg-white rounded-lg p-2 md:p-0 md:2/3">
              <RiSearch2Line className="text-gray-500" />{" "}
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="text-gray-600 font-light outline-none w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
