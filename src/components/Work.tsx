//import React from "react";

import Project2 from "../assets/pro2.png";
import Project4 from "../assets/pro4.png";
import Project5 from "../assets/pro5.png";
import Travel from "../assets/travelapp.png";
import Ecormmece from "../assets/pro6.png";

import Lite from "../assets/lite.png";
import Avanzar from "../assets/avanzar.png";

import Mobile3 from "../assets/travelappp.png";
import Mobile4 from "../assets/fitnessapp.png";
import Mobile5 from "../assets/weatherapp.png";

const Work = () => {
  return (
    <div id="work" className={`bg-[#0a192f] w-full md:h-screen text-gray-300`}>
      {/* Container */}
      <div
        className={`max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full`}
      >
        <div className={`pb-8`}>
          <p className={`text-4xl font-bold inline border-b-4 border-pink-600`}>
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Project Container*/}
        <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-4`}>
          {/* Card Item Div */}
          {/* Optimus 1 */}
          <div
            style={{ backgroundImage: `url(${Lite})` }}
            className={`shadow-sm shadow-[#616d91] group container rounded-md flex justify-center items-center mx-auto content-div px-4 text-center`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-[16px] font-bold text-white tracking-wider`}>
                Account Opening Portal built with React JS, TypeScript, TailwindCSS and Redux Toolkit.
              </span>
              <div className={`pt-8 text-center`}>
                <a
                  href="https://lite.optimusbank.com:334/auth"
                  target="_blank"
                >
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Optimus 2 */}
          <div
            style={{ backgroundImage: `url(${Avanzar})` }}
            className={`shadow-sm shadow-[#616d91] group container rounded-md flex justify-center items-center mx-auto content-div px-4 text-center`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-[16px] font-bold text-white tracking-wider`}>
              Account Opening Portal for Agent built with React JS, TypeScript, TailwindCSS and Redux Toolkit.
              </span>
              <div className={`pt-8 text-center`}>
                <a
                  href="https://avanzar.optimusbank.com:5174/"
                  target="_blank"
                >
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Web Project 1 */}
          <div
            style={{ backgroundImage: `url(${Ecormmece})` }}
            className={`shadow-sm shadow-[#616d91] group container rounded-md flex justify-center items-center mx-auto content-div px-4 text-center`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-[16px] font-bold text-white tracking-wider`}>
                Ecormerce site built with React, React Router Dom, Swipper Js, Tailwind CSS
              </span>
              <div className={`pt-8 text-center`}>
                <a
                  href="https://coral-ecormmerce.vercel.app/"
                  target="_blank"
                >
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Web Project 2 */}
          <div
            style={{ backgroundImage: `url(${Project2})` }}
            className={`shadow-sm shadow-[#616d91] group container rounded-md flex justify-center items-center mx-auto content-div px-4 text-center`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-[16px] font-bold text-white tracking-wider`}>
                Ecormerce site built with Html, css and Vanilla Js
              </span>
              <div className={`pt-8 text-center`}>
                <a
                  href="https://ecommerce-dev-test.netlify.app/"
                  target="_blank"
                >
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Web Project 3 */}
          <div
            style={{ backgroundImage: `url(${Project4})` }}
            className={`shadow-sm shadow-[#616d91] group container rounded-md flex justify-center items-center mx-auto content-div px-4 text-center`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-[16px] font-bold text-white tracking-wider`}>
                Resturant Landing Page built with Html, Css
              </span>
              <div className={`pt-8 text-center`}>
                <a
                  href="https://omnifood-landing-dev.netlify.app/"
                  target="_blank"
                >
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Web Project 4 */}
          <div
            style={{ backgroundImage: `url(${Project5})` }}
            className={`shadow-sm shadow-[#616d91] group container rounded-md flex justify-center items-center mx-auto content-div px-4 text-center`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-[16px] font-bold text-white tracking-wider`}>
                Travel site built with React Js
              </span>
              <div className={`pt-8 text-center`}>
                <a href="https://tour-website-dev.netlify.app/" target="_blank">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Web Project 5 */}
          <div
            style={{ backgroundImage: `url(${Travel})` }}
            className={`shadow-sm shadow-[#616d91] group container rounded-md flex justify-center items-center mx-auto content-div px-4 text-center`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-[16px] font-bold text-white tracking-wider`}>
                Travel site built with Next Js and Tailwind Css
              </span>
              <div className={`pt-8 text-center`}>
                <a
                  href="https://travel-app-next-js-beta.vercel.app/"
                  target="_blank"
                >
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Project 1 */}

          {/* Mobile Project 2 */}

          {/* Mobile Project 3 */}
          <div
            style={{ backgroundImage: `url(${Mobile3})` }}
            className={`shadow-sm shadow-[#616d91] group container rounded-md flex justify-center items-center mx-auto content-div px-4 text-center`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-[16px] font-bold text-white tracking-wider`}>
                Travel App built with React Native
              </span>
              <div className={`pt-8 text-center`}>
                <a
                  href="https://drive.google.com/file/d/17dcW8hD9gBVKDh_SVRIC1Isufr8R3U0l/view?usp=drive_link"
                  target="_blank"
                >
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Mobile Project 4 */}
          <div
            style={{ backgroundImage: `url(${Mobile4})` }}
            className={`shadow-sm shadow-[#616d91] group container rounded-md flex justify-center items-center mx-auto content-div px-4 text-center`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-[16px] font-bold text-white tracking-wider`}>
                Fitness App built with React Native
              </span>
              <div className={`pt-8 text-center`}>
                <a
                  href="https://drive.google.com/file/d/1aTEVezHw3WjKXashuFa8PcVstFJdUcaY/view?usp=drive_link"
                  target="_blank"
                >
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Mobile Project 5 */}
          <div
            style={{ backgroundImage: `url(${Mobile5})` }}
            className={`shadow-sm shadow-[#616d91] group container rounded-md flex justify-center items-center mx-auto content-div px-4 text-center`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-[16px] font-bold text-white tracking-wider`}>
                Weather App built with React Native
              </span>
              <div className={`pt-8 text-center`}>
                <a
                  href="https://drive.google.com/file/d/1lkw2_fLTFaj8Mj-F4KdaNplWPW21aL-Q/view?usp=drive_link"
                  target="_blank"
                >
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-pointer`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
