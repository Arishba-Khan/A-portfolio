import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="z-50 sticky top-0">
      <header className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-1 text-4xl font-extrabold tracking-wide text-[#17323d]">
              AK
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-[#17323d]">
              Home
            </Link>
            <Link href="#skill" className="mr-5 hover:text-[#17323d]">
              Skills
            </Link>
            <Link href="#project" className="mr-5 hover:text-[#17323d]">
              Projects
            </Link>
          </nav>
          <Link href="#contact">
            <button className="inline-flex items-center bg-[#979797] text-white border-2 border-transparent py-1 px-4 focus:outline-none hover:bg-[#17323d] hover:border-[#17323d] rounded-full text-sm mt-4 md:mt-0 transition-all duration-500 ease-in-out delay-150 shadow-lg hover:shadow-xl">
              Let's Connect
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
