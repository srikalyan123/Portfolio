import React from "react";

const footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold mb-2">Contact Me</h2>
        <p className="text-gray-400 mb-4">
          Let’s build something amazing together. Feel free to reach out via email or connect on GitHub!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:srikalyanchakravarthim@gmail.com"
            className="text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            EMAIL: srikalyanchakravarthim@gmail.com
          </a>
          <a
            href="https://github.com/srikalyan123"
            className="text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: github.com/srikalyan123
          </a>
          <a
            href="https://www.linkedin.com/in/sri-kalyan-chakravarthi-marri-506631157/"
            className="text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn: sri-kalyan-chakravarthi-marri-506631157
          </a>
        </div>
        <p className="mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Sri Kalyan Chakravarthi Marri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default footer;
