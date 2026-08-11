import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Cpu,
  Database,
  BrainCircuit,
  Terminal,
  Sparkles,
  Search,
  FileCode,
  Code2,
  Layout,
  Palette,
  Atom,
  Grid,
  Server,
  Zap,
  Network,
  Layers,
  Box,
  Bot,
  Smile,
  Workflow,
  GitBranch,
  Globe,
  FileText,
  Lightbulb,
  MessageSquare,
  Users,
  Compass,
  Flame,
} from 'lucide-react';

import { skillsData } from '../data/portfolioData';

const getSkillIcon = (iconName) => {
  const icons = {
    FileCode,
    Code2,
    Layout,
    Palette,
    Atom,
    Grid,
    Server,
    Zap,
    Network,
    Database,
    Layers,
    Box,
    BrainCircuit,
    Bot,
    Sparkles,
    Smile,
    Workflow,
    GitBranch,
    Terminal,
    Globe,
    Search,
    FileText,
    Lightbulb,
    MessageSquare,
    Users,
    Compass,
    Flame,
    Cpu,
  };

  const IconComponent = icons[iconName] || Code;

  return <IconComponent size={22} />;
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    ...skillsData.map((item) => item.category),
  ];

  const filteredCategories = skillsData
    .map((category) => {
      if (
        selectedCategory !== 'All' &&
        category.category !== selectedCategory
      ) {
        return null;
      }

      const filteredSkills = category.skills.filter((skill) =>
        skill.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );

      if (filteredSkills.length === 0) return null;

      return {
        ...category,
        skills: filteredSkills,
      };
    })
    .filter(Boolean);

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#05030a] text-white overflow-hidden"
    >
      {/* =========================================
          BACKGROUND PURPLE GLOWS
          ========================================= */}

      <div className="absolute top-20 left-10 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6D28D9]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================
            SECTION HEADER
            ========================================= */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#A855F7] text-xs uppercase tracking-widest font-mono">

            <Cpu size={15} />

            Tech Stack & Competencies

          </div>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white">

            Skills &{' '}

            <span className="text-gradient">
              Technologies
            </span>

          </h2>

          <p className="mt-4 text-slate-400">
            Technologies and tools I use to build modern web applications
            and AI solutions.
          </p>

        </div>

        {/* =========================================
            CATEGORY + SEARCH
            ========================================= */}

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">

          {/* Categories */}

          <div className="flex flex-wrap gap-2">

            {categories.map((cat) => (

              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-lg shadow-purple-500/20 border border-[#8B5CF6]/40'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 hover:text-[#A855F7]'
                }`}
              >
                {cat}
              </button>

            ))}

          </div>

          {/* Search */}

          <div className="relative w-full md:w-72">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A855F7]"
            />

            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 rounded-xl border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/30 transition-all"
            />

          </div>

        </div>

        {/* =========================================
            SKILLS
            ========================================= */}

        <AnimatePresence mode="wait">

          {filteredCategories.map((group) => (

            <motion.div
              key={group.category}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="mb-12"
            >

              {/* Category Header */}

              <div className="flex items-center gap-3 mb-6">

                <span className="w-3 h-3 bg-[#8B5CF6] rounded-full shadow-[0_0_12px_rgba(139,92,246,.6)]" />

                <h3 className="text-2xl font-bold text-white">
                  {group.category}
                </h3>

                <span className="text-[#A855F7] text-sm">
                  ({group.skills.length})
                </span>

              </div>

              {/* Skill Cards */}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {group.skills.map((skill, index) => (

                  <motion.div
                    key={skill.name}
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="glass-card p-6 rounded-2xl hover:border-[#8B5CF6]/50 hover:shadow-[0_0_25px_rgba(139,92,246,.08)]"
                  >

                    {/* Skill Header */}

                    <div className="flex justify-between items-center mb-5">

                      <div className="flex items-center gap-3">

                        {/* Icon */}

                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] text-white shadow-lg shadow-purple-500/20">

                          {getSkillIcon(skill.icon)}

                        </div>

                        <div>

                          <h4 className="text-white font-semibold">
                            {skill.name}
                          </h4>

                          <p className="text-slate-400 text-xs">
                            {group.category}
                          </p>

                        </div>

                      </div>

                      {/* Percentage */}

                      <span className="text-[#A855F7] font-semibold">
                        {skill.level}%
                      </span>

                    </div>

                    {/* Progress Bar */}

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#A855F7] shadow-[0_0_10px_rgba(139,92,246,.35)]"
                      />

                    </div>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </AnimatePresence>

        {/* =========================================
            NO RESULTS
            ========================================= */}

        {filteredCategories.length === 0 && (

          <div className="text-center text-slate-400 py-10">

            No skills found matching "{searchQuery}".

          </div>

        )}

      </div>
    </section>
  );
};

export default Skills;