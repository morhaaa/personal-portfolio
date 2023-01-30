import React, { useEffect, useState } from "react";
import Image from "next/image";
import Line from "../public/Line.svg";
import Me from "../public/ME.svg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Lottie from "lottie-react";
import Arrow from "../public/arrow.json";
import { motion } from "framer-motion";

const Intro = () => {
  const boxes = [
    {
      data: 290,
      speed: 0.21,
      x: 290,
      y: -70,
      className:
        "h-8 w-8 rounded-md  bg-violet-400 rotate-12 ease-in-out duration-75 drop-shadow-2xl",
    },
    {
      data: -270,
      speed: 1.34,
      x: -270,
      y: -70,
      className:
        "h-6 w-6 rounded-lg bg-gray-400  rotate-45  ease-in-out duration-75 drop-shadow-2xl",
    },
    {
      scale: 0,
      data: 200,
      speed: 0.8,
      x: 200,
      y: -70,
      className:
        "h-9 w-9 rounded-lg bg-gray-400  -rotate-12  ease-in-out duration-75 drop-shadow-2xl",
    },
    {
      scale: 0,
      data: -190,
      speed: 0.6,
      x: -190,
      y: -70,
      className:
        "h-8 w-8 rounded-lg  bg-violet-500 -rotate-12  ease-in-out duration-75 drop-shadow-2xl",
    },
    {
      scale: 0,
      data: 275,
      speed: 0.6,
      x: 275,
      y: -70,
      className:
        "h-7 w-7 rounded-lg   bg-violet-500   rotate-12  ease-in-out duration-75 drop-shadow-2xl",
    },
    {
      scale: 0,
      data: -305,
      speed: 0.9,
      x: -305,
      y: -70,
      className:
        "h-9 w-9 rounded-lg bg-gray-400 rotate-12  ease-in-out duration-75 drop-shadow-2xl",
    },
    {
      scale: 0,
      data: 220,
      speed: 1.5,
      x: 220,
      y: -70,
      className:
        "h-8 w-8 rounded-lg bg-gray-400  rotate-45 ease-in-out duration-75 drop-shadow-2xl",
    },
    {
      scale: 0,
      data: -190,
      speed: 0.3,
      x: -190,
      y: -70,
      className:
        "h-7 w-7 rounded-lg  bg-violet-500 -rotate-12  ease-in-out duration-75 drop-shadow-2xl",
    },
  ];

  const [isShow, setIsShow] = useState(false);
  const [translateX, setTranslateX] = useState(boxes);
  const [onMove, setOnMove] = useState({
    axisX: 0,
    axisY: -10,
  });

  const [imageAxis, setImageAxis] = useState({
    axisX: 0,
    axisY: -10,
  });

  const moveBoxes = (e) => {
    setOnMove({ axisX: e.pageX, axisY: e.pageY });
    const start = window.innerWidth / 2;

    setImageAxis(() => {
      if (start > onMove.axisX) {
        const axisX = -(start - onMove.axisX) / 130;
        const axisY = -(start - onMove.axisY) / 130;
        return { axisX: `${axisX}`, axisY: `${axisY}` };
      }
      if (start <= onMove.axisX) {
        const axisX = (onMove.axisX - start) / 130;
        const axisY = (onMove.axisY - start) / 130;
        return { axisX: `${axisX}`, axisY: `${axisY}` };
      }
    });

    setTranslateX(
      translateX.map((element, id) => {
        if (start > onMove.axisX) {
          const axisX =
            -(start - onMove.axisX * element.speed) / 45 + element.data;
          const axisY = -(start - onMove.axisY * element.speed) / 15;
          return { ...element, x: `${axisX}`, y: `${axisY - 30}` };
        }
        if (start <= onMove.axisX) {
          const axisX =
            (start + onMove.axisX * element.speed) / 45 + element.data;
          const axisY = -(start - onMove.axisY * element.speed) / 15;
          return { ...element, x: `${axisX}`, y: `${axisY - 30}` };
        }
      })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 3000);
  }, []);

  return (
    <div onMouseMove={moveBoxes} className="relative h-screen my-auto py-8   ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 4,
          delay: 1.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="absolute hidden md:flex flex-col gap-2 items-center justify-center w-full h-full"
      >
        {translateX.map((box, index) => (
          <div
            key={index}
            style={{
              transform: `translateX(${box.x}px) translateY(${box.y}px)`,
            }}
            className={box.className}
          ></div>
        ))}
      </motion.div>

      <div className="absolute w-full flex  h-full flex-col items-center gap-8   justify-center">
        <div className="text-center ">
          {" "}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 4,
              delay: 1.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="font-black text-sm md:text-md text-gray-600 font-extendedB"
          >
            Hey there!, I'm
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="font-extendedB text-transparent bg-clip-text bg-gradient-to-r from-[#361f56] to-[#8e5cd3] text-4xl md:text-5xl "
          >
            {" "}
            MOHAMED
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {" "}
            <Image src={Line} alt="Line" className="md:w-[340px] w-[240px] " />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image
            src={Me}
            alt="me"
            style={{
              transform: ` translateX(${imageAxis.axisX}px) translateY(${imageAxis.axisY}px)`,
            }}
            className=" mb-3 h-[280px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 4,
            delay: 1.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-center flex flex-col"
        >
          <p className="font-extrabold text-lg md:text-2xl font-extendedB text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800 ">
            SELF—TAUGHT
            <br /> FRONTEND DEVELOPER
          </p>
          <div className="text-md md:text-lg  font-bold text-gray-700">
            <p> Currently Based in:</p>
            <div className="flex gap-1 items-center text-md md:text-xl justify-center font-extrabold">
              <HiOutlineLocationMarker />
              <a
                href="https://www.google.com/maps/place/22100+Como+CO/@45.800634,9.015388,12z/data=!3m1!4b1!4m5!3m4!1s0x47869c481027ed63:0xb99b96af785ff524!8m2!3d45.8080597!4d9.0851765"
                target="_blank"
              >
                Como,Italy
              </a>
            </div>
            <div className="my-3">
              <Lottie
                animationData={Arrow}
                onClick={() => {
                  const mainRoot = document.getElementById("projects");
                  mainRoot.scrollIntoView({ behavior: "smooth" });
                }}
                loop={true}
                className={
                  isShow
                    ? "opacity-1 h-[45px] cursor-pointer transition ease-in-out duration-1000"
                    : "opacity-0 h-[45px]"
                }
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
