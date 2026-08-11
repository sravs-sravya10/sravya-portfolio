import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  Layers,
  CheckCircle2,
  Sparkles,
  Terminal,
} from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">

        {/* =========================================
            BACKGROUND
            ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* =========================================
            MODAL
            ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 20,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            relative
            max-w-3xl
            w-full
            glass-card
            p-6
            sm:p-8
            rounded-3xl
            border
            border-[#8B5CF6]/30
            bg-[#0A0712]/95
            z-10
            space-y-6
            max-h-[90vh]
            overflow-y-auto
          "
        >

          {/* =========================================
              HEADER
              ========================================= */}

          <div className="flex items-start justify-between gap-4">

            <div className="space-y-1">

              {/* CATEGORY */}

              <span className="
                px-3
                py-1
                rounded-full
                bg-[#8B5CF6]/10
                text-[#C084FC]
                border
                border-[#8B5CF6]/30
                text-xs
                font-mono
              ">
                {project.category}
              </span>

              {/* TITLE */}

              <h3 className="
                text-2xl
                sm:text-3xl
                font-extrabold
                font-heading
                text-white
                pt-2
              ">
                {project.title}
              </h3>

              {/* SUBTITLE */}

              <p className="text-xs font-mono text-[#A855F7]">
                {project.subtitle}
              </p>

            </div>

            {/* CLOSE BUTTON */}

            <button
              onClick={onClose}
              className="
                p-2
                rounded-xl
                bg-white/5
                hover:bg-[#8B5CF6]/10
                text-slate-400
                hover:text-[#C084FC]
                border
                border-transparent
                hover:border-[#8B5CF6]/30
                transition-colors
              "
            >
              <X size={20} />
            </button>

          </div>

          {/* =========================================
              PROJECT IMAGE
              ========================================= */}

          <div className="
            relative
            rounded-2xl
            overflow-hidden
            aspect-video
            border
            border-white/10
          ">

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#0A0712]
              via-transparent
              to-transparent
              opacity-80
            " />

          </div>

          {/* =========================================
              PROJECT OVERVIEW
              ========================================= */}

          <div className="space-y-3">

            <h4 className="
              text-sm
              font-mono
              text-slate-400
              uppercase
              tracking-wider
              flex
              items-center
              gap-2
            ">

              <Terminal
                size={15}
                className="text-[#A855F7]"
              />

              Project Overview

            </h4>

            <p className="
              text-slate-300
              text-sm
              sm:text-base
              leading-relaxed
            ">
              {project.description}
            </p>

          </div>

          {/* =========================================
              ARCHITECTURE
              ========================================= */}

          {project.details?.architecture && (

            <div className="
              p-4
              rounded-2xl
              bg-[#8B5CF6]/5
              border
              border-[#8B5CF6]/20
              space-y-2
            ">

              <span className="
                text-xs
                font-mono
                text-[#C084FC]
                uppercase
                tracking-wider
                flex
                items-center
                gap-2
              ">

                <Layers size={15} />

                Architecture & Data Pipeline

              </span>

              <p className="
                text-slate-300
                text-xs
                font-mono
                leading-relaxed
              ">
                {project.details.architecture}
              </p>

            </div>

          )}

          {/* =========================================
              KEY FEATURES
              ========================================= */}

          {project.details?.keyFeatures && (

            <div className="space-y-3">

              <h4 className="
                text-sm
                font-mono
                text-slate-400
                uppercase
                tracking-wider
                flex
                items-center
                gap-2
              ">

                <Sparkles
                  size={15}
                  className="text-[#C084FC]"
                />

                Key Features & Engineering Highlights

              </h4>

              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
              ">

                {project.details.keyFeatures.map(
                  (feat, idx) => (

                    <div
                      key={idx}
                      className="
                        flex
                        items-start
                        gap-2.5
                        p-3
                        rounded-xl
                        bg-white/5
                        border
                        border-white/5
                        hover:border-[#8B5CF6]/30
                        hover:bg-[#8B5CF6]/5
                        transition-all
                      "
                    >

                      <CheckCircle2
                        size={16}
                        className="
                          text-[#A855F7]
                          shrink-0
                          mt-0.5
                        "
                      />

                      <span className="text-xs text-slate-300">
                        {feat}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          )}

          {/* =========================================
              TECHNOLOGIES
              ========================================= */}

          <div className="space-y-2">

            <span className="
              text-xs
              font-mono
              text-slate-400
              uppercase
              tracking-wider
              block
            ">
              Technologies & Tools
            </span>

            <div className="flex flex-wrap gap-2">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="
                    px-3
                    py-1
                    rounded-lg
                    bg-[#8B5CF6]/10
                    border
                    border-[#8B5CF6]/20
                    text-xs
                    text-[#C084FC]
                    font-mono
                    hover:bg-[#8B5CF6]/20
                    hover:border-[#8B5CF6]/40
                    transition-all
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* =========================================
              ACTION BUTTONS
              ========================================= */}

          <div className="
            pt-4
            border-t
            border-white/10
            flex
            flex-wrap
            items-center
            gap-4
          ">

            {/* LIVE DEMO */}

            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-xl
                bg-gradient-to-r
                from-[#6D28D9]
                to-[#8B5CF6]
                hover:from-[#8B5CF6]
                hover:to-[#A855F7]
                text-white
                font-medium
                text-xs
                shadow-lg
                shadow-purple-500/20
                hover:shadow-purple-500/40
                transition-all
              "
            >

              <ExternalLink size={16} />

              <span>
                Live Demo
              </span>

            </a>

            {/* GITHUB */}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-xl
                bg-white/5
                hover:bg-[#8B5CF6]/10
                border
                border-white/10
                hover:border-[#8B5CF6]/30
                text-slate-300
                hover:text-[#C084FC]
                font-medium
                text-xs
                transition-all
              "
            >

              <Github size={16} />

              <span>
                GitHub Repository
              </span>

            </a>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;