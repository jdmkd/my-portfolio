import React from "react";
import Table from "./Table";

const Education = () => {
  return (
    <section
      className="w-full bg-white border-b border-gray-200"
      id="education"
    >
      <div className="border-b border-gray-200 p-8 sm:p-12 bg-[#fcfcfc]">
        <span className="text-sm lg:text-base uppercase tracking-widest text-gray-400 font-bold mb-4 block text-center">
          Academic Background
        </span>
        <h3 className="text-center text-4xl sm:text-8xl uppercase font-black text-[#111111] tracking-tighter">
          Education.
        </h3>
      </div>
      <div className="w-full">
        <Table />
      </div>
    </section>
  );
};

export default Education;
