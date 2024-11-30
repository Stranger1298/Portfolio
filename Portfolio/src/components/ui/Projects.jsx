"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Project.css';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'GPT-4 Landing Page',
      description: 'A modern landing page showcasing GPT-4 capabilities with a responsive design.',
      technologies: ['React', 'Tailwind CSS', 'Next.js'],
      demoLink: 'https://webfrontend-sigma.vercel.app',
      githubLink: 'https://github.com/Stranger1298/React',
      category: 'Web Development'
    },
    {
      title: 'Weather Application',
      description: 'A real-time weather app providing updates for any location using a weather API.',
      technologies: ['React', 'Weather API', 'CSS'],
      demoLink: 'https://react-weather-gilt.vercel.app/',
      githubLink: 'https://github.com/Stranger1298/React-weather',
      category: 'Web Development'
    },
    {
      title: 'Pizza Menu',
      description: 'An interactive pizza menu app for browsing and customizing pizza orders.',
      technologies: ['React', 'CSS', 'JavaScript'],
      demoLink: 'https://pizza-nine-plum.vercel.app',
      githubLink: 'https://github.com/Stranger1298/pizza',
      category: 'Web Development'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
        className="section-title"
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "easeOut"
            }
          }
        }}
      >
        Featured Projects
      </motion.h2>

      <motion.div 
        className="projects-container"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            variants={itemVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="project-card">
              <motion.h3 
                className="project-title"
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="tech-tag"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.div 
                className="buttons"
                initial={false}
                animate={{
                  y: hoveredIndex === index ? 0 : 5,
                  opacity: hoveredIndex === index ? 1 : 0.9
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.a
                  href={project.demoLink}
                  className="btn demo-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  className="btn github-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
