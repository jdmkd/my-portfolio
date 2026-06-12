import React from "react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen">
      
      {/* Header section matching Editorial Grid */}
      <div className="border-b border-gray-200 p-8 sm:p-12 lg:p-16 bg-white flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4 block">
            Curriculum Vitae
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tighter">
            Resume.
          </h1>
        </div>
        
        <Link 
          href="/Dinesh_kumar_resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          download 
          className="flex items-center gap-4 bg-[#111111] text-white px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl group"
        >
          Download PDF
          <FaDownload className="group-hover:translate-y-1 transition-transform" />
        </Link>
      </div>

      {/* PDF Viewer Container */}
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-8 lg:p-12">
        <div className="w-full h-[80vh] border border-gray-200 shadow-2xl bg-white rounded-sm overflow-hidden relative">
          
          {/* Fallback text for browsers that don't support inline PDFs */}
          <object 
            data="/Dinesh_kumar_resume.pdf" 
            type="application/pdf" 
            className="w-full h-full absolute inset-0 z-10"
          >
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-8 bg-gray-50">
              <p className="text-gray-600 font-medium">Your browser doesn't support inline PDFs.</p>
              <a href="/Dinesh_kumar_resume.pdf" download className="text-blue-600 font-bold underline">
                Download the PDF instead
              </a>
            </div>
          </object>

        </div>
      </div>
      
    </div>
  );
}
