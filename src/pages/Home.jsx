import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import MyImage from "../assets/myImage.jpg";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div name="home" className="w-full sm:h-screen bg-[#0a192f]">
      <Navbar />
      {/* Container */}
      <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-5 sm:flex-row">
        <div className="mt-20 sm:border-pink-600 sm:border-r-4 sm:mt-0 border-hidden">
          <img
            src={MyImage}
            width="320px"
            className=" rounded-full max-w-[300px] mr-5"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] uppercase">
            Shameen Udayanga
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-[#ccd6f6] py-4 max-w-[700px]">
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
          <div>
            <Link to="/work">
              <button className="flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-pink-600 hover:border-pink-600">
                View Work <HiArrowNarrowRight className="ml-3 " />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
