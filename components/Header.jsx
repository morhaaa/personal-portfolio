import React, { useState } from "react";
import Image from "next/image";
import Me from "../public/ME.svg";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isHover, setIsHover] = useState(true);
  const onMouseEnter = () => setIsHover(false);
  const onMouseLeave = () => setIsHover(true);

  const NavMenu = [
    { value: "Projects", id: "projects" },
    { value: "About Me", id: "about" },
    { value: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 4,
        delay: 1.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-row justify-between w-screen py-4 px-4 md:px-16"
    >
      <div
        onClick={() => {
          const mainRoot = document.getElementById("home");
          mainRoot.scrollIntoView({ behavior: "smooth" });
        }}
        className=" hidden md:flex rounded-full bg-gray-300 drop-shadow-xl bg-opacity-70 backdrop-blur-xl h-12 w-12 cursor-pointer hover:scale-110 transition duration-300 ease-out "
      >
        <Image src={Me} fill alt="me" className="object-contain" />
      </div>

      {/*HAMBURGER MENU*/}
      <div className="md:hidden flex flex-col bg-gray-300 drop-shadow-xl rounded-xl py-2 px-2">
        <Hamburger toggled={isOpen} toggle={setOpen} />

        {isOpen ? (
          <div className="flex flex-col gap-2 px-4 py-2 ">
            <p
              onClick={() => {
                const mainRoot = document.getElementById("home");
                mainRoot.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg font-extrabold"
            >
              Home
            </p>
            {NavMenu.map((item, id) => (
              <div key={id}>
                <p
                  onClick={() => {
                    const mainRoot = document.getElementById(item.id);
                    mainRoot.scrollIntoView({ behavior: "smooth" });
                    setOpen(false);
                  }}
                  className="text-lg font-extrabold"
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      {/*NORMAL MENU*/}
      <div className="hidden md:flex gap-6 items-center bg-gray-300 drop-shadow-xl bg-opacity-70 backdrop-blur-xl rounded-3xl py-1 px-4">
        {NavMenu.map((item, id) => (
          <div key={id} className="text-lg font-extrabold  ">
            <p
              onClick={() => {
                const mainRoot = document.getElementById(item.id);
                mainRoot.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={
                isHover
                  ? "text-black transform transition duration-100 ease-out"
                  : "text-gray-400 cursor-pointer  hover:text-black transform transition duration-300 ease-out"
              }
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Header;
