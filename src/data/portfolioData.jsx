// src/data/portfolioData.js

export const PORTFOLIO_DATA = {
  name: "Heshan",
  title: "Full Stack Developer",
  tagline: "Building seamless, data-driven applications with React and Node.",
  about: " 🧑‍💻I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I focus on creating high-performance, accessible, and responsive user experiences using modern technologies like React and Tailwind CSS. My main goal is to transform complex problems into elegant, production-ready solutions.I am currently pursuing a Bict (Hons) Specialized in Software Technology degree at the University of Sri Jayewardenepura, Faculty of Technology. With an academic foundation rooted in technology (2A, 1B in my A/L Technology stream from Kingswood College), I am also a Machine Learning enthusiast and base my current projects on the MERN stack combined with machine learning concepts.",
  skills: [{
    category: 'Frontend',
    items: [
      { name: 'React', image: '/tech/react.png' },
      { name: 'TypeScript', image: '/tech/typescript.png' },
      { name: 'Tailwind CSS', image: '/tech/tailwind.png' },
      { name: 'Redux', image: '/tech/redux.png' },
      { name: 'Next.js', image: '/tech/nextjs.png' }, 
    ], 
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', image: '/tech/node.png' },
      { name: 'Express', image: '/tech/express.png' },
      { name: 'Python', image: '/tech/python.png' },
      { name: 'REST APIs', image: '/tech/rest.png' },
      { name: 'GraphQL', image: '/tech/graphql.png' },
    ],
  },
  {
    category: 'Databases & Tools',
    items: [
      { name: 'MongoDB', image: '/tech/mongodb.png' },
      { name: 'PostgreSQL', image: '/tech/postgresql.png' },
      { name: 'Git', image: '/tech/git.png' },
      { name: 'Docker', image: '/tech/docker.png' },
      { name: 'AWS (S3)', image: '/tech/aws-s3.png' },
    ],
  },],
  projects: [
    {
      title: "InternLink project",
      description: "Bridging the Gap Between Students and Companies This project tackles a critical challenge in the internship ecosystem – the disconnect between students seeking relevant opportunities and companies looking for qualified candidates",
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7373335846382395393/",
      image: "/projects/internlink.png"
    },
    {
      title: "Real-Time Face Recognition Web App",
      description: "Real-Time Face Recognition Web App using Flask, OpenCV & MongoDB I built a full-stack face recognition web application with powerful real-time capabilities and smart automation features:",
      tags: ['Python', 'Flask', 'OpenCV', 'HTML/CSS'],
      link: "https://www.linkedin.com/in/sachintha-heshan-940a4b221/recent-activity/all/",
      image: "/projects/facerecognition.png"
    },
    {
      title: "Portfolio v2",
      description: "This portfolio! Designed and built from scratch using pure React functional components and highly optimized Tailwind CSS for a minimal, fast, and responsive user interface.",
      tags: ['React', 'Tailwind CSS', 'Responsiveness'],
      link: "#",
      image: "/projects/portfolio.png"
    },
    {
      title: "Crystal beauty website",
      description: "This website based on MERN stack use vercel for frontend hosting using pure React functional components and highly optimized Tailwind CSS for a minimal, fast, and responsive user interface.",
      tags: ['React', 'Tailwind CSS', 'Responsiveness'],
      link: "#",
      image: "/projects/crystal.png"
    },
  ],
  contact: {
    email: "sachinthaweerakoon81@gmail.com",
    linkedin: "www.linkedin.com/in/sachintha-heshan-940a4b221/recent-activity/all/",
    github: "www.github.com/Heshan777",
    facebook: "web.facebook.com/sachinthaheshan.weerakoon?_rdc=1&_rdr#",
  }
};