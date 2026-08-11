import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  const [bootText, setBootText] = useState(
    'Initializing Portfolio System...'
  );

  useEffect(() => {
    const textSequence = [
      'Initializing Portfolio System...',
      'Loading AI & RAG Components...',
      'Connecting Vector Storage...',
      'Mounting Sravya Dannana UI...',
    ];

    let currentStep = 0;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 400);

          return 100;
        }

        const next = prev + 25;

        if (
          currentStep < textSequence.length - 1 &&
          next >= (currentStep + 1) * 25
        ) {
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
      className="
        fixed
        inset-0
        z-50
        bg-[#05030a]
        flex
        items-center
        justify-center
        p-6
      "
    >

      {/* =========================================
          PURPLE BACKGROUND GLOW
          ========================================= */}

      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          bg-[#8B5CF6]/5
          rounded-full
          blur-[150px]
          pointer-events-none
        "
      />

      {/* =========================================
          LOADING CARD
          ========================================= */}

      <div className="relative w-full max-w-md">

        <div
          className="
            bg-[#0D0915]
            border
            border-[#8B5CF6]/20
            rounded-3xl
            p-10
            shadow-2xl
            shadow-purple-950/30
          "
        >

          {/* =========================================
              LOGO
              ========================================= */}

          <div className="flex justify-center mb-8">

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-tr
                from-[#6D28D9]
                via-[#8B5CF6]
                to-[#C084FC]
                p-[1.5px]
                animate-bounce
                shadow-lg
                shadow-purple-500/20
              "
            >

              <div
                className="
                  w-full
                  h-full
                  bg-[#05030a]
                  rounded-[14px]
                  flex
                  items-center
                  justify-center
                  font-heading
                  font-extrabold
                  text-[#A855F7]
                  text-2xl
                "
              >
                SD
              </div>

            </div>

          </div>

          {/* =========================================
              NAME
              ========================================= */}

          <div className="space-y-2 text-center mb-8">

            <h2
              className="
                text-xl
                font-bold
                font-heading
                text-white
                tracking-wider
              "
            >
              SRAVYA DANNANA
            </h2>

            <p
              className="
                text-xs
                font-mono
                text-[#A855F7]
                flex
                items-center
                justify-center
                gap-2
              "
            >

              <Terminal size={14} />

              <span>
                {bootText}
              </span>

            </p>

          </div>

          {/* =========================================
              PROGRESS BAR
              ========================================= */}

          <div className="space-y-3">

            <div
              className="
                w-full
                bg-white/5
                h-2
                rounded-full
                overflow-hidden
                border
                border-white/10
                p-0.5
              "
            >

              <motion.div
                className="
                  h-full
                  bg-gradient-to-r
                  from-[#6D28D9]
                  via-[#8B5CF6]
                  to-[#C084FC]
                  rounded-full
                  shadow-[0_0_12px_rgba(139,92,246,0.6)]
                "
                style={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.3,
                }}
              />

            </div>

            <div className="flex justify-between items-center">

              <span
                className="
                  text-[11px]
                  font-mono
                  text-slate-500
                "
              >
                SYSTEM BOOT
              </span>

              <span
                className="
                  text-[11px]
                  font-mono
                  text-[#A855F7]
                "
              >
                {progress}% Loaded
              </span>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default LoadingScreen;