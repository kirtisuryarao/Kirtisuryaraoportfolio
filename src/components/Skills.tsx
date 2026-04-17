"use client";

import { motion, Variants } from "framer-motion";
import { 
  Terminal, Layers, Database, Wrench, 
  Code, FileCode, Code2, Globe, Zap, Smartphone,
  Table, BarChart2, LayoutDashboard, FileSpreadsheet,
  GitBranch, Server, Brain, Bot
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Terminal className="text-pink-bold" size={24} />,
      skills: [
        { name: "Python", icon: <Code size={18} />, proficiency: 90 },
        { name: "JavaScript", icon: <FileCode size={18} />, proficiency: 80 },
        { name: "SQL", icon: <Database size={18} />, proficiency: 75 },
      ]
    },
    {
      title: "Frameworks",
      icon: <Layers className="text-pink-bold" size={24} />,
      skills: [
        { name: "React", icon: <Code2 size={18} />, proficiency: 80 },
        { name: "Next.js", icon: <Globe size={18} />, proficiency: 75 },
        { name: "FastAPI", icon: <Zap size={18} />, proficiency: 70 },
        { name: "Flutter", icon: <Smartphone size={18} />, proficiency: 60 },
      ]
    },
    {
      title: "Data Tools",
      icon: <BarChart2 className="text-pink-bold" size={24} />,
      skills: [
        { name: "Pandas", icon: <Table size={18} />, proficiency: 85 },
        { name: "Power BI", icon: <BarChart2 size={18} />, proficiency: 80 },
        { name: "Streamlit", icon: <LayoutDashboard size={18} />, proficiency: 85 },
        { name: "Excel", icon: <FileSpreadsheet size={18} />, proficiency: 90 },
      ]
    },
    {
      title: "Others",
      icon: <Wrench className="text-pink-bold" size={24} />,
      skills: [
        { name: "Git", icon: <GitBranch size={18} />, proficiency: 85 },
        { name: "DBMS", icon: <Server size={18} />, proficiency: 80 },
        { name: "AI/ML", icon: <Brain size={18} />, proficiency: 75 },
        { name: "Automation", icon: <Bot size={18} />, proficiency: 80 },
      ]
    }
  ];

  /* Animations */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="relative w-full py-20 lg:py-32 bg-slate-50 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-soft/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight">Skills & Expertise</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Technologies and tools I use to build impactful solutions
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-bold to-pink-soft rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group h-full cursor-default"
            >
              {/* Animated outer glowing border */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-bold via-pink-medium to-pink-soft rounded-[2rem] blur-md opacity-0 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Glassmorphism Card */}
              <div className="relative h-full flex flex-col p-8 bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl rounded-[2rem] z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-3 bg-white/80 rounded-xl shadow-sm border border-white/50"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                </div>
                
                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-pink-medium/30 to-transparent mb-6"></div>

                {/* Skills List */}
                <ul className="space-y-6 flex-1">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex flex-col gap-2 group/item">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-700 font-medium">
                           <span className="text-pink-medium/80 group-hover/item:text-pink-bold transition-colors">
                             {skill.icon}
                           </span>
                           <span>{skill.name}</span>
                        </div>
                        <span className="text-xs font-bold text-slate-500">{skill.proficiency}%</span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 bg-slate-200/60 rounded-full overflow-hidden border border-white/50">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-pink-medium to-pink-bold rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 1, delay: 0.2 + (skillIdx * 0.1), ease: "easeOut" }}
                        >
                          {/* Inner shimmer effect on bar */}
                          <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-sm"></div>
                        </motion.div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
