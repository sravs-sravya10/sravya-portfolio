import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [trailPosition, setTrailPosition] = useState({
    x: -100,
    y: -100,
  });

  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    ) {
      return;
    }

    setIsHidden(false);

    const updateCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;

      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button';

      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener(
      'mousemove',
      updateCursor
    );

    document.addEventListener(
      'mouseleave',
      handleMouseLeave
    );

    document.addEventListener(
      'mouseenter',
      handleMouseEnter
    );

    return () => {
      window.removeEventListener(
        'mousemove',
        updateCursor
      );

      document.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );

      document.removeEventListener(
        'mouseenter',
        handleMouseEnter
      );
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const followCursor = () => {
      setTrailPosition((prev) => ({
        x:
          prev.x +
          (position.x - prev.x) * 0.15,

        y:
          prev.y +
          (position.y - prev.y) * 0.15,
      }));

      animationFrameId =
        requestAnimationFrame(followCursor);
    };

    animationFrameId =
      requestAnimationFrame(followCursor);

    return () =>
      cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (isHidden) return null;

  return (
    <>
      {/* =========================================
          MAIN PURPLE CURSOR
          ========================================= */}

      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-75 ${
          isPointer
            ? 'w-4 h-4 bg-[#A855F7] scale-125 shadow-[0_0_15px_rgba(168,85,247,0.8)]'
            : 'w-2.5 h-2.5 bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.7)]'
        }`}
        style={{
          transform: `translate3d(
            ${
              position.x -
              (isPointer ? 8 : 5)
            }px,
            ${
              position.y -
              (isPointer ? 8 : 5)
            }px,
            0
          )`,
        }}
      />

      {/* =========================================
          PURPLE TRAIL
          ========================================= */}

      <div
        className={`fixed top-0 left-0 pointer-events-none z-40 rounded-full transition-all duration-300 ${
          isPointer
            ? `
              w-12
              h-12
              border-2
              border-[#A855F7]
              bg-[#A855F7]/10
              shadow-[0_0_25px_rgba(168,85,247,0.35)]
              blur-[1px]
            `
            : `
              w-8
              h-8
              border
              border-[#8B5CF6]/50
              bg-[#8B5CF6]/5
              shadow-[0_0_20px_rgba(139,92,246,0.25)]
              blur-[2px]
            `
        }`}
        style={{
          transform: `translate3d(
            ${
              trailPosition.x -
              (isPointer ? 24 : 16)
            }px,
            ${
              trailPosition.y -
              (isPointer ? 24 : 16)
            }px,
            0
          )`,
        }}
      />
    </>
  );
};

export default CustomCursor;