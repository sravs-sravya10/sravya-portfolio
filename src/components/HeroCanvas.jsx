import React, { useEffect, useRef } from 'react';

export const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    /* =========================================
       RESIZE
       ========================================= */

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    /* =========================================
       PARTICLES
       ========================================= */

    const particleCount = Math.min(
      Math.floor(width / 18),
      70
    );

    const particles = [];

    /* =========================================
       MOUSE
       ========================================= */

    const mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener(
      'mousemove',
      handleMouseMove
    );

    window.addEventListener(
      'mouseleave',
      handleMouseLeave
    );

    /* =========================================
       PARTICLE CLASS
       ========================================= */

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.vx =
          (Math.random() - 0.5) * 0.8;

        this.vy =
          (Math.random() - 0.5) * 0.8;

        this.size =
          Math.random() * 2 + 1;

        /* BLACK + PURPLE PARTICLES */

        this.color =
          Math.random() > 0.5
            ? '#8B5CF6'
            : '#A855F7';

        this.alpha =
          Math.random() * 0.5 + 0.3;
      }

      /* =========================================
         UPDATE PARTICLE
         ========================================= */

      update() {
        this.x += this.vx;
        this.y += this.vy;

        /* Bounce from edges */

        if (
          this.x < 0 ||
          this.x > width
        ) {
          this.vx *= -1;
        }

        if (
          this.y < 0 ||
          this.y > height
        ) {
          this.vy *= -1;
        }

        /* Mouse interaction */

        if (
          mouse.x !== null &&
          mouse.y !== null
        ) {
          const dx =
            mouse.x - this.x;

          const dy =
            mouse.y - this.y;

          const dist = Math.sqrt(
            dx * dx + dy * dy
          );

          if (dist < mouse.radius) {
            const angle =
              Math.atan2(dy, dx);

            const force =
              (mouse.radius - dist) /
              mouse.radius;

            this.x -=
              Math.cos(angle) *
              force *
              2;

            this.y -=
              Math.sin(angle) *
              force *
              2;
          }
        }
      }

      /* =========================================
         DRAW PARTICLE
         ========================================= */

      draw() {
        ctx.save();

        ctx.globalAlpha =
          this.alpha;

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          this.color;

        ctx.shadowBlur = 10;

        ctx.shadowColor =
          this.color;

        ctx.fill();

        ctx.restore();
      }
    }

    /* =========================================
       CREATE PARTICLES
       ========================================= */

    for (
      let i = 0;
      i < particleCount;
      i++
    ) {
      particles.push(
        new Particle()
      );
    }

    /* =========================================
       ANIMATION
       ========================================= */

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        particles[i].update();
        particles[i].draw();

        /* =====================================
           CONNECT PARTICLES
           ===================================== */

        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const dx =
            particles[i].x -
            particles[j].x;

          const dy =
            particles[i].y -
            particles[j].y;

          const dist = Math.sqrt(
            dx * dx + dy * dy
          );

          if (dist < 120) {
            ctx.save();

            ctx.globalAlpha =
              (1 - dist / 120) *
              0.25;

            ctx.beginPath();

            ctx.moveTo(
              particles[i].x,
              particles[i].y
            );

            ctx.lineTo(
              particles[j].x,
              particles[j].y
            );

            /* PURPLE CONNECTION LINES */

            ctx.strokeStyle =
              '#8B5CF6';

            ctx.lineWidth = 0.8;

            ctx.stroke();

            ctx.restore();
          }
        }
      }

      animationFrameId =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    /* =========================================
       CLEANUP
       ========================================= */

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );

      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );

      window.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );

      cancelAnimationFrame(
        animationFrameId
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        absolute
        inset-0
        pointer-events-none
        z-0
        w-full
        h-full
      "
    />
  );
};

export default HeroCanvas;