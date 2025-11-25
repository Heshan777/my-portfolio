// src/components/sections/Skills.jsx
import React, { useState, useEffect, useRef } from 'react';
import Section from '../layout/Section';
import { ZapIcon } from '../ui/Icons';

const SkillsSection = ({ skills }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animations when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <Section id="skills" title="Technical Skills" icon={ZapIcon}>
      <div 
        ref={sectionRef} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className={`
              relative group
              bg-gray-800/40 backdrop-blur-sm
              rounded-2xl p-8
              border border-gray-700/50
              hover:border-yellow-500/50
              transition-all duration-700 ease-out
              hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.15)]
              hover:-translate-y-2
            `}
            style={{
              // Staggered Fade-Up Animation
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: `${index * 150}ms`
            }}
          >
            {/* === Category Header with Animated Accent Bar === */}
            <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center relative z-10">
              <span className="w-1.5 h-6 bg-yellow-500 rounded-full mr-4 group-hover:h-10 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
              {skillGroup.category}
            </h3>

            {/* === Interactive Skills List === */}
            <div className="space-y-3 relative z-10">
              {skillGroup.items.map((item, i) => (
                <div 
                  key={i}
                  className="
                    group/item flex items-center justify-between 
                    p-3 rounded-xl 
                    bg-gray-900/40 hover:bg-yellow-500/10 
                    border border-transparent hover:border-yellow-500/20 
                    transition-all duration-300 cursor-default
                  "
                >
                  <div className="flex items-center">
                    {/* Icon Container with Glow */}
                    <div className="relative w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg group-hover/item:scale-110 group-hover/item:bg-gray-800/80 transition-all duration-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-6 h-6 object-contain filter drop-shadow-md"
                      />
                    </div>
                    <span className="ml-4 text-gray-400 font-medium group-hover/item:text-yellow-400 transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                  
                  {/* Hidden Arrow that slides in on hover */}
                  <div className="opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-yellow-500 text-sm">
                    ➜
                  </div>
                </div>
              ))}
            </div>
            
            {/* === Subtle Gradient Overlay === */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;