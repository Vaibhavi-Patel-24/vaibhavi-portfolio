import React from 'react'
import projectImage1 from './images/image1.png'; // replace with actual path
import projectImage2 from './images/image2.png'; // replace with actual path
import { useEffect, useState } from "react";


const Projects = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Only run this on small screens
    if (window.innerWidth < 768) {
      const timeoutIn = setTimeout(() => setShowOverlay(true), 3000); // Show after 3 sec
      const timeoutOut = setTimeout(() => setShowOverlay(false), 6000); // Hide after 6 sec

      return () => {
        clearTimeout(timeoutIn);
        clearTimeout(timeoutOut);
      };
    }
  }, []);
  return (
   <>
   <div className='pt-18'>
   <hr className='text-purple-500 ml-10 mr-10'/>

          <div className="relative w-2/3 h-96 mx-auto my-10 rounded-xl shadow-md overflow-hidden group">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-45"
              style={{ backgroundImage: `url(${projectImage1})` }}
            ></div>

            {/* Blue overlay on hover or mobile */}
            <div
              className={`absolute inset-0 bg-purple-950 bg-opacity-70 transition-opacity duration-500 z-10 ${
                showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            ></div>

              <div
                className={`absolute top-1 left-2 text-white text-6xl font-bold z-30 transition-opacity duration-500 ${
                  showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                01
              </div>

            {/* ChatApp Text */}
            <div
              className={`absolute bottom-40 right-20 z-20 transition-opacity duration-500 ${
                showOverlay ? "opacity-0" : "opacity-100 group-hover:opacity-0"
              }`}
            >
              <p className="text-purple-500 text-xl sm:text-4xl font-semibold">Chat App</p>
               <hr className="mt-4 border-t-3 border-purple-500 animate-bounce w-11/12" />
              <hr className="mt-4 border-t-3 border-purple-500 animate-bounce w-1/2" />
              <hr className="mt-4 border-t-3 border-purple-500 animate-bounce w-1/4" />
            </div>

            {/* GitHub Button */}
          <div className={`absolute bottom-10 left-10 z-30 transition-opacity duration-500 ${
            showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}>
          <a
            href="https://github.com/Vaibhavi-Patel-24/Chatapp/tree/master"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-500 text-sm font-medium px-5 py-2 hover:bg-purple-200 transition rounded-xl"
          >
              View on GitHub
            </a>
          </div>

            {/* Project Description */}
            <div
              className={`absolute inset-0 flex items-center justify-center px-10 text-center transition-opacity duration-500 z-20 ${
                showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <div className="text-white text-sm font-courgette max-h-40 overflow-y-auto sm:max-h-full">
              <p className="text-white text-md font-courgette ">
secure JWT-based login and logout functionality. Designed for direct messaging between authenticated users, the app features real-time communication via Socket.io, complete with message timestamps for clear chat history tracking. User sessions are protected using JSON Web Tokens, and the backend efficiently handles message routing and storage. With a responsive, modern React frontend and a Node/Express backend, this project offers a smooth and secure chatting experience without public registration, making it ideal for controlled-access platforms.              </p>
            </div>
            </div>
          </div>

 

       <div className="relative w-2/3 h-96 mx-auto my-10 rounded-xl shadow-md overflow-hidden group">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-45"
            style={{ backgroundImage: `url(${projectImage2})` }}
          ></div>

          {/* Blue overlay */}
          <div
            className={`absolute inset-0 bg-purple-950 bg-opacity-70 transition-opacity duration-500 z-10 ${
              showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          ></div>

            <div
              className={`absolute top-1 right-2 text-white text-6xl font-bold z-30 transition-opacity duration-500 ${
                showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              02
            </div>

          {/* Project Title */}
          <div
            className={`absolute bottom-40 left-20 z-20 transition-opacity duration-500 ${
              showOverlay ? "opacity-0" : "opacity-100 group-hover:opacity-0"
            }`}
          >
            <p className="text-purple-500 text-xl sm:text-4xl font-semibold">City Support</p>
            <hr className="mt-4 border-t-3 border-purple-500 animate-bounce w-11/12" />
            <hr className="mt-4 border-t-3 border-purple-500 animate-bounce  w-1/2" />
            <hr className="mt-4 border-t-3 border-purple-500 animate-bounce w-1/4" />

          </div>

          {/* GitHub Button */}
        <div className={`absolute bottom-10 left-10 z-30 transition-opacity duration-500 ${
          showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}>
          <a
            href="https://github.com/KrishJPrajapati/CitySupport"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-500 text-sm font-medium px-5 py-2 hover:bg-purple-200 transition rounded-xl"
          >
              View on GitHub
            </a>
          </div>


          {/* Project Description */}
          <div
            className={`absolute inset-0 flex items-center justify-center px-10 text-center transition-opacity duration-500 z-20 ${
              showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <div className="text-white text-sm font-courgette max-h-40 overflow-y-auto sm:max-h-full">
            <p className="text-white text- font-courgette ">
City Support is a web application designed to improve how users locate, access, and interact with municipal services. Addressing the inefficiencies of current systems, the platform offers accurate, up-to-date information on local facilities, including service details, operating hours, and fees. It empowers residents, tourists, and business owners by providing centralized access to essential services, navigation tools, and a dedicated interface for feedback and communication. The system also allows service providers to update their offerings, fostering transparency and better engagement between users and municipal authorities.
            </p>
            </div>
          </div>
        </div>




   <hr className='text-purple-500 ml-10 mr-10'/>
   </div>
   </>
  )
}

export default Projects
