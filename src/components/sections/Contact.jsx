// src/components/sections/Contact.js
import React from 'react';
import Section from '../layout/Section';
import { MailIcon, GithubIcon, LinkedinIcon } from '../ui/Icons';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

const ContactSection = ({ contact }) => (
  <Section id="contact" title="Get In Touch" icon={MailIcon}>
    <div className="text-center space-y-6">
      <p className="text-xl text-gray-300">
        I'm currently available for freelance opportunities or full-time roles. Let's build something great!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center justify-center px-8 py-3 border-2 border-yellow-400 text-lg font-medium rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
        >
          <MailIcon className="w-5 h-5 mr-2" />
          Email Me
        </a>
      </div>

      <div className="flex justify-center space-x-6 pt-4">
        <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
          <FaGithub className="w-8 h-8" />
        </a>
        <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
          <IoLogoLinkedin className="w-8 h-8" />
        </a>
        <a href={`https://${contact.facebook}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
          <FaFacebook className="w-8 h-8" />
        </a>
      </div>
    </div>
  </Section>
);

export default ContactSection;