"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader2, MessageSquare } from "lucide-react";

// Inline SVGs to avoid import errors
const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const maxMessageLength = 500;

  // Custom Cursor Glow variables
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  const handleValidation = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim()) return "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address.";
    if (!formData.message.trim()) return "Message cannot be empty.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = handleValidation();
    if (error) {
      setErrorMsg(error);
      return;
    }
    
    setErrorMsg("");
    setStatus("loading");

    // Simulate API delay
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset back to idle after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-24 lg:py-32 bg-slate-50 overflow-hidden">
      {/* Decorative floating particles mimicking */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 bg-pink-soft/40 rounded-full blur-[80px]"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-[100px]"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/80 shadow-sm rounded-full mb-2">
            <MessageSquare size={16} className="text-pink-bold" />
            <span className="text-sm font-semibold tracking-wider uppercase text-pink-bold">Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-bold to-pink-soft rounded-full mx-auto mt-6"></div>
          <p className="text-slate-600 max-w-xl mx-auto pt-4 leading-relaxed">
            I’m always open to discussing tech opportunities, answering questions, or just having a quick chat!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            className="flex flex-col space-y-8"
          >
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:kirtim.suryarao@gmail.com" className="flex items-center gap-4 text-slate-600 hover:text-pink-bold transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white border border-pink-soft rounded-full shadow-sm group-hover:bg-pink-soft/20 group-hover:scale-110 transition-all">
                    <Mail size={20} className="text-pink-bold" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Email</p>
                    <p className="text-sm break-all">kirtim.suryarao@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-600 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white border border-pink-soft rounded-full shadow-sm group-hover:bg-pink-soft/20 group-hover:scale-110 transition-all">
                    <MapPin size={20} className="text-pink-bold" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Location</p>
                    <p className="text-sm">Navi Mumbai, India</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200/60 my-8"></div>

              <h4 className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-4">Official Networks</h4>
              <div className="flex gap-4">
                <a href="https://github.com/kirtisuryarao" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/60 border border-white/80 rounded-full text-slate-600 hover:text-pink-bold hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-bold/20 transition-all">
                  <GithubIcon size={22} />
                </a>
                <a href="https://www.linkedin.com/in/kirti-suryarao/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/60 border border-white/80 rounded-full text-slate-600 hover:text-pink-bold hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-bold/20 transition-all">
                  <LinkedinIcon size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 80 }}
            className="w-full"
          >
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative p-8 md:p-10 bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden group"
            >
              {/* Dynamic Gradient Border Hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-pink-bold/0 via-purple-500/0 to-pink-soft/0 group-hover:from-pink-bold/30 group-hover:via-purple-500/30 group-hover:to-pink-soft/30 rounded-[2.5rem] z-0 transition-opacity duration-700 pointer-events-none opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  
                  {status === "success" ? (
                    <motion.div 
                      key="success"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                        className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30"
                      >
                        <CheckCircle size={48} className="text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                        <p className="text-slate-600">I'll get back to you across the wire shortly.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      {/* Name Input */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          disabled={status === "loading"}
                          className="w-full px-5 py-4 bg-white/50 border border-white/80 rounded-2xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-medium/50 focus:border-pink-medium transition-all shadow-sm disabled:opacity-50"
                          placeholder="Jane Doe"
                        />
                      </motion.div>

                      {/* Email Input */}
                      <motion.div 
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.4 }}
                      >
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          disabled={status === "loading"}
                          className="w-full px-5 py-4 bg-white/50 border border-white/80 rounded-2xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-medium/50 focus:border-pink-medium transition-all shadow-sm disabled:opacity-50"
                          placeholder="jane@example.com"
                        />
                      </motion.div>

                      {/* Message Input */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex justify-between items-end mb-2 ml-1">
                          <label htmlFor="message" className="block text-sm font-bold text-slate-700">Message</label>
                          <span className={`text-xs font-semibold ${formData.message.length > maxMessageLength ? 'text-red-500' : 'text-slate-400'}`}>
                            {formData.message.length} / {maxMessageLength}
                          </span>
                        </div>
                        <textarea 
                          id="message"
                          rows={4}
                          maxLength={maxMessageLength}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          disabled={status === "loading"}
                          className="w-full px-5 py-4 bg-white/50 border border-white/80 rounded-2xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-medium/50 focus:border-pink-medium transition-all shadow-sm custom-scrollbar resize-none disabled:opacity-50"
                          placeholder="Hello! I'd like to discuss a project..."
                        />
                      </motion.div>

                      {/* Error Message */}
                      <AnimatePresence>
                        {errorMsg && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-red-500 text-sm font-semibold px-2"
                          >
                            {errorMsg}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit Button */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full py-4 px-8 bg-gradient-to-r from-pink-bold to-pink-medium hover:shadow-lg hover:shadow-pink-bold/30 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 size={24} className="animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <Send size={20} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform" />
                            </>
                          )}
                        </motion.button>
                      </motion.div>

                    </motion.form>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
