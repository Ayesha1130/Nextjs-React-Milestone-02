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
     
    </div>
  );
};

export default Footer;
