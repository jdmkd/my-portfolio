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
    <div className="w-full mx-auto flex flex-col gap-8">
      {EducationData.map((item, key) => (
        <div
          key={key}
          className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl px-4 sm:px-8 py-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          {/* Left: Degree & University Info */}
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {item.degree}
            </h4>
            <p className="text-lg sm:text-xl font-semibold text-indigo-200">
              {item.university}
            </p>
            {/* <p className="text-sm text-gray-400 mt-1">{item.location}</p> */}
          </div>

          <div className="flex flex-row justify-center sm:justify-end gap-6 w-full sm:w-auto mt-4 sm:mt-0">
            {/* Admission Year */}
            <div className="flex items-center sm:items-end">
              <span className="text-lg sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 drop-shadow-sm">
                {item.admission_year}
              </span>
            </div>

            {/* Divider */}
            <div className="flex items-center text-gray-400 text-xl font-light">
              -
            </div>

            {/* Passout Year */}
            <div className="flex items-center sm:items-end">
              <span className="text-lg sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r bg-green-500 drop-shadow-sm">
                {item.passout_year}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
