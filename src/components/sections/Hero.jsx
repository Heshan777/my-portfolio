// src/components/sections/Hero.js
import React from 'react';

const HeroSection = ({ name, title, tagline }) => (
  <section id="home" className="flex items-center justify-center min-h-screen text-center bg-gray-950 px-4 sm:px-6">
    <div className="max-w-4xl space-y-6 animate-fadeIn">
      <p className="text-xl sm:text-2xl text-yellow-400 font-medium">Hi, I'm</p>
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight">
        {name}
      </h1>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-300 bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
        {title}
      </h2>
      <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto italic pt-4">
        {tagline}
      </p>
      <div className="pt-8">
        <a
          href="#projects"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-gray-900 bg-yellow-400 hover:bg-yellow-300 transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50"
        >
          View My Work
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;