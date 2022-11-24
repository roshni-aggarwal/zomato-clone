import React, { useState } from "react";
import { MdClose, MdLocalDining } from "react-icons/md";

// components
import MenuListContainer from "./MenuListContainer";

const FloatMenuBtn = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => setIsClicked((prev) => !prev);

  return (
    <div className="fixed z-10 w-8/12 flex flex-col gap-3 items-end bottom-5 md:hidden">
      {isClicked && (
        <div className="p-3 bg-white h-48 overflow-y-scroll drop-shadow-md rounded-md">
          {props.menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              onClickHandler={props.onClickHandler}
              selected={props.selected}
              target={index}
            />
          ))}
        </div>
      )}
      <button
        onClick={toggleMenu}
        className="text-white rounded-full flex items-center gap-2 bg-black px-4 py-4 text-sm"
      >
        {isClicked ? <MdClose /> : <MdLocalDining />} Browse Menu
      </button>
    </div>
  );
};

export default FloatMenuBtn;
