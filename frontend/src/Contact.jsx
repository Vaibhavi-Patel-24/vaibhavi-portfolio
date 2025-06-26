import React from 'react';
import github from './assets/github_new.svg';
import linkedin from './assets/linkedin.svg';

const Contact = () => {
  return (
    <div className="bg-base-content w-full flex flex-col items-center justify-center text-white px-6 py-18 font-nunito space-y-5">

      {/* Paragraph */}
      <p className="text-center text-gray-300 max-w-xl text-sm md:text-base">
        Technology is my canvas, and I love collaborating with others who think creatively and code passionately.
        If that sounds like you, let’s connect and build something amazing!
      </p>

      {/* Button */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=patelvaibhavi2412@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 shadow-md"
      >
        Let’s Connect
      </a>


      {/* Social Icons */}
      <div className="flex gap-6 mt-3">
        <a href="https://github.com/Vaibhavi-Patel-24/" target="_blank" rel="noopener noreferrer">
          <img
            src={github}
            alt="GitHub"
            className="w-8 h-8 hover:scale-110 hover:opacity-80 transition-all duration-300"
          />
        </a>
        <a href="https://www.linkedin.com/in/vaibhavipatel24/" target="_blank" rel="noopener noreferrer">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-8 h-8 hover:scale-110 hover:opacity-80 transition-all duration-300"
          />
        </a>
      </div>

      {/* Footer */}
      <p className="mt-3 text-xs text-gray-500">© 2025 All rights reserved</p>
      
    </div>
  );
};

export default Contact;

