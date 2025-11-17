// src/components/sections/About.js
import React from 'react';
import Section from '../layout/Section';
import { UserIcon } from '../ui/Icons';

const AboutSection = ({ about }) => (
  <Section id="about" title="About Me" icon={UserIcon}>
    <p className="text-gray-300 font-semibold leading-relaxed whitespace-pre-wrap text-2xl ">
      {about}
    </p>
  </Section>
);

export default AboutSection;