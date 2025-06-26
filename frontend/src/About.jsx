import React from 'react';
import Lottie from 'lottie-react';
import animationData from './assets/annimation2.json';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-neutral min-h-screen flex  items-center justify-center px-6 py-6 w-screen">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="relative flex flex-col md:flex-row items-center max-w-6xl w-full rounded-2xl border border-gray-700 shadow-2xl bg-[#1c1c1e]/90 hover:border-gray-600 backdrop-blur-md overflow-hidden transition-all duration-500"
      >

        {/* Left: Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="w-full md:w-1/3 p-6 text-left text-gray-200"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-courgette">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">Vaibhavi Patel</span>
          </h1>
        </motion.div>

        {/* Center: Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="w-full md:w-1/3 p-4 flex justify-center items-center"
        >
          <Lottie 
            animationData={animationData} 
            loop={true} 
            className="max-w-[400px] w-full h-auto rounded-xl" 
          />
        </motion.div>

        {/* Right: Description */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="w-full md:w-1/3 p-6 text-white font-nunito"
        >
          <p className="text-sm md:text-md leading-relaxed">
            I'm a Full Stack Developer with a strong passion for frontend development, where I enjoy crafting clean, interactive user interfaces. I’m deeply interested in AI and Machine Learning, and I love integrating smart models into web applications to build innovative, intelligent solutions. I also explore UI/UX design, mobile app development, and continuously expand my skills across the tech stack. For me, programming is a creative pursuit — blending logic, design, and emerging technologies to bring ideas to life.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;
