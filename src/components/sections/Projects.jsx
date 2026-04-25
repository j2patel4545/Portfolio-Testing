import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <div className='flex-col flex relative bg-black font-["Founders_Grotesk_X-Condensed"] min-h-screen w-full justify-center'>
      <div className='flex justify-center mt-14 text-4xl font-bold'>My Work's</div>
      <div className='flex justify-center mb-12 text-2xl font-light text-zinc-600'>--What we Do--</div>

      <div className='flex w-full justify-center items-center'>
        <div className='flex w-[92vw] min-h-[80vh] md:h-[108vh] bg-[#111113] glass rounded-3xl p-4 sm:p-10 shadow-2xl'>
          <div className='flex-col h-full w-full'>

            {/* Project 1 */}
            <a href="https://click-heart-studio.vercel.app/" className="block w-full md:w-fit mx-auto md:ml-[27vw] mt-6 md:mt-0">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                id="box" 
                className='flex h-[32vh] w-full md:w-[30.5vw] bg-[url("../public/images/project1.webp")] 
                border border-zinc-700 bg-cover bg-center bg-no-repeat overflow-hidden relative rounded-xl shadow-lg'>
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl tracking-widest glass px-6 py-2 rounded-full text-center">VIEW PROJECT</span>
                </div>
              </motion.div>
            </a>

            {/* Project 2 */}
            <a href="https://mixtas.vercel.app/" className="block w-full md:w-fit mx-auto md:ml-[40vw] -mt-4 md:-mt-[10vh] mt-6 relative z-10">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                id="box" 
                className='flex h-[32vh] w-full md:w-[30.5vw] bg-[url("../public/images/project2.webp")] 
                border border-zinc-700 bg-cover bg-center bg-no-repeat overflow-hidden relative rounded-xl shadow-lg'>
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl tracking-widest glass px-6 py-2 rounded-full text-center">VIEW PROJECT</span>
                </div>
              </motion.div>
            </a>

            {/* Project 3 */}
            <a href="https://school-frontend-six.vercel.app/" className="block w-full md:w-fit mx-auto md:ml-[27vw] mt-6 md:mt-[6vh] relative z-20">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                id="box" 
                className='flex h-[32vh] w-full md:w-[30.5vw] bg-[url("../public/images/uplink.png")] 
                border border-zinc-700 bg-cover bg-center bg-no-repeat overflow-hidden relative rounded-xl shadow-lg'>
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl tracking-widest glass px-6 py-2 rounded-full text-center">VIEW PROJECT</span>
                </div>
              </motion.div>
            </a>

            {/* Button */}
            <div className='w-full flex justify-center pb-10 md:pb-0'>
              <a href="https://github.com/j2patel4545" className='mt-10 md:mt-[12vh]'>
                <button 
                  className="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-lg md:text-xl font-mono font-semibold text-zinc-50 hover:text-black border-2 border-zinc-50
                  hover:bg-zinc-50 transition ease-in-out duration-300 shadow-xl">
                  All Projects
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
