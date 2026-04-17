"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, Star } from "lucide-react";

// Chess Knight Inline SVG
const ChessKnightIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 3.5C14.5 3.5 12 5 12 7C12 9 14.5 10 14.5 10L14 12L10 12L7 16L7 21L17 21L17 14L14.5 12L15 8C15 8 16.5 8 16.5 6C16.5 4 14.5 3.5 14.5 3.5Z" />
    <path d="M12 10C12 10 9 7.5 7 9C5 10.5 5 12.5 5 12.5C5 12.5 7.5 13 8.5 13" />
    <path d="M11.5 16L12.5 21" />
  </svg>
);

const experienceData = [
  {
    id: "siemens-intern",
    role: "Data Analyst Intern",
    company: "Siemens Ltd",
    location: "Kalwa",
    duration: "Jan 2025 – June 2025",
    type: "Internship",
    color: "pink",
    icon: <Briefcase size={20} className="text-white" />,
    tags: ["Python", "Streamlit", "SharePoint"],
    points: [
      "Automated large-scale energy data analysis using Python, improving reporting efficiency.",
      "Designed and deployed a SharePoint-based ticketing system for workflow automation.",
      "Developed dynamic dashboards and presentations for data-driven decision making.",
      "Built interactive prototypes using Streamlit and automation tools."
    ],
    url: "https://drive.google.com/file/d/1icFa4ohGvtkVi6I_Z3kKUKyrnQF7FTq8/view?usp=drive_link",
    buttonText: "View Internship Certificate"
  },
  {
    id: "chessbrainz-instructor",
    role: "Chess Instructor",
    company: "ChessBrainz",
    location: "Remote / Mentorship",
    duration: "2023 – 2025",
    type: "Teaching / Mentorship",
    color: "purple",
    icon: <ChessKnightIcon size={20} className="text-white" />,
    tags: ["Strategy", "Teaching", "Mentorship"],
    points: [
      "Trained young students in chess, focusing on strategic thinking and problem-solving.",
      "Conducted interactive sessions to improve analytical and decision-making skills.",
      "Designed structured lesson plans for beginner to intermediate learners.",
      "Encouraged competitive play through tournaments and practice sessions."
    ],
    url: "https://drive.google.com/file/d/1YR8ZDHiCcZcEi5YTjJzqkCPUrJWQ_RQu/view?usp=drive_link",
    buttonText: "View Recommendation Letter"
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the experience container for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative w-full py-24 lg:py-32 bg-slate-50 overflow-hidden">
      {/* Decorative subtle background overlay */}
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-pink-soft/10 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/80 shadow-sm rounded-full mb-2">
            <Briefcase size={16} className="text-pink-bold" />
            <span className="text-sm font-semibold tracking-wider uppercase text-pink-bold">Career Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">Professional Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-bold to-pink-soft rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto">
          
          {/* Vertical Line */}
          {/* Desktop Line (Centered) */}
          <div className="absolute left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-pink-soft/30 hidden md:block rounded-full">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-pink-bold via-purple-400 to-pink-soft rounded-full relative"
            >
              {/* Glowing leading drop */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-pink-bold rounded-full blur-[8px] opacity-80"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-white rounded-full opacity-90 animate-pulse"></div>
            </motion.div>
          </div>

          {/* Mobile Line (Left Aligned) */}
          <div className="absolute left-6 top-4 bottom-4 w-1 bg-pink-soft/30 md:hidden rounded-full">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-pink-bold via-purple-400 to-pink-soft rounded-full relative"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-pink-bold rounded-full blur-[8px] opacity-80"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-white rounded-full opacity-90 animate-pulse"></div>
            </motion.div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-28 relative">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isSiemens = item.color === "pink";
              const isPurple = item.color === "purple";
              
              return (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Central Node */}
                  <div className={`absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 z-20 flex items-center justify-center`}>
                    <motion.div 
                      whileInView={{ scale: [1, 1.3, 1] }} 
                      viewport={{ once: true, margin: "-200px" }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                      className={`absolute inset-0 rounded-full blur-md opacity-60 ${isPurple ? 'bg-purple-500' : 'bg-pink-bold'}`}
                    />
                    <div className={`w-10 h-10 rounded-full relative z-10 flex items-center justify-center shadow-lg border-2 border-white ${isPurple ? 'bg-gradient-to-br from-purple-400 to-purple-600' : 'bg-gradient-to-br from-pink-bold to-pink-medium'}`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Empty space for alternating layout on Desktop */}
                  <div className="hidden md:block w-1/2 px-10"></div>

                  {/* Card Container */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 60 : -60, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 90 }}
                    className={`w-full md:w-1/2 pl-20 pr-0 md:px-10 ${isEven ? "md:text-left" : "md:text-left"}`} // Always text-left for readability, just reversed layout container
                  >
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.03 }}
                      animate={isPurple ? { y: [0, -4, 0] } : {}}
                      transition={isPurple ? { y: { duration: 4, repeat: Infinity, ease: "easeInOut" } } : { duration: 0.3 }}
                      className={`relative p-8 backdrop-blur-xl border shadow-xl rounded-[2rem] group cursor-default transition-all duration-300 ${
                        isPurple ? 'bg-gradient-to-br from-purple-50/80 to-white/60 border-purple-200/60 shadow-purple-500/10 hover:shadow-purple-500/20' : 'bg-white/60 border-pink-100/60 shadow-pink-bold/10 hover:shadow-pink-bold/20'
                      }`}
                    >
                      {/* Gradient border overlay on hover */}
                      <div className={`absolute -inset-[1px] rounded-[2rem] z-0 transition-all duration-700 pointer-events-none opacity-0 group-hover:opacity-100 ${
                        isPurple ? 'bg-gradient-to-br from-purple-400/50 via-pink-medium/30 to-purple-200/50' : 'bg-gradient-to-br from-pink-bold/50 via-pink-medium/50 to-pink-soft/50'
                      }`}></div>
                      
                      <div className="relative z-10 flex flex-col h-full text-left">
                        
                        {/* Tags & Duration */}
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                          <span className={`px-4 py-1 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm ${
                            isPurple ? 'bg-gradient-to-r from-purple-500 to-purple-400' : 'bg-gradient-to-r from-pink-bold to-pink-medium'
                          }`}>
                            {item.type}
                          </span>
                          
                          {item.duration.includes("Present") && (
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-green-100/80 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm animate-pulse">
                              <Star size={12} className="fill-green-600 outline-none border-none" />
                              Current
                            </span>
                          )}

                          <span className="flex items-center gap-1.5 text-slate-500 text-sm font-semibold bg-white/80 px-3 py-1 rounded-full border border-slate-200 ml-auto">
                            <Calendar size={14} />
                            {item.duration}
                          </span>
                        </div>

                        {/* Role & Company */}
                        <h3 className={`text-2xl md:text-3xl font-bold mb-2 transition-colors ${
                          isPurple ? 'text-slate-800 group-hover:text-purple-600' : 'text-slate-800 group-hover:text-pink-bold'
                        }`}>
                          {item.role}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-slate-600 font-semibold mb-6">
                          {isPurple ? <Sparkles size={18} className="text-purple-500" /> : <Briefcase size={18} className="text-pink-medium" />}
                          <span className={`${isPurple ? 'text-purple-700' : 'text-pink-bold'} text-lg`}>{item.company}</span>
                          <span className="text-slate-300 mx-1">|</span>
                          <MapPin size={16} className="text-slate-400" />
                          <span>{item.location}</span>
                        </div>
                        
                        {/* Divider Line */}
                        <div className="w-full h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent mb-6 group-hover:from-pink-300 transition-colors"></div>

                        {/* Bullet Points */}
                        <ul className="space-y-4 mb-6">
                          {item.points.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-3">
                              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isPurple ? 'bg-purple-500' : 'bg-pink-medium'}`}></div>
                              <span className="text-slate-600 text-[15px] leading-relaxed">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Custom Tech Tags & Button */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-slate-100/50">
                          <div className="flex flex-wrap items-center gap-2">
                            {item.tags.map((tag, tIdx) => (
                              <span key={tIdx} className={`px-3 py-1 text-xs font-bold rounded-md bg-white/80 border shadow-sm transition-transform group-hover:-translate-y-0.5 delay-75 ${
                                isPurple ? 'text-purple-600 border-purple-100' : 'text-slate-600 border-slate-200'
                              }`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          {item.url && (
                             <a 
                               href={item.url} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className={`px-4 py-2 hover:shadow-lg rounded-full text-xs font-bold uppercase tracking-wider transition-all z-20 flex items-center ${
                                 isPurple 
                                   ? 'bg-gradient-to-r from-purple-500 to-purple-400 hover:shadow-purple-500/30 text-white' 
                                   : 'bg-gradient-to-r from-pink-bold to-pink-medium hover:shadow-pink-bold/30 text-white'
                               }`}
                             >
                               {item.buttonText}
                             </a>
                          )}
                        </div>

                      </div>
                    </motion.div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
