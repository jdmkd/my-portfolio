import Image from "next/image";

const brandData = [
  {
    // logo: "/images/brand/brand-01.svg",
    university: "LJ University",
    degree:"Master of Computer Application",
    admission_year: 2023,
    passout_year: 2025,
    sgpa: 7.5,
    cgpa: 7.8,
  },
  {
    // logo: "/images/brand/brand-02.svg",
    university: "Gujarat University",
    degree:"Bachelor of Computer Applications",
    admission_year: 2023,
    passout_year: 2023,
    sgpa: 7.5,
    cgpa: 7.8,
  },
  
  
];

const Table = () => {
  return (
    <div className="rounded-[10px]  mx-[2rem] lg:mx-[5rem] pt-7.5 shadow-1 bg-gray dark:bg-gray-dark">
      

      <div className="flex flex-col text-white ">
        {/* <div className=" grid grid-cols-3 sm:grid-cols-3 pt-2 bg-gray-800">
          <div className="px-2 py-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              University
            </h5>
          </div>
          <div className="px-2 py-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Year
            </h5>
          </div>
          <div className="px-2 py-4 ">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              CGPA
            </h5>
          </div>
          
        </div> */}

        {brandData.map((brand, key) => (
          <div
            className={`flex justify-between  items-center text-white hover:bg-white/5 cursor-pointer transition-all duration-500 ease-in-out ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={key}
          >
            <div className="px-0 md:px-1 py-2 md:py-4 ">
              <p className="font-medium text-[.9rem] sm:text-[1.5rem] text-start">
                {brand.degree}
              </p>
            </div>

            <div className="px-0 md:px-1 py-2 md:py-4">
              {/* <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div> */}
              <p className="font-medium text-[.9rem] sm:text-[1.5rem] text-start">
                {brand.university}
              </p>
            </div>

            <div className="px-0 md:px-1 py-2 md:py-4 text-end ">
              <p className="font-bold text-[1.8rem] sm:text-[2.5rem] text-green-light-1">
              {brand.passout_year}
              </p>
            </div>           

          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
