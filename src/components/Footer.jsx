import React from 'react';
import {
  ArrowUp,
  Heart,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#050505] text-white border-t border-[#FF1744]/10">

      {/* =========================================
          RED GLOW
          ========================================= */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#FF1744]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================
            FOOTER TOP
            ========================================= */}

        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo + Name */}

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#D50032] to-[#FF1744] p-[1.5px] shadow-lg shadow-red-500/20">

              <div className="w-full h-full bg-[#050505] rounded-[10px] flex items-center justify-center">

                <span className="font-bold text-[#FF1744] text-lg">
                  SD
                </span>

              </div>

            </div>

            <div className="flex flex-col">

              <span className="font-bold text-lg tracking-wider text-white">
                SRAVYA DANNANA
              </span>

              <span className="text-[10px] font-mono text-[#FF1744] -mt-1">
                Full Stack Developer & AI/ML Engineer
              </span>

            </div>

          </div>

          {/* =========================================
              MADE WITH
              ========================================= */}

          <div className="flex items-center gap-1.5 font-mono text-slate-400 text-xs">

            <span>
              Made with
            </span>

            <Heart
              size={14}
              className="text-[#FF1744] fill-[#FF1744] animate-pulse"
            />

            <span>
              by{' '}
              <strong className="text-[#FF1744] font-semibold">
                Sravya Dannana
              </strong>
            </span>

          </div>

          {/* =========================================
              SOCIAL ICONS
              ========================================= */}

          <div className="flex items-center gap-3">

            {/* GitHub */}

            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-[#FF1744]/10 border border-transparent hover:border-[#FF1744]/30 text-slate-400 hover:text-[#FF4D6D] transition-all"
              title="GitHub"
            >
              <Github size={16} />
            </a>

            {/* LinkedIn */}

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-[#FF1744]/10 border border-transparent hover:border-[#FF1744]/30 text-slate-400 hover:text-[#FF4D6D] transition-all"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            {/* Email */}

            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-[#FF1744]/10 border border-transparent hover:border-[#FF1744]/30 text-slate-400 hover:text-[#FF4D6D] transition-all"
              title="Email"
            >
              <Mail size={16} />
            </a>

            {/* Back To Top */}

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#D50032] to-[#FF1744] text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:scale-110 transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>

          </div>

        </div>

        {/* =========================================
            COPYRIGHT
            ========================================= */}

        <div className="mt-2 pt-6 pb-8 border-t border-white/5 text-center font-mono text-[11px] text-slate-500">

          © {new Date().getFullYear()} Sravya Dannana. All rights reserved.
          Built with React.js, Tailwind CSS & Framer Motion.

        </div>

      </div>

    </footer>
  );
};

export default Footer;