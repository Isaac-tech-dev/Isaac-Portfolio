import React from "react";
import Project1 from "../assets/pro1.png";
import Project2 from "../assets/pro2.png";
import Project3 from "../assets/pro3.png";
import Project4 from "../assets/pro4.png";
import Project5 from "../assets/pro5.png";

import Mobile1 from "../assets/MHF.png";
import Mobile2 from "../assets/PU.png";
import Mobile3 from "../assets/FD.png";
import Mobile4 from "../assets/IUFMP.png";

const Work = () => {
  return (
    <div
      name="work"
      className={`bg-[#0a192f] w-full md:h-screen text-gray-300`}
    >
      {/* Container */}
      <div
        className={`max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full`}
      >
        <div className={`pb-8`}>
          <p className={`text-4xl font-bold inline border-b-4 border-pink-600`}>
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Project Container*/}
        <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-4`}>
          {/* Card Item Div */}
          {/* Project 1 */}
          <div
            style={{ backgroundImage: `url(${Project1})` }}
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span
                className={`text-2xl text-center font-bold text-white tracking-wider`}
              >
                Movie site built with React Js
              </span>
              <div className={`pt-8 text-center`}>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${Project2})` }}
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-2xl font-bold text-white tracking-wider`}>
                Ecormerce site built with Html, css and Vanilla Js
              </span>
              <div className={`pt-8 text-center`}>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div
            style={{ backgroundImage: `url(${Project4})` }}
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-2xl font-bold text-white tracking-wider`}>
                Resturant Landing Page built with Html, Css
              </span>
              <div className={`pt-8 text-center`}>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div
            style={{ backgroundImage: `url(${Project5})` }}
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-2xl font-bold text-white tracking-wider`}>
                Travel site built with React Js and Tailwind Css
              </span>
              <div className={`pt-8 text-center`}>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div
            style={{ backgroundImage: `url(${Mobile1})` }}
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-2xl font-bold text-white tracking-wider`}>
                Mediacl Health App built with React Native
              </span>
              <div className={`pt-8 text-center`}>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div
            style={{ backgroundImage: `url(${Mobile3})` }}
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div`}
          >
            {/* Hover Effect Div */}
            <div className={`opacity-0 group-hover:opacity-100`}>
              <span className={`text-2xl font-bold text-white tracking-wider`}>
                React Native Application
              </span>
              <div className={`pt-8 text-center`}>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`}
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
