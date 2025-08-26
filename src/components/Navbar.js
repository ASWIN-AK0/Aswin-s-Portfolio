import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaPalette } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode, toggleThemeSelector }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveHref(href);
    closeMenu();
  };

  // Update active link and scrolled state on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navItems
        .map((item) => {
          const id = item.href.replace('#', '');
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { href: item.href, top: rect.top, height: rect.height };
        })
        .filter(Boolean);

      // Choose the section closest to the top but not far above
      const threshold = 120; // offset for fixed navbar
      let current = '#home';
      for (const s of sections) {
        if (s.top - threshold <= 0) current = s.href;
      }
      setActiveHref(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <a href="#home" className="nav-logo" onClick={(e) => handleAnchorClick(e, '#home')}>
            <span className="logo-text">Aswin S</span>
          </a>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeHref === item.href ? 'active' : ''}`}
                onClick={(e) => handleAnchorClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-controls">
            <button
              className="theme-toggle"
              onClick={toggleThemeSelector}
              aria-label="Change color theme"
              title="Change Theme"
            >
              <FaPalette />
            </button>
            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
