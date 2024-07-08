import React from "react";
import Navbar from "../component/Navbar";
import Home5 from "../assets/Home5.png";
import Home6 from "../assets/Home6.png";
import Home7 from "../assets/Home7.png";
import Todo_1 from "../assets/Todo_1.png";
import Todo_2 from "../assets/Todo_2.png";
import Todo_3 from "../assets/Todo_3.png";
import SMS2 from "../assets/SMS2.png";
import SMS3 from "../assets/SMS3.png";
import SMS4 from "../assets/SMS4.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full text-gray-300 bg-[#0a192f] min-h-screen "
    >
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-4 pt-20 pb-10 flex flex-col justify-center w-full h-full ">
        <div className="">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </div>

        {/* travel guide project */}
        <div>
          <p className="pb-4 font-semibold">Travel Guide Project</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            <img src={Home5} className="shadow-xl shadow-[#040c16] " />
            <img src={Home6} className="shadow-xl shadow-[#040c16] " />
            <img src={Home7} className="shadow-xl shadow-[#040c16] " />
          </div>
          <p className="mt-2 ">
            Technologies Used: HTML | JavaScript | TailwindCSS | ReactJS |
            NodeJS | ExpressJS | MongoDB | Github
          </p>
          <a
            href="https://github.com/TourGuide-GroupJ/TourGuide.git"
            className="text-blue-300 underline"
          >
            Project Link
          </a>
        </div>

        {/* Student management system */}
        <div className="mt-10 ">
          <p className="pb-4 font-semibold">Student Management System</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            <img src={SMS4} className="shadow-xl shadow-[#040c16] " />
            <img src={SMS3} className="shadow-xl shadow-[#040c16] " />
            <img src={SMS2} className="shadow-xl shadow-[#040c16] " />
          </div>
          <p className="mt-2 ">
            Developed a Student Management System to manage student information.
            Key features include viewing, adding, updating, and deleting student
            details. Only logged-in teachers can modify records, ensuring secure
            data handling and user authentication.
          </p>
          <p>
            Technologies Used: HTML | JavaScript | Bootstrap | ReactJS | NodeJS
            | ExpressJS | MongoDB | JWT | Github
          </p>
          <a
            href="https://github.com/Shameen98/Student-Management-System.git"
            className="text-blue-300 underline"
          >
            Project Link
          </a>
        </div>

        {/* to do list */}
        <div className="mt-10 ">
          <p className="pb-4 font-semibold">TODO List</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            <img src={Todo_1} className="shadow-xl shadow-[#040c16] " />
            <img src={Todo_2} className="shadow-xl shadow-[#040c16] " />
            <img src={Todo_3} className="shadow-xl shadow-[#040c16] " />
          </div>
          <p className="mt-2 ">
            This TODO list application is a practical and user-friendly tool
            designed to help manage daily tasks efficiently. Users can easily
            add, delete, and mark tasks as complete.
          </p>
          <p>Technologies Used: HTML | CSS | JavaScript (jQuery)</p>
          <a
            href="https://github.com/Shameen98/Todo-List.git"
            className="text-blue-300 underline"
          >
            Project Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
