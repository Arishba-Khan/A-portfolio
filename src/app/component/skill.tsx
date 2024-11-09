import React from "react";

const Skill = () => {
  const skills = [
    { name: "UI/UX Designing", progress: 70, color: "from-pink-500 to-indigo-500" },
    { name: "Web Development", progress: 60, color: "from-pink-500 to-indigo-500" },
    { name: "MS Automation", progress: 85, color:   "from-pink-500 to-indigo-500"},
    { name: "Adobe Video Editing Tools", progress: 80, color: "from-pink-500 to-indigo-500" },
  ];

  return (
    <div id="skill" className="h-screen flex justify-center items-center bg-[#17323d]">
      <div className="max-w-xl mx-auto w-full">
        <h4 className="text-3xl md:text-5xl text-white font-bold mb-6">Skills</h4>

        {/* Display skills */}
        {skills.map((skill, index) => (
          <div key={index} className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-200 font-semibold">{skill.name}</span>
              <span className="text-base font-semibold text-gray-200 pr-5">{skill.progress}%</span>
            </div>

            <div className="relative h-5 rounded-full overflow-hidden bg-gray-300 mt-2 mx-10">
              <div
                className={`absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r ${skill.color}`}
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
