import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  User,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#05030a] text-white overflow-hidden"
    >
      {/* Subtle Purple Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6D28D9]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================
            SECTION HEADER
            ========================================= */}

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#A855F7] text-xs font-mono tracking-widest uppercase">
            <User size={14} />
            <span>About Me</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Driven by Curiosity &{' '}
            <span className="text-gradient">
              AI Innovation
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Engineering scalable web solutions integrated with modern artificial intelligence.
          </p>

        </div>

        {/* =========================================
            MAIN GRID
            ========================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* =========================================
              DEVELOPER PROFILE
              ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >

            <div className="space-y-6">

              {/* Profile Header */}

              <div className="flex items-center gap-3">

                <div className="p-3 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#A855F7]">
                  <Sparkles size={24} />
                </div>

                <div>

                  <h3 className="text-2xl font-bold font-heading text-white">
                    Developer Profile
                  </h3>

                  <p className="text-xs font-mono text-[#A855F7]">
                    Computer Science (AI & ML) Specialist
                  </p>

                </div>
              </div>

              {/* About Text */}

              <p className="text-slate-300 text-base leading-relaxed">
                {personalInfo.about}
              </p>

              {/* Highlights */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

                {personalInfo.education.highlights.map(
                  (highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/5 transition-all duration-300"
                    >

                      <CheckCircle2
                        size={18}
                        className="text-[#A855F7] shrink-0 mt-0.5"
                      />

                      <span className="text-xs text-slate-300 font-medium">
                        {highlight}
                      </span>

                    </div>
                  )
                )}

              </div>

            </div>

            {/* Bottom Information */}

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">

              <div className="flex items-center gap-2">

                <MapPin
                  size={15}
                  className="text-[#A855F7]"
                />

                <span>
                  {personalInfo.contact.location}
                </span>

              </div>

              <div className="flex items-center gap-2">

                <Calendar
                  size={15}
                  className="text-[#A855F7]"
                />

                <span>
                  Student Developer
                </span>

              </div>

            </div>

          </motion.div>

          {/* =========================================
              EDUCATION CARD
              ========================================= */}

          <motion.div
            id="education"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-8 rounded-3xl flex flex-col justify-between border-[#8B5CF6]/30 relative group"
          >

            <div className="space-y-6">

              {/* Education Header */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#6D28D9] to-[#8B5CF6] text-white shadow-lg shadow-purple-500/25">
                    <GraduationCap size={24} />
                  </div>

                  <div>

                    <h3 className="text-xl font-bold font-heading text-white">
                      Education
                    </h3>

                    <p className="text-xs font-mono text-[#A855F7]">
                      Academic Background
                    </p>

                  </div>

                </div>

                <span className="px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#C084FC] border border-[#8B5CF6]/30 font-mono text-xs">
                  {personalInfo.education.graduation}
                </span>

              </div>

              {/* Education Details */}

              <div className="space-y-4 pt-2">

                <div>

                  <h4 className="text-lg font-bold text-white group-hover:text-[#C084FC] transition-colors">
                    {personalInfo.education.degree}
                  </h4>

                  <p className="text-sm text-[#A855F7] font-medium">
                    {personalInfo.education.field}
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    {personalInfo.education.institution}
                  </p>

                </div>

                {/* =========================================
                    CGPA BOX
                    ========================================= */}

                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#8B5CF6]/10 via-[#6D28D9]/10 to-[#A855F7]/10 border border-[#8B5CF6]/30 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <Award
                      size={22}
                      className="text-[#A855F7]"
                    />

                    <div>

                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                        Cumulative GPA
                      </span>

                      <span className="text-2xl font-bold font-heading text-white">
                        {personalInfo.education.cgpa}
                      </span>

                      <span className="text-xs text-slate-400 ml-1">
                        / 10.0
                      </span>

                    </div>

                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-[#8B5CF6]/10 text-[#C084FC] text-xs font-mono font-semibold border border-[#8B5CF6]/30">
                    Active Student
                  </span>

                </div>

              </div>

            </div>

            {/* Education Footer */}

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400 font-mono">

              <BookOpen
                size={15}
                className="text-[#A855F7]"
              />

              <span>
                Core: Data Structures, Algorithms, Machine Learning, Web Dev
              </span>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;