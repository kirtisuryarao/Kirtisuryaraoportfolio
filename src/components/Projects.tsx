"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Sparkles, Star } from "lucide-react";

const GithubIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18.13V22"></path>
  </svg>
);
// Project Type Definition
type Project = {
  id: string;
  title: string;
  description: string;
  categories: string[];
  techStack: string[];
  featured: boolean;
  githubUrl: string;
  demoUrl: string;
  details: {
    problemStatement: string;
    solutionApproach: string;
    features: string[];
    challenges: string;
    outcome: string;
  };
};

// Projects Data
const projectsData: Project[] = [
  {
    id: "cinesmart",
    title: "CineSmart – AI Movie Booking Assistant",
    description: "Voice-enabled assistant using Flutter + FastAPI with multi-turn conversations and automated booking.",
    categories: ["AI/ML"],
    techStack: ["Flutter", "FastAPI", "Python", "NLP"],
    featured: true,
    githubUrl: "https://github.com/kirtisuryarao/cinesmart",
    demoUrl: "#",
    details: {
      problemStatement: "Traditional movie booking apps require multiple clicks and complex navigation, which can be unappealing or inaccessible.",
      solutionApproach: "Built an intelligent voice conversational agent handling dynamic booking workflows using NLP.",
      features: [
        "Multi-turn conversational flows",
        "Context-aware session handling",
        "Automated theater & seat assignment",
        "Real-time voice-to-text processing"
      ],
      challenges: "Handling context loss during complex voice navigation and optimizing intent recognition latency.",
      outcome: "Reduced average booking time by 60% and achieved 92% intent accuracy."
    }
  },
  {
    id: "silenthelp",
    title: "SilentHelp – AI Accessibility Platform",
    description: "YOLO-based object detection and voice UI designed for visually impaired users with emergency alerts.",
    categories: ["AI/ML", "Systems"],
    techStack: ["Python", "YOLO", "OpenCV", "TensorFlow"],
    featured: true,
    githubUrl: "https://github.com/maahika2306-create/blindapp",
    demoUrl: "#",
    details: {
      problemStatement: "Visually impaired individuals face constant hurdles identifying surroundings and navigating safely.",
      solutionApproach: "Implemented real-time object detection via mobile camera feeding into a vocal announcement pipeline.",
      features: [
        "YOLOv8 real-time object detection",
        "Contextual voice UI integration",
        "SOS emergency alert system",
        "Low latency offline mode"
      ],
      challenges: "Deploying heavy object detection models onto mobile-grade edge hardware effectively.",
      outcome: "Created a functional, life-saving prototype capable of 15+ FPS on standard devices."
    }
  },
  {
    id: "bookmydoc",
    title: "BookMyDoc – Doctor Appointment System",
    description: "Secure health platform with JWT authentication, real-time scheduling, and advanced search filters.",
    categories: ["Web"],
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    featured: false,
    githubUrl: "https://github.com/diyalunawat/BookMyDoc",
    demoUrl: "#",
    details: {
      problemStatement: "Patients struggle to find available specialists quickly due to fragmented clinic systems.",
      solutionApproach: "Developed a centralized booking gateway with real-time slot synchronization.",
      features: [
        "Secure JWT-based user authentication",
        "Real-time schedule synchronization",
        "Advanced specialty & location search",
        "Automated email confirmations"
      ],
      challenges: "Preventing double-booking race conditions during high-traffic intervals.",
      outcome: "Processed 1000+ mock appointments smoothly with zero concurrency conflicts."
    }
  },
  {
    id: "ai-scheduler",
    title: "AI Process Scheduler",
    description: "OS simulation featuring CPU scheduling integrated with AI prediction (FCFS, SJF, RR, Priority).",
    categories: ["Systems", "AI/ML"],
    techStack: ["C++", "Python", "Machine Learning"],
    featured: false,
    githubUrl: "https://github.com/diyalunawat/Ai_Process_Scheduler",
    demoUrl: "#",
    details: {
      problemStatement: "Standard CPU scheduling algorithms lack adaptability to unpredictable process burst times.",
      solutionApproach: "Coupled classical OS algorithms with a predictive ML model to dynamically assign priorities.",
      features: [
        "FCFS, SJF, RR, Priority simulations",
        "Burst time prediction using regression",
        "Dynamic quantum adaptation",
        "Performance metrics dashboard"
      ],
      challenges: "Balancing the computational overhead of the prediction model against context switch gains.",
      outcome: "Improved overall turnaround time by 18% compared to standard Round Robin."
    }
  },
  {
    id: "bug-tracker",
    title: "Bug Tracking System",
    description: "Role-based workflow management system with real-time status tracking for engineering teams.",
    categories: ["Web"],
    techStack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    featured: false,
    githubUrl: "https://github.com/anugit28/Bug-Tracker-Project",
    demoUrl: "#",
    details: {
      problemStatement: "Small engineering teams often lose track of internal bugs using non-specialized chat tools.",
      solutionApproach: "Built a dedicated, lightweight kanban-style bug tracking dashboard with strict role schemas.",
      features: [
        "RBAC (Developer, Tester, Admin)",
        "Real-time status updates & comments",
        "Priority-deflection matrices",
        "Automated issue assignment"
      ],
      challenges: "Structuring the relational database to efficiently handle deeply nested comment threads.",
      outcome: "Streamlined QA workflows, reducing average bug lifecycle resolution by 25%."
    }
  }
];

