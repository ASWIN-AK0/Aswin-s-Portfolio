import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { db, collection, addDoc, serverTimestamp } from '../firebase';
import emailjs from '@emailjs/browser';
import './Contact.css';

// WARNING: Hardcoding keys exposes them in client-side code. Proceed only if acceptable.
const EMAILJS_SERVICE_ID = 'service_5rmaa2c';
const EMAILJS_TEMPLATE_ID = 'template_29n14ij';
const EMAILJS_PUBLIC_KEY = 'w8SgEi46_3etVP4oq';

// Initialize EmailJS once with public key
emailjs.init(EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp()
      });

      // Send email notification via EmailJS (non-blocking of Firestore success)
      try {
        const res = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email, // or use reply_to based on your template
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Aswin',
            submitted_at: new Date().toISOString(),
          }
        );
        // Optional debug
        // console.log('EmailJS response:', res.status, res.text);
      } catch (emailErr) {
        console.error('EmailJS notification failed:', emailErr);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to submit message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'aswinkarthi9787@gmail.com',
      link: 'mailto:aswinkarthi9787@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 7975099450',
      link: 'tel:+917975099450'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Coimbatore, INDIA',
      link: 'https://www.google.com/maps/search/?api=1&query=Coimbatore%2C%20India'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/ASWIN-AK0',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aswin-s--/',
      color: '#0077b5'
    },
    {
      icon: <FaXTwitter />,
      name: 'X',
      url: 'https://x.com/Aswin_ak05',
      color: '#000000'
    }
  ];

  return (
    <div className="contact">
      <div className="container">
        <div className="section">
          <div className="section-content fade-in-up">
            <h1 className="section-title">Get In Touch</h1>
            <p className="section-subtitle">
              I'm actively seeking entry-level opportunities. Let's connect!
            </p>
            
            <div className="contact-content">
              <div className="contact-info">
                <div className="info-header">
                  <h2>Contact Information</h2>
                  <p>I'm excited to hear from potential employers and collaborators</p>
                </div>
                
                <div className="contact-methods">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="contact-method"
                      aria-label={`Contact via ${info.title}`}
                    >
                      <div className="method-icon">
                        {info.icon}
                      </div>
                      <div className="method-info">
                        <h4>{info.title}</h4>
                        <p>{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="social-section">
                  <h3>Follow Me</h3>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={social.name}
                        style={{ '--social-color': social.color }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="availability">
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <span>Actively seeking opportunities</span>
                  </div>
                  <p>Information Technology student with a Diploma in ECE, eager to start my tech career with skills in web development, Java, AWS, DevOps.</p>
                </div>
              </div>
              
              <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="contact-form">
                  <h2>Let's Connect</h2>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell me about opportunities or just say hello..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="form-status success">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="form-status error">
                      Failed to send message. Please try again later or contact me directly at aswinkarthi9787@gmail.com
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
