import React from 'react';
import Home from './Home';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Certificates from './Certificates';
import Projects from './Projects';
import Contact from './Contact';

const SinglePage = () => {
  return (
    <div>
      <section id="home" className="page-section theme-home"><Home /></section>
      <section id="about" className="page-section theme-about"><About /></section>
      <section id="education" className="page-section theme-education"><Education /></section>
      <section id="skills" className="page-section theme-skills"><Skills /></section>
      <section id="certificates" className="page-section theme-certificates"><Certificates /></section>
      <section id="projects" className="page-section theme-projects"><Projects /></section>
      <section id="contact" className="page-section theme-contact"><Contact /></section>
    </div>
  );
};

export default SinglePage;
