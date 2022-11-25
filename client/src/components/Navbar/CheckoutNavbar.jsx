import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CheckoutNavbar = () => {
  const [user] = useState({
    fullName: "Roshni",
  });

  const navigate = useNavigate();

  return (
    <>
      <nav className="container mx-auto lg:px-20 p-2 bg-white w-full flex items-center justify-between">
        <AiOutlineArrowLeft
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <div className="w-20 md:w-32">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-1">
          <div className="border border-gray-300 rounded-full w-9 h-9">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1665987299~exp=1665987899~hmac=f87b5a7df7fdb1e1fd337d2db949672667cb6ec9ae7ed8881e5ed5a1153ee554"
              alt="avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {user.fullName}
        </div>
      </nav>
    </>
  );
};

export default CheckoutNavbar;
