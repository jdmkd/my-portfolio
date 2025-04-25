export default function ResumeEducation() {
    return (
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-gray-700 pb-4 mb-8">
          🎓 Education
        </h2>
  
        <div className="relative space-y-8">
          <EducationItem
            degree="Master of Computer Applications (MCA)"
            institution="LJ University, Ahmedabad"
            duration="2023 – 2025"
          />
          <EducationItem
            degree="Bachelor of Computer Applications (BCA)"
            institution="Gujarat University, Ahmedabad"
            duration="2020 – 2023"
          />
        </div>
      </section>
    );
  }
  
  function EducationItem({ degree, institution, duration }) {
    return (
      <div className="relative group pl-1">
        {/* Line connector effect */}
        
        <div className="bg-gray-800/60 hover:bg-gray-800 transition duration-300 rounded-lg p-5 md:p-6 shadow-md">
          <h3 className="text-lg md:text-xl font-semibold text-white">{degree}</h3>
          <p className="text-sm md:text-base text-gray-300 mt-1">
            {institution}{" "}
            <span className="font-medium text-gray-400">| {duration}</span>
          </p>
        </div>
      </div>
    );
  }
  