import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'Consulting'
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/ASWIN-AK0', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/aswin-s--/', label: 'LinkedIn' },
    { icon: <FaXTwitter />, url: 'https://x.com/Aswin_ak05', label: 'X' },
    { icon: <FaEnvelope />, url: 'mailto:aswinkarthi9787@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Building Tomorrow</h3>
              <p>
              Blending creativity and technology to deliver meaningful solutions.
              Together, we can build something great!
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={(e) => handleAnchorClick(e, link.href)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <p>
                <strong>Email:</strong><br />
                aswinkarthi9787@gmail.com
              </p>
              <p>
                <strong>Phone:</strong><br />
                +91 7975099450<br />
                +91 9787967321
              </p>
              <p>
                <strong>Location:</strong><br />
                Coimbatore, INDIA
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Portfolio. Made with <FaHeart className="heart" /> by Aswin
            </p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
