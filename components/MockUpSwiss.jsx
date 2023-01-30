import Image from "next/image";
import MockupSwiss from "../public/SwissHouse.png";
import { BsGithub } from "react-icons/bs";
import React, { useState } from "react";

const MockUpSwiss = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="h-full w-full bg-gray-400 rounded-2xl hover:scale-105 transform transition duration-150 ease-in-out "
    >
      <Image
        src={MockupSwiss}
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
          <div className="text-4xl  font-bold text-black cursor-pointer">
            My
            <i className="text-red-700 font-extrabold">Swiss</i>House
          </div>
          <p className="text-gray-800 py-2 lg:py-6 font-semibold">
            A Real Estate web site built with NextJs that allows users to
            search, filter and select e any type of House in Switzerland. With
            MapBox you can see every house where is located.
          </p>
          <div className="text-gray-800 py-2 lg:py-5">
            <div className="flex w-full justify-evenly italic text-xs text-slate-800">
              <p>NextJs</p>
              <p>MapBox</p>
              <p>Tailwind</p>
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
              window.open("https://github.com/morhaaa/MySwissHouse", "_blank")
            }
          />
        </button>
        <button
          onClick={() =>
            window.open("https://my-swiss-house.vercel.app/", "_blank")
          }
          className="bg-gray-200 border-2 border-gray-600  drop-shadow-xl bg-opacity-8  0 backdrop-blur-xl font-semibold text-xl px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transform transition duration-150 ease-in-out"
        >
          View Live
        </button>
      </div>
    </div>
  );
};

export default MockUpSwiss;
