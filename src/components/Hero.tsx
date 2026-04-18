"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const titleText = "Aspiring Data Scientist | AI/ML Enthusiast | Full Stack Developer";
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
        animate={{
          background: [
            "linear-gradient(45deg, #ff4d8d33, #ff85a233, #ffd6e033)",
            "linear-gradient(135deg, #ffd6e033, #ff4d8d33, #ff85a233)",
            "linear-gradient(225deg, #ff85a233, #ffd6e033, #ff4d8d33)",
            "linear-gradient(315deg, #ff4d8d33, #ff85a233, #ffd6e033)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating blurred blobs */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-bold/20 rounded-full mix-blend-multiply filter blur-[100px] z-0"
      />
      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-pink-medium/20 rounded-full mix-blend-multiply filter blur-[120px] z-0"
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise z-10 mix-blend-overlay"></div>

      {/* Main Content */}
      <div className="container relative z-20 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center py-20 lg:py-0">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex py-1.5 px-4 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm w-max items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-bold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-bold"></span>
            </span>
            <span className="text-pink-bold font-semibold tracking-wide text-xs md:text-sm uppercase">Welcome to my portfolio</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 tracking-tight leading-tight">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-bold to-pink-medium">
              Kirti Suryarao
            </span>
          </h1>

          {/* Typewriter Effect - simple implementation */}
          <div className="min-h-[4rem] md:min-h-[2rem] flex items-center pr-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-slate-600 leading-snug">
               {mounted ? (
                 titleText.split('').map((char, index) => (
                   <motion.span
                     key={index}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5 + index * 0.03 }}
                   >
                     {char}
                   </motion.span>
                 ))
               ) : (
                 <span className="opacity-0">{titleText}</span>
               )}
            </h2>
          </div>

          <p className="text-base md:text-lg text-slate-500 max-w-lg leading-relaxed italic border-l-4 border-pink-medium pl-4 py-1">
            "Building intelligent systems that solve real-world problems"
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <motion.a
               whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 77, 141, 0.4)" }}
               whileTap={{ scale: 0.95 }}
               href="#projects"
               className="flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-pink-bold to-pink-medium text-white rounded-2xl font-semibold shadow-lg transition-all"
            >
              <span>View Projects</span>
              <ExternalLink size={18} />
            </motion.a>

            <motion.a
               whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.7)" }}
               whileTap={{ scale: 0.95 }}
               href="https://drive.google.com/drive/folders/18byEzSLCaqilpiHA7v7DKC_ucQ0H_ENO?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-white/50 backdrop-blur-md text-slate-800 border border-white/60 rounded-2xl font-semibold shadow-sm transition-all"
            >
              <span>Download Resume</span>
              <Download size={18} />
            </motion.a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <motion.a 
               whileHover={{ scale: 1.1, y: -2 }}
               href="https://github.com/kirtisuryarao" 
               target="_blank"
               className="p-3.5 bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl text-slate-700 hover:text-pink-bold transition-colors shadow-sm"
            >
               <GithubIcon size={22} />
            </motion.a>
            <motion.a 
               whileHover={{ scale: 1.1, y: -2 }}
               href="https://www.linkedin.com/in/kirti-suryarao/" 
               target="_blank"
               className="p-3.5 bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl text-slate-700 hover:text-pink-bold transition-colors shadow-sm"
            >
               <LinkedinIcon size={22} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0"
        >
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glowing animated border effect - fixed sizing to match image wrapper */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-pink-bold via-pink-medium to-pink-soft rounded-[2.5rem] blur-xl opacity-50 animate-pulse z-0" />
            
            {/* Glassmorphism Card Wrapper */}
            <div className="relative z-10 p-4 bg-white/20 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-2xl">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden bg-slate-100 relative border border-white/30 shadow-inner">
                <Image
                  src="/1776503068749.png"
                  alt="Kirti Suryarao"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Floating decoration items */}
            <motion.div 
               animate={{ x: [-8, 8, -8], y: [-8, 8, -8], rotate: [0, 15, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 p-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl z-20 text-2xl"
            >
               ✨
            </motion.div>
            
            <motion.div 
               animate={{ x: [8, -8, 8], y: [5, -5, 5], rotate: [0, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -left-6 lg:-left-12 px-6 py-3.5 bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl z-20"
            >
               <div className="flex flex-col items-center justify-center">
                 <span className="text-pink-bold font-bold text-lg md:text-xl">AI/ML</span>
                 <span className="text-slate-600 text-xs md:text-sm font-semibold tracking-wider">ENTHUSIAST</span>
               </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
