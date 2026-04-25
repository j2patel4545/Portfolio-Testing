import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

function EyeBall({ mouseX, mouseY }) {
  const ref = useRef(null);
  
  // Motion values for X and Y translation of the pupil
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Motion values for the tiny inner dot (parallax effect)
  const innerX = useMotionValue(0);
  const innerY = useMotionValue(0);

  // Smooth springs to give the eye a natural, emotive feel
  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  const innerSpringX = useSpring(innerX, { stiffness: 400, damping: 25, mass: 0.2 });
  const innerSpringY = useSpring(innerY, { stiffness: 400, damping: 25, mass: 0.2 });

  useEffect(() => {
    const handleUpdate = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      
      // Calculate the EXACT center of this specific eyeball on the screen
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      // Current mouse position
      const mx = mouseX.get();
      const my = mouseY.get();

      // Delta between mouse and eye center
      const dx = mx - eyeCenterX;
      const dy = my - eyeCenterY;

      // Distance and Angle
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);

      // Max radius the pupil can travel from the center
      const maxRadius = rect.width / 4; 
      
      // Map distance so it doesn't just snap to the edge immediately
      const moveDistance = Math.min(distance * 0.15, maxRadius);

      const targetX = Math.cos(angle) * moveDistance;
      const targetY = Math.sin(angle) * moveDistance;

      x.set(targetX);
      y.set(targetY);

      // --- Inner Dot Parallax ---
      // The inner dot should also move towards the mouse but constrained within the white circle
      // The white circle is w-6 md:w-10 (approx 24px - 40px diameter). 
      // We will allow the inner dot to move a few pixels in the same direction.
      const maxInnerRadius = 6; 
      const innerMoveDistance = Math.min(distance * 0.05, maxInnerRadius);
      
      const innerTargetX = Math.cos(angle) * innerMoveDistance;
      const innerTargetY = Math.sin(angle) * innerMoveDistance;

      innerX.set(innerTargetX);
      innerY.set(innerTargetY);
    };

    // Subscribe to mouse motion values and window scroll
    const unsubscribeX = mouseX.on("change", handleUpdate);
    const unsubscribeY = mouseY.on("change", handleUpdate);
    window.addEventListener("scroll", handleUpdate);
    
    return () => {
      unsubscribeX();
      unsubscribeY();
      window.removeEventListener("scroll", handleUpdate);
    };
  }, [mouseX, mouseY, x, y, innerX, innerY]);

  return (
    <div className="w-[30vw] h-[30vw] sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.2)]">
      <div ref={ref} className="bg-zinc-900 relative flex items-center justify-center w-2/3 h-2/3 rounded-full shadow-2xl">
        {/* The translated Pupil */}
        <motion.div 
          style={{ x: springX, y: springY }}
          className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 bg-zinc-100 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        >
          {/* Inner dot with parallax tracking */}
          <motion.div 
            style={{ x: innerSpringX, y: innerSpringY }}
            className="bg-zinc-800 w-2 h-2 md:w-4 md:h-4 rounded-full"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function Eye() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="1.1" className="w-full flex relative items-center justify-center h-screen bg-[#F1F1F1] overflow-hidden z-10">
      {/* Background wrapper */}
      <div
        className="flex items-center justify-center w-[90vw] h-[80vh] bg-[url('../public/images/back-eye2.jpg')] bg-contain bg-center bg-no-repeat"
      >
        {/* Eyes wrapper */}
        <div className="flex gap-6 md:gap-10 items-center justify-center">
          <EyeBall mouseX={mouseX} mouseY={mouseY} />
          <EyeBall mouseX={mouseX} mouseY={mouseY} />
        </div>
      </div>  
    </div>
  );
}

export default Eye;
