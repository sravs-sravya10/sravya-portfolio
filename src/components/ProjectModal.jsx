import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Layers, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-3xl w-full glass-card p-6 sm:p-8 rounded-3xl border border-white/20 bg-[#0B0F19]/95 z-10 space-y-6 max-h-[90vh] overflow-y-auto"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white pt-2">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Terminal size={15} className="text-cyan-400" />
              Project Overview
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.details?.architecture && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider flex items-center gap-2">
                <Layers size={15} />
                Architecture & Data Pipeline
              </span>
              <p className="text-slate-300 text-xs font-mono leading-relaxed">
                {project.details.architecture}
              </p>
            </div>
          )}

          {project.details?.keyFeatures && (
            <div className="space-y-3">
              <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={15} className="text-amber-400" />
                Key Features & Engineering Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.details.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Technologies & Tools</span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-cyan-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-cyan-500/20"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium text-xs"
            >
              <Github size={16} />
              <span>GitHub Repository</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
