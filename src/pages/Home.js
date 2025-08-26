import React from 'react';

import AnimatedName from '../components/AnimatedName';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="hero-section">
          <div className="hero-content fade-in-up">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <AnimatedName name="Aswin" />
                <span className="cursor">|</span>
              </h1>
              <h2 className="hero-subtitle">
              Information Technology Student & Aspiring Cloud and DevOps Engineer
              </h2>
              <p className="hero-description">
               Information Technology student passionate about creating innovative web solutions. 
               Eager to apply my skills in Cloud Computing, AWS, DevOps, and web development, bringing a fresh perspective to real-world projects.
              </p>
              
              <div className="hero-buttons">
                <a href="#projects" className="btn">
                  View My Work <FaArrowRight />
                </a>
                <a href="/images/Aswin res.pdf" className="btn btn-outline" download>
                  <FaDownload /> Download CV
                </a>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/ASWIN-AK0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/aswin-s--/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/Aswin_ak05" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <FaXTwitter />
                </a>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="profile-circle">
                  <img src="/images/Aswin 1.jpg" alt="Aswin" className="profile-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Academic Projects</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">7.0</h3>
              <p className="stat-label">GPA</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Technologies Learned</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
