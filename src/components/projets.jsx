import React from 'react'

function Projects() {
  return (
    <div className='flex-col flex relative bg-black font-["Founders_Grotesk_X-Condensed"] min-h-screen w-full justify-center'>
      <div className='flex justify-center mt-14 text-4xl font-bold'>My Work's</div>
      <div className='flex justify-center mb-12 text-2xl font-light text-zinc-600'>--What we Do--</div>

      <div className='flex w-full justify-center items-center'>
        <div className='flex w-[92vw] min-h-[80vh] md:h-[108vh] bg-zinc-100 rounded-3xl'>
          <div data-scroll data-scroll-section data-scroll-speed=".3" className='loco flex-col h-full w-full'>

            {/* Project 1 */}
            <a href="https://click-heart-studio.vercel.app/">
              <div 
                id="box" 
                className='flex h-[32vh] w-[90%] md:w-[30.5vw] bg-[url("../public/images/project1.webp")] 
                border-2 border-zinc-50 bg-cover bg-center bg-no-repeat overflow-hidden relative 
                mx-auto md:ml-[27vw] mt-6 md:mt-0'>
              </div>
            </a>

            {/* Project 2 */}
            <a href="https://mixtas.vercel.app/">
              <div 
                id="box" 
                className='flex h-[32vh] w-[90%] md:w-[30.5vw] bg-[url("../public/images/project2.webp")] 
                border-2 border-zinc-50 bg-cover bg-center bg-no-repeat overflow-hidden relative 
                mx-auto md:ml-[40vw] -mt-4 md:-mt-[10vh] mt-6'>
              </div>
            </a>

            {/* Project 3 */}
            <a href="https://school-frontend-six.vercel.app/">
              <div 
                id="box" 
                className='flex h-[32vh] w-[90%] md:w-[30.5vw] bg-[url("../public/images/uplink.png")] 
                border-2 border-zinc-50 bg-cover bg-center bg-no-repeat overflow-hidden relative 
                mx-auto md:ml-[27vw] mt-6 md:mt-[6vh]'>
              </div>
            </a>

            {/* Button */}
            <div className='w-full flex justify-center'>
              <a href="https://github.com/j2patel4545" className='mt-10 md:mt-[12vh]'>
                <button 
                  className="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-lg md:text-xl font-mono font-semibold text-[#18181B] hover:text-white border-2 border-[#18181B]
                  hover:bg-[#18181B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 md:hover:scale-75 duration-300">
                  All Project's
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
