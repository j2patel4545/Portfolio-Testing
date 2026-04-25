import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/layout/Navbar';
import AnimatedCounter from './components/ui/AnimatedCounter';
import Marquee from './components/ui/Marquee';
import Landingpage from './components/sections/LandingPage';
import About from './components/sections/About';
import Eye from './components/ui/Eye';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import LocomotiveScroll from 'locomotive-scroll';
import Headroom from 'react-headroom';
// import Contect from './components/sections/Contact/Contect';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  const [counterFinished, setCounterFinished] = useState(false);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  const handleCounterFinish = () => {
    setCounterFinished(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#09090b] text-zinc-50 relative">
      <CustomCursor />
      <div className="bg-noise"></div>
      {/* Loader / Counter */}
      {!counterFinished && <AnimatedCounter onFinish={handleCounterFinish} />}

      {/* Actual Website */}
      {counterFinished && (
        <div className="relative">
          <Headroom>
            <Navbar />
          </Headroom>

          {/* Fixed Background Layer */}
          <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
            <Landingpage />
          </div>

          {/* Scrolling Foreground Layer */}
          <div className="relative z-10">
            {/* Spacer to allow user to see landing page before overlap */}
            <div className="h-screen w-full bg-transparent pointer-events-none"></div>
            
            <Marquee />
            <About />
            <Eye />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
