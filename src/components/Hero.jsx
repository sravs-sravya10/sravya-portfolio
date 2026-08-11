import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HeroCanvas } from './HeroCanvas';

import {
  ArrowRight,
  FileText,
  Send,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  MapPin,
} from 'lucide-react';

import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  /* =========================================
     TYPING TEXT
     ========================================= */

  const titles = [
    'Full Stack Developer',
    'AI & ML Student',
    'RAG & LLM Enthusiast',
    'React & FastAPI Developer',
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
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(
      handleTyping,
      typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    typedText,
    isDeleting,
    loopNum,
    typingSpeed,
  ]);

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        pt-28
        pb-16
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#05030a]
      "
    >

      {/* =========================================
          PARTICLE BACKGROUND
          ========================================= */}

      <HeroCanvas />

      {/* =========================================
          PURPLE BACKGROUND GLOWS
          ========================================= */}

      <div
        className="
          absolute
          top-1/4
          left-10
          w-96
          h-96
          bg-[#8B5CF6]/8
          rounded-full
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-1/4
          right-10
          w-[30rem]
          h-[30rem]
          bg-[#6D28D9]/8
          rounded-full
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[40rem]
          h-[40rem]
          bg-[#8B5CF6]/4
          rounded-full
          blur-[160px]
          pointer-events-none
        "
      />

      {/* =========================================
          MAIN CONTAINER
          ========================================= */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          z-10
          w-full
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            lg:gap-8
            items-center
          "
        >

          {/* =========================================
              LEFT SIDE
              ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              lg:col-span-7
              space-y-5
              text-center
              lg:text-left
            "
          >

            {/* =========================================
                AVAILABILITY BADGE
                ========================================= */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3.5
                py-1.5
                rounded-full
                bg-[#8B5CF6]/5
                border
                border-[#8B5CF6]/35
                backdrop-blur-md
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#A855F7]
                  animate-pulse
                  shadow-[0_0_10px_rgba(168,85,247,.8)]
                "
              />

              <span
                className="
                  text-xs
                  font-mono
                  text-[#C084FC]
                  tracking-wide
                  uppercase
                  flex
                  items-center
                  gap-1.5
                "
              >

                <Sparkles
                  size={13}
                  className="text-[#A855F7]"
                />

                Open to Engineering Roles & Internships

              </span>

            </div>

            {/* =========================================
                MAIN HEADING
                ========================================= */}

            <h1
              className="
                text-4xl
                sm:text-6xl
                lg:text-7xl
                font-extrabold
                tracking-tight
                font-heading
                leading-tight
              "
            >

              Hello, I'm
              <br />

              <span
                className="
                  text-gradient
                  drop-shadow-lg
                "
              >
                {personalInfo.name}
              </span>

            </h1>

            {/* =========================================
                TYPING TEXT
                ========================================= */}

            <div
              className="
                h-12
                flex
                items-center
                justify-center
                lg:justify-start
              "
            >

              <span
                className="
                  text-lg
                  sm:text-2xl
                  font-mono
                  text-slate-300
                  flex
                  items-center
                  gap-2
                "
              >

                <Terminal
                  size={22}
                  className="text-[#A855F7]"
                />

                <span className="text-[#C084FC] font-semibold">
                  {typedText}
                </span>

                <span
                  className="
                    w-2
                    h-6
                    bg-[#8B5CF6]
                    animate-pulse
                    ml-0.5
                    shadow-[0_0_10px_rgba(139,92,246,.7)]
                  "
                />

              </span>

            </div>

            {/* =========================================
                DESCRIPTION
                ========================================= */}

            <p
              className="
                text-slate-300
                text-base
                sm:text-lg
                max-w-2xl
                leading-relaxed
                mx-auto
                lg:mx-0
              "
            >
              {personalInfo.tagline}
            </p>

            {/* =========================================
                LOCATION / STATUS
                ========================================= */}

            <div
              className="
                flex
                items-center
                justify-center
                lg:justify-start
                gap-2
                text-xs
                font-mono
                text-slate-400
              "
            >

              <MapPin
                size={15}
                className="text-[#A855F7]"
              />

              <span>
                Andhra Pradesh, India
              </span>

              <span className="text-slate-600">
                •
              </span>

              <span className="text-[#C084FC]">
                Available for Opportunities
              </span>

            </div>

            {/* =========================================
                BUTTONS
                ========================================= */}

            <div
              className="
                pt-3
                flex
                flex-wrap
                items-center
                justify-center
                lg:justify-start
                gap-4
              "
            >

              {/* VIEW PROJECTS */}

              <a
                href="#projects"
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  px-6
                  py-3.5
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#6D28D9]
                  via-[#8B5CF6]
                  to-[#A855F7]
                  hover:from-[#8B5CF6]
                  hover:to-[#C084FC]
                  text-white
                  font-semibold
                  text-sm
                  shadow-xl
                  shadow-purple-500/25
                  hover:shadow-purple-500/45
                  transition-all
                  duration-300
                  transform
                  hover:-translate-y-1
                "
              >

                <span>
                  View Projects
                </span>

                <ArrowRight
                  size={17}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                  "
                />

              </a>

              {/* RESUME */}

              <button
                onClick={onOpenResume}
                className="
                  flex
                  items-center
                  gap-2.5
                  px-6
                  py-3.5
                  rounded-2xl
                  bg-white/5
                  hover:bg-[#8B5CF6]/10
                  border
                  border-white/15
                  hover:border-[#8B5CF6]/50
                  text-slate-200
                  hover:text-white
                  font-semibold
                  text-sm
                  backdrop-blur-md
                  transition-all
                  duration-300
                  transform
                  hover:-translate-y-1
                "
              >

                <FileText
                  size={17}
                  className="text-[#A855F7]"
                />

                <span>
                  Download Resume
                </span>

              </button>

              {/* CONTACT */}

              <a
                href="#contact"
                className="
                  flex
                  items-center
                  gap-2.5
                  px-6
                  py-3.5
                  rounded-2xl
                  bg-white/5
                  hover:bg-[#8B5CF6]/10
                  border
                  border-white/15
                  hover:border-[#8B5CF6]/40
                  text-slate-300
                  hover:text-white
                  font-semibold
                  text-sm
                  backdrop-blur-md
                  transition-all
                  duration-300
                  transform
                  hover:-translate-y-1
                "
              >

                <Send
                  size={16}
                  className="text-[#A855F7]"
                />

                <span>
                  Contact Me
                </span>

              </a>

            </div>

            {/* =========================================
                SOCIAL LINKS
                ========================================= */}

            <div
              className="
                pt-4
                flex
                items-center
                justify-center
                lg:justify-start
                gap-4
              "
            >

              <span
                className="
                  text-xs
                  font-mono
                  text-slate-400
                  uppercase
                  tracking-widest
                "
              >
                Connect:
              </span>

              <div className="flex gap-3">

                {/* GITHUB */}

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2.5
                    rounded-xl
                    bg-white/5
                    hover:bg-[#8B5CF6]/15
                    border
                    border-white/10
                    hover:border-[#8B5CF6]/50
                    text-slate-300
                    hover:text-[#C084FC]
                    transition-all
                    transform
                    hover:scale-110
                  "
                  title="GitHub"
                >
                  <Github size={18} />
                </a>

                {/* LINKEDIN */}

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2.5
                    rounded-xl
                    bg-white/5
                    hover:bg-[#8B5CF6]/15
                    border
                    border-white/10
                    hover:border-[#8B5CF6]/50
                    text-slate-300
                    hover:text-[#C084FC]
                    transition-all
                    transform
                    hover:scale-110
                  "
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>

                {/* EMAIL */}

                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="
                    p-2.5
                    rounded-xl
                    bg-white/5
                    hover:bg-[#8B5CF6]/15
                    border
                    border-white/10
                    hover:border-[#8B5CF6]/50
                    text-slate-300
                    hover:text-[#C084FC]
                    transition-all
                    transform
                    hover:scale-110
                  "
                  title="Email"
                >
                  <Mail size={18} />
                </a>

              </div>

            </div>

          </motion.div>

          {/* =========================================
              RIGHT SIDE — PROFILE
              ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              lg:col-span-5
              flex
              justify-center
              items-center
              mt-8
              lg:mt-0
            "
          >

            <div
              className="
                relative
                flex
                flex-col
                items-center
              "
            >

              {/* =========================================
                  OUTER ROTATING RING
                  ========================================= */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  w-[320px]
                  h-[320px]
                  sm:w-[325px]
                  sm:h-[325px]
                  rounded-full
                  border-[5px]
                  border-dashed
                  border-[#8B5CF6]
                  opacity-60
                "
              />

              {/* =========================================
                  OUTER PURPLE GLOW
                  ========================================= */}

              <div
                className="
                  absolute
                  w-80
                  h-80
                  rounded-full
                  bg-gradient-to-r
                  from-[#6D28D9]
                  via-[#8B5CF6]
                  to-[#C084FC]
                  blur-3xl
                  opacity-25
                "
              />

              {/* =========================================
                  INNER RING
                  ========================================= */}

              <div
                className="
                  absolute
                  w-[292px]
                  h-[292px]
                  sm:w-[298px]
                  sm:h-[298px]
                  rounded-full
                  border
                  border-[#C084FC]/40
                  shadow-[0_0_30px_rgba(139,92,246,.2)]
                "
              />

              {/* =========================================
                  PROFILE IMAGE
                  ========================================= */}

              <motion.img
                src="/profile.jpg"
                alt="Sravya Dannana"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  relative
                  w-[280px]
                  h-[280px]
                  sm:w-[285px]
                  sm:h-[285px]
                  rounded-full
                  object-cover
                  border-4
                  border-[#8B5CF6]
                  shadow-[0_0_55px_rgba(139,92,246,.55)]
                "
              />

              {/* =========================================
                  INTERNSHIP BADGE
                  ========================================= */}

              <div
                className="
                  mt-9
                  px-6
                  py-3
                  rounded-full
                  bg-[#8B5CF6]/10
                  border
                  border-[#8B5CF6]/70
                  text-[#C084FC]
                  font-semibold
                  text-sm
                  backdrop-blur-md
                  shadow-[0_0_25px_rgba(139,92,246,.15)]
                  hover:bg-[#8B5CF6]/15
                  hover:border-[#A855F7]
                  transition-all
                "
              >

                ✦ Open to Software Development & AI/ML Internships

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;