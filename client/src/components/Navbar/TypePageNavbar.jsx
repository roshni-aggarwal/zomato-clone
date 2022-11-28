import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { useNavigate } from "react-router-dom";

// components
import SignUp from "../Auth/SignUp";
import LogIn from "../Auth/LogIn";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Reducers/auth/auth.action";
import { clearUser } from "../../redux/Reducers/user/user.action";

const MobileNav = ({
  user,
  isDropdownOpen,
  setIsDropdownOpen,
  login,
  signup,
  logout,
}) => {
  return (
    <>
      <div className="w-full flex items-center justify-between lg:hidden">
        <Link to={"/"}>
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
        </Link>
        <div className="flex items-center gap-3 relative">
          <ExternalLink href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en&gl=US">
            <button className=" text-white bg-zomato-400 rounded-full px-3 py-2">
              Use App
            </button>
          </ExternalLink>

          {user?.fullName ? (
            <>
              <div
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <div className="border border-gray-300 rounded-full w-9 h-9">
                  <img
                    src=" https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1665987299~exp=1665987899~hmac=f87b5a7df7fdb1e1fd337d2db949672667cb6ec9ae7ed8881e5ed5a1153ee554"
                    alt="avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {user.fullName}
                {isDropdownOpen ? (
                  <>
                    <BsChevronUp
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                    />
                  </>
                ) : (
                  <>
                    <BsChevronDown
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                    />
                  </>
                )}
              </div>
              {isDropdownOpen && (
                <div className="absolute shadow-lg py-3 px-2 -bottom-14 -right-0 bg-white rounded-md w-3/4 z-20 flex flex-col items-start gap-2 border-gray-200">
                  <button onClick={logout}>Log Out</button>
                </div>
              )}
            </>
          ) : (
            <>
              <span
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="border border-gray-300 rounded-full text-zomato-400 cursor-pointer w-9 h-9 p-2"
              >
                <FaUserAlt className="w-full h-full" />
              </span>
              {isDropdownOpen && (
                <div className="absolute shadow-lg py-3 px-2 -bottom-20 -right-0 bg-white rounded-md w-3/4 z-20 flex flex-col items-start gap-2 border-gray-200">
                  <button onClick={signup}>Sign Up</button>
                  <button onClick={login}>Log In</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

const LargeNav = ({
  user,
  isDropdownOpen,
  setIsDropdownOpen,
  login,
  signup,
  logout,
}) => {
  return (
    <>
      <div className="w-full items-center justify-between hidden lg:flex">
        <div className="items-center flex w-1/6">
          <Link to={"/"}>
            <div className="w-32">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </Link>
        </div>
        <div className="w-4/6 items-center flex p-3 bg-white shadow-md gap-3 rounded border border-gray-200">
          <div className="flex items-center justify-around gap-2 border-r-2 border-gray-200 pr-2 w-3/5">
            <HiLocationMarker className="text-zomato-400" size={"30px"} />
            <input
              type="text"
              placeholder="Majura,Udhana,Surat"
              className="w-full focus:outline-none"
            />
            <IoMdArrowDropdown size={"30px"} />
          </div>
          <div className="flex items-center justify-around gap-2 w-full">
            <RiSearch2Line className="text-gray-500" size={"20px"} />
            <input
              type="search"
              placeholder="Search for a restaurant, cuisine or a dish"
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-end w-1/6 relative">
          {user?.fullName ? (
            <>
              <div
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <div className="border border-gray-300 rounded-full w-9 h-9">
                  <img
                    src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1665987299~exp=1665987899~hmac=f87b5a7df7fdb1e1fd337d2db949672667cb6ec9ae7ed8881e5ed5a1153ee554"
                    alt="avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {user.fullName}
                {isDropdownOpen ? (
                  <>
                    <BsChevronUp
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                    />
                  </>
                ) : (
                  <>
                    <BsChevronDown
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                    />
                  </>
                )}
              </div>
              {isDropdownOpen && (
                <div className="absolute shadow-lg -bottom-14 py-3 px-2 w-28 z-20 flex flex-col items-start rounded-md gap-2 bg-white border border-gray-200">
                  <button onClick={logout}>Log Out</button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center justify-between text-gray-500 text-lg">
                <button className="p-2" onClick={login}>
                  Log in
                </button>
                <button className="p-2" onClick={signup}>
                  Sign up
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const TypePageNavbar = () => {
  const user = useSelector((globalState) => globalState.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogIn, setOpenLogIn] = useState(false);

  const openSignUpModal = () => setOpenSignUp(true);
  const openLogInModal = () => setOpenLogIn(true);

  const login = () => {
    openLogInModal();
    setIsDropdownOpen(false);
  };

  const signup = () => {
    openSignUpModal();
    setIsDropdownOpen(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogOut = () => {
    dispatch(logOut());
    dispatch(clearUser());
    navigate("/delivery");
  };

  return (
    <>
      <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />
      <LogIn isOpen={openLogIn} setIsOpen={setOpenLogIn} />

      <nav className="lg:container lg:mx-auto lg:px-20 p-2 bg-white w-full flex items-center shadow-md lg:shadow-none">
        <MobileNav
          user={user}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          login={login}
          signup={signup}
          logout={LogOut}
        />
        <LargeNav
          user={user}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          login={login}
          signup={signup}
          logout={LogOut}
        />
      </nav>
    </>
  );
};

export default TypePageNavbar;
