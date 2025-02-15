import resumePDF from "../assets/SriKalyan_Resume.pdf"; // Place your PDF in src/assets
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>

      {/* Display Resume (PDF iframe) */}
      <iframe
        src={resumePDF}
        className="w-full h-[600px] border rounded-lg shadow-lg"
      ></iframe>

      {/* Download Resume Button */}
      <a
        href={resumePDF}
        download="SriKalyan_Resume.pdf"
        className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        <Download className="mr-2" size={20} />
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
