import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(window.innerWidth >= 768);

  // Detect window resize to switch menus manually
  useEffect(() => {
    const handleResize = () => {
      setShowDesktopMenu(window.innerWidth >= 768);
    };

    // Add listener
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="navbar bg-base-content text-base-100 px-6 py-4">
        <div className="flex justify-between items-center w-full">
          {/* Left side (Logo) */}
          <h2 className="font-nunito text-[16px] border-2 p-2 rounded-2xl animate-bounce">Vaibhavi Patel</h2>

          {/* Show desktop menu if screen is wide */}
          {showDesktopMenu ? (
            <div className="flex ml-auto">
              <ul className="menu menu-horizontal px-1 gap-4 font-nunito ">
                <li className="hover:text-purple-500">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-purple-500">
                  <a href="#skills">Skills</a>
                </li>
                <li className="hover:text-purple-500">
                  <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-purple-500">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : (
            // Show hamburger on small screens
            <div className="ml-auto">
              <button
                onClick={() => setIsOpen(true)}
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-base-content text-base-100 z-50 p-4 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="btn btn-ghost absolute top-2 right-2"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <ul className="text-purple-500 menu mt-24 gap-10 font-nunito font-bold text-xl flex justify-center items-center mx-auto">
           <li className='clicked:text-white'>
            <a href="#about">About</a>
          </li>
          <li className="clicked:text-white">
            <a href="#skills">Skills</a>
          </li>
          <li className="clicked:text-white">
            <a href="#projects">Projects</a>
          </li>
          <li className="clicked:text-white">
            <a href="#contact">Contact</a>
           </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
