// src/components/layout/Navbar.js
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { MenuIcon, XIcon } from '../ui/Icons';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, setActiveSection]); // Added dependencies to useEffect

  const getNavItemClass = (id) => (
    `p-2 transition-colors duration-300 rounded-lg ${
      activeSection === id
        ? 'text-yellow-400 font-semibold bg-gray-700'
        : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
    }`
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-extrabold text-yellow-400 tracking-wider">
            {PORTFOLIO_DATA.name}<span className="text-gray-300">.dev</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={getNavItemClass(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-yellow-400 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-2 border-t border-gray-800">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left ${getNavItemClass(section.id)}`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;