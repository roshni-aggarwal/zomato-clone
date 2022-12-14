import React, { useState } from "react";
import { BsPhone } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// components
import SignUp from "../Auth/SignUp";
import LogIn from "../Auth/LogIn";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Reducers/auth/auth.action";
import { clearUser } from "../../redux/Reducers/user/user.action";

const SmNav = ({
  user,
  isDropdownOpen,
  setIsDropdownOpen,
  login,
  signup,
  logout,
}) => {
  return (
    <>
      <div className="flex items-center justify-between text-white md:hidden">
        <a
          href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en&gl=US"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center gap-2 text-sm font-semibold">
            <BsPhone /> Get the App
          </div>
        </a>
        <div className="flex items-center justify-end relative">
          {user?.fullName ? (
            <>
              <div
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <div className="border border-white rounded-full text-white w-8">
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
                <div className="absolute shadow-lg py-3 px-2 -bottom-14 -right-0 bg-white text-black rounded-md w-full z-20 flex flex-col items-start gap-2 border-gray-200">
                  <button onClick={logout}>Log Out</button>
                </div>
              )}
            </>
          ) : (
            <>
              <span
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="border rounded-full text-white cursor-pointer p-2"
              >
                <FaUserAlt className="w-full h-full" />
              </span>
              {isDropdownOpen && (
                <div className="absolute shadow-lg py-3 px-2 right-0 -bottom-20 w-24 bg-white text-black rounded-md z-20 flex flex-col items-start gap-2 border-gray-200">
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
      <div className="items-center justify-between text-white hidden md:flex">
        <a
          href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en&gl=US"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center gap-2 text-sm font-semibold">
            <BsPhone /> Get the App
          </div>
        </a>
        <div className="flex items-center justify-between text-white gap-4 text-lg">
          <button>Investor Relations</button>
          <button>Add Restaurant</button>
          <div className="relative">
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
                  <div className="absolute shadow-lg text-black py-3 px-2 w-full z-20 flex flex-col items-start rounded-md gap-2 bg-white border border-gray-200">
                    <button onClick={logout}>Log Out</button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="flex items-center justify-between text-white text-lg">
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
      </div>
    </>
  );
};

const Navbar = () => {
  const user = useSelector((globalState) => globalState.user.user);
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
    navigate("/");
  };
  return (
    <>
      <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />
      <LogIn isOpen={openLogIn} setIsOpen={setOpenLogIn} />
      <nav className="mx-auto px-4 md:px-16 lg:px-36 py-6">
        <SmNav
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

export default Navbar;
