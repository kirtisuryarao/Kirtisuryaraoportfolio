"use client";

import { motion, Variants } from "framer-motion";
import { User, GraduationCap, Briefcase, Code, Sparkles, Cpu } from "lucide-react";

export default function About() {
  const highlightCards = [
    { icon: <GraduationCap className="text-pink-bold" size={20} />, title: "Education", text: "MCA student at NMIMS" },
    { icon: <Briefcase className="text-pink-bold" size={20} />, title: "Experience", text: "Data Analyst Intern at Siemens" },
    { icon: <Cpu className="text-pink-bold" size={20} />, title: "Expertise", text: "Python, AI/ML & Full-Stack" },
    { icon: <Sparkles className="text-pink-bold" size={20} />, title: "Passion", text: "Solving real-world problems" }
  ];

  const techTags = ["Python", "AI/ML", "FastAPI", "React", "Streamlit", "Power BI"];

  // Staggered animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-pink-soft/20 overflow-hidden">
      {/* Decorative background divider line */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-pink-medium/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Text Content */}
          <div className="flex flex-col space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="p-2.5 bg-white/60 backdrop-blur-md rounded-xl text-pink-bold shadow-sm border border-white/60">
                   <User size={24} />
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight">About Me</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-pink-medium">
                Aspiring Data Scientist & Developer
              </h3>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-pink-bold to-pink-soft rounded-full"></div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed">
              Aspiring Data Scientist with experience in building AI-powered applications, automating workflows, and developing interactive dashboards. Passionate about leveraging data and machine learning to create impactful solutions.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlightCards.map((card, idx) => (
                <div key={idx} className="flex flex-col p-4 bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm hover:shadow-md hover:border-pink-soft transition-all duration-300 gap-y-2 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/80 rounded-lg group-hover:scale-110 transition-transform shadow-sm">
                      {card.icon}
                    </div>
                    <span className="font-semibold text-slate-700">{card.title}</span>
                  </div>
                  <span className="text-slate-600 text-sm ml-14 -mt-2 leading-tight">{card.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Tech Tags */}
            <motion.div variants={itemVariants} className="pt-2">
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Code size={16} className="text-pink-medium" />
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {techTags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/60 backdrop-blur-md border border-white/80 rounded-full text-slate-700 text-sm font-medium shadow-sm hover:shadow-md hover:text-pink-bold hover:border-pink-soft transition-all cursor-default hover:-translate-y-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Animated Card / Snapshot */}
          <motion.div 
            variants={itemVariants}
            className="w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [0, 1.5, -1.5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-md cursor-pointer group"
            >
              {/* Outer decorative gradient border/glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-pink-bold via-pink-medium to-pink-soft rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-70 transition duration-700"></div>
              
              {/* Main Snapshot Card */}
              <div className="relative bg-white/20 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-[2.5rem] p-8 sm:p-10 overflow-hidden">
                {/* Background decorative blob inside card */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-pink-medium/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-pink-soft/30 rounded-full blur-3xl"></div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                  <div className="p-2 bg-white/60 rounded-xl shadow-sm border border-white/50">
                    <Sparkles className="text-pink-bold" size={24} />
                  </div>
                  Quick Snapshot
                </h3>
                
                <ul className="space-y-6 relative z-10">
                  <li className="flex items-center gap-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/60 shadow-sm text-2xl group-hover:scale-110 transition-transform">
                      🎓
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800 text-lg">MCA @ NMIMS</span>
                      <span className="text-slate-600 font-medium text-sm">Active Student</span>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/60 shadow-sm text-2xl group-hover:scale-110 transition-transform delay-75">
                      💼
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800 text-lg">Data Analyst Intern</span>
                      <span className="text-slate-600 font-medium text-sm">@ Siemens</span>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/60 shadow-sm text-2xl group-hover:scale-110 transition-transform delay-150">
                      🤖
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800 text-lg">AI/ML Enthusiast</span>
                      <span className="text-slate-600 font-medium text-sm">Building intelligent systems</span>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/60 shadow-sm text-2xl group-hover:scale-110 transition-transform delay-200">
                      ⚙️
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800 text-lg">Automation</span>
                      <span className="text-slate-600 font-medium text-sm">& Dashboards</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
