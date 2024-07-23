import React from "react";
import Navbar from "../component/Navbar";

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-[#0a192f] ">
      <Navbar />
      <div className="flex items-center justify-center p-5">
        <form
          method="POST"
          action="https://getform.io/f/rbeqzzrb"
          className="flex flex-col max-w-[600px] w-full mt-20"
        >
          <div className="pb-8">
            <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
              Contact
            </p>
            <p className="mt-5 text-gray-300">
              Submit the form below or send me an email
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="p-2 bg-[#ccd6f6]"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-pink-600 hover:border-pink-600">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
