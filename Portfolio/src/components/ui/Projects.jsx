"use client";
// import StickyScroll from './sticky-scroll-reveal';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Gpt-4 LandingPage',
      demoLink: 'https://webfrontend-sigma.vercel.app',
      githubLink: 'https://github.com/Stranger1298/React',
      content: (
        <div className="project-card">
          <h3 className="text-xl font-bold mb-2">Project 1</h3>
          <p className="text-gray-700 mb-4">
            A modern landing page showcasing GPT-4 capabilities with a responsive design.
          </p>
          <div className="buttons flex justify-center gap-4">
            <a href="https://webfrontend-sigma.vercel.app" className="btn" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/Stranger1298/React" className="btn" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      ),
    },
    {
      title: 'Project 2',
      description: 'Weather application',
      demoLink: 'https://react-weather-gilt.vercel.app/',
      githubLink: 'https://github.com/Stranger1298/React-weather',
      content: (
        <div className="project-card">
          <h3 className="text-xl font-bold mb-2">Project 2</h3>
          <p className="text-gray-700 mb-4">
            A real-time weather app providing updates for any location using a weather API.
          </p>
          <div className="buttons flex justify-center gap-4">
            <a href="https://react-weather-gilt.vercel.app/" className="btn" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/Stranger1298/React-weather" className="btn" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      ),
    },
    {
      title: 'Project 3',
      description: 'Pizza menu',
      demoLink: 'https://pizza-nine-plum.vercel.app',
      githubLink: 'https://github.com/Stranger1298/pizza',
      content: (
        <div className="project-card">
          <h3 className="text-xl font-bold mb-2">Project 3</h3>
          <p className="text-gray-700 mb-4">
            An interactive pizza menu app for browsing and customizing pizza orders.
          </p>
          <div className="buttons flex justify-center gap-4">
            <a href="https://pizza-nine-plum.vercel.app" className="btn" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/Stranger1298/pizza" className="btn" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="projects-container py-10 overflow-y-auto">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          {project.content}
        </div>
      ))}
    </div>
  );
};

export default Projects;
