import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Intro from "../components/Intro";
import { Parallax } from "react-scroll-parallax";
import Project from "../components/Project";
import { useInView } from "react-intersection-observer";
import Contact from "../components/Contact";
import Loader from "../components/Loader";

export default function Home() {
  const { ref, inView } = useInView({ threshold: 0.85 });
  return (
    <>
      <main className="relative  bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="fixed z-50">
          <Header />
        </div>
        <section
          id="home"
          ref={ref}
          className={
            inView
              ? " flex flex-col transition ease-in duration-500 z-50"
              : "blur-sm transition ease-in duration-1000 z-50"
          }
        >
          <Parallax>
            <Intro />
          </Parallax>
        </section>

        <Parallax>
          <section id="projects">
            <Project />
          </section>

          <section id="about">
            <AboutMe />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </Parallax>
      </main>
    </>
  );
}
