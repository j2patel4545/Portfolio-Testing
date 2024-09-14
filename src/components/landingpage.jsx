import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpLong } from 'react-icons/fa6';
import locomotiveScroll from 'locomotive-scroll';

function LandingPage() {
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
    <div ref={scrollRef} data-scroll data-scroll-section data-scroll-speed="-0.5" className="relative flex flex-col w-full h-screen pt-1">
      {/* Text Structure */}
      <div className="textstructure mt-[16vh] px-5 md:px-20">
        {["Crafting", "Digital", "Experiences"].map((item, index) => (
          <div className="classmaske" key={index}>
            <h1 className="flex uppercase leading-[13vw] text-[13vw] md:leading-[7vw] md:text-[7.5vw] font-['Founders_Grotesk_X-Condensed'] tracking-tight font-semibold">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "20vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[20vw] h-[15vw] md:w-[13vw] md:h-[8vw] mt-2 rounded-md mr-2 text-black bg-[url('../public/images/back-eye2.jpg')] bg-cover bg-center bg-no-repeat "
                  ></motion.div>
                )}
              </div>
              {item}
            </h1>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="border-t-[1px] border-zinc-700 mt-[10vh] md:mt-[16vh] flex flex-col md:flex-row items-center py-5 px-5 md:px-20 justify-between">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          {["Open to Work MERN stack freelancer", "CS Student"].map((item, index) => (
            <p className="text-sm md:text-md font-light tracking-tight leading-none" key={index}>
              {item}
            </p>
          ))}
        </div>

        <div className="start flex items-center gap-5 mt-5 md:mt-0">
        <div className="flex pl-4 pr-1 py-1 border-[1px] rounded-full items-center border-zinc-500 font-light text-xs md:text-sm capitalize">
      LinkedIn
      <motion.a
        href="https://www.linkedin.com/in/j2keys/"
        target="_blank"
        rel="noopener noreferrer" // Added rel for security
        className="flex w-8 h-8 border-[1px] ml-2 cursor-pointer justify-center items-center hover:bg-white hover:text-black border-zinc-500 rounded-full"
        whileHover={{ scale: 1.2, rotate: 18 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <span className="flex rotate-[45deg]">
          <FaArrowUpLong />
        </span>
      </motion.a>
    </div>
          
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
