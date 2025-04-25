const EducationData = [
  {
    // logo: "/images/brand/brand-01.svg",
    university: "LJ University, Ahmedabad",
    degree:"Master of Computer Application (MCA)",
    admission_year: 2023,
    passout_year: 2025,
    sgpa: 7.5,
    cgpa: 7.8,
  },
  {
    // logo: "/images/brand/brand-02.svg",
    university: "Gujarat University, Ahmedabad",
    degree:"Bachelor of Computer Applications (BCA)",
    admission_year: 2023,
    passout_year: 2023,
    sgpa: 7.5,
    cgpa: 7.8,
  },
  
  
];

const Table = () => {
  return (
    <div className="rounded-[10px] mx-4 sm:mx-8 lg:mx-20 shadow-lg bg-neutral-800 text-white">
      <div className="flex flex-col">
        {EducationData.map((item, key) => (
          <div
            key={key}
            className={`flex flex-col sm:flex-row sm:justify-between gap-y-3 sm:gap-y-0 items-start sm:items-center py-4 px-4 sm:px-6 hover:bg-white/5 transition-all duration-300 ${
              key === EducationData.length - 1
                ? ""
                : "border-b border-white/10"
            }`}
          >
            {/* Degree */}
            <div className="relative flex w-full sm:w-[70%] justify-start">
              <p className="text-[1rem] md:text-xl font-semibold">{item.degree}</p>
              {/* <p className="text-xs sm:hidden text-white/70 mt-1">Degree</p> */}
            </div>

            {/* University */}
            <div className="flex w-full gap-[1rem] items-center justify-between">
              <p className="text-md sm:text-lg">{item.university} </p>
              <span className="sm:hidden">|</span>
              <p className="text-xl sm:text-4xl font-extrabold sm:text-end text-green-400">
                {item.passout_year}
              </p>
              {/* <p className="text-xs sm:hidden text-white/70 mt-1">University</p> */}
            </div>

            {/* Passout Year */}
            {/* <div className="w-full sm:w-1/3 sm:text-end"> */}
              {/* <p className="text-xs sm:hidden text-white/70 mt-1">Passout Year</p> */}
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Table;
