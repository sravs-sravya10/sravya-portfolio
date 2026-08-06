import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, User, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Driven by Curiosity & <span className="text-gradient">AI Innovation</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering scalable web solutions integrated with modern artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bio Overview Card (Cols 7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">Developer Profile</h3>
                  <p className="text-xs font-mono text-cyan-400">Computer Science (AI & ML) Specialist</p>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {personalInfo.about}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {personalInfo.education.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                    <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-cyan-400" />
                <span>{personalInfo.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-purple-400" />
                <span>Student Developer</span>
              </div>
            </div>
          </motion.div>

          {/* Education Card (Cols 5) */}
          <motion.div
            id="education"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-8 rounded-3xl flex flex-col justify-between border-cyan-500/30 relative group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">Education</h3>
                    <p className="text-xs font-mono text-cyan-400">Academic Background</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono text-xs">
                  {personalInfo.education.graduation}
                </span>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {personalInfo.education.degree}
                  </h4>
                  <p className="text-sm text-cyan-400 font-medium">
                    {personalInfo.education.field}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {personalInfo.education.institution}
                  </p>
                </div>

                {/* CGPA Display Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border border-cyan-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Award size={22} className="text-amber-400" />
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Cumulative GPA</span>
                      <span className="text-2xl font-bold font-heading text-white">{personalInfo.education.cgpa}</span>
                      <span className="text-xs text-slate-400 ml-1">/ 10.0</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold border border-emerald-500/30">
                    Active Student
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <BookOpen size={15} className="text-indigo-400" />
              <span>Core: Data Structures, Algorithms, Machine Learning, Web Dev</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default About;