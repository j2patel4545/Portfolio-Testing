import React, { useEffect, useState } from 'react'

function Eye() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full flex relative items-center justify-center h-screen bg-[#F1F1F1] overflow-hidden">
      {/* Background wrapper */}
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.8"
        className="flex items-center justify-center w-[90vw] h-[80vh] bg-[url('../public/images/back-eye2.jpg')] bg-contain bg-center bg-no-repeat"
      >
        {/* Eyes wrapper */}
        <div className="flex gap-6 md:gap-10 items-center justify-center">
          {/* Left Eye */}
          <div className="w-[30vw] h-[30vw] sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="bg-zinc-900 relative flex items-center justify-center w-2/3 h-2/3 rounded-full">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 w-full h-10 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="bg-zinc-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <div
                    style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                    className="absolute top-1/2 left-1/2 w-full h-10 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="bg-zinc-800 w-4 h-4 m-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className="w-[30vw] h-[30vw] sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="bg-zinc-900 relative flex items-center justify-center w-2/3 h-2/3 rounded-full">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 w-full h-10 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="bg-zinc-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <div
                    style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                    className="absolute top-1/2 left-1/2 w-full h-10 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="bg-zinc-800 w-4 h-4 m-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Eye;
