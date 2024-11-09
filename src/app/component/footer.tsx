import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-1 text-4xl font-extrabold tracking-wide text-[#17323d]">
              AK
            </span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center w-full">
            © 2024 AK —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/arishba-khan"
              className="text-gray-500"
            >
              <FaLinkedin className="text-2xl hover:text-[#0077B5] transition-all duration-500 ease-in-out delay-150" />
            </Link>

            <Link
              target="_blank"
              href="https://github.com/Arishba-Khan"
              className="text-gray-500 mx-1"
            >
              <FaGithub className="text-2xl hover:text-[#171515] transition-all duration-500 ease-in-out delay-150" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
