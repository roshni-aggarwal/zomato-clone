import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const countryList = [
    {
      name: "India",
      code: "in",
    },
    {
      name: "Australia",
      code: "au",
    },
    {
      name: "Brazil",
      code: "br",
    },
    {
      name: "Canada",
      code: "ca",
    },
    {
      name: "Chile",
      code: "cl",
    },
    {
      name: "Czech Republic",
      code: "cz",
    },
    {
      name: "Indonesia",
      code: "id",
    },
    {
      name: "Ireland",
      code: "ie",
    },
    {
      name: "Italy",
      code: "it",
    },
    {
      name: "Lebanon",
      code: "lb",
    },
    {
      name: "Malaysia",
      code: "my",
    },
    {
      name: "New Zealand",
      code: "nz",
    },
    {
      name: "Philippines",
      code: "ph",
    },
    {
      name: "Poland",
      code: "pl",
    },
    {
      name: "Portugal",
      code: "pt",
    },
    {
      name: "Qatar",
      code: "qa",
    },
    {
      name: "Singapore",
      code: "sg",
    },
    {
      name: "Slovakia",
      code: "sk",
    },
    {
      name: "South Africa",
      code: "za",
    },
    {
      name: "Sri Lanka",
      code: "lk",
    },
    {
      name: "Turkey",
      code: "tr",
    },
    {
      name: "UAE",
      code: "ae",
    },
    {
      name: "United Kingdom",
      code: "gb",
    },
    {
      name: "USA",
      code: "us",
    },
  ];

  const languages = [
    "English",
    "Tükce",
    "हिंदी",
    "Português (BR)",
    "Indonesian",
    "Português (PT)",
    "Español",
    "Cestina",
    "Slovencina",
    "Polish",
    "Italian",
    "Vietnamese",
  ];
  return (
    <footer className="container mx-auto py-10 px-4 md:px-16 lg:px-48 bg-gray-100">
      <div className="flex flex-col md:flex-row  md:items-center justify-between gap-10">
        <div className="w-28">
          <img src="\images\logo.png" alt="logo" className="w-full h-full" />
        </div>
        <div className="flex gap-4">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="flex items-center justify-between gap-2 px-2 py-1 outline outline-1 outline-gray-400 rounded-md">
                  <span className="fi fi-in"></span>
                  India <BiChevronDown />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel>
                    <div className="absolute bottom-10 md:right-0 w-80 md:w-[32rem] lg:w-[44rem] z-10 px-4 p-2 rounded-md shadow-xl pb-4 bg-white grid grid-cols-2 md:grid-cols-4 gap-2">
                      {/* <div className="absolute rotate-45 bg-white right-5 bottom-0">hello</div> */}
                      {countryList.map((flag, index) => (
                        <div
                          className="flex items-center justify-start gap-4 cursor-pointer hover:bg-gray-50 py-1"
                          key={index}
                        >
                          <span className={`fi fi-${flag.code}`}></span>{" "}
                          {flag.name}
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="flex items-center justify-between gap-2 px-2 py-1 outline outline-1 outline-gray-400 rounded-md">
                  <GrLanguage /> English <BiChevronDown />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute bottom-10 md:right-0 z-10 px-4 p-2 rounded-md shadow-xl pb-4 bg-white flex flex-col items-start w-40">
                    {languages.map((item, index) => (
                      <button
                        key={index}
                        className="hover:bg-gray-50 w-full text-left p-1"
                      >
                        {item}{" "}
                      </button>
                    ))}
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 mt-8 gap-4">
        <div className="flex flex-col gap-2">
          <h4 className="font-mono tracking-widest">ABOUT ZOMATO</h4>
          <div className="text-gray-500 text-sm font-light flex flex-col gap-1 tracking-wider">
            <h6 className="hover:text-black cursor-pointer">Who We Are</h6>
            <h6 className="hover:text-black cursor-pointer">Blog</h6>
            <h6 className="hover:text-black cursor-pointer">Work With Us</h6>
            <h6 className="hover:text-black cursor-pointer">
              Investor Relations
            </h6>
            <h6 className="hover:text-black cursor-pointer">Report Fraud</h6>
            <h6 className="hover:text-black cursor-pointer">Contact Us</h6>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-mono tracking-widest">ZOMAVERSE</h4>
          <div className="text-gray-500 text-sm font-light flex flex-col gap-1 tracking-wider">
            <h6 className="hover:text-black cursor-pointer">Zomato</h6>
            <h6 className="hover:text-black cursor-pointer">Blinkit</h6>
            <h6 className="hover:text-black cursor-pointer">Feeding India</h6>
            <h6 className="hover:text-black cursor-pointer">Hyperpure</h6>
            <h6 className="hover:text-black cursor-pointer">Zomaland</h6>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-mono tracking-widest">FOR RESTAURANTS</h4>
            <div className="text-gray-500 text-sm font-light flex flex-col gap-1 tracking-wider">
              <h6 className="hover:text-black cursor-pointer">
                Partner With Us
              </h6>
              <h6 className="hover:text-black cursor-pointer">Apps For You</h6>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-mono tracking-widest">FOR ENTERPRISES</h4>
            <div className="text-gray-500 text-sm font-light flex flex-col gap-1 tracking-wider">
              <h6 className="hover:text-black cursor-pointer">
                Zomato For Work
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-mono tracking-widest">LEARN MORE</h4>
          <div className="text-gray-500 text-sm font-light flex flex-col gap-1 tracking-wider">
            <h6 className="hover:text-black cursor-pointer">Privacy</h6>
            <h6 className="hover:text-black cursor-pointer">Security</h6>
            <h6 className="hover:text-black cursor-pointer">Terms</h6>
            <h6 className="hover:text-black cursor-pointer">Sitemap</h6>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-mono tracking-widest">SOCIAL LINKS</h4>
          <div className="flex gap-2">
            <a
              href={
                "https://www.linkedin.com/company/zomato/?originalSubdomain=in"
              }
              target={"_blank"}
              rel="noreferrer"
              className="rounded-full bg-black text-white p-1"
            >
              <FaLinkedinIn size={13} />
            </a>
            <a
              href={"https://www.instagram.com/zomato/"}
              target={"_blank"}
              rel="noreferrer"
              className="rounded-full bg-black text-white p-1"
            >
              <BsInstagram size={13} />{" "}
            </a>
            <a
              href={"https://twitter.com/zomato"}
              target={"_blank"}
              rel="noreferrer"
              className="rounded-full bg-black text-white p-1"
            >
              <BsTwitter size={13} />{" "}
            </a>
            <a
              href={"https://www.youtube.com/zomato"}
              target={"_blank"}
              rel="noreferrer"
              className="rounded-full bg-black text-white p-1"
            >
              <BsYoutube size={13} />{" "}
            </a>
            <a
              href={"https://www.facebook.com/zomato"}
              target={"_blank"}
              rel="noreferrer"
              className="rounded-full bg-black text-white p-1"
            >
              <FaFacebookF size={13} />{" "}
            </a>
          </div>
          <div className="hidden my-6 md:flex flex-col gap-2">
            <a
              href="https://apps.apple.com/in/app/zomato-food-restaurant-finder/id434613896?_branch_match_id=1131554419140477298&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3Kz00sydfNzC8GAFKYbuoiAAAA"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="w-3/5">
                <img
                  src="\images\appleStore.png"
                  alt="app store"
                  className="w-full h-full"
                />
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.application.zomato&_branch_match_id=1131554419140477298&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3STcxLKcrPTAEABp6kzyEAAAA%3D"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="w-3/5">
                <img
                  src="\images\playStore.png"
                  alt="play store"
                  className="w-full h-full"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-300 text-gray-500 text-sm pt-4">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2008-2022 © Zomato™ Ltd. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
