import React from "react";
import Navbar from "../component/Navbar";
import Home5 from "../assets/Home5.png";
import Home6 from "../assets/Home6.png";
import Home7 from "../assets/Home7.png";

const Work = () => {
  return (
    <div name="work" className="w-full sm:h-screen text-gray-300 bg-[#0a192f]">
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </div>
        <p className="pb-4 font-semibold">Travel Guide Project</p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          <img src={Home5} className="shadow-xl shadow-[#040c16] " />
          <img src={Home6} className="shadow-xl shadow-[#040c16] " />
          <img src={Home7} className="shadow-xl shadow-[#040c16] " />
        </div>
        <a
          href="https://github.com/TourGuide-GroupJ/TourGuide.git"
          className=" underline text-blue-200"
        >
          Project Link
        </a>
      </div>
    </div>
  );
};

export default Work;
