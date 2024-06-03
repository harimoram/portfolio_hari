import React, { useEffect, useState } from 'react';
import './TypingAnimation.css';

const roles = ["Software Engineer", "Frontend Developer", "UI UX Designer", "Data Analyst"];

const TypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [delay, setDelay] = useState(200);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < roles[index].length) {
        setDisplayedText(displayedText + roles[index].charAt(charIndex));
        setCharIndex(charIndex + 1);
        setDelay(200);
      } else if (deleting && charIndex > 0) {
        setDisplayedText(displayedText.slice(0, -1));
        setCharIndex(charIndex - 1);
        setDelay(100);
      } else if (!deleting && charIndex === roles[index].length) {
        setDeleting(true);
        setDelay(1000);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setIndex((index + 1) % roles.length);
        setDelay(500);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayedText, charIndex, deleting, delay, index]);

  return (
    <b className="typing-text">{displayedText}</b>
  );
}

export default TypingAnimation;
