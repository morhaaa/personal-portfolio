import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 px-4">
      <div className="h-full flex flex-col  gap-4 items-center justify-center">
        {" "}
        <h2 className="font-extendedB text-center text-3xl md:text-5xl lg:text-6xl text-orange-600">
          Let's Connect!
        </h2>
        <p className="text-center font-semibold text-lg md:text-2xl">
          You can find me easily on social media or just send me a mail!
        </p>
        <div className="flex w-full justify-center py-8 gap-16">
          <BsLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/mohamed-rhanmi-93996425b/",
                "_blank"
              )
            }
            size={50}
            className="hover:scale-125 hover:-rotate-6 transition ease-in-out duration-150 cursor-pointer active:scale-100"
          />
          <BsTwitter
            onClick={() =>
              window.open("https://twitter.com/MohamedRhanmi", "_blank")
            }
            size={50}
            className="hover:scale-125 transition ease-in-out duration-150 cursor-pointer active:scale-100"
          />
          <BsGithub
            onClick={() => window.open("https://github.com/morhaaa", "_blank")}
            size={50}
            className="hover:scale-125 hover:rotate-6 transition ease-in-out duration-150 cursor-pointer active:scale-100"
          />
        </div>
        <div>
          <a
            href="mailto:mohamed.rhanmi@gmail.com"
            className="text-2xl font-bold bg-gray-900 py-3 rounded-2xl px-8 text-gray-300 flex flex-row gap-3 hover:scale-110 transition ease-in-out duration-150 cursor-pointer active:scale-100"
          >
            <BsMailbox size={30} /> Mail
          </a>
        </div>
      </div>
      <footer className="text-center pb-4 italic font-bold text-sm lg:text-md text-gray-900">
        Designed & Built by Mohamed Rhanmi © 2023{" "}
      </footer>
    </div>
  );
};

export default Contact;
