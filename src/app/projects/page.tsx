import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-5xl sm:text-5x1 text-center mb-4 animate-bounce">
        <span className="text-red-950">My</span>Projects
      </h1>
      <div className="flex flex-wrap justify-center md:flex-row">
        {[
          {
            src: "/image/Resume.png",
            href: "https://hackathons-milestone-1-2.vercel.app/",
            alt: "HTML",
          },
          {
            src: "/image/Student Management.png",
            href: "https://github.com/Ayesha1130/Student_Management_System",
            alt: "JAVASCRIPT",
          },
          {
            src: "/image/Adventure.png",
            href: "https://github.com/Ayesha1130/Adventure_Game_Project",
            alt: "TYPESCRIPT",
          },
          {
            src: "/image/ATM PRO.png",
            href: "https://github.com/Ayesha1130/My-ATM-Prroject",
            alt: "NEXTJS",
          },
        ].map((skill, index) => (
          <div key={index} className="m-4">
            <Link href={skill.href || "#"} passHref>
              <Image
                src={skill.src}
                className=" rounded-md cursor-pointer drop-shadow-[0-35px-35px-rgba(136,0,0,0.98)] transition-transform hover:scale-150"
                alt={skill.alt}
                width={400}
                height={400}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
