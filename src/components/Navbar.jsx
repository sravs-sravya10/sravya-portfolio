import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';

export const Navbar = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolledRatio = height > 0 ? (winScroll / height) * 100 : 0;

      setScrollProgress(scrolledRatio);

      const sections = navLinks.map((l) => l.href.substring(1));

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ================================
          NAVBAR
          ================================ */}

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#050505]/90 backdrop-blur-xl border-b border-red-500/20 shadow-2xl'
            : 'py-5 bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#D50032] via-[#FF1744] to-[#FF2B55] transition-all duration-150 z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* ================================
              LOGO
              ================================ */}

          <a href="#" className="flex items-center gap-2.5 group">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D50032] via-[#FF1744] to-[#FF2B55] p-[1.5px] transition-transform duration-300 group-hover:scale-105">

              <div className="w-full h-full bg-[#050505] rounded-[10px] flex items-center justify-center">

                <span className="font-heading font-bold text-[#FF1744] text-lg group-hover:text-white transition-colors">
                  SD
                </span>

              </div>
            </div>

            <div className="flex flex-col">

              <span className="font-heading font-bold text-lg tracking-wider text-white group-hover:text-[#FF1744] transition-colors">
                SRAVYA DANNANA
              </span>

              <span className="text-[10px] font-mono text-[#FF1744]/80 -mt-1 flex items-center gap-1">

                <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744] animate-pulse" />

                AI & Full Stack Dev

              </span>

            </div>
          </a>

          {/* ================================
              DESKTOP NAVIGATION
              ================================ */}

          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#111111]/80 border border-white/10 backdrop-blur-md">

            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.substring(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#FF1744] bg-[#FF1744]/10 shadow-sm border border-[#FF1744]/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

          </nav>

          {/* ================================
              DESKTOP BUTTONS
              ================================ */}

          <div className="hidden sm:flex items-center gap-3">

            {/* Theme Button */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-white/5 hover:bg-[#FF1744]/10 border border-white/10 text-slate-300 hover:text-[#FF1744] transition-all duration-300"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* Resume Button */}

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D50032] to-[#FF1744] hover:from-[#FF1744] hover:to-[#FF2B55] text-white font-medium text-xs shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

          </div>

          {/* ================================
              MOBILE BUTTONS
              ================================ */}

          <div className="flex sm:hidden items-center gap-2">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-[#FF1744] transition-colors"
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-[#FF1744] transition-colors"
            >
              {mobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>

        </div>
      </header>

      {/* ================================
          MOBILE MENU
          ================================ */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 sm:hidden p-4 bg-[#050505]/95 backdrop-blur-2xl border-b border-[#FF1744]/20 shadow-2xl"
          >

            <div className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-[#FF1744]/10 hover:text-[#FF1744] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2 border-t border-white/10 flex gap-2">

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#D50032] to-[#FF1744] hover:from-[#FF1744] hover:to-[#FF2B55] text-white font-medium text-sm shadow-lg shadow-red-500/20"
                >
                  <FileText size={16} />
                  <span>View Resume</span>
                </button>

              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;