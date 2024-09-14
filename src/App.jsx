import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/navbar' 
import AnimatedCounter from './components/anm'; // Assuming corrected naming
import Marquee from './components/marquee'; // Assuming corrected naming
import Landingpage from './components/landingpage';
import About from './components/about'; // Assuming corrected naming
import Eye from './components/eye';
import Skills from './components/skils'; // Corrected naming
import Projects from './components/projets'; // Corrected naming
// import Ig from './components/Ig'; // Assuming corrected naming
import LocomotiveScroll from 'locomotive-scroll';
import Headroom from 'react-headroom';

// import 'locomotive-scroll/src/locomotive-scroll.css';

function App() {
  const scrollRef = useRef(null);
  const [counterFinished, setCounterFinished] = useState(false);

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

  const handleCounterFinish = () => {
    setCounterFinished(true);
  };

  return (
    <div ref={scrollRef} data-scroll-container className="w-full min-h-screen bg-black text-zinc-50">
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
    </div>
  );
}

export default App;
