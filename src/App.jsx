import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/navbar';
import AnimatedCounter from './components/anm'; // Assuming corrected naming
import Marquee from './components/marquee'; // Assuming corrected naming
import Landingpage from './components/landingpage';
import About from './components/about'; // Assuming corrected naming
import Eye from './components/eye';
import Skills from './components/skils'; // Corrected naming
import Projects from './components/projets'; // Corrected naming
import LocomotiveScroll from 'locomotive-scroll';
import Headroom from 'react-headroom';
import { motion } from 'framer-motion';
import { FiMonitor } from 'react-icons/fi';

// import 'locomotive-scroll/src/locomotive-scroll.css';

function App() {
  const scrollRef = useRef(null);
  const [counterFinished, setCounterFinished] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getDirection: true,
    });

    return () => {
      scrollInstance.destroy();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 680) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCounterFinish = () => {
    setCounterFinished(true);
  };

  return (
    <div ref={scrollRef} data-scroll-container className="w-full min-h-screen bg-black text-zinc-50">
      {/* Show message for mobile view */}
      {isMobileView && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm text-white text-lg p-8 rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <motion.div
            className="text-white text-4xl font-semibold mb-6 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <FiMonitor className="mr-4" />
            <span>This Website is Optimized for Desktop Viewing</span>
          </motion.div>
          <p className="text-center text-sm text-gray-300 mt-4 opacity-80">
            For the best experience, please switch to a desktop device.
          </p>
        </motion.div>
      )}

      {/* Show the rest of the app if not in mobile view */}
      {!isMobileView && (
        <>
          {!counterFinished && <AnimatedCounter onFinish={handleCounterFinish} />}
          {counterFinished && (
            <>
              <Headroom>
                <Navbar />
              </Headroom>
              <Landingpage />
              <Marquee />
              <About />
              <Eye />
              <Projects />
              <Skills />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
