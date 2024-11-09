"use client";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#17323d]">
              Hi, I am
              <br className="hidden lg:inline-block" />
              <Typewriter 
                options={{
                  strings: ["WEB DEVELOPER", "UI/UX DESIGNER"],
                  autoStart: true,
                  loop: true,
                }}
              />
              
            </h1>

            <p className="mb-10 font-semibold text-lg leading-relaxed">
              Crafting clean, functional websites and intuitive user
              experiences. Focused on creating designs that are both visually
              appealing and easy to navigate, ensuring every digital interaction
              feels effortless.
            </p>

            <div className="flex justify-center">
              <a href="/assets/Cv.docx">
                <button className="inline-flex items-center text-white bg-[#979797] border-2 border-transparent py-1 px-4 focus:outline-none hover:bg-[#17323d] hover:border-[#17323d] rounded-full text-sm transition-all duration-500 ease-in-out delay-150 shadow-lg hover:shadow-xl">
                  <FaCloudDownloadAlt className="text-lg mr-2 align-middle" />
                  About My Work
                </button>
              </a>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
            <div className="relative group w-full h-full">
              <div className="w-full h-full rounded-full overflow-hidden group-hover:grayscale-0 grayscale transition-all duration-500 ease-in-out">
                <Image
                  className="object-cover object-center w-full h-full"
                  width={500}
                  height={500}
                  alt="hero"
                  src="/assets/pp.jpg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
