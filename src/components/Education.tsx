"use client";

import { motion, Variants } from "framer-motion";
import { 
  GraduationCap, 
  Database, 
  Brain, 
  Code, 
  LineChart, 
  Briefcase, 
  Sparkles,
  MapPin,
  Calendar,
  Award,
  BookOpen
} from "lucide-react";

export default function Education() {
  /* MCA Data */
  const mcaAreas = [
    {
      title: "Core Foundations",
      icon: <Database size={16} className="text-pink-600" />,
      items: ["Data Structures", "Algorithms", "DBMS", "OS"]
    },
    {
      title: "Advanced",
      icon: <Brain size={16} className="text-pink-600" />,
      items: ["AI", "ML", "Cloud", "Data Analysis"]
    },
    {
      title: "Development",
      icon: <Code size={16} className="text-pink-600" />,
      items: ["Full Stack", "Microservices"]
    },
    {
      title: "Industry Exposure",
      icon: <Briefcase size={16} className="text-pink-600" />,
      items: ["Mini Projects", "Internship", "Major Project"]
    }
  ];

  /* BCA Data */
  const bcaAreas = [
    {
      title: "Data & Analytics",
      icon: <LineChart size={16} className="text-purple-600" />,
      items: ["Data Warehousing & Mining", "Business Analytics", "Statistics", "Big Data (Hadoop)"]
    },
    {
      title: "Core Systems",
      icon: <Database size={16} className="text-purple-600" />,
      items: ["Data Structures", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
    },
    {
      title: "Development",
      icon: <Code size={16} className="text-purple-600" />,
      items: ["Web Development", "Java", "C, C#", "Object-Oriented Design"]
    }
  ];

  /* Animations */
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerTags: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const tagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <section id="education" className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-pink-soft/10 overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-soft/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/80 shadow-sm rounded-full mb-2">
            <GraduationCap size={16} className="text-pink-bold" />
            <span className="text-sm font-semibold tracking-wider uppercase text-pink-bold">Academics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">Education</h2>
          {/* Animated underline */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-bold to-purple-500 rounded-full mx-auto mt-6 relative overflow-hidden">
             <motion.div 
               className="absolute inset-0 bg-white/40"
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             />
          </div>
        </motion.div>

        {/* Education Cards Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto perspective-1000"
        >
          {/* MCA Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative w-full group"
          >
            {/* Animated gradient border glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-pink-bold/40 via-pink-medium/30 to-rose-400/30 rounded-[2rem] blur-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

            <div className="relative h-full p-6 sm:p-8 bg-white/30 backdrop-blur-lg border border-white/40 shadow-lg group-hover:shadow-pink-bold/20 rounded-[1.5rem] overflow-hidden z-10 transition-shadow duration-300 flex flex-col">
              
              {/* Background Blob inside Card */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-pink-medium/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

              <div className="relative z-10 flex-grow flex flex-col">
                {/* Header section */}
                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-pink-bold to-rose-400 rounded-xl shadow-md shadow-pink-bold/30 transform group-hover:scale-110 transition-transform shrink-0">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 border border-pink-200 text-pink-600 text-[10px] font-bold uppercase tracking-wider rounded-full mb-2">
                        <Sparkles size={12} />
                        Current Focus
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1 leading-tight">MCA</h3>
                      <div className="text-slate-500 font-medium text-sm sm:text-base flex items-center gap-1">
                        NMIMS (SVKM University)
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row xl:flex-col items-center xl:items-end gap-2 shrink-0 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 text-slate-600 font-medium bg-white/70 px-2.5 py-1 rounded-full border border-white/80 shadow-sm">
                      <Calendar size={14} className="text-pink-500" />
                      2025 – 2027
                    </div>
                  </div>
                </div>

                {/* Progress Timeline */}
                <div className="mb-6 w-full group/progress">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">
                    <span>2025</span>
                    <span className="text-pink-bold animate-pulse">Pursuing</span>
                    <span>2027</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200/60 rounded-full overflow-hidden border border-white/50 relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "30%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/30 blur-[2px]"></div>
                    </motion.div>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-pink-300/30 via-pink-200/20 to-transparent mb-6"></div>

                {/* Syllabus Areas Grid */}
                <motion.div 
                  variants={staggerTags}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-5 flex-grow"
                >
                  {mcaAreas.map((area, idx) => (
                    <div key={idx} className="space-y-2.5">
                      <h4 className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                        {area.icon}
                        {area.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {area.items.map((item, i) => (
                          <motion.span 
                            variants={tagVariants}
                            whileHover={{ scale: 1.05 }}
                            key={i} 
                            className="px-2.5 py-1 bg-white/60 backdrop-blur-sm border border-pink-100 hover:border-pink-300 hover:bg-pink-50 text-slate-600 text-xs font-medium rounded-full transition-colors cursor-default shadow-sm"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* BCA Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative w-full group"
          >
            {/* Animated gradient border glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/40 via-fuchsia-400/30 to-pink-400/30 rounded-[2rem] blur-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

            <div className="relative h-full p-6 sm:p-8 bg-white/30 backdrop-blur-lg border border-white/40 shadow-lg group-hover:shadow-purple-500/20 rounded-[1.5rem] overflow-hidden z-10 transition-shadow duration-300 flex flex-col">
              
              {/* Background Blob inside Card */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

              <div className="relative z-10 flex-grow flex flex-col">
                
                {/* Header section */}
                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-xl shadow-md shadow-purple-500/30 transform group-hover:scale-110 transition-transform shrink-0">
                      <BookOpen size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 border border-purple-200 text-purple-700 text-[10px] font-bold uppercase tracking-wider rounded-full mb-2">
                        <Award size={12} />
                        Strong Foundation
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1 leading-tight">BCA</h3>
                      <div className="text-slate-500 font-medium text-sm sm:text-base flex items-center gap-1">
                        Bharati Vidyapeeth
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row xl:flex-col items-center xl:items-end gap-2 shrink-0 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 text-slate-600 font-medium bg-white/70 px-2.5 py-1 rounded-full border border-white/80 shadow-sm">
                      <Award size={14} className="text-purple-500" />
                      CGPA: 9.17
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-5 mt-4 xl:mt-2">
                    <div className="h-px bg-gradient-to-r from-purple-300/40 to-transparent flex-grow"></div>
                    <span className="text-[10px] sm:text-xs font-semibold text-purple-600/80 uppercase tracking-widest px-2">Relevant Coursework</span>
                    <div className="h-px bg-gradient-to-l from-purple-300/40 to-transparent flex-grow"></div>
                </div>

                {/* Syllabus Areas Grid */}
                <motion.div 
                  variants={staggerTags}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-5 flex-grow"
                >
                  {bcaAreas.map((area, idx) => (
                    <div key={idx} className="space-y-2.5">
                      <h4 className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                        {area.icon}
                        {area.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {area.items.map((item, i) => (
                          <motion.span 
                            variants={tagVariants}
                            whileHover={{ scale: 1.05 }}
                            key={i} 
                            className="px-2.5 py-1 bg-white/60 backdrop-blur-sm border border-purple-100 hover:border-purple-300 hover:bg-purple-50 text-slate-600 text-xs font-medium rounded-full transition-colors cursor-default shadow-sm"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>

              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
