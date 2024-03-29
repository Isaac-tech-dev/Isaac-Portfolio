//import React from "react";

const About = () => {
  return (
    <div id="about" className={`w-full h-screen bg-[#0a192f] text-gray-300`}>
      <div
        className={`flex flex-col justify-center items-center w-full h-full`}
      >
        {/* Container Div */}
        <div className={`max-w-[1000px] w-full grid grid-cols-2 gap-8`}>
          <div className={`sm:text-right pb-8 pl-4`}>
            <p
              className={`text-4xl font-bold inline border-b-4 border-pink-600`}
            >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className={`max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4`}>
          <div className={`sm:text-right text-4xl font-bold`}>
            <p>Hi. I'm Isaac, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              Proficient in HTML, CSS, JavaScript, TypeScript, React Js, Angular
              Js, React Native and Next Js. UI/UX design aficionado. My passion
              for software engineering fuels a relentless pursuit of knowledge
              and skills. I'm always hungry for new technologies and fresh
              opportunities that can fuel my career growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
