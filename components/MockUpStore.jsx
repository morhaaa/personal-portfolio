import Image from "next/image";

import { BsGithub } from "react-icons/bs";
import React, { useState } from "react";
import MockStore from "../public/Store.png";

const MockUpStore = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className=" h-full w-full rounded-2xl hover:scale-105 transform transition duration-150 ease-in-out "
    >
      <Image
        src={MockStore}
        fill
        className="object-cover rounded-2xl z-0"
        alt="MockUp"
      />

      <div className="hidden md:inline">
        <div
          className={
            isHover
              ? "opacity-1 absolute z-10 bg-gray-400 bg-opacity-50 backdrop-blur-2xl w-full px-4 pt-4 rounded-2xl transform transition duration-300 ease-in-out"
              : "opacity-0 absolute z-10 bg-gray-400 bg-opacity-50 backdrop-blur-2xl w-full px-4 pt-4 rounded-2xl transform transition duration-300 ease-in-out"
          }
        >
          <p className="text-3xl font-bold text-center">STORE</p>
          <p className="text-gray-800 py-2 lg:py-5 font-semibold">
            An E-commerce web site made by NextJs that allows you to choose any
            type of clothes you want. The data of this web site comes from an
            external Strapi database.
          </p>
          <div className="text-gray-800 py-2 lg:py-5">
            <div className="flex w-full justify-evenly italic text-xs text-slate-800">
              <p>NextJs</p>
              <p>Strapi</p>
              <p>Tailwind</p>
              <p>Redux</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          isHover
            ? "opacity-1 absolute text-gray-600  z-10 bottom-8 w-full flex justify-evenly transform transition duration-750 ease-in-out"
            : "opacity-0 absolute text-gray-600  z-10 bottom-8 w-full flex justify-evenly transform transition duration-750 ease-in-out"
        }
      >
        <button className="bg-gray-200 border-2 border-gray-600 drop-shadow-xl bg-opacity-80 backdrop-blur-xl px-2 py-2 rounded-full hover:scale-105 active:scale-95 transform transition duration-150 ease-in-out">
          {" "}
          <BsGithub
            size={40}
            onClick={() =>
              window.open(
                "https://github.com/morhaaa/NextJs_Strapi_Ecommerce",

                "_blank"
              )
            }
          />
        </button>
        <button
          onClick={() =>
            window.open(
              "https://next-js-strapi-ecommerce-a.vercel.app/",
              "_blank"
            )
          }
          className="bg-gray-200 border-2 border-gray-600  drop-shadow-xl bg-opacity-8  0 backdrop-blur-xl font-semibold text-xl px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transform transition duration-150 ease-in-out"
        >
          View Live
        </button>
      </div>
    </div>
  );
};

export default MockUpStore;
