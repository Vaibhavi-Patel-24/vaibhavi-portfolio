import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import Home from './Home';
import './App.css';
import Start from './Start';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;

    let hideTimeout;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.opacity = '0.8';

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        dot.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`; // <— NEW LINE
        dot.style.opacity = '0'; 
      }, 100); 
    };

    const followCursor = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(followCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(followCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <>
      <div
        id="cursor-dot"
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full opacity-0 transition-opacity duration-200 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      ></div>

      <div
        id="cursor-ring"
        className="fixed top-0 left-0 w-6 h-6 border-2 border-white rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      ></div>

      <div className="cursor-none">
        {/* <Start></Start> */}
        <Router>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;  