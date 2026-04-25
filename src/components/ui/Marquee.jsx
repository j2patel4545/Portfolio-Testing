import { motion } from 'framer-motion'
import React from 'react'              

function marquee() {
  return (
    <div className='w-full  py-10  h-[61vh] relative  bg-[#27272A] rounded-tl-3xl rounded-tr-3xl'>
      <div className="text-zinc-50 border-t border-b border-zinc-800 flex whitespace-nowrap overflow-hidden py-4">
        <motion.h1 
        initial={{ x: 0 }} 
        animate={{ x: "-100%"}} 
        transition={{ ease: "linear", repeat: Infinity, duration: 15 }} 
        className='text-[18vw] pr-12 pl-12 leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-bold tracking-tight'
      >
        <span className="text-outline">CREATIVE DEVELOPER</span> <span className="mx-6 text-zinc-500">•</span> UI/UX DESIGNER <span className="mx-6 text-zinc-500">•</span>
        </motion.h1>
        <motion.h1 
        initial={{ x: 0 }} 
        animate={{ x: "-100%" }} 
        transition={{ ease: "linear", repeat: Infinity, duration: 15 }} 
        className='text-[18vw] pr-12 pl-12 leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-bold tracking-tight'
      >
        <span className="text-outline">CREATIVE DEVELOPER</span> <span className="mx-6 text-zinc-500">•</span> UI/UX DESIGNER <span className="mx-6 text-zinc-500">•</span>
        </motion.h1>
        <motion.h1 
        initial={{ x: 0 }} 
        animate={{ x: "-100%" }} 
        transition={{ ease: "linear", repeat: Infinity, duration: 15 }} 
        className='text-[18vw] pr-12 pl-12 leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-bold tracking-tight'
      >
        <span className="text-outline">CREATIVE DEVELOPER</span> <span className="mx-6 text-zinc-500">•</span> UI/UX DESIGNER <span className="mx-6 text-zinc-500">•</span>
        </motion.h1>
      </div>
    </div>
  )
}

export default marquee