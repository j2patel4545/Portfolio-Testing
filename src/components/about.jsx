import React, { useState, useEffect } from 'react';

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
        setTypingSpeed(50); // Speed up deletion
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        setTypingSpeed(150); // Normal typing speed
      }

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [displayedText, isDeleting, typingSpeed, words, currentWordIndex]);

  return (
    <div id='about' data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full relative flex h-screen py-5 px-5 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-r bg-zinc-900 font-["NeueMontreal"] text-4xl text-black flex-col'>
      <div className='upprdivr justify-center flex px-2.5 h-[15vh]'>About Me</div>
      <div className='text-2xl -mt-16 justify-center flex text-zinc-600'>--Who We Are--</div>
      <div className='flex mt-7 w-full gap-2 h-[68vh] align-middle justify-evenly'>
        <div className='flex h-full w-2/8 align-middle justify-center'>
          <img src="https://jetal-intro.vercel.app/doc's/profile.png" alt="Profile" className='j object-contain border-b-2 border-black h-full w-full' />
        </div>
        <div className='flex-col mt-[27.5vh] h-full w-2/4'>
          <h1 className='text-[2.vw] font-bold leading-10 pb-3'>
            I'm Patel Jetal and I am a <span className='inline-block text-zinc-600'>{displayedText}</span>
            <span className="inline-block blink-caret">|</span>
          </h1>
          <p className='text-[1.8vw] leading-none font-light'>
            Balancing code and keys, I navigate the digital realm as a web developer while harmonizing melodies on the piano. By day, crafting elegant websites; by night, embracing the symphony of chords and rhythms. Passion drives both worlds, intertwining creativity in technology and music, shaping a multifaceted journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
