import React, { useEffect, useState } from 'react';
import LandingPage from './landingpage';
import Loader from './Loader';
import Navbar from './navbar';


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
      // Set a delay to complete the shadow animation
      setTimeout(() => {
        setShadowAnimationComplete(true);
      }, 500); // 1.5 seconds for shadow animation to complete
    }
  }, [expand]);

  return (
    <div className={`relative bg-zinc-700 flex items-center justify-center h-screen transition-all duration-1000`}>
      {!expand && (
        <>
          <div className={`absolute left-[18vw] top-[16vh] w-[66vw] h-[70vh] rounded-xl bg-black/20 shadow-left ${shadowAnimationComplete ? 'opacity-0' : 'opacity-0'} transition-opacity duration-0`}></div>
          <div className={`absolute right-[15vw] top-[17vh] w-[66vw] h-[70vh] rounded-xl bg-black/20 shadow-right ${shadowAnimationComplete ? 'opacity-0' : 'opacity-0'} transition-opacity duration-0`}></div>
        </>
      )}
      <div className={`relative z-10 flex flex-col border-spacing-2 items-center object-cover bg-black justify-center transition-all duration-1000 ${expand ? 'w-full h-full' : 'w-[66vw] h-[70vh]'}  rounded-xl`}>
        
        <Navbar/>
        <Loader/>
        {!expand ? (
          <div className="text-7xl mt-[-10vh] ml-[46.5vw] flex fixed  font-semibold  text-zinc-50 animate-pulse">
           
            {count}%
          </div>
        ) : (
          <div className="text-6xl text-white">
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedCounter;
