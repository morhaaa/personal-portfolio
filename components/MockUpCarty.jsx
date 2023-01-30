import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import React, { useState } from "react";
import MockCarty from "../public/Carty.png";

const MockUpCarty = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className=" h-full w-full rounded-2xl hover:scale-105 transform transition duration-150 ease-in-out "
    >
      <Image
        src={MockCarty}
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
          <div className="cursor-pointer text-4xl text-transparent bg-clip-text font-extrabold bg-gradient-to-tr from-gray-500 via-slate-200 to-gray-700">
            Carty.
          </div>
          <p className="text-gray-800 py-2 lg:py-6 font-semibold">
            A template of a multipage bank website made with NextJs and Tailwind
          </p>
          <div className="text-gray-800 py-2 lg:py-5">
            <div className="flex w-full justify-evenly italic text-xs text-slate-800">
              <p>NextJs</p>
              <p>Figma</p>
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
            onClick={() =>
              window.open("https://github.com/morhaaa/carty", "_blank")
            }
            size={40}
          />
        </button>
        <button
          onClick={() => window.open("https://carty-eta.vercel.app/", "_blank")}
          className="bg-gray-200 border-2 border-gray-600  drop-shadow-xl bg-opacity-8  0 backdrop-blur-xl font-semibold text-xl px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transform transition duration-150 ease-in-out"
        >
          View Live
        </button>
      </div>
    </div>
  );
};

export default MockUpCarty;
