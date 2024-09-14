import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpLong } from 'react-icons/fa6';
import locomotiveScroll from 'locomotive-scroll';

function Loader() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll data-scroll-section data-scroll-speed="-0.5" className="relative flex-col w-full h-screen pt-1">
      {/* Text Structure */}
      <div className="textstructure mt-[16vh] px-5 md:px-20">
        {["Crafting", "Digital ", "Experiences"].map((item, index) => (
          <div className="classmaske" key={index}>
            <h1 className="flex uppercase leading-[13vw] text-[13vw] md:leading-[7vw] md:text-[7.5vw] font-['Founders_Grotesk_X-Condensed'] tracking-tight font-semibold">
              <div className="w-fit flex">
              {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "1px" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[1px] h-[15vw] md:w-[13vw] md:h-[8vw] mt-2 rounded-md mr-2 text-black  bg-center  overflow-hidden bg-zinc-50"
                  ></motion.div>
                )}
              </div>
              {item}
            </h1>
          </div>
        ))}
      </div>

      {/* Bottom Section  */}
      {/* <div className="border-t-[1px] border-zinc-700 mt-[10vh] md:mt-[16vh] flex flex-col md:flex-row items-center py-5 px-5 md:px-20 justify-between">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          {["For Public and private company's", "From pitch to TPO"].map((item, index) => (
            <p className="text-sm md:text-md font-light tracking-tight leading-none" key={index}>
              {item}
            </p>
          ))}
        </div>

        <div className="start flex items-center gap-5 mt-5 md:mt-0">
          <div className="flex px-5 py-2 border-[1px] rounded-full border-zinc-500 font-light text-xs md:text-sm capitalize">
            Start the Project
          </div>
          <div className="flex w-3 h-3 border-[1px] border-zinc-500 rounded-full">
            <span className="flex rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div> 
      </div> */}
    </div>
  );
}

export default Loader;
