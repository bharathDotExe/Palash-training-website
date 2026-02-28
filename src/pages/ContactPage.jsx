import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './ContactPage.css';

export default function ContactPage() {
    return (
        <main className="section-padding" style={{ minHeight: '80vh' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '64px' }}>
                    <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
                    <p className="section-subtitle" style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>

                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
                    {/* Left: Contact Form */}
                    <div className="contact-form-container glass" style={{ padding: '40px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send a Message</h3>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group-row" style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                <div className="input-group" style={{ flex: 1 }}>
                                    <label htmlFor="contact-name" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Full Name</label>
                                    <input type="text" id="contact-name" placeholder="John Doe" required style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)' }} />
                                </div>
                                <div className="input-group" style={{ flex: 1 }}>
                                    <label htmlFor="contact-phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Phone Number</label>
                                    <input type="tel" id="contact-phone" placeholder="+91 90000 00000" required style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)' }} />
                                </div>
                            </div>

                            <div className="input-group" style={{ marginBottom: '20px' }}>
                                <label htmlFor="contact-email" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Email Address</label>
                                <input type="email" id="contact-email" placeholder="john@example.com" required style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)' }} />
                            </div>

                            <div className="input-group" style={{ marginBottom: '20px' }}>
                                <label htmlFor="contact-subject" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Subject</label>
                                <input type="text" id="contact-subject" placeholder="How can we help you?" required style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)' }} />
                            </div>

                            <div className="input-group" style={{ marginBottom: '20px' }}>
                                <label htmlFor="contact-message" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Your Message</label>
                                <textarea id="contact-message" rows="5" placeholder="Write your message here..." required style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.1)', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full" style={{ width: '100%', marginTop: '10px' }}>Send Message</button>
                        </form>
                    </div>

                    {/* Right: Contact Information */}
                    <div className="contact-info-container">
                        <div className="info-card glass" style={{ padding: '40px' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Contact Information</h3>

                            <ul className="info-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <li style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div className="info-icon text-gradient" style={{ flexShrink: 0, marginTop: '2px' }}><MapPin size={24} /></div>
                                    <div className="info-text">
                                        <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>Visit Us</strong>
                                        <p style={{ color: 'var(--text-light)' }}>123 Education Lane, Tech Hub City, 400001</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div className="info-icon text-gradient" style={{ flexShrink: 0, marginTop: '2px' }}><Phone size={24} /></div>
                                    <div className="info-text">
                                        <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>Call Us</strong>
                                        <p style={{ color: 'var(--text-light)' }}>+91 96408 16324</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div className="info-icon text-gradient" style={{ flexShrink: 0, marginTop: '2px' }}><Mail size={24} /></div>
                                    <div className="info-text">
                                        <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>Email Us</strong>
                                        <p style={{ color: 'var(--text-light)' }}>hello@palashtraining.com</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div className="info-icon text-gradient" style={{ flexShrink: 0, marginTop: '2px' }}><Clock size={24} /></div>
                                    <div className="info-text">
                                        <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>Working Hours</strong>
                                        <p style={{ color: 'var(--text-light)' }}>Mon - Sat: 9:00 AM - 8:00 PM</p>
                                    </div>
                                </li>
                            </ul>

                            {/* Map Placeholder */}
                            <div className="map-placeholder mt-32" style={{ marginTop: '40px' }}>
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
