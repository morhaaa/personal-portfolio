import React from "react";
import Image from "next/image";
import Me from "../public/ME.svg";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="h-screen w-screen flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Image
        src={Me}
        alt="me"
        className=" mb-3 h-[280px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
      />
    </motion.div>
  );
};

export default Loader;
