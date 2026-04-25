import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpLong } from 'react-icons/fa6';

function LandingPage() {
  return (
    <div
      className="w-full h-full flex flex-col pt-4 pointer-events-auto"
    >
      {/* Text Section */}
      <div className="textstructure mt-[10vh] px-5 md:px-20">
        {["Crafting", "Digital", "Experiences"].map((item, index) => (
          <div className="classmaske overflow-hidden" key={index}>
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
              className="flex uppercase leading-[14vw] text-[14vw] sm:leading-[10vw] sm:text-[10vw] md:leading-[7vw] md:text-[7.5vw] font-['Founders_Grotesk_X-Condensed'] tracking-tight font-semibold"
            >
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "20vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.5 }}
                    className="w-[20vw] h-[15vw] sm:w-[18vw] sm:h-[12vw] md:w-[13vw] md:h-[8vw] mt-2 rounded-md mr-2 text-black bg-[url('../public/images/back-eye2.jpg')] bg-cover bg-center bg-no-repeat shadow-xl"
                  ></motion.div>
                )}
              </div>
              {item}
            </motion.h1>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="border-t-[1px] border-zinc-700 mt-[12vh] flex flex-col md:flex-row items-center py-5 px-5 md:px-20 justify-between">
        {/* Left Info */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-center md:text-left">
          {["Open to Work MERN stack freelancer", "CS Student"].map((item, index) => (
            <p
              className="text-sm sm:text-base md:text-md font-light tracking-tight leading-none"
              key={index}
            >
              {item}
            </p>
          ))}
        </div>

        {/* Social Links */}
        <div className="start flex items-center gap-5 mt-5 md:mt-0">
          <div className="flex pl-4 pr-1 py-1 border-[1px] rounded-full items-center border-zinc-500 font-light text-xs sm:text-sm md:text-base capitalize">
            LinkedIn
            <motion.a
              href="https://www.linkedin.com/in/j2keys/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-8 h-8 sm:w-9 sm:h-9 border-[1px] ml-2 cursor-pointer justify-center items-center hover:bg-white hover:text-black border-zinc-500 rounded-full"
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
