import MockUpCarty from "./MockUpCarty";
import MockUpSwiss from "./MockUpSwiss";
import { useInView } from "react-intersection-observer";
import MockUpStore from "./MockUpStore";
import MockUpCrypto from "./MockUpCrypto";

const Project = () => {
  const { ref: ref1, inView: view1 } = useInView({ threshold: 0.25 });
  const { ref: ref2, inView: view2 } = useInView({ threshold: 0.16 });

  return (
    <div
      ref={ref1}
      className="h-full  bg-gradient-to-b from-white via-gray-100 to-gray-300  rounded-t-3xl w-screen text-center py-4 md:py-6 lg:py-10 px-6 lg:px-28"
    >
      <div className="py-3 lg:py-4">
        <h2 className=" py-2 font-extendedB text-transparent bg-clip-text bg-gradient-to-r from-[#361f56] to-[#8e5cd3]  text-3xl md:text-5xl lg:text-7xl">
          Projects
        </h2>
        <h3 className="text-md md:text-lg lg:text-xl font-medium ">
          Here some things I’ve built
        </h3>
      </div>

      <div className="w-full relative flex flex-col md:flex-row gap-8 h-[400px] md:h-[300px] lg:h-[380px] my-5">
        {/*Project n1*/}
        <div
          className={
            view1
              ? "basis-2/5 h-auto  transition ease-in duration-150"
              : "basis-2/5 h-auto translate-y-10 -translate-x-10 opacity-0 transition ease-in duration-150"
          }
        >
          <MockUpCrypto />
        </div>
        {/*Project n2*/}
        <div
          className={
            view1
              ? "basis-3/5 h-auto transition ease-in duration-150 delay-300"
              : " basis-3/5 h-auto translate-y-10 translate-x-10 opacity-0 transition ease-in duration-150  "
          }
        >
          <MockUpSwiss />
        </div>
      </div>

      <div
        ref={ref2}
        className="w-full relative flex flex-col md:flex-row gap-8 h-[400px] md:h-[300px] lg:h-[380px]"
      >
        {/*Project n3*/}
        <div
          className={
            view2
              ? "basis-3/5 h-auto transition ease-in duration-150 delay-300"
              : " basis-3/5 h-auto translate-y-10 -translate-x-10 opacity-0 transition ease-in duration-300 delay-1000"
          }
        >
          <MockUpStore />
        </div>
        {/*Project n4*/}
        <div
          className={
            view2
              ? "basis-2/5 h-auto transition ease-in duration-150"
              : "basis-2/5 h-auto  translate-y-10 translate-x-10 opacity-0 transition ease-in duration-300 delay-1000"
          }
        >
          <MockUpCarty />
        </div>
      </div>
    </div>
  );
};

export default Project;
