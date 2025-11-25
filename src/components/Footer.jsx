import React from 'react';
import { HeartHandshake, Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="/#features">Features</a></li>
              <li><a href="/#team">Team</a></li>
              <li><a href="/#timeline">Roadmap</a></li>
            </ul>
          </div >

          <div className="footer-links">
            <h4 className="footer-heading">Resources</h4>
            <ul>
              <li><a href="#">Crisis Hotline</a></li>
              <li><a href="#">Counseling Center</a></li>
              <li><a href="#">Student Health</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Github"><Github size={20} /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>
        </div >

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} OpenEars. All rights reserved.</p>
    <p className="footer-credit">
      Developed by USF Students | Faculty Advisor: TBD | v0.1.0
    </p>
  </div>
      </div >

  <style>{`
        .footer {
          background-color: #1F2937;
          color: white;
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .footer-brand .logo-icon {
          color: var(--secondary);
        }

        .footer-description {
          color: #9CA3AF;
          line-height: 1.6;
          max-width: 300px;
        }

        .footer-heading {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: white;
        }

        .footer-links ul {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: #9CA3AF;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          color: #9CA3AF;
          transition: color 0.2s;
        }

        .social-icon:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #6B7280;
          font-size: 0.875rem;
        }

        .footer-credit {
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer >
  );
};

export default Footer;
