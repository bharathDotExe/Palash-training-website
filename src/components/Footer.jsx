import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="container footer-content">
                <div className="footer-col branding-col">
                    <div className="logo-placeholder" style={{ marginBottom: '20px' }}>
                        <span className="logo-text" style={{ color: 'var(--white)' }}>PALASH <span style={{ color: 'var(--palash-orange)' }}>Training</span></span>
                        <span className="logo-sub" style={{ color: 'var(--glass-border)' }}>a journey towards skill development</span>
                    </div>
                    <p className="footer-bio">Empowering the next generation with modern, effective language and communication skills.</p>
                    <div className="social-icons">
                        <a href="#" className="social-link"><Facebook size={20} /></a>
                        <a href="#" className="social-link"><Instagram size={20} /></a>
                        <a href="#" className="social-link"><Linkedin size={20} /></a>
                        <a href="#" className="social-link"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/about">About Trainer</Link></li>
                        <li><Link to="/vision">Vision</Link></li>
                        <li><Link to="/services">Our Programs</Link></li>
                        <li><Link to="/success-stories">Success Stories</Link></li>
                        <li><Link to="/blog">Community Blog</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Programs</h4>
                    <ul className="footer-links">
                        <li><Link to="/services">Spoken English</Link></li>
                        <li><Link to="/services">IELTS Preperation</Link></li>
                        <li><Link to="/services">Soft Skills</Link></li>
                        <li><Link to="/services">Corporate Training</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Contact Us</h4>
                    <ul className="footer-contact">
                        <li><MapPin size={18} className="contact-icon" /> 123 Education Lane, Tech Hub City, 400001</li>
                        <li><Phone size={18} className="contact-icon" /> +91 98765 43210</li>
                        <li><Mail size={18} className="contact-icon" /> info@palashtraining.com</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Palash Training. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
