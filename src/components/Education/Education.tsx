import React from "react";
import Table from "./Table";

const Education = () => {
  return (
    <section
      className="w-full bg-[#030303] border-b border-white/10"
      id="education"
    >
      <div className="mt-20 border-b border-white/10 p-8 sm:p-12 bg-[#000000]">
        <span className="text-sm lg:text-base uppercase tracking-widest text-zinc-500 font-bold mb-4 block text-center">
          Academic Background
        </span>
        <h3 className="text-center text-4xl sm:text-8xl uppercase font-black text-white tracking-tighter">
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
