import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar') && !event.target.closest('.menu-icon')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={() => handleClick('/')}>
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className={`home ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleClick('/')}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={`about ${activeLink === '/about' ? 'active' : ''}`} onClick={() => handleClick('/about')}>About</Link>
        </li>
        <li>
          <Link to="/projects" className={`projects ${activeLink === '/projects' ? 'active' : ''}`} onClick={() => handleClick('/projects')}>Projects</Link>
        </li>
        <li>
          <Link to="/experience" className={`experience ${activeLink === '/experience' ? 'active' : ''}`} onClick={() => handleClick('/experience')}>Experience</Link>
        </li>
        <li>
          <Link to="/contact" className={`contact ${activeLink === '/contact' ? 'active' : ''}`} onClick={() => handleClick('/contact')}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
