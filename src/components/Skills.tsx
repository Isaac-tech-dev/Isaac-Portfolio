import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import TypeScript from "../assets/typeScript.png";
import ReactJs from "../assets/react.png";
import Angular from "../assets/angular.png";
import Tailwind from "../assets/tailwindcss.png";

const Skills = () => {
  return (
    <div name="skills" className={`bg-[#0a192f] h-screen w-full text-gray-300`}>
      {/* Container */}
      <div
        className={`max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full`}
      >
        <div>
          <p className={`text-4xl font-bold inline border-b-4 border-pink-600`}>
            Skills
          </p>
          <p className={`py-4`}>
            // These are the technologies i have worked with
          </p>
        </div>
        <div
          className={`w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8`}
        >
          {/* Html */}
          <div
            className={`shadow-sm shadow-[#040c16] hover:scale-110 duration-500`}
          >
            <img className={`w-20 mx-auto`} src={Html} alt="Html Icon" />
            <p className={`my-4`}>HTML</p>
          </div>
          {/* Css */}
          <div
            className={`shadow-sm shadow-[#040c16] hover:scale-110 duration-500`}
          >
            <img className={`w-20 mx-auto`} src={Css} alt="Html Icon" />
            <p className={`my-4`}>CSS</p>
          </div>
          {/* TypeScript */}
          <div
            className={`shadow-sm shadow-[#040c16] hover:scale-110 duration-500`}
          >
            <img className={`w-20 mx-auto`} src={TypeScript} alt="Html Icon" />
            <p className={`my-4`}>TYPESCRIPT</p>
          </div>
          {/* React JS */}
          <div
            className={`shadow-sm shadow-[#040c16] hover:scale-110 duration-500`}
          >
            <img className={`w-20 mx-auto`} src={ReactJs} alt="Html Icon" />
            <p className={`my-4`}>REACT JS</p>
          </div>
          {/* Angular */}
          <div
            className={`shadow-sm shadow-[#040c16] hover:scale-110 duration-500`}
          >
            <img className={`w-20 mx-auto`} src={Angular} alt="Html Icon" />
            <p className={`my-4`}>ANGULAR</p>
          </div>
          {/* Tailwind Css */}
          <div
            className={`shadow-sm shadow-[#040c16] hover:scale-110 duration-500`}
          >
            <img className={`w-20 mx-auto`} src={Tailwind} alt="Html Icon" />
            <p className={`my-4`}>TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
