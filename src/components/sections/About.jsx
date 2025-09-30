// src/components/sections/About.js
import React from 'react';
import Section from '../layout/Section';
import { UserIcon } from '../ui/Icons';

const AboutSection = ({ about }) => (
  <Section id="about" title="About Me" icon={UserIcon}>
    <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
      {about}
    </p>
  </Section>
);

export default AboutSection;