import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col  items-center mt-32 p-4">
      <h1 className="text-5xl sm:text-5xl  items-center animate-bounce ">
        Contact Me
      </h1>
      <p className="rounded-full p-4 drop-shadow-[0-35px-35px-rgba(136,0,0,0.98)] transition-transform hover:scale-110 ">
        I&apos;d be glad to hear from you. Send me a message or drop me a line at{" "}
        <a href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/">
          ayeshaiqbal771@gmail.com
        </a>
      </p>
      <div className="flex">
      <a href="https://github.com/Ayesha1130" target="_blank">
        <FaGithub
          size={40}
          className="text-white drop-shadow-[0-35px-35px-rgba(136,0,0,0.98)] transition-transform hover:scale-150"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/"
        target="_blank"
      >
        <FaLinkedin
          size={40}
          className="text-white  drop-shadow-[0-35px-35px-rgba(136,0,0,0.98)] transition-transform hover:scale-150"
        />
      </a>
    </div>
    </div>
  );
};

export default Contact;
