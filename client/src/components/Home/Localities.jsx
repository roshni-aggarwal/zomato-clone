import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";

const Localities = () => {
  const localities = [
    {
      name: "Vesu",
      place: 200,
    },
    {
      name: "Pipload",
      place: 155,
    },
    {
      name: "Adajan Gam",
      place: 64,
    },
    {
      name: "Citylight",
      place: 245,
    },
    {
      name: "Athwa",
      place: 130,
    },
    {
      name: "Nanpura",
      place: 84,
    },
    {
      name: "Dumas",
      place: 137,
    },
    {
      name: "Katargam",
      place: 63,
    },
  ];
  return (
    <div className="mx-auto container my-16 md:my-24 px-4 md:px-16 lg:px-48">
      <div className="text-xl md:text-4xl text-gray-700">
        <h1>
          Popular localities in and around{" "}
          <span className="font-semibold text-gray-800">Surat</span>
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {localities.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer"
          >
            <div className="flex flex-col justify-start">
              <h2 className="text-lg">{item.name} </h2>
              <h5 className="font-light">{item.place} places</h5>
            </div>
            <BsChevronRight />
          </div>
        ))}
        <div className="flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer">
          <h2 className="text-lg">see more</h2>
          <HiChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Localities;
