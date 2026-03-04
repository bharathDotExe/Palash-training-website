import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header({ onBookDemo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Dynamic spacer height via CSS variable ── */
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const h = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${h}px`);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  /* ── Lock body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleBookDemo = () => {
    closeMobileMenu();
    onBookDemo();
  };

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  /* ── Navigation items (single source of truth) ── */
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Trainer' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/success-stories', label: 'Success Stories' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/blog', label: 'Blog' },
    { to: '/forum', label: 'Forum' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="header-wrapper" ref={headerRef}>
        {/* ── Top Contact Bar ── */}
        <div className="top-contact-bar">
          <div className="contact-left">
            <a
              href="https://wa.me/919640816324"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link whatsapp"
              aria-label="WhatsApp"
            >
              <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill="#25D366" d="M12.012 2c-5.512 0-9.998 4.486-9.998 9.996 0 1.769.458 3.493 1.33 5.018L2 22l5.124-1.344a9.96 9.96 0 0 0 4.888 1.272h.004c5.511 0 9.998-4.483 9.998-9.996S17.525 2 12.012 2z" />
                <path fill="#ffffff" d="M17.485 14.394c-.302-.152-1.788-.883-2.065-.984-.277-.101-.479-.151-.682.152-.202.303-.781.984-.956 1.185-.177.202-.353.227-.656.076-.303-.151-1.277-.47-2.433-1.503-.898-.802-1.505-1.792-1.681-2.096-.177-.302-.018-.466.133-.616.136-.135.303-.353.454-.529.151-.177.202-.303.303-.505.101-.202.05-.378-.025-.529-.076-.151-.682-1.639-.933-2.245-.246-.589-.495-.509-.682-.518a13.04 13.04 0 0 0-.58-.01c-.201 0-.529.075-.806.378-.277.303-1.059 1.034-1.059 2.522s1.084 2.924 1.235 3.126c.151.202 2.133 3.256 5.166 4.564.721.312 1.284.498 1.724.636.725.231 1.385.198 1.905.12.581-.086 1.788-.731 2.041-1.437.252-.705.252-1.31.177-1.437-.076-.126-.277-.202-.58-.353z" />
              </svg>
              WhatsApp
            </a>
            <a href="tel:+919640816324" className="contact-link phone">
              <Phone size={18} color="#f9a825" />
              +91 96408 16324
            </a>
            <a href="mailto:Palash.training@gmail.com" className="contact-link email hide-on-mobile">
              <Mail size={18} color="#f9a825" />
              Palash.training@gmail.com
            </a>
          </div>
          <div className="contact-right">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/madhuri-bedekar-75840920/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/palash.training/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#1877F2">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.928-1.956 1.879v2.255h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/madhuri.100369" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <defs>
                  <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="10%" stopColor="#fdf497" />
                    <stop offset="35%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="100%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Navbar Wrapper ── */}
        <div className="nav-wrapper">
          <nav className={`glass-pill${isScrolled ? ' scrolled' : ''}`}>
            {/* Logo */}
            <Link to="/" className="logo-container" onClick={closeMobileMenu}>
              <img src="/logo.png" alt="Palash Logo" className="logo-img" />
              <div className="logo-text-block">
                <span className="logo-text">PALASH <span>Training</span></span>
                <span className="logo-sub">A journey towards skill development</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="nav-links">
              {navItems.map(item => (
                <li key={item.to}>
                  <Link to={item.to} className={isActive(item.to)} onClick={closeMobileMenu}>{item.label}</Link>
                </li>
              ))}
            </ul>

            {/* Right Actions */}
            <div className="nav-right">
              <button className="nav-cta desktop-cta" onClick={onBookDemo}>Book a Free Demo</button>
              <button className="hamburger-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Dynamic Spacer ── */}
      <div className="header-spacer" />

      {/* ── Mobile Drawer Backdrop ── */}
      <div
        className={`drawer-backdrop${isMobileMenuOpen ? ' visible' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* ── Mobile Drawer ── */}
      <nav className={`mobile-drawer${isMobileMenuOpen ? ' open' : ''}`}>
        <div className="drawer-header">
          <span className="drawer-title">Menu</span>
          <button className="drawer-close" onClick={closeMobileMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <ul className="drawer-nav-links">
          {navItems.map(item => (
            <li key={item.to}>
              <Link to={item.to} className={isActive(item.to)} onClick={closeMobileMenu}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="drawer-cta-wrap">
          <button className="nav-cta drawer-cta" onClick={handleBookDemo}>Book a Free Demo</button>
        </div>
      </nav>
    </>
  );
}
