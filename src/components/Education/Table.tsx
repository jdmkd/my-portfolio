import { CalendarDays } from "lucide-react";

const EducationData = [
  {
    university: "LJ University, Ahmedabad",
    degree: "Master of Computer Application (MCA)",
    admission_year: 2023,
    passout_year: 2025,
    location: "Ahmedabad, India",
  },
  {
    university: "Gujarat University, Ahmedabad",
    degree: "Bachelor of Computer Applications (BCA)",
    admission_year: 2020,
    passout_year: 2023,
    location: "Ahmedabad, India",
  },
];
const Table = () => {
  return (
    <div className="w-full flex flex-col divide-y divide-gray-200">
      {/* MCA */}
      <div className="w-full bg-white hover:bg-[#fcfcfc] px-8 sm:px-12 py-10 flex flex-col sm:flex-row gap-8 transition-colors group cursor-pointer">
        <div className="sm:w-[20%] flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">
            Duration
          </span>
          <span className="text-sm font-black text-[#111111]">2023 — 2025</span>
        </div>
        <div className="sm:w-[80%] flex flex-col text-left">
          <h4 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight mb-2 group-hover:opacity-70 transition-opacity">
            Master of Computer Applications (MCA)
          </h4>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
            LJ University, Ahmedabad
          </p>
        </div>
      </div>

      {/* BCA */}
      <div className="w-full bg-white hover:bg-[#fcfcfc] px-8 sm:px-12 py-10 flex flex-col sm:flex-row gap-8 transition-colors group cursor-pointer">
        <div className="sm:w-[20%] flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">
            Duration
          </span>
          <span className="text-sm font-black text-[#111111]">2020 — 2023</span>
        </div>
        <div className="sm:w-[80%] flex flex-col text-left">
          <h4 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight mb-2 group-hover:opacity-70 transition-opacity">
            Bachelor of Computer Applications (BCA)
          </h4>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
            Gujarat University, Ahmedabad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Table;
