import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Linkedin, Instagram, Youtube } from 'lucide-react';
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
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube"><Youtube size={18} /></a>
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
              <button className="nav-cta desktop-cta" onClick={onBookDemo}>Book Demo</button>
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
          <button className="nav-cta drawer-cta" onClick={handleBookDemo}>Book Demo</button>
        </div>
      </nav>
    </>
  );
}
