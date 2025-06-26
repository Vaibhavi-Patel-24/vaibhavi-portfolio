import React from 'react';
import Navbar from './Navbar'
import About from './About'
import Lottie from 'lottie-react';
import animationData from './assets/annimation1.json'; // Adjust path if needed
import { Link } from 'react-router-dom';
import Skills from './Skills'
import Projects from './Projects'
import Contacts from './Contact'
import { useEffect, useState } from 'react';
function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);
  

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmall(window.innerWidth < 640); // Tailwind's 'sm' breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isSmall;
}
const Home = () => {

    const isSmallScreen = useIsSmallScreen();

  return (
    
    <div className="bg-neutral min-h-screen w-full overflow-x-hidden scroll-smooth">
      <Navbar/>


      <div className="relative flex items-start justify-between w-full sm:min-h-screen overflow-hidden px-10 bg-neutral">
        <div className="flex flex-col justify-center item-center z-10 text-white sm:w-1/2 pt-14 sm:pt-20 sm:pl-10 pl-1">
        <p className="sm:animate-[slideFadeInLeft_0.8s_ease-out_forwards] text-xl sm:text-4xl leading-snug font-nunito">
            <span className={`text-sm sm:text-lg group block mb-5 sm:mb-4 font-semibold w-fit hover:text-purple-500 hover:border hover:border-purple-500 sm:px-4 py-2 transition-all duration-300 ${isSmallScreen ? 'animated-text' : ''}`}>
              <span className='inline-block'>I'm a</span>
              <span className="text-5xl sm:text-6xl inline-block">Full-stack</span>
            </span>

            <span className={`text-5xl sm:text-6xl group block mb-5 sm:mb-4 sm:ml-20 w-fit hover:text-purple-500 hover:border hover:border-purple-500 sm:px-4 py-2 transition-all duration-300 font-semibold ${isSmallScreen ? 'animated-text' : ''}`}>
              Developer &
            </span>

            <span className={`text-5xl sm:text-6xl group block mb-5 sm:mb-4 w-fit hover:text-purple-500 hover:border hover:border-purple-500 sm:px-4 py-2 transition-all duration-300 font-semibold ${isSmallScreen ? 'animated-text' : ''}`}>
              Software
            </span>

            <span className={`text-5xl sm:text-6xl group block sm:ml-20 w-fit hover:text-purple-500 hover:border hover:border-purple-500 sm:px-4 py-2 transition-all duration-300 font-semibold ${isSmallScreen ? 'animated-text' : ''}`}>
              Engineer
            </span>
        </p>
        <div>  
          <a
              href="#about"
            className="text-purple-500 ml-auto sm:ml-24 mt-7 sm:mt-5 transition-all inline-block font-semibold"
          >
            About me &gt;
          </a>
        </div>
        </div>

            {!isSmallScreen && (
            <div className="w-1/2 h-full flex items-center justify-center">
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="w-full h-full max-w-[600px]"
              />
            </div>
            )}
      </div>
      
      

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contacts />
      </div>

    </div>
  )
}

export default Home
