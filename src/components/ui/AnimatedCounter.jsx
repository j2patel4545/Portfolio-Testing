import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import Navbar from '../layout/Navbar';

const AnimatedCounter = ({ onFinish }) => {
  const [count, setCount] = useState(100);
  const [expand, setExpand] = useState(false);
  const [shadowAnimationComplete, setShadowAnimationComplete] = useState(false);

  useEffect(() => {
    let interval;

    if (count > 0) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 20); // 60ms interval for 6 seconds countdown
    } else {
      clearInterval(interval);
      setTimeout(() => {
        setExpand(true);
        setTimeout(() => {
          onFinish(); // Call onFinish callback after additional delay
        }, 1000); // Wait for 4 seconds before triggering onFinish
      }, 1000); // Wait for 1 second before expanding
    }

    return () => clearInterval(interval);
  }, [count, onFinish]);

  useEffect(() => {
    if (expand) {
      setTimeout(() => {
        setShadowAnimationComplete(true);
      }, 500);
    }
  }, [expand]);

  return (
    <div className="relative bg-zinc-700 flex items-center justify-center h-screen transition-all duration-1000">
      {!expand && (
        <>
          {/* Left shadow (mobile/tablet tuned, desktop same as original) */}
          <div
            className={`absolute 
              left-[5vw] sm:left-[8vw] md:left-[12vw] lg:left-[18vw] 
              top-[9vh] sm:top-[12vh] md:top-[14vh] lg:top-[16vh] 
              w-[90vw] sm:w-[82vw] md:w-[74vw] lg:w-[66vw] 
              h-[58vh] sm:h-[62vh] md:h-[66vh] lg:h-[70vh] 
              rounded-xl bg-black/20 shadow-left 
              ${shadowAnimationComplete ? 'opacity-0' : 'opacity-0'} transition-opacity duration-0`}
          ></div>

          {/* Right shadow (mobile/tablet tuned, desktop same as original) */}
          <div
            className={`absolute 
              right-[5vw] sm:right-[8vw] md:right-[12vw] lg:right-[15vw] 
              top-[10vh] sm:top-[13vh] md:top-[15vh] lg:top-[17vh] 
              w-[90vw] sm:w-[82vw] md:w-[74vw] lg:w-[66vw] 
              h-[58vh] sm:h-[62vh] md:h-[66vh] lg:h-[70vh] 
              rounded-xl bg-black/20 shadow-right 
              ${shadowAnimationComplete ? 'opacity-0' : 'opacity-0'} transition-opacity duration-0`}
          ></div>
        </>
      )}

      {/* Main box (mobile/tablet sizes added, desktop EXACT same) */}
      <div
        className={`relative z-10 flex flex-col border-spacing-2 items-center object-cover bg-black justify-center transition-all duration-1000 rounded-xl
        ${
          expand
            ? 'w-full h-full'
            : 'w-[92vw] sm:w-[86vw] md:w-[76vw] lg:w-[66vw] h-[60vh] sm:h-[64vh] md:h-[68vh] lg:h-[70vh]'
        }`}
      >
        <Navbar />
        <Loader />

        {!expand ? (
          <>
            {/* Desktop counter: EXACT same positioning & size */}
            <div className="hidden lg:flex text-7xl mt-[-10vh] ml-[46.5vw] fixed font-semibold text-zinc-50 animate-pulse">
              {count}%
            </div>

            {/* Mobile/Tablet centered counter */}
            <div className="lg:hidden absolute inset-0 flex items-center justify-center">
              <div className="text-5xl sm:text-6xl md:text-7xl font-semibold text-zinc-50 animate-pulse">
                {count}%
              </div>
            </div>
          </>
        ) : (
          <div className="text-6xl text-white"></div>
        )}
      </div>
    </div>
  );
};

export default AnimatedCounter;
