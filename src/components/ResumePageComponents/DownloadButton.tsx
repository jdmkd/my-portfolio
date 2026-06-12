import Link from "next/link";

export default function DownloadButton() {
  return (
    <div className="flex justify-center mb-10">
      <Link
        href="/Dinesh_kumar_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="bg-neutral-900/90 hover:bg-gray-800 transition-colors duration-200 text-white font-semibold py-2 px-5 rounded inline-flex items-center"
      >
        <svg
          className="fill-current w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 16l4-5h-3V4h-2v7H8l4 5zM20 18H4v2h16v-2z" />
        </svg>
        Download Resume
      </Link>
    </div>
  );
}
