// src/components/layout/Footer.js
import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const Footer = () => (
  <footer className="bg-gray-950 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
    <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with React & Tailwind CSS.</p>
  </footer>
);

export default Footer;