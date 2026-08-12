import { CalendarDays } from "lucide-react";

const EducationData = [
  {
    university: "LJ University, Ahmedabad",
    degree: "Master of Computer Applications (MCA)",
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
    <div className="w-full flex flex-col divide-y divide-white/10">
      {EducationData.map((edu, index) => (
        <div
          key={index}
          className="w-full bg-[#030303] hover:bg-white/5 px-6 sm:px-12 py-10 flex flex-col sm:flex-row gap-8 transition-colors group cursor-pointer"
        >
          <div className="sm:w-[20%] flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">
              Duration
            </span>
            <span className="text-xl sm:text-2xl font-black text-white">
              {edu.admission_year} — {edu.passout_year}
            </span>
          </div>
          <div className="sm:w-[80%] flex flex-col text-left">
            <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 group-hover:opacity-70 transition-opacity">
              {edu.degree}
            </h4>
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
              {edu.university}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
