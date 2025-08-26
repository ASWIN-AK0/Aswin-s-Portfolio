import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  // Removed category filtering; always showing all projects

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "frontend",
      description: "A responsive portfolio website showcasing my skills and projects with dark/light mode toggle and modern design.",
      image: "/images/projects/Aswin prot.png",
      technologies: ["React", "CSS3", "React Router", "React Icons"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://portfolio-demo.netlify.app",
      featured: true
    },
   
   
  ];

  // Removed categories and filteredProjects; showing all projects in a single grid

  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="section">
          <div className="section-content fade-in-up">
            <h1 className="section-title">My Projects</h1>
            <p className="section-subtitle">
              A showcase of my recent work and personal projects
            </p>
            
            {/* Projects Grid */}
            <div className="all-projects-section">
              <div className="projects-grid">
                {projects.map((project) => (
                  <div key={project.id} className="project-card">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <div className="overlay-content">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                            <FaEye />
                          </a>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-tech">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      
                      <div className="project-links">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaGithub />
                          Code
                        </a>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div className="project-stats">
              <div className="stats-grid">
                <div className="stat-item">
                  <FaCode className="stat-icon" />
                  <h3>10+</h3>
                  <p>Academic Projects</p>
                </div>
                <div className="stat-item">
                  <FaGithub className="stat-icon" />
                  <h3>5+</h3>
                  <p>GitHub Commits</p>
                </div>
                <div className="stat-item">
                  <FaExternalLinkAlt className="stat-icon" />
                  <h3>1+</h3>
                  <p>Live Deployments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
