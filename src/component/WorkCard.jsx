import React from "react";

const WorkCard = (props) => {
  return (
    <>
      <div className="mt-6">
        <p className="pb-4 font-semibold text-[17px] text-white">
          {props.projectName}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          <img src={props.image1} className="shadow-xl shadow-[#040c16] " />
          <img src={props.image2} className="shadow-xl shadow-[#040c16] " />
          <img src={props.image3} className="shadow-xl shadow-[#040c16] " />
        </div>
        <div className="grid gap-4 mt-2 sm:grid-cols-2 md:grid-cols-3 ">
          <img src={props.image4} className="shadow-xl shadow-[#040c16] " />
          <img src={props.image5} className="shadow-xl shadow-[#040c16] " />
          <img src={props.image6} className="shadow-xl shadow-[#040c16] " />
        </div>
        <div className="mt-2 text-gray-300 text-justify">
          <p>{props.description}</p>
        </div>
        <div className="mt-2 text-gray-200 italic">
          <p>{props.technologies}</p>
        </div>

        <div className="mt-2 ">
          {props.liveDemo && (
            <a
              href={props.liveDemo}
              className="text-blue-300"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Live Demo
            </a>
          )}
        </div>
        <div className="mt-2 ">
          <div className="mt-2">
            {props.projectLink && (
              <a
                href={props.projectLink}
                className="text-blue-300 underline"
                target="_blank"
                rel="noreferrer"
              >
                💻 Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
