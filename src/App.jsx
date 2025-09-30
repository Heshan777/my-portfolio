// src/App.js
import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/Hero';
import AboutSection from './components/sections/About';
import SkillsSection from './components/sections/Skills';
import ProjectsSection from './components/sections/Projects';
import ContactSection from './components/sections/Contact';
import { PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900 font-inter antialiased">
      <style>{`
        /* Optional: Smooth scrolling for better UX */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-16">
        <HeroSection 
          name={PORTFOLIO_DATA.name} 
          title={PORTFOLIO_DATA.title} 
          tagline={PORTFOLIO_DATA.tagline} 
        />
        <AboutSection about={PORTFOLIO_DATA.about} />
        <SkillsSection skills={PORTFOLIO_DATA.skills} />
        <ProjectsSection projects={PORTFOLIO_DATA.projects} />
        <ContactSection contact={PORTFOLIO_DATA.contact} />
      </main>

      <Footer />
    </div>
  );
}