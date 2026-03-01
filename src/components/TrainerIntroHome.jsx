import { Link } from 'react-router-dom';
import trainerPhoto from '../assets/trainer-photo.png';
import { Linkedin } from 'lucide-react';
import LinkedInBadge from './LinkedInBadge';
import InstagramBadge from './InstagramBadge';
import FacebookBadge from './FacebookBadge';
import './TrainerIntroHome.css';

export default function TrainerIntroHome() {
    return (
        <section id="about" className="trainer-home-section section-padding">
            <div className="container trainer-home-content">

                {/* ── Left Column: Photo & Highlights ── */}
                <div className="trainer-home-image-col">
                    <div className="th-photo-container glass">
                        <img
                            src={trainerPhoto}
                            alt="Communication Coach"
                            className="th-trainer-img"
                        />
                        <div className="th-experience-badge">
                            <span className="th-badge-name">N. Madhuri Bedekar</span>
                            <span className="th-badge-role">Communication Coach</span>
                            <span className="th-badge-exp">25+ Yrs Exp.</span>
                        </div>
                    </div>

                    <div className="th-highlights-card glass">
                        <p className="th-highlight-item">✨ Corporate Communication Specialist</p>
                        <p className="th-highlight-item">✨ British Council Certified</p>
                        <p className="th-highlight-item">✨ Interactive & Gen-Z Friendly</p>
                    </div>
                </div>

                {/* ── Right Column: Bio & CTA ── */}
                <div className="trainer-home-info">
                    <span className="th-eyebrow">Meet Your Mentor</span>
                    <h2 className="section-title">Expert Language <span className="text-gradient">Coach</span></h2>

                    <p className="trainer-home-bio">
                        With nearly 25 years of diverse corporate experience in Public Relations, Business Development, and Corporate Communication, I bring depth, insight, and authenticity to the world of communication training.
                    </p>
                    <p className="trainer-home-bio">
                        Whether it's workplace communication, official presentations, IELTS preparation, or interview readiness, my sessions focus on clarity, confidence, and professional presence. My mission is not merely to improve language skills, but to help individuals rediscover their voice and step forward with authority.
                    </p>

                    <div style={{ display: 'flex', gap: '15px', marginTop: '20px', alignItems: 'center' }}>
                        <Link to="/about" className="btn btn-primary">Read Full Profile</Link>
                        <a
                            href="https://www.linkedin.com/in/madhuri-bedekar-75840920/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <Linkedin size={20} /> Connect on LinkedIn
                        </a>
                    </div>

                    <div className="social-badges-container">
                        {/* Connecting Arrows */}
                        <div className="social-arrow arrow-1">
                            <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0,10 L80,10" stroke="var(--palash-orange)" strokeWidth="3" fill="none" strokeDasharray="6,6" className="animated-line" />
                                <polygon points="80,2 98,10 80,18" fill="var(--palash-orange)" />
                            </svg>
                        </div>
                        <div className="social-arrow arrow-2">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M50,0 Q50,50 30,80" stroke="var(--palash-orange)" strokeWidth="3" fill="none" strokeDasharray="6,6" className="animated-line" />
                                <polygon points="34,75 18,92 22,70" fill="var(--palash-orange)" />
                            </svg>
                        </div>

                        <LinkedInBadge />
                        <InstagramBadge />
                        <FacebookBadge />
                    </div>
                </div>

            </div>
        </section>
    );
}
