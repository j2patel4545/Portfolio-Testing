import React from 'react'

function skils() {
  return (
    
    <div className=' flex-col relative font-["Founders_Grotesk_X-Condensed"] h-[110vh] w-full align-middle justify-center   bg-[]'>
      <div className='flex justify-center mt-14  text-4xl font-bold '>My Skill's </div>
      <div className='flex justify-center mb-12 text-2xl font-light text-zinc-600 '>  --What we Know--</div>
      <div className='flex gap-5 justify-center'>
           <div className=' flex-col text-zinc-950 w-[36vw] h-[70vh] rounded-xl pl-10   pt-2 bg-gradient-to-r from-slate-50 to-slate-100'>
              <h2 className='text-4xl  underline pb-5'>Design</h2>
              <li>Figma</li>
              <li>Adob XD</li>
              <li>Sketch</li>
          </div>
          <div className='flex-col w-[36vw] h-[90vh] rounded-xl pl-10 text-zinc-100  pt-2 bg-[url("../public/images/Fyde7.1.png")] bg-cover bg-center bg-no-repeat overflow-hidden'>
              <h2 className='text-4xl underline pb-5'>Development</h2>
              <li>React</li>
              <li>Tailwind-CSS</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node.js </li>
              <li>Express.js</li>
              <li>PHP</li>
              <li>Next.js</li>
              <li>mongooes</li>
              <li>C , Python</li>
          </div>

      </div>
      
    </div>
  )
}

export default skils; 