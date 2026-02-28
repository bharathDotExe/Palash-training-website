import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './ContactPage.css';

export default function ContactPage() {
    return (
        <main className="section-padding" style={{ minHeight: '80vh' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '64px' }}>
                    <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
                    <p className="section-subtitle">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>

                <div className="contact-grid">
                    {/* Left: Contact Form */}
                    <div className="contact-form-container glass">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send a Message</h3>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group-row">
                                <div className="input-group">
                                    <label htmlFor="contact-name">Full Name</label>
                                    <input type="text" id="contact-name" placeholder="John Doe" required />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="contact-phone">Phone Number</label>
                                    <input type="tel" id="contact-phone" placeholder="+91 90000 00000" required />
                                </div>
                            </div>

                            <div className="input-group">
                                <label htmlFor="contact-email">Email Address</label>
                                <input type="email" id="contact-email" placeholder="john@example.com" required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="contact-subject">Subject</label>
                                <input type="text" id="contact-subject" placeholder="How can we help you?" required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="contact-message">Your Message</label>
                                <textarea id="contact-message" rows="5" placeholder="Write your message here..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>

                    {/* Right: Contact Information */}
                    <div className="contact-info-container">
                        <div className="info-card glass">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Contact Information</h3>

                            <ul className="info-list">
                                <li>
                                    <div className="info-icon text-gradient"><MapPin size={24} /></div>
                                    <div className="info-text">
                                        <strong>Visit Us</strong>
                                        <p>123 Education Lane, Tech Hub City, 400001</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="info-icon text-gradient"><Phone size={24} /></div>
                                    <div className="info-text">
                                        <strong>Call Us</strong>
                                        <p>+91 96408 16324</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="info-icon text-gradient"><Mail size={24} /></div>
                                    <div className="info-text">
                                        <strong>Email Us</strong>
                                        <p>hello@palashtraining.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="info-icon text-gradient"><Clock size={24} /></div>
                                    <div className="info-text">
                                        <strong>Working Hours</strong>
                                        <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                                    </div>
                                </li>
                            </ul>

                            {/* Map Placeholder */}
                            <div className="map-placeholder mt-32">
                                <div style={{ height: '200px', background: 'rgba(0,0,0,0.03)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,0,0,0.05)' }}>
                                    <MapPin size={40} className="text-gradient" style={{ opacity: 0.5 }} />
                                    <span style={{ marginLeft: '10px', color: 'var(--text-light)', fontWeight: 500 }}>Interactive Map Here</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
