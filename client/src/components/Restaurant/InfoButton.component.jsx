import React from "react";
import classnames from "classnames";

const InfoButton = ({ children, ...props }) => {
  return (
    <>
      <button
        className={classnames(
          "flex gap-2 rounded-lg outline outline-1 outline-gray-400 py-2 px-4 items-center hover:bg-gray-50 font-light tracking-tight",
          {
            "bg-zomato-300 text-white outline-none outline-transparent hover:bg-zomato-500 transitiion ease-in-out duration-500":
              props.isActive,
          }
        )}
      >
        {children}
      </button>
    </>
  );
};

export default InfoButton;
