import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from './assets/annimation5.json';

// Import logos
import html from './assets/html-5.svg';
import css from './assets/css.svg';
import js from './assets/javascript.svg';
import react from './assets/react.svg';
import node from './assets/node-js.svg';
import python from './assets/python.svg';
import mysql from './assets/mysql.svg';
import mongodb from './assets/mongodb.svg';
import tailwind from './assets/tailwind.svg';
import git from './assets/git.svg';
import github from './assets/github.svg';
import figma from './assets/figma.svg';
import kotlin from './assets/kotlin.svg';
import android from './assets/android-studio.svg';

const logos = [
  { src: html, label: "HTML5" },
  { src: css, label: "CSS3" },
  { src: js, label: "JavaScript" },
  { src: react, label: "React" },
  { src: node, label: "Node.js" },
  { src: python, label: "Python" },
  { src: mysql, label: "MySQL" },
  { src: mongodb, label: "MongoDB" },
  { src: tailwind, label: "Tailwind CSS" },
  { src: git, label: "Git" },
  { src: github, label: "GitHub" },
  { src: figma, label: "Figma" },
  { src: kotlin, label: "Kotlin" },
  { src: android, label: "Android Studio" },
];

// Split logos into two rows
const firstRow = logos.slice(0, Math.ceil(logos.length / 2));
const secondRow = logos.slice(Math.ceil(logos.length / 2));

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Skills = () => {
  return (
    <div className="text-white bg-base-content w-full font-nunito py-1   flex flex-col gap-5 items-center overflow-hidden">

      {/* Heading */}
      {/* Lottie Animation Instead of Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-40 md:w-56 mb-2"
      >
        <Lottie animationData={animationData} loop={true} />
      </motion.div>


      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {firstRow.map((logo, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col items-center group"
          >
            <img
              src={logo.src}
              alt={logo.label}
              className="w-16 h-16 md:w-20 md:h-20 filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 drop-shadow-lg"
            />
            <span className="mt-2 text-sm text-white group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
              {logo.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {secondRow.map((logo, i) => (
          <motion.div
            key={i}
            custom={i + firstRow.length}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col items-center group"
          >
            <img
              src={logo.src}
              alt={logo.label}
              className="w-16 h-16 md:w-20 md:h-20 filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 drop-shadow-lg"
            />
            <span className="mt-2 text-sm text-white group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
              {logo.label}
            </span>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
