// src/components/layout/Section.js
import React from 'react';

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-100">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-8 flex items-center text-yellow-400 border-b-4 border-yellow-700/50 pb-2">
        {Icon && <Icon className="w-8 h-8 mr-3" />}
        {title}
      </h2>
      <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl">
        {children}
      </div>
    </div>
  </section>
);

export default Section;