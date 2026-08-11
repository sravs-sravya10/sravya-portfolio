import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen
          onComplete={() => setIsLoading(false)}
        />
      )}

      {/* Main Portfolio */}
      <div
        className="
          min-h-screen
          bg-[#05030a]
          text-white
          selection:bg-[#8B5CF6]
          selection:text-white
          font-sans
          relative
        "
      >

        {/* Custom Glowing Mouse Follower */}
        <CustomCursor />

        {/* Navigation Bar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* About & Education Section */}
        <About />

        {/* Achievements Counter Section */}
        <Achievements />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Certifications Section */}
        <Certifications />

        {/* Timeline Section */}
        <Timeline />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />

      </div>
    </>
  );
}