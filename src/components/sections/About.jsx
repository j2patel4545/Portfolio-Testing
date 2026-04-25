import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function About() {
  const words = ["Web Designer", "Web Developer", "Pianist"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        setTypingSpeed(50); // speed up deletion
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        setTypingSpeed(150); // normal typing
      }

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [displayedText, isDeleting, typingSpeed, words, currentWordIndex]);

  return (
    <div
      id="about"
      data-scroll
      data-scroll-section
      data-scroll-speed="1.5"
      className="w-full relative flex min-h-screen py-6 sm:py-10 px-4 sm:px-8 rounded-tl-3xl rounded-tr-3xl bg-[#18181B] font-['NeueMontreal'] text-black flex-col z-10"
    >
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="upprdivr text-zinc-50 text-3xl sm:text-4xl md:text-5xl font-bold justify-center flex px-2.5 h-[10vh] sm:h-[12vh]"
      >
        About Me
      </motion.div>
      <div className="text-lg sm:text-2xl md:text-3xl -mt-4 sm:-mt-6 justify-center flex text-zinc-500">
        --Who We Are--
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row mt-6 sm:mt-10 w-full gap-6 md:gap-10 lg:gap-14 h-auto md:h-[68vh] items-center md:items-start justify-evenly">
        
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex w-full md:w-1/3 lg:w-1/4 justify-center md:justify-start"
        >
          <img
            src="https://jetal-intro.vercel.app/doc's/profile.png"
            alt="Profile"
            className="object-contain border-b-2 border-zinc-700 h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[80vh] w-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col mt-6 md:mt-[15vh] lg:mt-[20vh] w-full md:w-2/3 lg:w-2/4 text-center md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-400 font-bold leading-snug pb-3">
            hy I am a{" "}
            <span className="inline-block text-zinc-50">{displayedText}</span>
            <span className="inline-block blink-caret">|</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-500 leading-relaxed font-light px-2 sm:px-0">
            Balancing code and keys, I navigate the digital realm as a web developer while harmonizing melodies on the piano. 
            By day, crafting elegant websites; by night, embracing the symphony of chords and rhythms. 
            Passion drives both worlds, intertwining creativity in technology and music, shaping a multifaceted journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
