// src/components/sections/Skills.js
import React from 'react';
import Section from '../layout/Section';
import { ZapIcon } from '../ui/Icons';

const SkillsSection = ({ skills }) => (
  <Section id="skills" title="Technical Skills" icon={ZapIcon}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skills.map((skillGroup, index) => (
        <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-xl border-t-4 border-yellow-500">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">{skillGroup.category}</h3>
          <ul className="space-y-2 list-none p-0 m-0">
            {skillGroup.items.map((item, i) => (
              <li key={i} className="flex items-center text-gray-200">
                <span className="text-yellow-400 mr-2">◆</span> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default SkillsSection;