const filters = ["All", "AI/ML", "Web", "Systems"];

// Card Component with cursor glow effect
const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="relative h-full outline-none"
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className="relative h-full flex flex-col p-6 sm:p-8 bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl rounded-[2rem] overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:shadow-pink-bold/20"
      >
        {/* Glow Follow Effect */}
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 77, 141, 0.1), transparent 40%)`
          }}
        />

        {/* Animated Gradient Border Overlay */}
        <div className="absolute -inset-[1px] bg-gradient-to-br from-pink-bold/0 via-pink-medium/0 to-pink-soft/0 group-hover:from-pink-bold/50 group-hover:via-pink-medium/50 group-hover:to-pink-soft/50 rounded-[2rem] z-0 transition-all duration-700 pointer-events-none opacity-0 group-hover:opacity-100"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Header & Badges */}
          <div className="flex justify-between items-start mb-4">
            {project.featured ? (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-pink-bold to-pink-medium text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                <Star size={12} className="fill-white" />
                Featured
              </div>
            ) : (
              <div className="px-3 py-1 bg-white/50 border border-white/60 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                {project.categories[0]}
              </div>
            )}
            <button className="p-2 bg-white/50 rounded-full text-slate-400 group-hover:text-pink-bold transition-colors">
              <ExternalLink size={18} />
            </button>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-pink-bold transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-600 line-clamp-3 mb-6 text-sm flex-grow">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-white/60 border border-white/80 rounded-full text-slate-600 text-xs font-medium shadow-sm transition-transform group-hover:-translate-y-0.5 delay-75">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-3 py-1 bg-white/40 border border-white/60 rounded-full text-slate-500 text-xs font-medium">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/40">
            <a 
              href={project.githubUrl} 
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-white/80 hover:border-pink-medium hover:text-pink-bold text-slate-700 rounded-xl font-medium text-sm transition-all z-20 group/btn"
            >
              <GithubIcon size={16} className="group-hover/btn:scale-110 transition-transform" />
              Source
            </a>
            <a 
              href={project.demoUrl} 
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-bold to-pink-medium hover:shadow-lg hover:shadow-pink-bold/30 text-white rounded-xl font-medium text-sm transition-all z-20 group/btn ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate skeleton loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Set body overflow when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const filteredProjects = projectsData.filter(p => 
    activeFilter === "All" ? true : p.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-pink-soft/10 to-slate-50 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/80 shadow-sm rounded-full mb-2">
            <Sparkles size={16} className="text-pink-bold" />
            <span className="text-sm font-semibold tracking-wider uppercase text-pink-bold">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-bold to-pink-soft rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter ? 'text-white' : 'text-slate-600 bg-white/50 border border-white/60 hover:bg-white/80 shadow-sm'
              }`}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-pink-bold to-pink-medium rounded-full shadow-md z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </motion.div>

        {/* Grid / Skeletons */}
        <div className="min-h-[500px]">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-96 bg-white/30 backdrop-blur-md rounded-[2rem] animate-pulse border border-white/40 shadow-sm"></div>
              ))}
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/90 backdrop-blur-2xl border border-white shadow-2xl rounded-3xl p-6 md:p-10 z-10 custom-scrollbar"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white rounded-full shadow-md text-slate-400 hover:text-pink-bold hover:rotate-90 transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col space-y-8 mt-4 md:mt-0">
                {/* Modal Header */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 pr-10">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-pink-soft/50 text-pink-bold rounded-full text-xs font-bold uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={selectedProject.githubUrl} target="_blank" className="flex items-center gap-2 text-slate-600 hover:text-pink-bold transition-colors font-medium">
                      <GithubIcon size={20} /> View Source
                    </a>
                    <a href={selectedProject.demoUrl} target="_blank" className="flex items-center gap-2 text-slate-600 hover:text-pink-bold transition-colors font-medium">
                      <ExternalLink size={20} /> View Live Demo
                    </a>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-200"></div>

                {/* Modal Body Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-slate-600 leading-relaxed text-sm lg:text-base">
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <span className="text-pink-medium">01.</span> Problem Statement
                      </h3>
                      <p>{selectedProject.details.problemStatement}</p>
                    </section>
                    
                    <section>
                      <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <span className="text-pink-medium">02.</span> Solution Approach
                      </h3>
                      <p>{selectedProject.details.solutionApproach}</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <span className="text-pink-medium">03.</span> Challenges Faced
                      </h3>
                      <p className="bg-pink-soft/30 border-l-4 border-pink-bold p-4 rounded-r-xl italic">
                        "{selectedProject.details.challenges}"
                      </p>
                    </section>
                  </div>

                  <div className="space-y-8">
                    <section>
                      <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="text-pink-medium">04.</span> Key Features
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.details.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Sparkles size={16} className="text-pink-medium shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <span className="text-pink-medium">05.</span> Outcome & Impact
                      </h3>
                      <div className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl shadow-lg border border-slate-700">
                        <p className="font-medium text-pink-soft">{selectedProject.details.outcome}</p>
                      </div>
                    </section>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
