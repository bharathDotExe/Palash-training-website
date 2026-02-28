import { Award, CheckCircle2, Sparkles, Quote } from 'lucide-react';
import './TrainerIntro.css';
import trainerPhoto from '../assets/trainer-photo.png';

const credentials = [
    { icon: '🏅', text: 'British Council Certified IELTS & Business English Language Coach' },
    { icon: '📜', text: 'TEFL Universal TEFL / TESOL Certified' },
    { icon: '📖', text: 'Business Story Telling' },
    { icon: '🎓', text: 'Certified as PTE & OET Coach' },
    { icon: '🎙️', text: 'Voice & Accent Certified' },
    { icon: '🏆', text: 'Certificate of Train the Trainer' },
];

const highlights = [
    '✨ Corporate Communication Specialist',
    '✨ Interactive & Gen-Z Friendly Teaching Style',
    '✨ Customised training sessions – group sessions & one-to-one both',
];

const sessionFocus = [
    'Helping professionals find their voice and the confidence to own every room.',
    'Taking them away from hesitation to authority, transforming communication into confidence.',
    'Where clarity meets confidence, voices become powerful.',
    'Empowering learners to speak with impact, presence, and purpose.',
    'Because every idea deserves to be heard, clearly and confidently.',
    'Turning silent potential into confident expression.',
];

const bioParas = [
    `With nearly 25 years of diverse corporate experience, I bring depth, insight, and authenticity to the world of communication training. My professional journey began as a Book Promotion In-charge with a leading medical publishing house, gradually expanding into Public Relations, Business Development, Corporate Communication, and Media Management. Through both full-time roles and freelance assignments, I gained extensive exposure to corporate dynamics and professional growth environments.`,
    `Throughout my career, one strength was consistently distinguished — my command over language and communication. It became the foundation of my success, earning me recognition and trust across organizations. Some of my colleagues and juniors naturally turned to me for guidance in improving their English, structuring their thoughts, and presenting themselves confidently (it was not the time of AI but purely authentic and original language skills). What began as informal mentoring soon revealed my true calling.`,
    `A defining turning point came when a stakeholder at a professional conference encouraged me to pursue Training & Development as a full-time profession. Even though I was already an English Literature graduate and post graduate, along with PGDM in HR, I embraced that vision, obtained TESOL certification and went on to acquire multiple professional credentials to build a strong academic and practical foundation in communication training.`,
    `Today, as a British Council certified IELTS, English Language, and Communication Coach, my approach extends far beyond grammar rules and textbook instruction. I understand that each individual has a unique learning style, whether visual, auditory, reading-based, or experiential. My sessions are thoughtfully designed to blend these methods for effective and lasting transformation.`,
    `Whether it's workplace communication, official presentations, IELTS preparation or interview readiness, my sessions focus on clarity, confidence, and professional presence. My mission is not merely to improve language skills but also to help individuals rediscover their voice, strengthen their self-belief, and step forward with authority. No more shrinking. No more hesitation. Just confident communication.`,
];

const visionPoints = [
    'To empower professionals and learners to lead with clarity, confidence, and authentic self-expression.',
    'To help individuals find their voice, own their presence, and rise without hesitation by transforming communication into a tool of confidence, credibility, and career growth.',
];

const missionPoints = [
    'To provide structured, practical, and personalized communication training that builds fluency, confidence, and professional presence.',
    'To guiding individuals beyond grammar and textbook learning by nurturing clarity of thought, impactful expression, and lasting self-belief. In addition.',
    'To design transformational learning experiences in English communication and IELTS preparation that deliver measurable and sustainable growth.',
];

const closingQuote = `Confident communication is not just a skill. It is also a powerful step toward leadership and personal growth. When you find your voice, you don't just speak better — you lead better, you rise higher, and you refuse to remain unseen.`;

