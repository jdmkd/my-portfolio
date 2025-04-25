import { FaPython, FaJava, FaJsSquare, FaCuttlefish, FaDatabase, FaGitAlt, FaLinux, FaAndroid, FaBootstrap, FaReact, FaNodeJs, FaGithub, FaPlug, FaChartLine} from "react-icons/fa";
import { SiCplusplus, SiDart, SiDjango, SiNextdotjs, SiExpress, SiFlutter, SiTailwindcss, SiJquery, SiHtml5, SiCss3, SiJson, SiPostgresql, SiMongodb, SiMysql, SiNumpy, SiPandas, SiMatplotlib, SiPostman } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
  
  export default function ResumeSkills() {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-gray-700 pb-2 mb-6">
          💻 Technical Skills
        </h2>
  
        {/* Programming Languages */}
        <SkillCategory title="Programming Languages">
          <SkillItem icon={<FaPython />} name="Python" color="text-yellow-500" />
          <SkillItem icon={<FaJava />} name="Java" color="text-red-600" />
          <SkillItem icon={<FaJsSquare />} name="JavaScript" color="text-yellow-300" />
          <SkillItem icon={<SiCplusplus />} name="C++" color="text-blue-500" />
          <SkillItem icon={<FaCuttlefish />} name="C" color="text-blue-700" />
          <SkillItem icon={<SiDart />} name="Dart" color="text-blue-400" />
          <SkillItem icon={<FaDatabase />} name="SQL" color="text-orange-500" />
        </SkillCategory>
  
        {/* Frameworks & Libraries */}
        <SkillCategory title="Frameworks & Libraries">
          <SkillItem icon={<SiDjango />} name="Django" color="text-green-600" />
          <SkillItem icon={<SiDjango />} name="Django REST Framework (DRF)" color="text-green-700" />
          <SkillItem icon={<SiNextdotjs />} name="Next.js" color="text-white" />
          <SkillItem icon={<FaReact />} name="React.js" color="text-sky-500" />
          <SkillItem icon={<FaNodeJs />} name="Node.js" color="text-green-500" />
          <SkillItem icon={<SiExpress />} name="Express.js" color="text-white" />
          <SkillItem icon={<SiFlutter />} name="Flutter" color="text-blue-400" />
        </SkillCategory>
  
        {/* Web Technologies */}
        <SkillCategory title="Web Technologies">
          <SkillItem icon={<SiHtml5 />} name="HTML5" color="text-orange-600" />
          <SkillItem icon={<SiCss3 />} name="CSS3" color="text-blue-600" />
          <SkillItem icon={<SiTailwindcss />} name="Tailwind CSS" color="text-teal-400" />
          <SkillItem icon={<FaBootstrap />} name="Bootstrap" color="text-purple-600" />
          <SkillItem icon={<SiJquery />} name="jQuery" color="text-blue-500" />
          <SkillItem icon={<FaPlug />} name="RESTful APIs" color="text-teal-600" />
          {/* <div className="flex items-center space-x-2">
            <span className="text-lg font-medium text-teal-600">RESTful APIs</span>
          </div> */}
          <SkillItem icon={<BsFiletypeJson />} name="JSON" color="text-gray-300" />
        </SkillCategory>
  
        {/* Databases */}
        <SkillCategory title="Databases">
          <SkillItem icon={<SiPostgresql />} name="PostgreSQL" color="text-blue-400/80" />
          <SkillItem icon={<SiMysql />} name="MySQL" color="text-blue-400/80" />
          <SkillItem icon={<SiMongodb />} name="MongoDB" color="text-green-700" />
        </SkillCategory>
  
        {/* Data Science & Analysis */}
        <SkillCategory title="Data Science & Analysis">
          <SkillItem icon={<SiNumpy />} name="NumPy" color="text-blue-400/80" />
          <SkillItem icon={<SiPandas />} name="Pandas" color="text-blue-600/95" />
          <SkillItem icon={<FaChartLine />} name="Matplotlib" color="text-blue-500/70" />
          {/* <div className="flex items-center space-x-2">
            <span className="text-lg font-medium text-gray-600">Matplotlib</span>
          </div> */}
        </SkillCategory>
  
        {/* Tools & Platforms */}
        <SkillCategory title="Tools & Platforms">
          <SkillItem icon={<FaGitAlt />} name="Git" color="text-orange-600" />
          <SkillItem icon={<FaGithub />} name="GitHub" color="text-white" />
          <SkillItem icon={<FaLinux />} name="Linux" color="text-white/60" />
          <SkillItem icon={<FaAndroid />} name="Android Studio" color="text-green-600" />
          <SkillItem icon={<SiPostman />} name="Postman" color="text-orange-400" />
        </SkillCategory>
      </section>
    );
  }
  
  function SkillCategory({ title, children }) {
    return (
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">{title}:</h3>
        <div className="flex flex-wrap gap-4">{children}</div>
      </div>
    );
  }
  

  function SkillItem({ icon, name, color }) {
    return (
      <div
        className={`
          flex items-center space-x-3 px-2 py-1 bg-white/10 rounded-lg 
          transform transition duration-300 ease-in-out 
          hover:scale-105 hover:bg-gray-700 group cursor-pointer
        `}
      >
        <span
          className={`
            text-3xl ${color} transition-transform duration-300 ease-in-out
            group-hover:rotate-12
          `}
        >
          {icon}
        </span>
        <span
          className={`
            text-md font-semibold ${color} 
            transition-colors duration-300 
            group-hover:text-white
          `}
        >
          {name}
        </span>
      </div>
    );
  }
  
  