import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('Initializing Portfolio System...');

  useEffect(() => {
    const textSequence = [
      'Initializing Portfolio System...',
      'Loading AI & RAG Components...',
      'Connecting Vector Storage...',
      'Mounting Sravya Dannana UI...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }

        const next = prev + 25;
        if (currentStep < textSequence.length - 1 && next >= (currentStep + 1) * 25) {
          currentStep++;
          setBootText(textSequence[currentStep]);
        }
        return next;
      });
    }, 250);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-[#070A12] flex items-center justify-center p-6"
    >
      <div className="max-w-md w-full glass-card p-8 rounded-3xl border border-cyan-500/30 text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px] animate-bounce">
          <div className="w-full h-full bg-[#070A12] rounded-[14px] flex items-center justify-center font-heading font-extrabold text-cyan-400 text-2xl">
            SD
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold font-heading text-white tracking-wider">
            SRAVYA DANNANA
          </h2>
          <p className="text-xs font-mono text-cyan-400 flex items-center justify-center gap-2">
            <Terminal size={14} />
            <span>{bootText}</span>
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/10 p-0.5">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] font-mono text-slate-400">{progress}% Loaded</span>
        </div>
      </div>
    </motion.div>
  );
};
export default LoadingScreen;