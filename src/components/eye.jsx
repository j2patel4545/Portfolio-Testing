import React, { useEffect, useState } from 'react'
// import { transform } from 'typescript';

function eye() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180);
        })
    })

    
  return (
<div class="w-full flex  relative items-center justify-center h-screen bg-[#F1F1F1]  object-contain bg-cover bg-center overflow-hidden">  
          <div data-scroll dtat-scroll-section  data-scroll-speed="-0.8"  className=" flex  align-middle  justify-center items-center  w-[90vw] h-[80vh]  bg-[url('../public/images/back-eye2.jpg')] bg-contain bg-center bg-no-repeat overflow-hidden   ">
            <div data-scroll dtat-scroll-section  data-scroll-speed=".1.7" className=' mb-42  flex relative align-middle  justify-center items-center  gap-10   -translate-x-[50%] translate-y-[50%]  '>
                
                
                <div className='w-[15vw] h-[15vw]  flex items-center justify-center rounded-full cursor-pointer bg-zinc-100'>
                        <div className='bg-zinc-900 relative items-center justify-center w-2/3 h-2/3 rounded-full'>
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='bg-zinc-100 w-10 h-10 rounded-full cursor-pointer relative items-center justify-center '>



                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='bg-zinc-800 w-4 h-4 m-2 rounded-full relative items-center justify-center cursor-pointer '>
                                    </div>
                                 </div>



                                 </div>
                            </div>
                        </div>
                </div>
                <div className='w-[15vw] h-[15vw]  flex items-center justify-center rounded-full bg-zinc-100'>
                        <div className='bg-zinc-900 relative items-center justify-center w-2/3 h-2/3 rounded-full'>
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='bg-zinc-100 w-10 h-10 rounded-full relative items-center justify-center '>

                                
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='bg-zinc-800 w-4 h-4 m-2 rounded-full relative items-center cursor-pointer justify-center '>
                                    </div>
                                 </div>

                                

                                 </div>
                            </div>
                        </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default eye