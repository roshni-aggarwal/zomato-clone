import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";

// redux
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/Reducers/auth/auth.action";
import { getMySelf } from "../../redux/Reducers/user/user.action";

const SignUp = ({ isOpen, setIsOpen }) => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();
    await dispatch(signUp(userData));
    await dispatch(getMySelf());
    closeModal();
    setUserData({ fullName: "", email: "", password: "" });
  };

  const googleSignIn = () =>
    (window.location.href = `http://localhost:4000/auth/google`);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-2xl font-medium leading-6 text-gray-900"
                  >
                    Sign Up
                  </Dialog.Title>
                  <div className="mt-4">
                    <form className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="John Doe"
                          value={userData.fullName}
                          onChange={handleChange}
                          className="focus:outline outline-2 focus:outline-teal-500 p-2 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="user@email.com"
                          value={userData.email}
                          onChange={handleChange}
                          className="focus:outline outline-2 focus:outline-teal-500 p-2 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="*****"
                          value={userData.password}
                          onChange={handleChange}
                          className="focus:outline outline-2 focus:outline-teal-500 p-2 rounded-md"
                        />
                      </div>
                      <button
                        className="bg-zomato-400 text-white rounded-lg p-2 cursor-pointer w-full text-center mt-2"
                        onClick={submit}
                      >
                        Create account
                      </button>
                    </form>
                    <h6 className="text-gray-400 text-sm text-center my-4">
                      or
                    </h6>
                    {/* flex: 1 1;
            before:border-bottom: 2px solid #000;
            margin: auto */}
                    <button
                      className="flex items-center justify-center w-full rounded-md outline outline-1 outline-gray-300 gap-2 p-2"
                      onClick={googleSignIn}
                    >
                      <FcGoogle /> Continue With Google
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignUp;
