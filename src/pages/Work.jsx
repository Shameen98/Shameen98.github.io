import React from "react";
import Navbar from "../component/Navbar";
import Home5 from "../assets/Home5.png";
import Home6 from "../assets/Home6.png";
import Home7 from "../assets/Home7.png";
import Todo_1 from "../assets/Todo_1.png";
import Todo_2 from "../assets/Todo_2.png";
import Todo_3 from "../assets/Todo_3.png";
import SMS1 from "../assets/SMS1.png";
import SMS2 from "../assets/SMS2.png";
import SMS3 from "../assets/SMS3.png";
import SMS4 from "../assets/SMS4.png";
import SMS5 from "../assets/SMS5.png";
import SMS6 from "../assets/SMS6.png";
import ImgToPDF1 from "../assets/ImgToPDF1.png";
import ImgToPDF2 from "../assets/ImgToPDF2.png";
import ImgToPDF3 from "../assets/ImgToPDF3.png";

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

        {/* Student management system */}
        <div>
          <p className="pb-4 font-semibold">Student Management System</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            <img src={SMS1} className="shadow-xl shadow-[#040c16] " />
            <img src={SMS2} className="shadow-xl shadow-[#040c16] " />
            <img src={SMS3} className="shadow-xl shadow-[#040c16] " />
          </div>
          <div className="grid gap-4 mt-2 sm:grid-cols-2 md:grid-cols-3 ">
            <img src={SMS4} className="shadow-xl shadow-[#040c16] " />
            <img src={SMS5} className="shadow-xl shadow-[#040c16] " />
            <img src={SMS6} className="shadow-xl shadow-[#040c16] " />
          </div>
          <div className="mt-2 ">
            <p>
              Developed a Student Management System to manage student
              information. Key features include viewing, adding, updating, and
              deleting student details. Only logged-in teachers can modify
              records, ensuring secure data handling and user authentication.
            </p>
          </div>
          <div className="mt-2 text-white">
            <p>
              Technologies Used: HTML | JavaScript | Bootstrap | ReactJS |
              NodeJS | ExpressJS | MongoDB | JWT | Github
            </p>
          </div>
          <div className="mt-2 ">
            <a
              href="https://github.com/Shameen98/Student-Management-System.git"
              className="text-blue-300 underline"
            >
              Project Link
            </a>
          </div>
        </div>

        {/* travel guide project */}
        <div className="mt-10 ">
          <p className="pb-4 font-semibold">Travel Guide Project</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            <img src={Home5} className="shadow-xl shadow-[#040c16] " />
            <img src={Home6} className="shadow-xl shadow-[#040c16] " />
            <img src={Home7} className="shadow-xl shadow-[#040c16] " />
          </div>
          <div className="mt-2 text-white">
            <p>
              Technologies Used: HTML | JavaScript | TailwindCSS | ReactJS |
              NodeJS | ExpressJS | MongoDB | Github
            </p>
          </div>
          <div className="mt-2 ">
            <a
              href="https://github.com/TourGuide-GroupJ/TourGuide.git"
              className="text-blue-300 underline"
            >
              Project Link
            </a>
          </div>
        </div>

        {/* image to pdf converter */}
        <div className="mt-10 ">
          <p className="pb-4 font-semibold">Image To PDF Converter</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            <img src={ImgToPDF1} className="shadow-xl shadow-[#040c16] " />
            <img src={ImgToPDF2} className="shadow-xl shadow-[#040c16] " />
            <img src={ImgToPDF3} className="shadow-xl shadow-[#040c16] " />
          </div>
          <div className="mt-2 ">
            <p>
              Developed an Image to PDF Converter web application that allows
              users to upload images, view previews, and convert them into a PDF
              file. The application provides a user-friendly drag-and-drop
              interface and supports image deletion before conversion. It
              ensures a seamless experience with no size limits or watermarks.
            </p>
          </div>
          <div className="mt-2 text-white">
            <p>
              Technologies Used: HTML | CSS | JavaScript | ReactJS | FileReader
              API
            </p>
          </div>
          <div className="mt-2 ">
            <a
              href="https://github.com/Shameen98/Todo-List.git"
              className="text-blue-300 underline"
            >
              Project Link
            </a>
          </div>
        </div>

        {/* to do list */}
        <div className="mt-10 ">
          <p className="pb-4 font-semibold">TODO List page</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            <img src={Todo_1} className="shadow-xl shadow-[#040c16] " />
            <img src={Todo_2} className="shadow-xl shadow-[#040c16] " />
            <img src={Todo_3} className="shadow-xl shadow-[#040c16] " />
          </div>
          <div>
            <p className="mt-2 ">
              This TODO list application is a practical and user-friendly tool
              designed to help manage daily tasks efficiently. Users can easily
              add, delete, and mark tasks as complete.
            </p>
          </div>
          <div className="mt-2 text-white">
            <p>Technologies Used: HTML | CSS | JavaScript (jQuery)</p>
          </div>
          <div className="mt-2 ">
            <a
              href="https://github.com/Shameen98/Todo-List.git"
              className="text-blue-300 underline"
            >
              Project Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
