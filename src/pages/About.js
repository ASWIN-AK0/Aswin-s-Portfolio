import React from 'react';
import { FaCode, FaPaintBrush, FaMobile, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React, HTML, CSS, and JavaScript.'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Problem Solving',
      description: 'Strong analytical skills developed through algorithmic challenges and academic projects.'
    },
    {
      icon: <FaMobile />,
      title: 'Learning & Adaptation',
      description: 'Quick learner with ability to adapt to new technologies and development methodologies.'
    },
    {
      icon: <FaRocket />,
      title: 'Team Collaboration',
      description: 'Experience working in teams through group projects and collaborative coding assignments.'
    }
  ];

  return (
    <div className="about">
      <div className="container">
        <div className="section">
          <div className="section-content fade-in-up">
            <h1 className="section-title">About Me</h1>
            
            <div className="about-content">
              <div className="about-text">
                <div className="about-intro">
                  <h2>Hello! I'm a passionate Engineering Student</h2>
                  <p>
                  I'm an Information Technology student with a strong foundation in programming, cloud computing,
                  and web development. Throughout my academic journey, I've developed a passion for creating innovative digital solutions and continuously
                  learning cutting-edge technologies like AWS and DevOps.
                  </p>
                  <p>
                  My journey began with curiosity about how software works, and through rigorous coursework, 
                  personal projects, and continuous learning, I've built a solid foundation in full-stack development, 
                  cloud computing, and DevOps practices. I'm excited to apply my knowledge of AWS, web development, and innovative problem-solving to real-world challenges.
                  </p>
                </div>
                
                <div className="about-details">
                  <div className="detail-item">
                    <strong>Name:</strong> Aswin S
                  </div>
                  <div className="detail-item">
                    <strong>Location:</strong>Coimbatore,India
                  </div>
                  <div className="detail-item">
                    <strong>Email:</strong> aswinkarthi9787@gmail.com
                  </div>
                  <div className="detail-item">
                    <strong>Phone:</strong> +91 7975099450
                  </div>
                  <div className="detail-item">
                    <strong>Status:</strong> Engineering Student
                  </div>
                  <div className="detail-item">
                    <strong>Availability:</strong> Immediate
                  </div>
                </div>
              </div>
              
              <div className="about-image">
                <div className="image-container">
                  <img src="/images/Aswin 1.jpg" alt="About me" className="about-img" />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h3>Engineering Student</h3>
                      <p>Graduate 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="services-section">
              <h2 className="services-title">What I Do</h2>
              <div className="services-grid">
                {services.map((service, index) => (
                  <div key={index} className="service-card">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="philosophy-section">
              <div className="philosophy-content">
                <h2>My Philosophy</h2>
                <blockquote>
                  "As an Information Technology student, I bring enthusiasm, modern knowledge, and a strong willingness to learn.
                   I believe in writing clean, maintainable code and building user-centered solutions powered by cloud computing, AWS, 
                   and DevOps practices that create a positive impact"
                </blockquote>
                <div className="philosophy-points">
                  <div className="point">
                    <h4>Clean Code</h4>
                    <p>Writing maintainable, scalable, and well-documented code.</p>
                  </div>
                  <div className="point">
                    <h4>User-Centered</h4>
                    <p>Putting user needs and experience at the center of every decision.</p>
                  </div>
                  <div className="point">
                    <h4>Continuous Learning</h4>
                    <p>Staying updated with latest technologies and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
