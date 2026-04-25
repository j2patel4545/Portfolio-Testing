import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  PenTool,
  Brush,
  Code,
  Layout,
  Database,
  Server,
} from "lucide-react";

function Skills() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="1.1" className='flex-col relative font-["Founders_Grotesk_X-Condensed"] w-full justify-center px-4 z-10 bg-[#09090b] py-10'>
      
      {/* Title */}
      <div className='flex justify-center mt-10 text-3xl md:text-4xl font-bold text-zinc-50'>
        My Skills
      </div>
      <div className='flex justify-center mb-10 text-lg md:text-2xl font-light text-zinc-500'>
        -- What I Know --
      </div>

      {/* Container */}
      <div className='flex flex-wrap gap-6 justify-center'>
        
        {/* 🎨 Design Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className='flex-col text-zinc-100 w-full sm:w-[45%] md:w-[36vw] rounded-xl p-8 glass shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-800 transition'
        >
          <h2 className='text-2xl md:text-3xl font-bold pb-6 flex items-center gap-2 underline decoration-zinc-600'>
            <Palette className="text-zinc-400 w-6 h-6 md:w-7 md:h-7" /> Design
          </h2>
          <ul className="space-y-4 text-base md:text-lg">
            <li className="flex items-center gap-4">
              <PenTool className="text-indigo-400 w-6 h-6" /> Figma
            </li>
            <li className="flex items-center gap-4">
              <Brush className="text-red-400 w-6 h-6" /> Adobe XD
            </li>
            <li className="flex items-center gap-4">
              <Layout className="text-green-400 w-6 h-6" /> Sketch
            </li>
          </ul>
        </motion.div>

        {/* 💻 Development Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotateY: -5 }}
          className='flex-col w-full sm:w-[45%] md:w-[36vw] rounded-xl p-8 text-zinc-100 glass shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-800 transition'
        >
          <h2 className='text-2xl md:text-3xl font-bold pb-6 flex items-center gap-2 underline decoration-zinc-600'>
            <Code className="text-yellow-300 w-6 h-6 md:w-7 md:h-7" /> Development
          </h2>
          <ul className="space-y-4 text-base md:text-lg">
            <li className="flex items-center gap-4"><Code className="text-cyan-400 w-6 h-6" /> React.js</li>
            <li className="flex items-center gap-4"><Code className="text-sky-400 w-6 h-6" /> Tailwind CSS</li>
            <li className="flex items-center gap-4"><Code className="text-yellow-400 w-6 h-6" /> JavaScript</li>
            <li className="flex items-center gap-4"><Code className="text-orange-400 w-6 h-6" /> HTML5</li>
            <li className="flex items-center gap-4"><Code className="text-blue-400 w-6 h-6" /> CSS3</li>
            <li className="flex items-center gap-4"><Server className="text-green-400 w-6 h-6" /> Node.js</li>
            <li className="flex items-center gap-4"><Server className="text-emerald-400 w-6 h-6" /> Express.js</li>
            <li className="flex items-center gap-4"><Code className="text-purple-400 w-6 h-6" /> Next.js</li>
            <li className="flex items-center gap-4"><Database className="text-green-300 w-6 h-6" /> MongoDB (Mongoose)</li>
            <li className="flex items-center gap-4"><Database className="text-indigo-400 w-6 h-6" /> SQL</li>
            <li className="flex items-center gap-4"><Database className="text-teal-300 w-6 h-6" /> MySQL</li>
            <li className="flex items-center gap-4"><Code className="text-gray-300 w-6 h-6" /> C</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
