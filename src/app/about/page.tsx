import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="flex flex-col items-center text-left p-4 md:mt-52 md:flex-row md:p-10  bg-center bg-cover"
      style={{ backgroundImage: "url(/image/Tech.jpg) " }}
    >
      <Image
        src="/image/ash_profile.jpg"
        className="rounded-md drop-shadow-[0_35px_35px_rgba(136,0,0,0.98)] "
        alt="Ayesha Iqbal"
        width={300}
        height={300}
      />

      <div className="flex flex-col items-center md:items-start md:w-1/2">
        <div className=" sm:w-3/5 lg:w-1/2 mx-1/2 mx-auto ">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center  mb-4  animate-bounce ">
            About Me
          </h1>
          <p className="py-4">
            Hello I am Full Stack Developer with passion for creating responsive
            and dynamic web application. I start my journey in IT with GIAIC,
            where I Developed a solid foundation in various web technologies.
          </p>
          <p className="py-4">
            I love building user-friendly interfaces and efficiet back-end
            system.My experience with tailwind help me design beautifull layouts
            quickly,while my knowledge of node.js allow me to create robust
            server-side application
          </p>
          <p className="py-4">
            I am always eager to learn and embrace new challenges in the tech
            world. When I am not coding,you will find me exploring new frameworks
            or working on personal projects to enhance my skills.
          </p>
          <p className="py-4">
            Lets connect and create something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
