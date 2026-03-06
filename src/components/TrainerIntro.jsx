import { Award, CheckCircle2, Sparkles, Quote, Download } from 'lucide-react';
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

const previousSessions = [
    {
        category: "Corporate sector, Bank & IT sector– All management levels",
        topics: [
            "Leadership skills",
            "Conflict management",
            "Business communication skills",
            "Hierarchy, Discipline, work ethics",
            "Email Etiquette / telephone etiquette",
            "Soft skills",
            "Presentation skills",
            "English lessons – grammar, summary writing, passage writing",
            "Understanding British & American English",
            "Writing emails, Using proper salutations",
            "Email etiquette – dos & don'ts, changing trends of emails",
            "Mobile etiquette - Messaging etiquette",
            "Meeting Etiquette",
            "TEAM work",
            "TIME Management",
            "Confidence building",
            "Attending virtual meetings – dos & don'ts",
            "Story telling",
            "Train the Trainer",
        ]
    },
    {
        category: "IELTS sessions – Academic & General",
        topics: [
            "Reading – types of reading styles, looking for answers, match the following, matching the headings",
            "Writing, - Letter writing – 150 words & Essay writing – 250 words. Different methods of writing both for General & Academic. Type of essays and letters",
            "Listening – Practicing audio from reliable sources, understanding different accents, catching the right answers in all 4 sections",
            "Speaking – practicing all three rounds of interview with expected questions",
        ]
    },
    {
        category: "Management & Engineering colleges",
        topics: [
            "Interview skills for corporate interviews, communication skills, English grammar",
            "Soft skills – body language, grooming, personality development",
        ]
    },
    {
        category: "Hospitals",
        topics: [
            "Front desk – Good communication skills, multi-tasking, discipline, attentiveness",
            "Nursing - soft skills & communication skills",
            "House-keeping – behavioral skills, team work",
        ]
    },
    {
        category: "Batches for airport ground staff",
        topics: [
            "Understanding different pronunciations & accents",
            "Airport vocabulary",
            "English lessons",
        ]
    }
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
                    <span className="about-eyebrow">My Story</span>
                    <h1 className="about-page-title">
                        About <span className="text-gradient">ME</span>
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

                        <a
                            href="https://ik.imagekit.io/dvl5mhvik/Madhuri%20Bedekar%20Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="download-resume-btn"
                        >
                            <Download size={20} />
                            <span>Download Resume</span>
                        </a>
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
                            <h3 className="vm-title"><Sparkles className="vm-icon" size={24} /> My <span className="text-gradient">Vision</span></h3>
                            <ul className="vm-list">
                                {visionPoints.map((point, i) => (
                                    <li key={i}><CheckCircle2 size={16} className="vm-check" /><span>{point}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="vm-card glass">
                            <h3 className="vm-title"><Award className="vm-icon" size={24} /> My <span className="text-gradient">mission</span></h3>
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

                {/* ── Previous Sessions ── */}
                <div className="about-previous-sessions-section">
                    <div className="text-center" style={{ marginBottom: '40px', marginTop: '60px' }}>
                        <span className="about-eyebrow">Experience</span>
                        <h2 className="section-title">My Previously Training Conducted Sessions <br /><span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '10px', display: 'inline-block' }}>English language, Communication skills & Soft skills</span></h2>
                    </div>
                    <div className="previous-sessions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        {previousSessions.map((session, i) => (
                            <div key={i} className="session-card glass" style={{ padding: '32px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark)', lineHeight: '1.4' }}>{i + 1}. {session.category}</h3>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {session.topics.map((topic, j) => (
                                        <li key={j} style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: '1.5' }}>{topic}</li>
                                    ))}
                                </ul>
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
