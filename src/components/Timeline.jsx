import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Code, Layout, Server, Brain, Layers, Sparkles, Clock } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

const getTimelineIcon = (iconName) => {
  const icons = { Code, Layout, Server, Brain, Layers, Sparkles };
  const IconComp = icons[iconName] || GitCommit;
  return <IconComp size={20} />;
};

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Clock size={14} />
            <span>Growth & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Developer <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Chronological progression from core algorithms to AI-powered full stack solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 -translate-x-1/2 shadow-lg shadow-cyan-500/50" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className={`glass-card p-6 rounded-3xl border border-white/10 group hover:border-cyan-400/40 relative ${
                      isEven ? 'text-left' : 'text-left sm:text-right'
                    }`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 sm:top-1/2 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-[#070A12] border-2 border-cyan-400 p-1 flex items-center justify-center text-cyan-300 shadow-xl shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white">
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
