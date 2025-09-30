// src/data/portfolioData.js

export const PORTFOLIO_DATA = {
  name: "Heshan",
  title: "Full Stack Developer",
  tagline: "Building seamless, data-driven applications with React and Node.",
  about: "I am a passionate Full Stack Developer specializing in the MERN stack. I focus on creating high-performance, accessible, and responsive user experiences using modern technologies like React and Tailwind CSS. My goal is to transform complex problems into elegant, production-ready solutions.",
  skills: [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'] },
    { category: 'Databases & Tools', items: ['MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS (S3)'] },
  ],
  projects: [
    {
      title: "TaskFlow Pro",
      description: "A comprehensive project management tool built with React, Redux Toolkit, and a Node.js/Express backend. Features include real-time collaboration and drag-and-drop interfaces.",
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      link: "#"
    },
    {
      title: "Crypto Dashboard",
      description: "A responsive finance dashboard providing real-time crypto data visualization using D3.js and a public API integration. Optimized for speed and mobile view.",
      tags: ['React', 'D3.js', 'API', 'Data Viz'],
      link: "#"
    },
    {
      title: "Portfolio v2",
      description: "This very portfolio! Designed and built from scratch using pure React functional components and highly optimized Tailwind CSS for a minimal, fast, and responsive user interface.",
      tags: ['React', 'Tailwind CSS', 'Responsiveness'],
      link: "#"
    },
  ],
  contact: {
    email: "heshan.dev@example.com",
    linkedin: "linkedin.com/in/heshan",
    github: "github.com/heshan-dev",
  }
};