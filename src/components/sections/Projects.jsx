import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

function Projects() {
  const targetRef = useRef(null);
  // Track scroll progress within the targetRef container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal translation
  // Moves the inner container to the left by -66% of its width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section data-scroll data-scroll-section data-scroll-speed="1.1" ref={targetRef} className="relative h-[300vh] bg-[#09090b] font-['Founders_Grotesk_X-Condensed'] z-10">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Title */}
        <div className="absolute top-10 w-full flex flex-col items-center z-10 pointer-events-none">
          <div className="text-4xl md:text-6xl font-bold text-zinc-50">My Work</div>
          <div className="text-lg md:text-2xl font-light text-zinc-500 mt-2">-- Horizontal Gallery --</div>
        </div>

        {/* Scrollable Container */}
        <motion.div style={{ x }} className="flex gap-10 md:gap-32 px-10 md:px-[20vw] mt-20 items-center h-full">
          
          {/* Project 1 */}
          <a data-cursor="VIEW" href="https://click-heart-studio.vercel.app/" className="block shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='flex h-[40vh] md:h-[60vh] w-[80vw] md:w-[45vw] bg-[url("../public/images/project1.webp")] 
              border border-zinc-700 bg-cover bg-center bg-no-repeat overflow-hidden relative rounded-2xl shadow-2xl glass'>
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-xl md:text-3xl tracking-widest glass px-6 py-3 rounded-full text-center">VIEW PROJECT</span>
              </div>
            </motion.div>
          </a>

          {/* Project 2 */}
          <a data-cursor="VIEW" href="https://mixtas.vercel.app/" className="block shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='flex h-[40vh] md:h-[60vh] w-[80vw] md:w-[45vw] bg-[url("../public/images/project2.webp")] 
              border border-zinc-700 bg-cover bg-center bg-no-repeat overflow-hidden relative rounded-2xl shadow-2xl glass'>
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-xl md:text-3xl tracking-widest glass px-6 py-3 rounded-full text-center">VIEW PROJECT</span>
              </div>
            </motion.div>
          </a>

          {/* Project 3 */}
          <a data-cursor="VIEW" href="https://school-frontend-six.vercel.app/" className="block shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='flex h-[40vh] md:h-[60vh] w-[80vw] md:w-[45vw] bg-[url("../public/images/uplink.png")] 
              border border-zinc-700 bg-cover bg-center bg-no-repeat overflow-hidden relative rounded-2xl shadow-2xl glass'>
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-xl md:text-3xl tracking-widest glass px-6 py-3 rounded-full text-center">VIEW PROJECT</span>
              </div>
            </motion.div>
          </a>

          {/* End CTA */}
          <div className="flex shrink-0 w-[80vw] md:w-[30vw] h-full items-center justify-center">
            <Magnetic>
              <a data-cursor="GITHUB" href="https://github.com/j2patel4545" className="inline-block">
                <button className="cursor-pointer inline-flex items-center rounded-full px-12 py-6 text-xl md:text-3xl font-mono font-bold text-black bg-zinc-50 hover:scale-110 transition ease-in-out duration-300 shadow-2xl">
                  View GitHub
                </button>
              </a>
            </Magnetic>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
