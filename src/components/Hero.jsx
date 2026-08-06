import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroCanvas } from './HeroCanvas';
import { ArrowRight, FileText, Send, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Full Stack Developer",
    "AI & ML Student",
    "RAG & LLM Architect",
    "FastAPI & React Developer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setTypedText(
        isDeleting 
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 60 : 120);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <HeroCanvas />

      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono text-cyan-300 tracking-wide uppercase flex items-center gap-1.5">
                <Sparkles size={13} className="text-cyan-400" />
                Available for Engineering Roles & Internships
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-tight">
              Hello, I'm <br />
              <span className="text-gradient drop-shadow-lg">
                {personalInfo.name}
              </span>
            </h1>

            <div className="h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl font-mono text-slate-300 flex items-center gap-2">
                <Terminal size={22} className="text-cyan-400" />
                <span className="text-cyan-300 font-semibold">{typedText}</span>
                <span className="w-2 h-6 bg-cyan-400 animate-pulse ml-0.5" />
              </span>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personalInfo.tagline}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>View Projects</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-cyan-400/40 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <FileText size={17} className="text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white font-semibold text-sm backdrop-blur-md transition-all duration-300"
              >
                <Send size={16} className="text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Connect:</span>
              <div className="flex gap-3">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 transition-all transform hover:scale-110"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-400/40 text-slate-300 hover:text-indigo-400 transition-all transform hover:scale-110"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-400/40 text-slate-300 hover:text-purple-400 transition-all transform hover:scale-110"
                  title="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>

         <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="lg:col-span-5 flex justify-center items-center mt-10"
>
  <div className="relative flex flex-col items-center">

    {/* Rotating Glow */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[340px] h-[340px] rounded-full border-[6px] border-dashed border-cyan-400 opacity-70"
    />

    {/* Outer Glow */}
    <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-3xl opacity-30"></div>

    {/* Profile Image */}
    <motion.img
      src="/profile.jpg"
      alt="Sravya"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
     className="relative w-[300px] h-[300px] rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_60px_rgba(0,255,255,.7)]"
    />

    {/* Internship Badge */}
    <div className="mt-10 px-8 py-3 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 font-semibold backdrop-blur-md">
        🚀 Available for Internships
    </div>

  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;