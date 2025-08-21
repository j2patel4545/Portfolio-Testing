import React from "react";
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
    <div className='flex-col relative font-["Founders_Grotesk_X-Condensed"] w-full justify-center px-4'>
      
      {/* Title */}
      <div className='flex justify-center mt-10 text-3xl md:text-4xl font-bold text-zinc-900'>
        My Skills
      </div>
      <div className='flex justify-center mb-10 text-lg md:text-2xl font-light text-zinc-600'>
        -- What I Know --
      </div>

      {/* Container */}
      <div className='flex flex-wrap gap-6 justify-center'>
        
        {/* 🎨 Design Section */}
        <div className='flex-col text-zinc-950 w-full sm:w-[45%] md:w-[36vw] rounded-xl p-6 bg-gradient-to-r from-slate-50 to-slate-100 shadow-md hover:shadow-xl transition'>
          <h2 className='text-2xl md:text-3xl font-bold pb-6 flex items-center gap-2 underline'>
            <Palette className="text-zinc-500 w-6 h-6 md:w-7 md:h-7" /> Design
          </h2>
          <ul className="space-y-3 text-base md:text-lg">
            <li className="flex items-center gap-3">
              <PenTool className="text-indigo-500 w-5 h-5" /> Figma
            </li>
            <li className="flex items-center gap-3">
              <Brush className="text-red-500 w-5 h-5" /> Adobe XD
            </li>
            <li className="flex items-center gap-3">
              <Layout className="text-green-500 w-5 h-5" /> Sketch
            </li>
          </ul>
        </div>

        {/* 💻 Development Section */}
        <div className='flex-col w-full sm:w-[45%] md:w-[36vw] rounded-xl p-6 text-zinc-100 bg-[url("../public/images/Fyde7.1.png")] bg-cover bg-center bg-no-repeat overflow-hidden shadow-md hover:shadow-xl transition'>
          <h2 className='text-2xl md:text-3xl font-bold pb-6 flex items-center gap-2 underline'>
            <Code className="text-yellow-300 w-6 h-6 md:w-7 md:h-7" /> Development
          </h2>
          <ul className="space-y-3 text-base md:text-lg">
            <li className="flex items-center gap-3"><Code className="text-cyan-300 w-5 h-5" /> React.js</li>
            <li className="flex items-center gap-3"><Code className="text-sky-400 w-5 h-5" /> Tailwind CSS</li>
            <li className="flex items-center gap-3"><Code className="text-yellow-400 w-5 h-5" /> JavaScript</li>
            <li className="flex items-center gap-3"><Code className="text-orange-400 w-5 h-5" /> HTML5</li>
            <li className="flex items-center gap-3"><Code className="text-blue-400 w-5 h-5" /> CSS3</li>
            <li className="flex items-center gap-3"><Server className="text-green-400 w-5 h-5" /> Node.js</li>
            <li className="flex items-center gap-3"><Server className="text-emerald-400 w-5 h-5" /> Express.js</li>
            <li className="flex items-center gap-3"><Code className="text-purple-400 w-5 h-5" /> Next.js</li>
            <li className="flex items-center gap-3"><Database className="text-green-300 w-5 h-5" /> MongoDB (Mongoose)</li>
            <li className="flex items-center gap-3"><Database className="text-indigo-300 w-5 h-5" /> SQL</li>
            <li className="flex items-center gap-3"><Database className="text-teal-300 w-5 h-5" /> MySQL</li>
            <li className="flex items-center gap-3"><Code className="text-gray-200 w-5 h-5" /> C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
