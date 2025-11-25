// src/components/sections/About.jsx
import React, { useEffect, useRef, useState } from 'react';
import Section from '../layout/Section';
import { UserIcon } from '../ui/Icons';

const AboutSection = ({ about }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animations when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unZGobserve(entry.target); // Only animate once
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Split text by newlines to animate paragraphs individually
  // This handles the "whitespace-pre-wrap" logic manually for better animation control
  const paragraphs = about.split('\n').filter(p => p.trim() !== '');

  return (
    <Section id="about" title="About Me" icon={UserIcon}>
      <div 
        ref={sectionRef} 
        className="relative group perspective-1000"
      >
        {/* === Background Decorative Elements === */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl transition-all duration-700 group-hover:bg-yellow-500/20 group-hover:scale-150 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl transition-all duration-700 group-hover:bg-blue-500/20 group-hover:scale-125"></div>

        {/* === Main Content Card === */}
        <div className={`
          relative z-10 
          transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100 rotate-x-0' : 'translate-y-12 opacity-0 rotate-x-12'}
        `}>
          {/* Decorative Quote Icon */}
          <div className="absolute -top-6 -left-2 text-6xl text-yellow-500/20 font-serif select-none pointer-events-none">
            “
          </div>

          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p 
                key={index}
                className={`
                  text-lg sm:text-xl leading-relaxed text-gray-300 font-medium tracking-wide
                  border-l-2 border-transparent hover:border-yellow-400 pl-0 hover:pl-4
                  transition-all duration-500 ease-in-out
                `}
                style={{
                  // Staggered delay for each paragraph
                  transitionDelay: `${index * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                {/* Highlighting the first character (drop cap style) if it's the first paragraph 
                  or keeping normal text. 
                */}
                {paragraph}
              </p>
            ))}
          </div>

          {/* Decorative Closing Tag */}
          <div className="flex justify-end mt-8">
            <span className="text-gray-600 font-mono text-sm bg-gray-900/50 px-3 py-1 rounded-full border border-gray-700">
              &lt;/about&gt;
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;