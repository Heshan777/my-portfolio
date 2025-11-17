// src/components/sections/Hero.js
import React, { useState, useEffect } from 'react';

// === NEW: Looping Animation Keyframes (Defined as an object for inline style) ===
// We define the keyframes here to ensure the animation loops infinitely.
const infinitePulseKeyframes = `
  @keyframes infinitePulse {
    0%, 100% { 
      opacity: 0.8;
      transform: scale(1);
    }
    50% { 
      opacity: 1;
      transform: scale(1.02);
    }
  }
`;

// Helper component for the infinitely looping title animation
const InfiniteText = ({ text, delayMultiplier = 0.1, baseDelay = 1.5 }) => {
  // Split the text by spaces.
  return text.split(' ').map((word, index) => (
    <span
      key={index}
      className="inline-block" // Essential for transform/scale to work
      style={{
        // 1. Apply the keyframe definition
        animation: `infinitePulse 3s ease-in-out infinite both`, // 3 seconds loop, infinite
        // 2. Apply a staggered start delay for the loop
        animationDelay: `${baseDelay + (index * delayMultiplier)}s`,
      }}
    >
      {word}{' '}{/* Add a space after each word */}
    </span>
  ));
};

const HeroSection = ({ name, title, tagline }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Base transition classes for sequential elements
    const baseTransitionClasses = "transition-all duration-700 ease-out transform";
    
    // Function to get the full class list for sequential elements
    const getSequenceClasses = (delayMs) => 
        `${baseTransitionClasses} ${
            isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
        } ${delayMs ? `delay-[${delayMs}ms]` : ''}`;


    return (
        <section 
            id="home" 
            className="flex items-center justify-center min-h-screen bg-gray-950 px-4 sm:px-6 py-16"
        >
            {/* Inject the keyframes into the head of the document */}
            <style>{infinitePulseKeyframes}</style>
            
            <div 
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left"
            >
                
                {/* -------------------- 1. TEXT / CTA COLUMN -------------------- */}
                <div className="space-y-6"> 
                    <p 
                        className={`text-xl sm:text-2xl text-yellow-400 font-medium ${getSequenceClasses(0)}`}
                    >
                        Hi, I'm
                    </p>
                    
                    <h1 
                        className={`text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight ${getSequenceClasses(200)}`}
                    >
                        {name}
                    </h1>
                    
                    {/* === UPDATED: INFINITELY ANIMATED TITLE === */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-300 bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                        {/* The animation will start after a 1.5s delay to allow the initial text to settle */}
                        <InfiniteText text={title} baseDelay={1.5} delayMultiplier={0.15} /> 
                    </h2>
                    
                    <p 
                        className={`text-lg sm:text-xl text-gray-400 max-w-2xl md:max-w-full italic pt-4 ${getSequenceClasses(1200)}`}
                    >
                        {tagline}
                    </p>
                    
                    <div className={`pt-8 ${getSequenceClasses(1500)}`}>
                        <a
                            href="#projects"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-gray-900 bg-yellow-400 hover:bg-yellow-300 transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50"
                        >
                            View My Work
                        </a>
                    </div>
                </div>

                {/* -------------------- 2. PHOTO COLUMN (Animated) -------------------- */}
                <div 
                    className={`flex justify-center md:justify-end order-first md:order-last ${getSequenceClasses(1700)}`}
                >
                    <div className="w-64 h-64 sm:w-80 sm:h-80 relative overflow-hidden rounded-full shadow-2xl border-4 border-yellow-500/50 transform transition duration-500 hover:scale-105">
                        <img 
                            src="/photo.jpg" 
                            alt="Heshan's Professional Portrait" 
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;