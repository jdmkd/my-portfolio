export default function ResumeProjects() {
    return (
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-gray-700 pb-2 mb-8">
          🛠 Projects
        </h2>
  
        <div className="space-y-10">
          <ProjectItem
            title="Rental Vehicle Application"
            description="Developed a full-featured rental platform with separate portals for Users, Vendors, and Admins. Implemented custom authentication, session handling, and a secure PostgreSQL schema. Built core features including vehicle listings, booking system, and interfaces for managing vehicles and bookings."
            tech="Python, Django, PostgreSQL, JavaScript, Tailwind CSS, Bootstrap"
            demo="https://starlettex.pythonanywhere.com"
            code="https://github.com/jdmkd/Starlettecars"
          />
          <ProjectItem
            title="Flutter E-Commerce App"
            description="Cross-platform e-commerce app with dedicated admin and customer portals. Supports real-time product management, seamless checkout, and Cloudinary image uploads via a Node.js backend."
            tech="Flutter, Dart, Node.js, Express.js, MongoDB, Cloudinary"
            demo="https://github.com/jdmkd/flutter-nodejs-ecomm-app-complete"
            code="https://github.com/jdmkd/flutter-nodejs-ecomm-app-complete"
          />
          <ProjectItem
            title="Personal Portfolio Website"
            description="Designed and deployed a responsive personal portfolio using modern web technologies to showcase projects and skills."
            tech="Next.js, React.js, Tailwind CSS"
            demo="https://my-portfoliox.vercel.app"
            code="https://github.com/jdmkd/my-portfolio"
          />
          <ProjectItem
            title="PHP E-Commerce Platform"
            description="Built an e-commerce platform with user and admin modules for product management and order flow. Integrated MySQL for data storage and structured admin workflows."
            tech="PHP, MySQL, HTML, CSS, JavaScript"
            demo="https://furniture-shop-php.42web.io/"
            code="https://github.com/jdmkd/furniture-shop-main-PHP"
          />
        </div>
      </section>
    );
  }
  
  function ProjectItem({ title, description, tech, demo, code }) {
    return (
      <div className="bg-gray-800/60 hover:bg-gray-800 transition duration-300 rounded-xl p-5 md:p-6 shadow-sm">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-100">{title}</h3>
        <p className="text-sm md:text-base text-gray-300 mb-3">{description}</p>
        <p className="text-sm text-gray-400 mb-4">
          <span className="font-medium text-gray-200">Tech Stack:</span> {tech}
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
            >
              Live Demo
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    );
  }
  