import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Karpagam Institute of Technology",
      location: "Coimbatore, India",
      duration: "2023 - 2026",
      grade: "7.0 GPA",
      description: "Engineering Student with strong foundation in software engineering, data structures, algorithms, and web development. Completed final year project on full-stack web application.",
      achievements: [
        "Active member of Multi-Media Club",
        "Participated in multiple hackathons"
      ]
    },
    {
      degree: "Diploma in Electronics and Communication Engineering ",
      institution: "Arulmigu Palaniandavar Polytechnic College",
      location: "Palani, India",
      duration: "2021 - 2023",
      grade: "75%",
      description: "Completed Diploma in Electronics and Communication Engineering with knowledge in embedded systems, networking, OS implementation, and hardware. Beginner-level experience in C++ and Python, with practical exposure to integrating electronics and software for real-world applications.",
      achievements: [
        "First Class with Distinction",
        "Active participation in technical events"
        
      ]
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Thiruppathy Arulneri Higher Secondary School",
      location: "Kallimandiiyam, India",
      duration: "2020 - 2021",
      grade: "72%",
      description: "Completed higher secondary education with a focus on Biology, Mathematics, and Physics. Strong academic performance with consistent high grades, building a solid foundation in analytical thinking and scientific concepts.",
      achievements: [
        "Good in Mathematics",
        "Interest in Science "
      ]
    }
  ];

  return (
    <div className="education">
      <div className="container">
        <div className="section">
          <div className="section-content fade-in-up">
            <h1 className="section-title">Education</h1>
            <p className="section-subtitle">
              My academic journey and continuous learning path
            </p>
            
            <div className="education-timeline">
              {educationData.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <FaGraduationCap />
                  </div>
                  <div className="timeline-content">
                    <div className="education-card">
                      <div className="card-header">
                        <h3 className="degree-title">{edu.degree}</h3>
                        <div className="duration">
                          <FaCalendarAlt />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                      
                      <div className="institution-info">
                        <h4 className="institution-name">{edu.institution}</h4>
                        <div className="location">
                          <FaMapMarkerAlt />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      
                      <div className="grade-info">
                        <span className="grade-badge">{edu.grade}</span>
                      </div>
                      
                      <p className="education-description">{edu.description}</p>
                      
                      <div className="achievements">
                        <h5>Key Achievements:</h5>
                        <ul>
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="additional-learning">
              <h2 className="learning-title">Continuous Learning</h2>
              <div className="learning-grid">
                <div className="learning-card">
                  <h4>Online Courses</h4>
                  <ul>
                    <li>Neural Network 101 : Image Recognition using Machine Learning - Simplilearn</li>
                    <li>Website UI/UX Designing using ChatGPT - Simplilearn</li>
                    <li>AWS Academy Cloud Foundations - AWS Academy</li>
                    <li> Generative AI Foundations - AWS Academy</li>
                  </ul>
                </div>
                
                
                <div className="learning-card">
                  <h4>Self-Study Projects</h4>
                  <ul>
                    <li>Personal Portfolio Website</li>
                    <li>E-commerce Web Application</li>
                    <li>Task Management System</li>
                    <li>Weather Dashboard App</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
