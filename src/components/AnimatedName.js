import React, { useState, useEffect } from 'react';

const AnimatedName = ({ name }) => {
  const [displayedName, setDisplayedName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const typeWriter = () => {
      if (isDeleting) {
        // Delete character
        setDisplayedName(prev => prev.slice(0, -1));
        setTypingSpeed(50);
        
        if (displayedName === '') {
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      } else {
        // Type character
        setDisplayedName(name.slice(0, currentIndex + 1));
        setTypingSpeed(150);
        
        if (currentIndex === name.length - 1) {
          // Pause at the end before starting over
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
          return;
        }
      }
      
      // Move to next character
      setCurrentIndex(prev => isDeleting ? prev : prev + 1);
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, name, typingSpeed, displayedName]);

  return <span className="highlight">{displayedName}</span>;
};

export default AnimatedName;
