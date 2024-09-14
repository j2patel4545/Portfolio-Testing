import { motion } from 'framer-motion'
import React from 'react'              

function marquee() {
  return (
    <div className='w-full  py-10  h-[61vh] relative  bg-[#27272A] rounded-tl-3xl rounded-tr-3xl'>
      <div className="text-zinc-50 border-t-2    border-b-2 border-zinc-300 flex  whitespace-nowrap overflow-hidden ">
        <motion.h1 
        initial={{ x: 0 }} 
        animate={{ x: "-100%"}} 
        transition={{ ease: "linear", repeat: Infinity, duration: 8 }} 
        className='text-[16vw]  pr-12 pl-12 leading-none uppercase pt-5 mb-5 font-["Founders_Grotesk_X-Condensed"]'
      >
        hyy..hi.. i am jetal
        </motion.h1>
        <motion.h1 
        initial={{ x: 0 }} 
        animate={{ x: "-100%" }} 
        transition={{ ease: "linear", repeat: Infinity, duration: 8 }} 
        className='text-[16vw] pr-12 pl-12 leading-none uppercase pt-5 mb-5 font-["Founders_Grotesk_X-Condensed"]'
      >
        hyy..hi.. i am jetal
        </motion.h1>
        <motion.h1 
        initial={{ x: 0 }} 
        animate={{ x: "-100%" }} 
        transition={{ ease: "linear", repeat: Infinity, duration: 8 }} 
        className='text-[16vw] pr-12 pl-12 leading-none uppercase pt-5 mb-5 font-["Founders_Grotesk_X-Condensed"]'
      >
        hyy..hi.. i am jetal
        </motion.h1>
     
      </div>
    </div>
  )
}

export default marquee