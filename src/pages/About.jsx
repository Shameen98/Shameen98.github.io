import React from "react";
import Navbar from "../component/Navbar";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
      <Navbar />
      {/* Container */}
      <div className="flex flex-col items-center justify-center w-full h-full p-5">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-20">
          <div className="mb-0 text-left sm:mb-5">
            <p className="inline text-4xl font-bold text-center border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid sm:grid-cols-2 gap-8">
          <div className="text-4xl font-bold ">
            <p>
              Hi. I'm Shameen Udayanga, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div className="mt-5 sm:mt-0">
            <p className="text-justify ">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
