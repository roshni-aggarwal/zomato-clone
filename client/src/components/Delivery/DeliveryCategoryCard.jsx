import React from "react";

const DeliverySmCard = ({ image, title }) => {
  return (
    <>
      <div className="lg:hidden flex flex-col items-center justify-center w-full">
        <div className="rounded w-20">
          <img
            className="w-full h-full object-center  rounded-full"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-md my-1 font-medium text-gray-700">{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryLgCard = ({ image, title }) => {
  return (
    <>
      <div className="hidden lg:flex flex-col items-center justify-center w-full">
        <div className="rounded w-36">
          <img
            className="w-full h-full object-center  rounded-full"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-lg my-1 font-medium text-gray-700">{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryCategoryCard = (props) => {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
};

export default DeliveryCategoryCard;
