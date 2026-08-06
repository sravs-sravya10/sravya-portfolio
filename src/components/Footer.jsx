import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-[#05080E] border-t border-white/10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-[#070A12] rounded-[7px] flex items-center justify-center font-heading font-bold text-cyan-400 text-xs">
                SD
              </div>
            </div>
            <div className="space-y-0.5">
              <span className="font-heading font-bold text-white tracking-wide block">
                SRAVYA DANNANA
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Full Stack Developer & AI/ML Engineer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-slate-400 text-xs">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            <span>by <strong className="text-cyan-400 font-semibold">Sravya Dannana</strong></span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Email"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-110 transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center font-mono text-[11px] text-slate-500">
          © {new Date().getFullYear()} Sravya Dannana. All rights reserved. Built with React.js, Tailwind CSS & Framer Motion.
        </div>
      </div>
    </footer>
  );
};
export default Footer;