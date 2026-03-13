import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import trainerPhoto from '../assets/trainer-photo.png';
import { Linkedin, ArrowUpRight, Quote } from 'lucide-react';
import LinkedInBadge from './LinkedInBadge';
import InstagramBadge from './InstagramBadge';
import FacebookBadge from './FacebookBadge';
import { blogPosts } from '../data/blogPosts';
import './TrainerIntroHome.css';

/* ── Testimonials data for the slideshow ── */
const slideshowTestimonials = [
    {
        quote: '"Sunny and his team have been excellent workers since they arrived in the UK — I just wanted to thank you for helping them through the process."',
        name: 'Tom Harding',
        role: 'Contracts Manager, Timeless (UK)',
        source: '📧 Email',
    },
    {
        quote: '"You were absolutely brilliant and incredibly patient. I truly appreciated how friendly you were."',
        name: 'Greeshma Menon',
        role: 'Train the Trainer Course',
        source: '📧 Email',
    },
    {
        quote: '"Rather than a teacher she was more of a mentor — personal connect with each student, pushing each individual to think out of the box."',
        name: 'Aishwarya Kolte',
        role: 'GTM Hiring · Non-Tech Recruiter',
        source: '🔗 LinkedIn',
    },
    {
        quote: '"Madhuri is a rare professional who delivers excellent results while making the journey enjoyable and meaningful."',
        name: 'Prapti Ryan Rajput',
        role: 'Business Head · Global Delivery',
        source: '🔗 LinkedIn',
    },
    {
        quote: '"Madhuri Ma\'am has given a lot of boost into our confidence to speak out our mind. I highly recommend faculties like her."',
        name: 'Vivek Purohit',
        role: 'Assistant Manager, DCC at HSBC',
        source: '🔗 LinkedIn',
    },
];

export default function TrainerIntroHome() {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex(prev => (prev + 1) % slideshowTestimonials.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    const currentTestimonial = slideshowTestimonials[slideIndex];

    return (
        <section id="about" className="trainer-home-section section-padding">
            <div className="container trainer-home-content">

                {/* ── Left Column: Photo, Highlights & Blog Cards ── */}
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

                    {/* Founder tag */}
                    <div style={{ textAlign: 'center', marginTop: '28px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, var(--palash-orange), #ff7043)',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            padding: '5px 22px',
                            borderRadius: '50px',
                            boxShadow: '0 4px 14px rgba(255, 94, 0, 0.35)',
                        }}>Founder</span>
                    </div>

                    <div className="th-highlights-card glass">
                        <p className="th-highlight-item">✨ Corporate Communication Specialist</p>
                        <p className="th-highlight-item">✨ British Council Certified</p>
                        <p className="th-highlight-item">✨ Interactive & Gen-Z Friendly</p>
                    </div>

                    {/* ── Blog Title Cards ── */}
                    <div className="th-blog-cards">
                        <h3 className="th-blog-heading">Latest <span className="text-gradient">Insights</span></h3>
                        {blogPosts.slice(0, 3).map((post) => (
                            <div key={post.id} className="th-blog-card glass">
                                <span className="th-blog-category">{post.category}</span>
                                <h4 className="th-blog-title">{post.title}</h4>
                                <p className="th-blog-meta">{post.date} • {post.readTime}</p>
                                <Link to="/blog" className="th-blog-read-btn">
                                    Read Now <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        ))}
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

                    <div className="th-cta-group" style={{ display: 'flex', gap: '15px', marginTop: '20px', alignItems: 'center' }}>
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
                        <div className="social-card">
                            <LinkedInBadge />
                        </div>
                        <div className="social-card">
                            <InstagramBadge />
                        </div>
                        <div className="social-card">
                            <FacebookBadge />
                        </div>
                        <div className="social-card social-testimonial-card">
                            <div className="social-testimonial-inner">
                                <Quote size={32} className="social-testimonial-icon" />
                                <p className="social-testimonial-text" key={slideIndex}>
                                    {currentTestimonial.quote}
                                </p>
                                <div className="social-testimonial-author">
                                    <div className="social-testimonial-avatar">
                                        {currentTestimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="social-testimonial-name">{currentTestimonial.name}</p>
                                        <p className="social-testimonial-role">{currentTestimonial.role}</p>
                                    </div>
                                </div>
                                <span className="social-testimonial-source">{currentTestimonial.source}</span>
                                <div className="social-testimonial-dots">
                                    {slideshowTestimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            className={`social-dot${i === slideIndex ? ' active' : ''}`}
                                            onClick={() => setSlideIndex(i)}
                                            aria-label={`Testimonial ${i + 1}`}
                                        />
                                    ))}
                                </div>
                                <Link to="/testimonials" className="social-testimonial-link">
                                    View All Testimonials <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
