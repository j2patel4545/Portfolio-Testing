import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement using springs
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over an element with a specific data attribute
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setHoverText(target.getAttribute('data-cursor'));
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Hide the default cursor completely using a global style */}
      <style>{`
        body {
          cursor: none;
        }
        a, button, [data-cursor] {
          cursor: none !important;
        }
      `}</style>

      {/* The main glowing dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 80 : 16,
          height: isHovered ? 80 : 16,
          backgroundColor: isHovered ? "white" : "white",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        {isHovered && (
          <span className="text-black text-xs font-bold pointer-events-none mix-blend-normal">
            {hoverText}
          </span>
        )}
      </motion.div>
    </>
  );
}

export default CustomCursor;
