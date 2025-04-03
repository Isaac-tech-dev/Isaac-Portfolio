//import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="hero" className={`bg-[#0a192f] w-full h-screen`}>
      {/* Container */}
      <div
        className={`max-w-[1000px] mx-auto p-8 flex flex-col justify-center h-full`}
      >
        <p className={`text-pink-600`}>Hi, my name is</p>
        <h1 className={`text-4xl sm:text-7xl font-bold text-[#ccd6f6]`}>
          Isaac Ayeni
        </h1>
        <h2 className={`text-4xl sm:text-7xl font-bold text-[#8892b0]`}>
          I'm a Software Engineer
        </h2>
        <p className={`text-[#8892b0] py-4 max-w-[700px]`}>
          🚀 Software Engineer | Web & Mobile Development Expert | Open to New
          Opportunities As a seasoned software engineer, I blend professional
          prowess with a penchant for cutting-edge technology. My domain of
          expertise? Crafting responsive and real-time websites and mobile apps
          that stand out. My toolkit includes HTML, CSS, JavaScript, TypeScript,
          Tailwind css, React Js, React Native, Angular Js and Next Js, ensuring
          efficient, high-performance code. I'm always hungry for new
          technologies and fresh opportunities that can fuel my career growth.
          🌐 Let's connect and explore innovative projects or discuss exciting
          career prospects!
        </p>

        {/* Button */}
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button
              className={`text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600`}
            >
              View Work
              <span className={`group-hover:rotate-90 duration-300`}>
                <HiArrowNarrowRight className={`ml-3`} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
