"use client";
import { motion } from 'framer-motion';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      title: 'GPT-4 Landing Page',
      description: 'A modern landing page showcasing GPT-4 capabilities with a responsive design.',
      technologies: ['React', 'Tailwind CSS', 'Next.js'],
      demoLink: 'https://webfrontend-sigma.vercel.app',
      githubLink: 'https://github.com/Stranger1298/React',
    },
    {
      title: 'Weather Application',
      description: 'A real-time weather app providing updates for any location using a weather API.',
      technologies: ['React', 'Weather API', 'CSS'],
      demoLink: 'https://react-weather-gilt.vercel.app/',
      githubLink: 'https://github.com/Stranger1298/React-weather',
    },
    {
      title: 'Pizza Menu',
      description: 'An interactive pizza menu app for browsing and customizing pizza orders.',
      technologies: ['React', 'CSS', 'JavaScript'],
      demoLink: 'https://pizza-nine-plum.vercel.app',
      githubLink: 'https://github.com/Stranger1298/pizza',
    },
  ];

  return (
    <div className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="project-item"
          >
            <div className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="buttons">
                <a href={project.demoLink} className="btn demo-btn" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.githubLink} className="btn github-btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
