import React from "react";
import Link from "next/link";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {/* Career Craftor Project */}
            <div className="sm:w-1/2 mb-10 px-4">
              <Link href="https://milestone-5-one-olive.vercel.app" target="_blank">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="Career Craftor"
                    className="object-cover object-center h-full w-full filter grayscale hover:filter-none transition-all duration-300 ease-in-out"
                    src="assets/cc.png"
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  Career Craftor
                </h2>
              </Link>
              <p className="leading-relaxed text-base">
                Career Craftor is a dynamic, user-friendly resume builder
                designed to simplify the resume creation process.
              </p>
            </div>

            {/* Journey Journal Project */}
            <div className="sm:w-1/2 mb-10 px-4">
              <Link href="https://travel-guide-sand.vercel.app" target="_blank">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="Journey Journal"
                    className="object-cover object-center h-full w-full filter grayscale hover:filter-none transition-all duration-300 ease-in-out"
                    src="/assets/jjs.png"
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  Journey Journal
                </h2>
              </Link>
              <p className="leading-relaxed text-base">
                Journey Journal is an immersive travel guide website that
                inspires and informs travelers at every step of their journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
