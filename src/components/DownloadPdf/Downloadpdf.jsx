// Example with a styled button:
import { pythonIcon } from "@/assets";
import Link from "next/link";

const Downloadpdf = () => (
    <>
    <div  className="mt-[5rem] flex justify-center ">
        <Link href="./DJ_Resume.pdf" className="bg-blue-400/70 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" target="_blank" rel="noopener noreferrer" download>
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download Resume</span>
        </Link>

    </div>
    </>
  );
  
  export default Downloadpdf;
  