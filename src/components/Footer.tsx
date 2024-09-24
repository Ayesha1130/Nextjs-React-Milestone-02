import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-red-950">
      <p className="text-center text-gray-600 text-sm">
        Designed and developed by Ayesha Iqbal &copy; 2021
      </p>
      <p className="text-center text-gray-600 text-sm">Powered by Next.js</p>
      <p className="text-center text-gray-600 text-sm">All rights reserved</p>
      <p className="text-center text-gray-600 text-sm">
        Contact: ayeshaiqbal771@gmail.com
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

export default Footer;
