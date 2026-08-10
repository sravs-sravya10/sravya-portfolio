import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  FolderGit2,
  Search,
  ArrowUpRight
} from 'lucide-react';

import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'AI & ML', 'Full Stack'];

  const filteredProjects = projectsData.filter((proj) => {
    const matchesCat =
      selectedCategory === 'All' ||
      proj.category === selectedCategory;

    const matchesSearch =
      proj.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      proj.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      proj.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCat && matchesSearch;
  });

  return (
    <section
      id="projects"
      className="relative py-20 bg-[#050505] text-white overflow-hidden"
    >

      {/* RED BACKGROUND GLOW */}

      <div className="absolute top-20 left-10 w-80 h-80 bg-[#FF1744]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D50032]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}

        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF1744]/10 border border-[#FF1744]/30 text-[#FF1744] text-xs font-mono tracking-widest uppercase">

            <FolderGit2 size={14} />

            <span>Featured Portfolio</span>

          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">

            Innovating with{' '}

            <span className="text-gradient">
              AI & Full Stack
            </span>

          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Real-world applications built with RAG architectures, local
            LLMs, FastAPI, vector search, and responsive frontend systems.
          </p>

        </div>

        {/* FILTERS + SEARCH */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">

          <div className="flex items-center gap-2">

            {categories.map((cat) => (

              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#D50032] to-[#FF1744] text-white shadow-lg shadow-red-500/20 border border-[#FF1744]/50'
                    : 'bg-white/5 hover:bg-[#FF1744]/10 text-slate-300 hover:text-[#FF1744] border border-white/10 hover:border-[#FF1744]/30'
                }`}
              >
                {cat}
              </button>

            ))}

          </div>

          {/* SEARCH */}

          <div className="relative w-full md:w-64">

            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF1744]"
            />

            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#FF1744]/60 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#FF1744]/20 transition-colors"
            />

          </div>

        </div>

        {/* PROJECT CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">

          <AnimatePresence mode="wait">

            {filteredProjects.map((project) => (

              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95
                }}
                transition={{
                  duration: 0.4
                }}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 group hover:border-[#FF1744]/50 flex flex-col justify-between"
              >

                {/* PROJECT IMAGE */}

                <div className="relative overflow-hidden aspect-[16/8]">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                  {/* CATEGORY */}

                  <div className="absolute top-3 left-3 z-10">

                    <span className="px-2.5 py-1 rounded-full bg-[#050505]/75 backdrop-blur-md text-[#FF4D6D] border border-[#FF1744]/40 text-[11px] font-mono">

                      {project.category}

                    </span>

                  </div>

                  {/* OPEN PROJECT */}

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#050505]/75 hover:bg-[#FF1744] text-white backdrop-blur-md border border-white/20 hover:border-[#FF1744] transition-all transform hover:scale-110"
                    title="View Project Details"
                  >

                    <ArrowUpRight size={16} />

                  </button>

                </div>

                {/* PROJECT INFORMATION */}

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">

                  <div className="space-y-1.5">

                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#FF4D6D] transition-colors">

                      {project.title}

                    </h3>

                    <p className="text-[11px] font-mono text-[#FF1744]">

                      {project.subtitle}

                    </p>

                    <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-3">

                      {project.description}

                    </p>

                  </div>

                  {/* TECHNOLOGIES */}

                  <div className="pt-1 space-y-2">

                    <div className="flex flex-wrap gap-1">

                      {project.technologies
                        .slice(0, 6)
                        .map((tech) => (

                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 font-mono"
                          >
                            {tech}
                          </span>

                        ))}

                      {project.technologies.length > 6 && (

                        <span className="px-2 py-0.5 rounded-md bg-[#FF1744]/10 text-[#FF1744] text-[10px] font-mono">

                          +{project.technologies.length - 6} more

                        </span>

                      )}

                    </div>

                    {/* ACTIONS */}

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">

                      <button
                        onClick={() =>
                          setActiveModalProject(project)
                        }
                        className="text-[11px] font-mono text-[#FF1744] hover:text-[#FF4D6D] flex items-center gap-1 font-semibold transition-colors"
                      >
                        Deep Dive Specs →
                      </button>

                      <div className="flex items-center gap-2">

                        {/* LIVE DEMO */}

                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#FF1744]/10 hover:bg-[#FF1744]/20 text-[#FF4D6D] border border-[#FF1744]/30 hover:border-[#FF1744]/60 text-[10px] font-medium transition-colors"
                        >

                          <ExternalLink size={12} />

                          <span>
                            Live Demo
                          </span>

                        </a>

                        {/* GITHUB */}

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#FF1744]/10 text-slate-300 hover:text-white border border-white/10 hover:border-[#FF1744]/30 text-[10px] font-medium transition-colors"
                        >

                          <Github size={12} />

                          <span>
                            GitHub
                          </span>

                        </a>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </AnimatePresence>

        </div>

        {/* PROJECT MODAL */}

        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>

    </section>
  );
};

export default Projects;