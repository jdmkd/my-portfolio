import Link from "next/link";

export default function ResumeHeader() {
    return (
      <header className="text-center mt-[4rem] md:mt-[5rem] mb-8">
        <h1 className="text-4xl font-extrabold">Dinesh Kumar</h1>
        <p className="text-lg text-gray-400 mt-2">Full-Stack Developer</p>
        
        <div className="flex flex-wrap justify-center items-center p-4">
            <p className="text-sm text-gray-400 mr-2">Ahmedabad, India | </p>
            <Link href="mailto:djkumarr9@gmail.com" className="text-blue-500 mr-2">djkumarr9@gmail.com</Link>
            <p className="text-sm text-gray-400 mr-2">| +91-6376094539 |</p>

            <p className="text-sm text-gray-400">
                <Link 
                href="https://github.com/jdmkd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-2"
                aria-label="Visit my GitHub profile"
                >
                GitHub
                </Link> 
                |{" "}
                <Link 
                href="https://www.linkedin.com/in/dj-kumar-9a2a2b236" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-2"
                aria-label="Visit my LinkedIn profile"
                >
                LinkedIn
                </Link> 
                |{" "}
                <Link 
                href="https://my-portfoliox.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
                aria-label="Visit my portfolio"
                >
                Portfolio
                </Link>
            </p>
        </div>

      </header>
    );
  }
  
  