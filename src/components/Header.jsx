import React, { useState } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper to close menu when clicking a link
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <HeartHandshake className="logo-icon" size={32} />
          <span className="logo-text">OpenEars</span>
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
          <a href="/#features" className="nav-link" onClick={handleLinkClick}>Features</a>
          <a href="/#team" className="nav-link" onClick={handleLinkClick}>Team</a>
          <a href="/#timeline" className="nav-link" onClick={handleLinkClick}>Timeline</a>
          <Link to="/demo" className="nav-link" onClick={handleLinkClick}>Demo</Link>
          <Link to="/demo" className="btn btn-primary mobile-only" onClick={handleLinkClick}>Try Demo</Link>
        </nav>

        <div className="header-actions">
          <Link to="/demo" className="btn btn-primary desktop-only">Try Demo</Link>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          height: 70px;
          display: flex;
          align-items: center;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 700;
          font-size: 1.5rem;
        }

        .logo-icon {
          color: var(--secondary);
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-main);
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          padding: 0.5rem;
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .desktop-only {
            display: none;
          }

          .nav-menu {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
            transform: translateY(-150%);
            transition: transform 0.3s ease-in-out;
            z-index: 999;
          }

          .nav-menu.active {
            transform: translateY(0);
          }

          .mobile-only {
            display: inline-flex;
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
