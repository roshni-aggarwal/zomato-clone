import React from "react";
import { Disclosure } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

const ExploreSection = () => {
  return (
    <div className="mx-auto container py-10 px-4 md:px-16 lg:px-48 bg-[#f5f5f572]">
      <h1 className="text-xl md:text-4xl">Explore options near me</h1>
      <div className="my-8 flex flex-col gap-4 w-full">
        <div className="p-4 bg-white border border-gray-200 rounded-lg cursor-pointer">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full">
                  <h5 className="text-lg text-gray-800 font-normal">
                    Popular cuisines near me
                  </h5>
                  <BiChevronDown
                    className={`${
                      open
                        ? "rotate-180 transform transition-transform ease-in-out"
                        : ""
                    }`}
                    size={24}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-4 text-gray-500 font-light tracking-widest text-lg text-justify flex items-center gap-1 flex-wrap">
                  <button href="#" className="hover:text-black">
                    Bakery food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Bevearges food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Biryani food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Burger food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Chinese food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Continental food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Desserts food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Gujarati food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Ice Cream food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Italian food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Mughlai food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    North Indian food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Pizza food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Rolls food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Sandwich food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Shake food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Sichuan food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    South Indian food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Street food near me
                  </button>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-lg cursor-pointer">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full">
                  <h5 className="text-lg text-gray-800 font-normal">
                    Popular restaurant types near me
                  </h5>
                  <BiChevronDown
                    className={`${
                      open
                        ? "rotate-180 transform transition-transform ease-in-out"
                        : ""
                    }`}
                    size={24}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="mt-4 text-gray-500 font-light tracking-widest text-lg text-justify flex items-center gap-1 flex-wrap">
                  <button href="#" className="hover:text-black">
                    Bakeries near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Bar near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Beverage Shops near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Bhojanalya near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    cafes near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Casual Dining near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Desserts Parlors near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Dhabas near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Fine Dining food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Food Courts near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Food Trucks near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Kiosks near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Lounges food near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Paan Shop near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Quick Bites near me
                  </button>{" "}
                  •
                  <button href="#" className="hover:text-black">
                    Sweet Shops near me
                  </button>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-lg cursor-pointer">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full">
                  <h5 className="text-lg text-gray-800 font-normal">
                    Top Restaurant Chains
                  </h5>
                  <BiChevronDown
                    className={`${
                      open
                        ? "rotate-180 transform transition-transform ease-in-out"
                        : ""
                    }`}
                    size={24}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="my-4 text-gray-500 font-light text-lg text-justify flex items-center justify-between">
                  <button href="#" className="hover:text-black">
                    Burger King
                  </button>
                  <button href="#" className="hover:text-black">
                    KFC
                  </button>
                  <button href="#" className="hover:text-black">
                    McDonald's
                  </button>
                  <button href="#" className="hover:text-black">
                    Pizza Hut
                  </button>
                  <button href="#" className="hover:text-black">
                    Subway
                  </button>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-lg cursor-pointer">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full">
                  <h5 className="text-lg text-gray-800 font-normal">
                    Cities We Deliver To
                  </h5>
                  <BiChevronDown
                    className={`${
                      open
                        ? "rotate-180 transform transition-transform ease-in-out"
                        : ""
                    }`}
                    size={24}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-4 text-gray-500 font-light text-lg grid grid-cols-5 gap-4">
                  <button href="#" className="text-left hover:text-black">
                    Delhi NCR
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Kolkata
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Mumbai
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Bengaluru
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Pune
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Hyderabad
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Chennai
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Lucknow
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Kochi
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Jaipur
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Ahmedabad
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Chandigarh
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Goa
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Indore
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Nashik
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Ooty
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Shimla
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Ludhiana
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Guwahati
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Amritsar
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Kanpur
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Allahabad
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Aurangabad
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Bhopal
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Ranchi
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Visakhapatnam
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Bhubaneswar
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Coimbatore
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Mangalore
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Vadodara
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Nagpur
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Agra
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Dehradun
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Mysore
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Puducherry
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Surat
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Varanasi
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Patna
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Udaipur
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Khajuraho
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Neemrana
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Cuttak
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Trivandrum
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Haridwar
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Leh
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Pushkar
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Rajkot
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Madurai
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Kozhikode
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Alappuzha
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Thrissur
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Manipal
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Vijayawada
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Jodhpur
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Kota
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Ajmer
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Mussoorie
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Rishikesh
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Jalandhar
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Jammu
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Manali
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Dharamshala
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Raipur
                  </button>
                  <button href="#" className="text-left hover:text-black">
                    Gorakhpur
                  </button>
                  <button
                    href="#"
                    className="text-black text-left font-normal underline underline-offset-8"
                  >
                    See more
                  </button>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
