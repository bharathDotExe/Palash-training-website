import { useState } from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header({ onBookDemo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleBookDemo = () => {
    closeMobileMenu();
    onBookDemo();
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header-wrapper">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <a href="mailto:info@palashtraining.com" className="contact-link">
              <Mail size={16} /> <span className="hide-mobile">info@palashtraining.com</span>
            </a>
            <a href="tel:+919876543210" className="contact-link">
              <Phone size={16} /> <span className="hide-mobile">+91 98765 43210</span>
            </a>
          </div>
          <div className="social-icons">
            <a href="#" className="social-link"><Facebook size={16} /></a>
            <a href="#" className="social-link"><Instagram size={16} /></a>
            <a href="#" className="social-link"><Linkedin size={16} /></a>
            <a href="#" className="social-link"><Twitter size={16} /></a>
          </div>
        </div>
      </div>

      <nav className="main-nav glass">
        <div className="container nav-content">
          <Link to="/" className="logo-container" onClick={closeMobileMenu}>
            <img src="/logo.png" alt="Palash Logo" className="logo-img" />
            <div className="logo-placeholder">
              <span className="logo-text">PALASH <span style={{ color: 'var(--text-dark)' }}>Training</span></span>
              <span className="logo-sub">a journey towards skill development</span>
            </div>
          </Link>

          <ul className="nav-links">
            <li><Link to="/" className={isActive('/')} onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/services" className={isActive('/services')} onClick={closeMobileMenu}>Services</Link></li>
            <li><Link to="/about" className={isActive('/about')} onClick={closeMobileMenu}>About Trainer</Link></li>
            <li><Link to="/testimonials" className={isActive('/testimonials')} onClick={closeMobileMenu}>Testimonials</Link></li>
            <li><Link to="/success-stories" className={isActive('/success-stories')} onClick={closeMobileMenu}>Success Stories</Link></li>
            <li><Link to="/blog" className={isActive('/blog')} onClick={closeMobileMenu}>Blog</Link></li>
            <li><Link to="/forum" className={isActive('/forum')} onClick={closeMobileMenu}>Forum</Link></li>
            <li><Link to="/contact" className={isActive('/contact')} onClick={closeMobileMenu}>Contact</Link></li>
          </ul>

          <div className="nav-actions">
            <button className="btn btn-primary nav-cta desktop-only" onClick={onBookDemo}>Book Demo</button>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Separate Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <button className="mobile-menu-close" onClick={closeMobileMenu}>
            <X size={28} />
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li><Link to="/" className={isActive('/')} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/services" className={isActive('/services')} onClick={closeMobileMenu}>Services</Link></li>
          <li><Link to="/about" className={isActive('/about')} onClick={closeMobileMenu}>About Trainer</Link></li>
          <li><Link to="/testimonials" className={isActive('/testimonials')} onClick={closeMobileMenu}>Testimonials</Link></li>
          <li><Link to="/success-stories" className={isActive('/success-stories')} onClick={closeMobileMenu}>Success Stories</Link></li>
          <li><Link to="/blog" className={isActive('/blog')} onClick={closeMobileMenu}>Blog</Link></li>
          <li><Link to="/forum" className={isActive('/forum')} onClick={closeMobileMenu}>Forum</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} onClick={closeMobileMenu}>Contact</Link></li>
          <li className="mobile-only-item">
            <button className="btn btn-primary nav-cta-mobile" onClick={handleBookDemo}>Book Demo</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
