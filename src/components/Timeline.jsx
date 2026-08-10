import React from 'react';
import { motion } from 'framer-motion';
import {
  GitCommit,
  Code,
  Layout,
  Server,
  Brain,
  Layers,
  Sparkles,
  Clock,
} from 'lucide-react';

import { timelineData } from '../data/portfolioData';

const getTimelineIcon = (iconName) => {
  const icons = {
    Code,
    Layout,
    Server,
    Brain,
    Layers,
    Sparkles,
  };

  const IconComp = icons[iconName] || GitCommit;

  return <IconComp size={18} />;
};

export const Timeline = () => {
  return (
    <section
      id="timeline"
      className="relative py-24 bg-[#050505] text-white overflow-hidden"
    >
      {/* =========================================
          BACKGROUND RED GLOWS
          ========================================= */}

      <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF1744]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-[#D50032]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================
            SECTION HEADER
            ========================================= */}

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF1744]/10 border border-[#FF1744]/30 text-[#FF1744] text-xs font-mono tracking-widest uppercase">

            <Clock size={14} />

            <span>
              Growth & Milestones
            </span>

          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">

            Developer{' '}

            <span className="text-gradient">
              Journey
            </span>

          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Chronological progression from core algorithms to AI-powered
            full stack solutions.
          </p>

        </div>

        {/* =========================================
            TIMELINE
            ========================================= */}

        <div className="relative max-w-4xl mx-auto">

          {/* Red Timeline Line */}

          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D50032] via-[#FF1744] to-[#FF2B55] -translate-x-1/2 shadow-lg shadow-red-500/30" />

          <div className="space-y-12">

            {timelineData.map((item, index) => {

              const isEven = index % 2 === 0;

              return (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >

                  {/* =========================================
                      TIMELINE CARD
                      ========================================= */}

                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">

                    <div
                      className={`glass-card p-6 rounded-3xl border border-white/10 group hover:border-[#FF1744]/50 relative transition-all duration-300 ${
                        isEven
                          ? 'text-left'
                          : 'text-left sm:text-right'
                      }`}
                    >

                      {/* Year */}

                      <span className="inline-block px-3 py-1 rounded-full bg-[#FF1744]/10 text-[#FF4D6D] border border-[#FF1744]/30 text-xs font-mono mb-3">

                        {item.year}

                      </span>

                      {/* Title */}

                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#FF4D6D] transition-colors">

                        {item.title}

                      </h3>

                      {/* Description */}

                      <p className="text-slate-300 text-xs leading-relaxed mt-2">

                        {item.description}

                      </p>

                    </div>

                  </div>

                  {/* =========================================
                      TIMELINE ICON
                      ========================================= */}

                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 sm:top-1/2 -translate-y-1/2 z-10">

                    <div className="w-10 h-10 rounded-full bg-[#050505] border-2 border-[#FF1744] p-1 flex items-center justify-center text-[#FF4D6D] shadow-xl shadow-red-500/30 transition-transform hover:scale-110">

                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#D50032] to-[#FF1744] flex items-center justify-center text-white">

                        {getTimelineIcon(item.icon)}

                      </div>

                    </div>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;