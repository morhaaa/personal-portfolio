import Image from "next/image";
import Me from "../public/ME.png";
import Figma from "../public/Logos/figma.svg";
import Github from "../public/Logos/github.svg";
import Rea from "../public/Logos/react.svg";
import Nextjs from "../public/Logos/nextjs.svg";
import Tailwind from "../public/Logos/tailwindcss.svg";
import Js from "../public/Logos/js.svg";
import Html from "../public/Logos/html5.svg";
import Css from "../public/Logos/css.svg";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref: ref1, inView: view1 } = useInView({ threshold: 0.39 });
  const { ref: ref2, inView: view2 } = useInView({ threshold: 0.3 });
  const { ref: ref3, inView: view3 } = useInView({ threshold: 0.04 });

  return (
    <div
      ref={ref1}
      className="h-[110vh] w-screen bg-gray-300 py-10 px-2 md:px-16 lg:px-20 "
    >
      <div className="w-full h-full  ">
        <div className="flex flex-col h-full md:flex-row ">
          <div ref={ref3} className=" basis-1/2 px-10  my-auto">
            <h2
              className={
                view3
                  ? "font-extendedB text-xl md:text-2xl lg:text-3xl text-orange-600 py-2 transition ease-in duration-300"
                  : "blur-sm transition ease-in duration-300 font-extendedB text-xl md:text-2xl lg:text-3xl text-orange-600 y-2"
              }
            >
              ABOUT ME
            </h2>
            <div
              className={
                view3
                  ? " transition ease-in duration-300"
                  : "blur-sm transition ease-in duration-300"
              }
            >
              <h1 className="font-extended text-3xl pt-3 lg:pt-6 lg:text-6xl text-gray-700">
                Hi Again!
              </h1>
              <p className="text-sm md:text-md lg:text-lg py-3 font-semibold text-gray-700">
                I am a self-taught front-end developer with a strong motivation
                to learn and grow in in my field. After acquiring the necessary
                programming knowledge through self-study and personal projects,
                I am ready to start as a front-end developer. With a solid basis
                of web technologies, including HTML, CSS, and JavaScript, I am
                equipped to provide companies and projects with intuitive and
                high-quality user experiences. I am ready to start my first job
                and continue growing as a developer.
                <br />
                {""}
                <br /> Other than coding, I spend my free time doing Crossfit,
                cooking new dishes and eating Pizza. <br />
                {""}
                <br /> If you want to chat, feel free to{" "}
                <span
                  onClick={() => {
                    const mainRoot = document.getElementById("contact");
                    mainRoot.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="underline underline-offset-2 decoration-2 cursor-pointer decoration-slate-400"
                >
                  reach out
                </span>
                .
              </p>
            </div>
            <div className="my-10">
              <h3 className="md:text-2xl font-bold">
                Here are few some technologies I've been working with recently:
              </h3>
              <div
                className={
                  view1
                    ? "flex flex-row flex-wrap md:justify-between gap-4 my-6 transition ease-in-out duration-1000"
                    : "flex flex-row flex-wrap md:justify-between gap-4 my-6 opacity-0 transition ease-in-out duration-1000"
                }
              >
                <Image
                  src={Html}
                  alt="html"
                  className="hover:scale-110 transition duration-300 ease-in-out h-[35px] w-[35px] lg:h-[55px] lg:w-[55px] "
                />
                <Image
                  src={Css}
                  alt="css"
                  className="hover:scale-110 transition duration-300 ease-in-out h-[35px] w-[35px] lg:h-[55px] lg:w-[55px]"
                />
                <Image
                  src={Js}
                  alt="js"
                  className="hover:scale-110 transition duration-300 ease-in-out h-[35px] w-[35px] lg:h-[55px] lg:w-[55px]"
                />
                <Image
                  src={Rea}
                  alt="react"
                  className="hover:scale-110 transition duration-300 ease-in-out h-[35px] w-[35px] lg:h-[55px] lg:w-[55px]"
                />
                <Image
                  src={Nextjs}
                  alt="nextjs"
                  className="hover:scale-110 transition duration-300 ease-in-out h-[35px] w-[35px] lg:h-[55px] lg:w-[55px]"
                />
                <Image
                  src={Tailwind}
                  alt="tailwind"
                  className="hover:scale-110 transition duration-300 ease-in-out h-[35px] w-[35px] lg:h-[55px] lg:w-[55px]"
                />
                <Image
                  src={Figma}
                  alt="figma"
                  className="hover:scale-110 transition duration-300 ease-in-out h-[35px] w-[35px] lg:h-[55px] lg:w-[55px]"
                />
                <Image
                  src={Github}
                  alt="github"
                  className="hover:scale-110 transition duration-300 ease-in-out h-[35px]  w-[35px] lg:h-[55px] lg:w-[55px]"
                />
              </div>
            </div>
          </div>

          <div ref={ref2} className="basis-1/2 relative hidden md:inline-block">
            <Image
              src={Me}
              alt="me"
              fill
              className={
                view2
                  ? "object-contain transition ease-in-out duration-1000 "
                  : "opacity-0 object-contain transition ease-in-out duration-1000"
              }
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutMe;
