import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  CheckCircle2,
  Award,
  GitPullRequest,
  Boxes
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';


/* =========================================
   ACHIEVEMENT ICON
   ========================================= */

const getAchievementIcon = (iconName) => {
  const icons = {
    CheckCircle2,
    Award,
    GitPullRequest,
    Boxes
  };

  const IconComp = icons[iconName] || CheckCircle2;

  return <IconComp size={28} />;
};


/* =========================================
   ANIMATED COUNTER
   ========================================= */

const AnimatedCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });


  useEffect(() => {
    if (!isInView) return;

    let start = 0;

    const duration = 2000;

    const increment = target / (duration / 16);


    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);


    return () => clearInterval(timer);

  }, [isInView, target]);


  return (
    <span
      ref={ref}
      className="font-heading font-extrabold text-4xl sm:text-5xl text-gradient"
    >
      {count}
      {suffix}
    </span>
  );
};


/* =========================================
   ACHIEVEMENTS SECTION
   ========================================= */

export const Achievements = () => {
  return (
    <section
      className="
        py-20
        relative
        overflow-hidden
        bg-[#05030a]/40
        border-y
        border-white/5
      "
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {achievementsData.map((item, index) => (

            <motion.div
              key={item.label}

              initial={{
                opacity: 0,
                scale: 0.9
              }}

              whileInView={{
                opacity: 1,
                scale: 1
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}

              className="
                glass-card
                p-6
                sm:p-8
                rounded-3xl
                text-center
                space-y-3
                border
                border-white/10
                hover:border-[#8B5CF6]/50
                group
                transition-all
                duration-300
              "
            >

              {/* Achievement Icon */}

              <div
                className="
                  mx-auto
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-tr
                  from-[#6D28D9]/10
                  to-[#A855F7]/10
                  border
                  border-[#8B5CF6]/25
                  text-[#A855F7]
                  flex
                  items-center
                  justify-center
                  group-hover:scale-110
                  group-hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
                  transition-all
                  duration-300
                "
              >
                {getAchievementIcon(item.icon)}
              </div>


              {/* Counter */}

              <div>

                <AnimatedCounter
                  target={item.count}
                  suffix={item.suffix}
                />

                <p
                  className="
                    text-xs
                    font-mono
                    text-slate-300
                    uppercase
                    tracking-wider
                    mt-2
                  "
                >
                  {item.label}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};


export default Achievements;