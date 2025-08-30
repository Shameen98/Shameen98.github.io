import React from "react";
import WorkCard from "../component/WorkCard";
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
import Movie1 from "../assets/Movie1.png";
import Movie2 from "../assets/Movie2.png";
import Movie3 from "../assets/Movie3.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full text-gray-300 bg-[#0a192f] min-h-screen "
    >
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-4 pt-20 pb-5 flex flex-col justify-center w-full h-full ">
        <div className="">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Work
          </p>
          <p className="mt-4">Check out some of my recent work</p>
        </div>

        {/* travel guide project */}
        <WorkCard
          projectName="Travel Guide Project"
          image1={Home5}
          image2={Home6}
          image3={Home7}
          description="Travel Guide Web Application is a full-stack project built with the MERN stack to provide an interactive platform for exploring travel destinations. The app allows users to browse locations, view travel details, and plan trips with ease. It features a responsive, modern interface built with React and TailwindCSS, while backend APIs developed with Node.js and Express handle dynamic data storage and retrieval using MongoDB."
          technologies="Technologies Used: HTML | JavaScript | TailwindCSS | ReactJS |
              NodeJS | ExpressJS | MongoDB | Github"
          projectLink="https://github.com/TourGuide-GroupJ/TourGuide.git"
        />

        {/* movie project */}
        <WorkCard
          projectName="Travel Guide Project"
          image1={Movie1}
          image2={Movie2}
          image3={Movie3}
          description="This project is a responsive movie discovery web application built with React and deployed on Vercel. It enables users to explore a wide collection of movies by integrating a public movie API to fetch real-time data. The application includes a dynamic search function for quick navigation, clean and reusable UI components for a smooth and user-friendly experience, and a personalized favorites section where users can save their preferred movies. It highlights my ability to design user-friendly interfaces and integrate APIs effectively."
          technologies="Technologies Used: React | Vercel"
          liveDemo="https://movie-project-nine-pink.vercel.app/"
          projectLink="https://movie-project-nine-pink.vercel.app/"
        />

        {/* Student management system */}
        <WorkCard
          projectName="Student management system"
          image1={SMS1}
          image2={SMS2}
          image3={SMS3}
          image4={SMS4}
          image5={SMS5}
          image6={SMS6}
          description="Developed a Student Management System to manage student
              information. Key features include viewing, adding, updating, and
              deleting student details. Only logged-in teachers can modify
              records, ensuring secure data handling and user authentication."
          technologies="Technologies Used: HTML | JavaScript | Bootstrap | ReactJS |
              NodeJS | ExpressJS | MongoDB | JWT | Github"
          projectLink="https://github.com/Shameen98/Student-Management-System.git"
        />

        {/* image to pdf converter */}
        <WorkCard
          projectName="Image To PDF Converter"
          image1={ImgToPDF1}
          image2={ImgToPDF2}
          image3={ImgToPDF3}
          description="Developed an Image to PDF Converter web application that allows
              users to upload images, view previews, and convert them into a PDF
              file. The application provides a user-friendly drag-and-drop
              interface and supports image deletion before conversion. It
              ensures a seamless experience with no size limits or watermarks."
          technologies="Technologies Used: HTML | CSS | JavaScript | ReactJS | FileReader
              API"
          projectLink="https://github.com/Shameen98/Todo-List.git"
        />

        {/* to do list */}
        <WorkCard
          projectName="TODO List page"
          image1={Todo_1}
          image2={Todo_2}
          image3={Todo_3}
          description="This TODO list application is a practical and user-friendly tool
              designed to help manage daily tasks efficiently. Users can easily
              add, delete, and mark tasks as complete."
          technologies="Technologies Used: HTML | CSS | JavaScript (jQuery)"
          projectLink="https://github.com/Shameen98/Todo-List.git"
        />
      </div>
    </div>
  );
};

export default Work;
