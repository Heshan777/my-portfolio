// src/components/sections/Projects.jsx
import React from 'react';
import Section from '../layout/Section';
import { CodeIcon } from '../ui/Icons';

const ProjectsSection = ({ projects }) => (
  <Section id="projects" title="Featured Projects" icon={CodeIcon}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-700 rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-[1.03] flex flex-col">
          
          {/* Image Container */}
          {project.image && (
            <div className="h-48 overflow-hidden border-b border-gray-600">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          )}

          {/* Content Container */}
          <div className="p-6 flex-grow">
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-semibold px-3 py-1 bg-yellow-400 text-gray-900 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Link Container */}
          <div className="p-6 border-t border-gray-600">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center transition-colors">
              View Project
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default ProjectsSection;