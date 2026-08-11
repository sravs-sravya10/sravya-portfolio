import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Cpu,
  FileCode,
  Briefcase,
  ShieldCheck,
  Cloud,
  CheckCircle2,
  X,
} from 'lucide-react';

import { certificationsData } from '../data/portfolioData';

const getCertIcon = (iconName) => {
  const icons = {
    Cpu,
    FileCode,
    Briefcase,
    ShieldCheck,
    Cloud,
  };

  const IconComp = icons[iconName] || Award;

  return <IconComp size={24} />;
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certifications"
      className="relative py-24 bg-[#05030a] text-white overflow-hidden"
    >
      {/* =========================================
          BACKGROUND PURPLE GLOWS
          ========================================= */}

      <div className="absolute top-20 left-10 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-[#6D28D9]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================
            SECTION HEADER
            ========================================= */}

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#A855F7] text-xs font-mono tracking-widest uppercase">
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Certifications &{' '}
            <span className="text-gradient">
              Badges
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Industry-recognized credentials from NVIDIA, Infosys,
            Google Cloud, Microsoft, EY and CodSoft.
          </p>

        </div>

        {/* =========================================
            CERTIFICATION CARDS
            ========================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificationsData.map((cert, index) => (

            <motion.div
              key={cert.title}

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

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              onClick={() => setSelectedCert(cert)}

              className="glass-card p-7 rounded-3xl cursor-pointer border border-white/10 group hover:border-[#8B5CF6]/50 relative overflow-hidden flex flex-col justify-between"
            >

              <div className="space-y-4">

                {/* Top Row */}

                <div className="flex items-center justify-between">

                  {/* Certificate Icon */}

                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] text-white shadow-lg shadow-purple-500/20">
                    {getCertIcon(cert.iconName)}
                  </div>

                  {/* Date */}

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C084FC]">
                    {cert.date}
                  </span>

                </div>

                {/* Certificate Title */}

                <div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#C084FC] transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[#A855F7] font-mono">
                    Issuer: {cert.issuer}
                  </p>

                </div>

                {/* Description */}

                <p className="text-slate-300 text-sm leading-relaxed">
                  {cert.description}
                </p>

              </div>

              {/* Card Footer */}

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">

                <div className="flex items-center gap-2 text-[#C084FC] text-xs font-mono">
                  <CheckCircle2 size={15} />
                  Verified Credential
                </div>

                <span className="text-[#A855F7] font-semibold group-hover:translate-x-1 transition-transform">
                  View →
                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* =========================================
          CERTIFICATE MODAL
          ========================================= */}

      <AnimatePresence>

        {selectedCert && (

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            {/* Background */}

            <motion.div
              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              exit={{
                opacity: 0,
              }}

              onClick={() => setSelectedCert(null)}

              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Popup */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 0.9,
              }}

              className="relative max-w-3xl w-full glass-card p-8 rounded-3xl border border-[#8B5CF6]/40 bg-[#0A0712]/95 z-10 overflow-y-auto max-h-[90vh]"
            >

              {/* Close Button */}

              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-[#8B5CF6]/20 text-white hover:text-[#A855F7] transition-colors"
              >
                <X size={20} />
              </button>

              {/* Certificate Title */}

              <h2 className="text-3xl font-bold text-white mb-2 pr-10">
                {selectedCert.title}
              </h2>

              <p className="text-[#A855F7] mb-6">
                {selectedCert.issuer}
              </p>

              {/* Certificate Image */}

              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full rounded-2xl border border-[#8B5CF6]/30 shadow-[0_0_30px_rgba(139,92,246,.12)] mb-6"
              />

              {/* Description */}

              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">

                <h3 className="text-[#A855F7] font-semibold mb-3">
                  Credential Information
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {selectedCert.description}
                </p>

                <div className="mt-5 flex justify-between items-center">

                  <span className="text-slate-400">
                    Issued: {selectedCert.date}
                  </span>

                  <span className="flex items-center gap-2 text-[#C084FC]">
                    <CheckCircle2 size={18} />
                    Verified Certificate
                  </span>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-6 flex gap-4">

                {/* View Full Image */}

                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl text-center bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#A855F7] text-white font-semibold transition-all shadow-lg shadow-purple-500/20"
                >
                  View Full Image
                </a>

                {/* Download */}

                <a
                  href={selectedCert.image}
                  download
                  className="flex-1 py-3 rounded-xl text-center bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 text-[#C084FC] border border-[#8B5CF6]/30 font-semibold transition-all"
                >
                  Download
                </a>

              </div>

            </motion.div>

          </div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Certifications;