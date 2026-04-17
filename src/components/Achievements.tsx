"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Award, Briefcase, Code, Sparkles, Star, Globe } from "lucide-react";
import { MouseEvent } from "react";

// Chess Knight Inline SVG
const ChessKnightIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 3.5C14.5 3.5 12 5 12 7C12 9 14.5 10 14.5 10L14 12L10 12L7 16L7 21L17 21L17 14L14.5 12L15 8C15 8 16.5 8 16.5 6C16.5 4 14.5 3.5 14.5 3.5Z" />
    <path d="M12 10C12 10 9 7.5 7 9C5 10.5 5 12.5 5 12.5C5 12.5 7.5 13 8.5 13" />
    <path d="M11.5 16L12.5 21" />
  </svg>
);

const achievementsData = [
  {
    id: "fide-chess",
    title: "FIDE Chess Player",
    description: "International-level chess player demonstrating deep strategic expertise, advanced pattern recognition, and robust analytical thinking under pressure.",
    badge: "Top Achievement",
    icon: <ChessKnightIcon size={32} className="text-white drop-shadow-md" />,
    featured: true,
    url: "https://ratings.fide.com/profile/25922289",
    buttonText: "View FIDE Profile"
  },
  {
    id: "siemens-cert",
    title: "Siemens Internship Certificate",
    description: "Successfully completed Data Analyst Internship. Delivered high-impact automation tools and actionable BI dashboards.",
    badge: "Internship",
    icon: <Briefcase size={28} className="text-pink-bold" />,
    featured: false,
    url: "https://drive.google.com/file/d/1icFa4ohGvtkVi6I_Z3kKUKyrnQF7FTq8/view?usp=drive_link",
    buttonText: "View Certificate"
  },
  {
    id: "internshala-python",
    title: "Internshala Python Certification",
    description: "Completed comprehensive Python programming with AI certification, mastering core data structures and algorithmic concepts.",
    badge: "Certified",
    icon: <Code size={28} className="text-pink-bold" />,
    featured: false,
    url: "https://drive.google.com/file/d/1XTi3SqF9Q3XZ4yLgGRr6PsbPa95LBLxs/view?usp=sharing",
    buttonText: "View Certificate"
  },
  {
    id: "german-a1",
    title: "German Language – A1 Level 🇩🇪",
    description: "Achieved foundational proficiency in German language (A1 level). Currently continuously progressing towards the A2 certification.",
    badge: "Global Skill",
    icon: <Globe size={28} className="text-purple-500" />,
    featured: false,
    url: "https://drive.google.com/file/d/1JXj7XGQn1SPiK_eFDTPJ9ZhbYFlHtSOL/view?usp=sharing",
    buttonText: "View Certification"
  }
];

// Interactive 3D Tilt Card Component
const TiltCard = ({ item, index }: { item: typeof achievementsData[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Base card styling
  const isFeatured = item.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 80 }}
      style={{ perspective: 1000 }}
      className={`h-full outline-none ${isFeatured ? 'lg:col-span-1 md:col-span-2' : ''}`}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: isFeatured ? 1.05 : 1.03, y: -8 }}
        animate={
          isFeatured ? { y: [0, -8, 0] } : {}
        }
        transition={
          isFeatured ? { y: { duration: 4, repeat: Infinity, ease: "easeInOut" } } : { duration: 0.3 }
        }
        className={`relative h-full flex flex-col p-8 backdrop-blur-xl border shadow-xl rounded-[2rem] overflow-hidden group cursor-default transition-shadow duration-300 ${
          isFeatured 
            ? 'bg-gradient-to-br from-pink-bold/20 via-white/40 to-purple-500/10 border-pink-bold/50 shadow-pink-bold/20' 
            : 'bg-white/40 border-white/60 hover:shadow-2xl hover:shadow-pink-bold/10'
        }`}
      >
        {/* Glow pulsing effect for featured card */}
        {isFeatured && (
          <>
             <div className="absolute inset-0 bg-gradient-to-r from-pink-bold/10 via-purple-500/10 to-pink-soft/10 animate-pulse pointer-events-none z-0"></div>
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute -top-32 -right-32 w-64 h-64 bg-pink-bold/20 blur-[80px] rounded-full pointer-events-none z-0"
             />
          </>
        )}

        {/* Outer Glow on hover */}
        <div className={`absolute -inset-[1px] bg-gradient-to-br rounded-[2rem] z-0 transition-opacity duration-700 pointer-events-none opacity-0 group-hover:opacity-100 ${
          isFeatured 
            ? 'from-purple-500 via-pink-bold to-pink-soft' 
            : 'from-pink-bold/50 via-pink-medium/50 to-pink-soft/50'
        }`}></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Header row with Icon and Badge */}
          <div className="flex justify-between items-start mb-6">
            <div className={`p-4 rounded-2xl shadow-sm ${
              isFeatured 
                ? 'bg-gradient-to-br from-pink-bold to-purple-500 transform group-hover:scale-110 transition-transform shadow-pink-bold/40' 
                : 'bg-white/80 border border-white/50 group-hover:scale-110 transition-transform'
            }`}>
              {item.icon}
            </div>
            
            <div className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm ${
              isFeatured 
                ? 'bg-gradient-to-r from-pink-bold to-purple-500 text-white animate-pulse' 
                : 'bg-white/60 border border-white/80 text-slate-500'
            }`}>
              {isFeatured && <Star size={12} className="fill-white" />}
              {item.badge}
            </div>
          </div>

          <h3 className={`text-2xl font-bold mb-3 transition-colors ${
            isFeatured ? 'text-slate-800' : 'text-slate-800 group-hover:text-pink-bold'
          }`}>
            {item.title}
          </h3>
          
          <p className="text-slate-600 leading-relaxed text-sm md:text-base flex-grow mb-6">
            {item.description}
          </p>

          <div className={`mt-auto flex flex-wrap items-center gap-4 ${isFeatured ? 'justify-between' : 'justify-end'}`}>
            {/* Special element for Featured Card */}
            {isFeatured && (
               <div className="flex items-center gap-2 text-pink-bold font-semibold text-sm">
                 <Sparkles size={16} />
                 <span>Elite Strategic Expertise</span>
               </div>
            )}
            
            {item.url && (
               <a 
                 href={item.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className={`px-4 py-2 hover:shadow-lg rounded-full text-xs font-bold uppercase tracking-wider transition-all z-20 flex items-center ${
                   isFeatured 
                     ? 'bg-gradient-to-r from-pink-bold to-purple-500 hover:shadow-pink-bold/30 text-white' 
                     : 'bg-white/60 hover:bg-pink-soft/80 text-slate-600 hover:text-pink-bold border border-white/80'
                 }`}
               >
                 {item.buttonText}
               </a>
            )}
          </div>
          
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-pink-soft/20 overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-medium/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/80 shadow-sm rounded-full mb-2">
            <Award size={16} className="text-pink-bold" />
            <span className="text-sm font-semibold tracking-wider uppercase text-pink-bold">Recognitions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">Achievements & Certifications</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-bold to-pink-soft rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {achievementsData.map((item, idx) => (
            <TiltCard key={item.id} item={item} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