export default function TrainerIntro() {
    return (
        <section id="about" className="trainer-section section-padding">
            <div className="container">

                {/* ── Page Header ── */}
                <div className="about-page-header text-center">
                    <span className="about-eyebrow">Our Story</span>
                    <h1 className="about-page-title">
                        About <span className="text-gradient">Us</span>
                    </h1>
                    <p className="about-tagline-hero">"Find Your Voice. Own Your Space. Lead With Confidence."</p>
                </div>

                {/* ── Hero Card: Photo + Credentials ── */}
                <div className="about-hero-grid">
                    {/* Photo column */}
                    <div className="about-photo-col">
                        <div className="trainer-photo-container glass">
                            <img
                                src={trainerPhoto}
                                alt="Communication Coach"
                                className="trainer-img"
                            />
                            <div className="experience-badge">
                                <span className="badge-name">N. Madhuri Bedekar</span>
                                <span className="badge-role">Communication Coach</span>
                                <span className="badge-exp">25+ Yrs Exp.</span>
                            </div>
                        </div>

                        {/* Highlights below image */}
                        <div className="about-highlights-card glass">
                            {highlights.map((h, i) => (
                                <p key={i} className="highlight-item">{h}</p>
                            ))}
                        </div>
                    </div>

                    {/* Credentials column */}
                    <div className="about-credentials-col">
                        <div className="credentials-label">
                            <Award size={18} className="cred-label-icon" />
                            <span>Credentials & Certifications</span>
                        </div>
                        <div className="credentials-list">
                            {credentials.map((c, i) => (
                                <div key={i} className="credential-item glass">
                                    <span className="cred-icon">{c.icon}</span>
                                    <p>{c.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Biography ── */}
                <div className="about-bio-section">
                    <div className="bio-section-label text-center">
                        <span className="about-eyebrow">My Journey</span>
                        <h2 className="section-title">The Story <span className="text-gradient">Behind the Coach</span></h2>
                    </div>
                    <div className="bio-content">
                        {bioParas.map((para, i) => (
                            <p key={i} className="bio-para">{para}</p>
                        ))}
                    </div>
                </div>

                {/* ── Vision & Mission ── */}
                <div className="about-vision-mission-section">
                    <div className="vision-mission-grid">
                        <div className="vm-card glass">
                            <h3 className="vm-title"><Sparkles className="vm-icon" size={24} /> Our <span className="text-gradient">Vision</span></h3>
                            <ul className="vm-list">
                                {visionPoints.map((point, i) => (
                                    <li key={i}><CheckCircle2 size={16} className="vm-check" /><span>{point}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="vm-card glass">
                            <h3 className="vm-title"><Award className="vm-icon" size={24} /> Our <span className="text-gradient">Mission</span></h3>
                            <ul className="vm-list">
                                {missionPoints.map((point, i) => (
                                    <li key={i}><CheckCircle2 size={16} className="vm-check" /><span>{point}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ── Closing Quote ── */}
                <div className="about-quote-block glass">
                    <Quote size={36} className="quote-open-icon" />
                    <p className="about-quote-text">{closingQuote}</p>
                    <Quote size={36} className="quote-close-icon" />
                </div>

                {/* ── Session Focus ── */}
                <div className="about-focus-section">
                    <div className="text-center" style={{ marginBottom: '40px' }}>
                        <span className="about-eyebrow">What I Stand For</span>
                        <h2 className="section-title">My Sessions <span className="text-gradient">Focus On</span></h2>
                    </div>
                    <div className="focus-grid">
                        {sessionFocus.map((point, i) => (
                            <div key={i} className="focus-card glass">
                                <CheckCircle2 size={22} className="focus-check" />
                                <p>{point}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="container">
                <div className="trust-metrics-grid mt-64">
                    <div className="metric-card glass">
                        <div className="metric-number text-gradient">10+</div>
                        <div className="metric-label">Years Experience</div>
                    </div>
                    <div className="metric-card glass">
                        <div className="metric-number text-gradient">1000+</div>
                        <div className="metric-label">Students Trained</div>
                    </div>
                    <div className="metric-card glass">
                        <div className="metric-number text-gradient">500+</div>
                        <div className="metric-label">IELTS 7+ Achievers</div>
                    </div>
                    <div className="metric-card glass">
                        <div className="metric-number text-gradient">50+</div>
                        <div className="metric-label">Corporate Clients</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
