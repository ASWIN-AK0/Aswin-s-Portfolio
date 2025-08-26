import React from 'react';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Cloud Practitioner ",
      issuer: "AWS",
      date: "2025",
      image: "/images/certifications/AWS Certified Cloud Practitioner.jpg",
      verifyLink: "https://shorturl.at/6rcDn",
      
    },
    {
      title: "Learning Java 11",
      issuer: "Infosys springboard",
      date: "2025",
      image: "/images/certifications/Aswin infosys.jpg",
      verifyLink: "https://shorturl.at/xpnfa"
    },
    {
      title: "Website UI/UX Designing using ChatGPT",
      issuer: "Simplilearn - Skillup",
      date: "2025",
      image: "/images/certifications/Aswin Simple-uiux.jpg",
      verifyLink:"https://shorturl.at/ridOB"
    },
    {
      title: "Generative AI Foundations ",
      issuer: "AWS Academy",
      date: "2025",
      image: "/images/certifications/AWS Academy- gen ai.jpg",
      verifyLink: "https://shorturl.at/jjHLP",
      
    },
    {
      title: "AWS Academy Cloud Foundations ",
      issuer: "AWS Academy",
      date: "2024",
      image: "/images/certifications/Aswin - AWS Academy Cloud Foundations.jpg",
      verifyLink: "https://shorturl.at/hqT03",
      
    },
    {
      title: "FULL STACK WEB DEVELOPMENT INTERNSHIP",
      issuer: "Stark Institutions",
      date: "2024",
      image: "/images/certifications/Aswin S-FullStack.jpg",
       verifyLink: "https://www.linkedin.com/posts/aswin-s--_fullstackdevelopment-webdevelopment-react-activity-7269391578274652160-DE0B?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrGlF0BmrXcxzEthqa5EVU32wgX0CIA9jw"
    },
    {
      title: "Frontend Development",
      issuer: "Stark Institutions",
      date: "2024",
      image: "/images/certifications/Aswin S- Frontend Development.jpg",
      verifyLink: "https://www.linkedin.com/posts/aswin-s--_frontenddevelopment-html-css-activity-7269386521525280768-C3oL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrGlF0BmrXcxzEthqa5EVU32wgX0CIA9jw"
    },
    {
      title: "Backend Development",
      issuer: "Stark Institutions",
      date: "2024",
      image: "/images/certifications/Aswin S- Backend Development.jpg",
      verifyLink: "https://www.linkedin.com/posts/aswin-s--_backenddevelopment-nodejs-mongodb-activity-7269389842323529728-O19J?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrGlF0BmrXcxzEthqa5EVU32wgX0CIA9jw"
    },
    {
      title: "Java Training",
      issuer: "Spoken Tutorial Project, IIT Bombay",
      date: "2024",
      image: "/images/certifications/ASWIN-java.jpg",
      verifyLink: "https://www.linkedin.com/posts/aswin-s--_java-programming-certification-activity-7272286493803446272-bFtU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrGlF0BmrXcxzEthqa5EVU32wgX0CIA9jw"
    },
    {
      title: "RDBMS PostgreSQL Training",
      issuer: "Spoken Tutorial Project, IIT Bombay",
      date: "2024",
      image: "/images/certifications/ASWIN-Post.jpg",
      verifyLink: "https://www.linkedin.com/posts/aswin-s--_rdbms-postgresql-certification-activity-7272853646877343744-IGK8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrGlF0BmrXcxzEthqa5EVU32wgX0CIA9jw"
    },
    
    
    
    
  ];

  return (
    <div className="certificates">
      <div className="container">
        <div className="section">
          <div className="section-content fade-in-up">
            <h1 className="section-title">Certificates & Achievements</h1>
            <p className="section-subtitle">
              Professional certifications and achievements that validate my expertise
            </p>
            
            <div className="certificates-stats">
              <div className="stat-item">
                <FaAward className="stat-icon" />
                <h3>4+</h3>
                <p>Certifications</p>
              </div>
              <div className="stat-item">
                <FaCertificate className="stat-icon" />
                <h3>2</h3>
                <p>Major Platforms</p>
              </div>
              <div className="stat-item">
                <FaCalendarAlt className="stat-icon" />
                <h3>2024-2025</h3>
                <p>Timeline</p>
              </div>
            </div>
            
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <div key={index} className="certificate-card">
                  <div className="certificate-image">
                    <img src={cert.image} alt={cert.title} />
                    <div className="certificate-overlay">
                      <FaCertificate className="overlay-icon" />
                    </div>
                  </div>
                  
                  <div className="certificate-content">
                    <div className="certificate-header">
                      <h3 className="certificate-title">{cert.title}</h3>
                      <div className="certificate-date">
                        <FaCalendarAlt />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    
                    <div className="certificate-issuer">
                      <strong>Issued by:</strong> {cert.issuer}
                    </div>
                    {/* description and skills removed as requested */}
                    
                    <div className="certificate-actions">
                      <a 
                        href={cert.verifyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="verify-btn"
                      >
                        <FaExternalLinkAlt />
                        Verify Certificate
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="achievements-section">
              <h2 className="achievements-title">Additional Achievements</h2>
              <div className="achievements-grid">
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <FaAward />
                  </div>
            
                  <h4>Hackathon Participant</h4>
                  <p>Active participant in multiple university hackathons and coding competitions</p>
                </div>
                
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <FaAward />
                  </div>
                  <h4>Open Source Contributor</h4>
                  <p>Active contributor to multiple open source projects</p>
                </div>
                
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <FaAward />
                  </div>
                  <h4>Academic Excellence</h4>
                  <p>Consistent high performance in information technology coursework</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
