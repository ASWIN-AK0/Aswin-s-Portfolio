import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SinglePage from './pages/SinglePage';
import Footer from './components/Footer';
import { FiX } from 'react-icons/fi';
import './App.css';

const THEMES = {
  default: 'default',
  ocean: 'ocean',
  forest: 'forest',
  sunrise: 'sunrise',
  midnight: 'midnight'
};

function App() {
  // Default to dark mode; will be overridden by saved preference if present
  const [darkMode, setDarkMode] = useState(true);
  const [appearance, setAppearance] = useState('dark'); // 'dark' | 'light' | 'system'
  const [theme, setTheme] = useState(THEMES.default);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [sectionAccents, setSectionAccents] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolioTheme');
    const savedMode = localStorage.getItem('darkMode');
    const savedAppearance = localStorage.getItem('appearance');
    const savedSectionAccents = localStorage.getItem('sectionAccents');

    if (savedTheme) {
      const validThemes = new Set(Object.values(THEMES));
      if (validThemes.has(savedTheme)) {
        setTheme(savedTheme);
      } else {
        setTheme(THEMES.default);
        localStorage.setItem('portfolioTheme', THEMES.default);
      }
    }

    if (savedAppearance) {
      setAppearance(savedAppearance);
    }

    if (savedSectionAccents) {
      setSectionAccents(JSON.parse(savedSectionAccents));
    }

    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    } else if (!savedAppearance || savedAppearance === 'dark') {
      // default to dark if no explicit appearance set
      localStorage.setItem('darkMode', JSON.stringify(true));
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    
    // First, remove all theme classes from html
    html.className = ''; // This will remove all classes
    
    // Add the current theme class (guard invalid)
    const validThemes = new Set(Object.values(THEMES));
    const appliedTheme = validThemes.has(theme) ? theme : THEMES.default;
    if (!validThemes.has(theme)) {
      setTheme(THEMES.default);
      localStorage.setItem('portfolioTheme', THEMES.default);
    }
    html.classList.add(appliedTheme + '-theme');
    
    // Set dark/light mode on body
    document.body.className = darkMode ? 'dark' : 'light';
    
    // Apply theme colors directly to root variables
    const themeColors = {
      default: {
        primary: '#6366F1', // indigo-500
        secondary: '#4F46E5', // indigo-600
        tertiary: '#312E81', // indigo-900
        light: '#E0E7FF'
      },
      ocean: {
        primary: '#06B6D4', // cyan-500
        secondary: '#0891B2', // cyan-600
        tertiary: '#164E63', // cyan-900
        light: '#CFFAFE'
      },
      forest: {
        primary: '#22C55E', // green-500
        secondary: '#16A34A', // green-600
        tertiary: '#14532D', // green-900
        light: '#DCFCE7'
      },
      midnight: {
        primary: '#A855F7', // purple-500
        secondary: '#9333EA', // purple-600
        tertiary: '#581C87', // purple-900
        light: '#F3E8FF'
      },
      sunrise: {
        primary: '#F43F5E', // rose-500
        secondary: '#E11D48', // rose-600
        tertiary: '#881337', // rose-900
        light: '#FFE4E6'
      }
    };

    // Apply the current theme colors to root variables
    const currentTheme = themeColors[appliedTheme] || themeColors.default;
    Object.entries(currentTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--accent-${key}`, value);
    });
    
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    localStorage.setItem('portfolioTheme', theme);
    localStorage.setItem('appearance', appearance);

    // Apply per-section accents if enabled
    const applySectionAccents = () => {
      const sections = document.querySelectorAll('.page-section');
      const paletteOrder = [
        'default','ocean','forest','sunrise','midnight'
      ];
      sections.forEach((sec, idx) => {
        if (sectionAccents) {
          const key = paletteOrder[idx % paletteOrder.length];
          const pal = themeColors[key] || themeColors.default;
          sec.style.setProperty('--accent-primary', pal.primary);
          sec.style.setProperty('--accent-secondary', pal.secondary);
          sec.style.setProperty('--accent-tertiary', pal.tertiary);
          sec.style.setProperty('--accent-light', pal.light);
        } else {
          // Clear overrides to inherit from root
          sec.style.removeProperty('--accent-primary');
          sec.style.removeProperty('--accent-secondary');
          sec.style.removeProperty('--accent-tertiary');
          sec.style.removeProperty('--accent-light');
        }
      });
    };
    applySectionAccents();
  }, [darkMode, theme, appearance, sectionAccents]);

  const toggleDarkMode = () => {
    // If currently following system, switch to explicit opposite of resolved mode
    if (appearance === 'system') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setAppearance(prefersDark ? 'light' : 'dark');
      setDarkMode(!prefersDark);
    } else {
      const next = !darkMode;
      setAppearance(next ? 'dark' : 'light');
      setDarkMode(next);
    }
  };
  
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    setShowThemeSelector(false);
  };
  
  const toggleThemeSelector = () => {
    setShowThemeSelector(!showThemeSelector);
  };

  // Handle system appearance mode syncing
  useEffect(() => {
    let mq;
    const handle = (e) => {
      if (appearance === 'system') {
        setDarkMode(e.matches);
      }
    };
    if (appearance === 'system' && window.matchMedia) {
      mq = window.matchMedia('(prefers-color-scheme: dark)');
      // set immediately to system
      setDarkMode(mq.matches);
      if (mq.addEventListener) mq.addEventListener('change', handle);
      else if (mq.addListener) mq.addListener(handle);
    }
    return () => {
      if (mq) {
        if (mq.removeEventListener) mq.removeEventListener('change', handle);
        else if (mq.removeListener) mq.removeListener(handle);
      }
    };
  }, [appearance]);

  // Keyboard shortcut: T to toggle theme appearance
  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === 't' && !e.altKey && !e.ctrlKey && !e.metaKey) {
        toggleDarkMode();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [appearance, darkMode]);

  return (
    <>
      <div className={`App ${darkMode ? 'dark' : 'light'} ${theme}-theme`}>
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          toggleThemeSelector={toggleThemeSelector}
        />

        <div className={`theme-selector ${showThemeSelector ? 'visible' : ''}`}>
          <div className="theme-selector-header">
            <h3>Choose a Theme</h3>
            <button onClick={toggleThemeSelector} className="close-theme-selector" aria-label="Close theme selector">
              <FiX />
            </button>
          </div>
          <div className="appearance-controls" style={{ marginBottom: '0.75rem', display: 'flex', gap: '8px' }}>
            <button className={`btn btn-outline ${appearance === 'system' ? 'active' : ''}`} onClick={() => setAppearance('system')} aria-pressed={appearance==='system'}>System</button>
            <button className={`btn btn-outline ${appearance === 'light' ? 'active' : ''}`} onClick={() => { setAppearance('light'); setDarkMode(false); }} aria-pressed={appearance==='light'}>Light</button>
            <button className={`btn btn-outline ${appearance === 'dark' ? 'active' : ''}`} onClick={() => { setAppearance('dark'); setDarkMode(true); }} aria-pressed={appearance==='dark'}>Dark</button>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
            <input type="checkbox" checked={sectionAccents} onChange={(e) => { setSectionAccents(e.target.checked); localStorage.setItem('sectionAccents', JSON.stringify(e.target.checked)); }} />
            Per-section accents
          </label>
          <div className="theme-options">
            {Object.entries({
              default: { name: 'Default', colors: ['#007bff', '#0056b3', '#003d82'] },
              ocean: { name: 'Ocean', colors: ['#20c997', '#0ca678', '#087f5b'] },
              forest: { name: 'Forest', colors: ['#40c057', '#2b8a3e', '#1c6e2f'] },
              sunrise: { name: 'Sunrise', colors: ['#F43F5E', '#E11D48', '#881337'] },
              midnight: { name: 'Midnight', colors: ['#9c36b5', '#862e9c', '#702d8a'] }
            }).map(([key, { name, colors }]) => (
              <button
                key={key}
                className={`theme-option ${theme === key ? 'active' : ''}`}
                onClick={() => changeTheme(key)}
                aria-label={`${name} theme`}
                aria-pressed={theme === key}
              >
                <div className="theme-preview">
                  <div 
                    className="preview-color primary" 
                    style={{ backgroundColor: colors[0] }}
                  ></div>
                  <div 
                    className="preview-color secondary" 
                    style={{ backgroundColor: colors[1] }}
                  ></div>
                  <div 
                    className="preview-color accent" 
                    style={{ backgroundColor: colors[2] }}
                  ></div>
                </div>
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>
        <main>
          <SinglePage />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
