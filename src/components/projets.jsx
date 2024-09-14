import React from 'react'

function projets() {
  return (
   
<div className=' flex-col flex relative  bg-black font-["Founders_Grotesk_X-Condensed"] h-[130vh] w-full align-middle justify-center     '>
        <div className='flex justify-center mt-14  text-4xl font-bold '>My Project's </div>
        <div className='flex justify-center mb-12 text-2xl font-light text-zinc-600 '>  --What we Do--</div>
        <div className='flex w-screen  justify-center items-center align-middle'>
            <div className='flex w-[92vw] h-[108vh] bg-zinc-100 rounded-3xl'>
                <div data-scroll dtat-scroll-section  data-scroll-speed=".3"  className='loco flex-col h-full w-full  '>
                  <a href="https://work-portfolio-drab.vercel.app/">  <div id="box" className='flex h-[32vh] w-[30.5vw]  bg-[url("../public/images/projects.jpg")] border-2 border-zinc-50 bg-cover bg-center bg-no-repeat overflow-hidden bg-green-400  relative ml-[27vw] '></div> </a>
                  <a href="https://work-portfolio-drab.vercel.app/"> <div id="box" className='flex h-[32vh] w-[30.5vw] bg-[url("../public/images/react-demo-1.png")]  border-2 border-zinc-50 bg-cover bg-center bg-no-repeat overflow-hidden bg-green-400  ml-[40vw] -mt-[10vh] '></div></a>
                  <a href="https://work-portfolio-drab.vercel.app/"> <div id="box" className='flex h-[32vh] w-[30.5vw]  bg-[url("../public/images/uplink.png")]  border-2 border-zinc-50 bg-cover bg-center bg-no-repeat overflow-hidden bg-green-400  ml-[27vw] mt-[6vh]'></div></a>
                <button data-scroll data-scroll-section data-scroll-speed="-.1" className='   items-center justify-center w-screen mt-[12vh] '> 
               <a  href="https://work-portfolio-drab.vercel.app/"> <button  class="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-[#18181B] hover:text-white border-2 border-[#18181B]
                hover:bg-[#18181B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75  duration-300  focus:bg-transparent">
                      All Project's
                </button> </a>

                </button>
                </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default projets