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
              I am a highly skilled software engineer with expertise in HTML,
              CSS, JavaScript, TypeScript, React.js, Angular.js, React Native,
              and Next.js. With a strong foundation in both web and mobile
              development, I create seamless, high-performance applications that
              deliver exceptional user experiences. My UI/UX design acumen
              ensures that every product I build is not only functional but also
              intuitive and visually appealing. My passion for software
              engineering fuels a relentless pursuit of knowledge and
              innovation, keeping me at the forefront of emerging technologies.
              From building scalable web applications with React.js and Next.js
              to crafting efficient and dynamic mobile experiences with React
              Native, I thrive on solving complex problems and bringing ideas to
              life. I am always eager to embrace new challenges, explore
              cutting-edge technologies, and collaborate on impactful projects
              that push the boundaries of digital experiences. Let’s build the
              future—one line of code at a time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
