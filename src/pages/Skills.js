import React from 'react';
import { FaHtml5, FaCss3Alt, FaPython, FaAws, FaJava, FaReact, FaJs } from 'react-icons/fa';
import { SiMysql, SiDocker } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava />, accent1: "#f89820", accent2: "#ff6a00" },
        { name: "Python", icon: <FaPython />, accent1: "#3776AB", accent2: "#FFD43B" },
        { name: "SQL", icon: <SiMysql />, accent1: "#00758f", accent2: "#00c2ff" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws />, accent1: "#ff9900", accent2: "#ffb84d" },
        { name: "DevOps Tools", icon: <SiDocker />, accent1: "#0db7ed", accent2: "#1d63ed" }
      ]
    },
    {
      title: "Web Fundamentals",
      skills: [
        { name: "JavaScript", icon: <FaJs />, accent1: "#f7df1e", accent2: "#f0b400" },
        { name: "React", icon: <FaReact />, accent1: "#61dafb", accent2: "#21a1f1" },
        { name: "HTML", icon: <FaHtml5 />, accent1: "#e34f26", accent2: "#f06529" },
        { name: "CSS", icon: <FaCss3Alt />, accent1: "#1572B6", accent2: "#2aa9e0" }
      ]
    }
  ];

  // Sections will be shown one below another without tabs

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Project Management",
    "Critical Thinking",
    "Adaptability",
    "Leadership",
    "Time Management"
  ];

  return (
    <div className="skills">
      <div className="container">
        <div className="section">
          <div className="section-content fade-in-up">
            <h1 className="section-title">Skills & Expertise</h1>
            <p className="section-subtitle">
              Technologies and tools I work with to bring ideas to life
            </p>
            
            <div className="skills-content">
              {skillCategories.map((category) => (
                <div key={category.title} className="skill-category">
                  <h2 className="category-title">{category.title}</h2>
                  <div className="skills-orbs">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={`${category.title}-${skill.name}-${idx}`}
                        className="skill-orb"
                        style={{ '--skill-accent1': skill.accent1, '--skill-accent2': skill.accent2 }}
                      >
                        <div className="skill-orb-ring">
                          <div className="skill-orb-icon">{skill.icon}</div>
                        </div>
                        <div className="skill-orb-name">{skill.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="soft-skills-section">
              <h2 className="soft-skills-title">Soft Skills</h2>
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <div key={index} className="soft-skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="experience-summary">
              <div className="summary-grid">
                <div className="summary-item">
                  <h3>Student</h3>
                  <p>Graduate 2026</p>
                </div>
                <div className="summary-item">
                  <h3>10+</h3>
                  <p>Academic Projects</p>
                </div>
                <div className="summary-item">
                  <h3>10+</h3>
                  <p>Technologies Learned</p>
                </div>
                <div className="summary-item">
                  <h3>Ready</h3>
                  <p>To Contribute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
