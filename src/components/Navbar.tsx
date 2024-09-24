import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex flex-col md:flex-row item-center justify-between ma:mt-7 p-4 ">
      <h1 className="font-bold text-2xl md:text-3xl italic text-center">
        Ayesha Iqbal
      </h1>
      <ul className="flex justify-center gap-x-4  italic text-lg md:text-xl cursor-pointer ">
        <Link
          href={"/"}
          className="hover:text-red-700 transition-transform hover:scale-110"
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="hover:text-red-700 transition-transform hover:scale-110"
        >
          About
        </Link>
        <Link
          href={"/skills"}
          className="hover:text-red-700 transition-transform hover:scale-110"
        >
          Skills
        </Link>
        <Link
          href={"projects"}
          className="hover:text-red-700 transition-transform hover:scale-110"
        >
          Projects
        </Link>
        <Link
          href={"/contact"}
          className="hover:text-red-700 transition-transform hover:scale-110 "
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
