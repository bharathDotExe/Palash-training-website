import {
    Mic2, Briefcase, Globe2, Target, Star, GraduationCap,
    BookOpen, Crown, CheckCircle2, ArrowRight
} from 'lucide-react';
import './Services.css';

const services = [
    {
        id: 1,
        number: '01',
        title: 'Executive English Communication Coaching',
        tagline: "It's time to step into every conversation with confidence and authority.",
        icon: <Mic2 size={28} />,
        color: 'orange',
        points: [
            'Personalized, high-impact coaching to elevate fluency, clarity, and professional presence.',
            'Focused on confident speaking, structured thinking, and impactful expression.',
        ],
    },
    {
        id: 2,
        number: '02',
        title: 'Workplace & Business Communication',
        tagline: 'Communicate like a leader, not just a participant.',
        icon: <Briefcase size={28} />,
        color: 'red',
        points: [
            'Advanced training in professional communication during meetings.',
            'Presentation skills.',
            'Business communication.',
            'Stakeholder interaction.',
        ],
    },
    {
        id: 3,
        number: '03',
        title: 'IELTS Preparation (Academic & General) – Band 6+',
        tagline: 'Achieve your desired band score with clarity and confidence.',
        icon: <Globe2 size={28} />,
        color: 'orange',
        points: [
            'Strategy-driven coaching for all four modules – Reading, Writing, Listening & Speaking.',
            'Structured practice & mock evaluations.',
            'Targeted performance improvement.',
            'PTE / OET test preparation also available.',
        ],
    },
    {
        id: 4,
        number: '04',
        title: 'Interview & Presentation Mastery',
        tagline: 'Own the room. Own the opportunity.',
        icon: <Target size={28} />,
        color: 'red',
        points: [
            'Focused coaching to refine articulation.',
            'Correction in standing and sitting posture.',
            'Body language – eye contact, handshake.',
            'Discipline, punctuality & grooming.',
            'Structured responses & delivery confidence.',
        ],
    },
    {
        id: 5,
        number: '05',
        title: 'Soft Skills & Confidence Development',
        tagline: 'Become the most confident version of yourself.',
        icon: <Star size={28} />,
        color: 'orange',
        points: [
            'Transformation of hesitation into self-assured expression.',
            'Personality development – GDs, Extempore & public speaking.',
            'Interpersonal skills – increased participation levels.',
            'Behavioural skill enhancement & mobile etiquette.',
        ],
    },
    {
        id: 6,
        number: '06',
        title: 'Train the Trainer',
        tagline: 'Equip yourself with the skills to teach, inspire, and lead confidently.',
        icon: <GraduationCap size={28} />,
        color: 'red',
        points: [
            'Adult learning principles & types of learners.',
            'ADDIE Model & Training Need Analysis.',
            'Presentation & facilitation skills.',
            'VARK Model, Kirkpatrick Model & Phillips Model (ROI).',
            'Assessments and course feedback.',
        ],
    },
    {
        id: 7,
        number: '07',
        title: 'Speaking and Writing English',
        tagline: 'If you want to be taken seriously, start with the way you structure your words.',
        icon: <BookOpen size={28} />,
        color: 'orange',
        points: [
            'Grammar basics – Tenses, Articles, Modals, Homophones, Punctuation, Verbs, Adverbs, Phrasal verbs, Adjectives.',
            'Syntax – Sentence structuring (main clause / subordinate clause).',
            'Syllable, syllable stress, articulation & pronunciation.',
            'Summary writing, essay writing, letter writing & emails.',
        ],
    },
    {
        id: 8,
        number: '08',
        title: 'Leadership Skills',
        tagline: 'Leadership is not about speaking louder; it is about speaking with purpose, integrity, and influence.',
        icon: <Crown size={28} />,
        color: 'red',
        points: [
            'Types of leaders and leadership styles.',
            'Communication & Influence – persuasive communication, active listening & feedback frameworks.',
            'Emotional Intelligence – self-awareness and empathy for effective team management.',
            'Decision Making & Problem Solving – strategic thinking and conflict management.',
            'Team management, delegation, change management & performance management.',
            'Time management – setting priorities for yourself and your team.',
        ],
    },
];

const audience = [
    'Working professionals seeking career growth',
    'Managers (middle to junior) and leaders aiming to strengthen executive presence',
    'Entrepreneurs who want persuasive communication skills',
    'Students preparing for IELTS or global opportunities',
    'Individuals who feel capable, but struggle to express it',
];

const howItWorks = [
    {
        step: '1',
        title: 'Discovery & Assessment',
        desc: 'We begin with a structured conversation to understand your current level, goals, challenges, and learning style.',
    },
    {
        step: '2',
        title: 'Personalized Strategy Plan',
        desc: 'A tailored roadmap is created based on your objectives — fluency, IELTS score improvement, workplace communication, or presentation mastery.',
    },
    {
        step: '3',
        title: 'Focused Coaching Sessions',
        desc: 'Interactive, structured sessions combining practice, feedback, refinement, and real-world application.',
    },
    {
        step: '4',
        title: 'Measurable Progress & Confidence Shift',
        desc: 'Regular evaluations ensure visible improvement — not just in language skills, but in clarity, presence, and confidence.',
    },
];

export default function Services() {
    return (
        <section id="services" className="services-section section-padding">
            {/* ── Hero Header ── */}
            <div className="container">
                <div className="services-page-header text-center">
                    <span className="services-eyebrow">What I Offer</span>
                    <h1 className="services-page-title">
                        Learning Solutions <span className="text-gradient">I Provide</span>
                    </h1>
                    <p className="services-page-subtitle">
                        Comprehensive, personalized coaching to elevate your communication, confidence, and career.
                    </p>
                </div>

                {/* ── Service Cards ── */}
                <div className="services-full-grid">
                    {services.map((service) => (
                        <div key={service.id} className={`service-full-card glass service-card-${service.color}`}>
                            <div className="sfc-left">
                                <span className="sfc-number">{service.number}</span>
                                <div className={`sfc-icon-wrap ${service.color}`}>
                                    {service.icon}
                                </div>
                            </div>
                            <div className="sfc-right">
                                <h3 className="sfc-title">{service.title}</h3>
                                <ul className="sfc-points">
                                    {service.points.map((pt, i) => (
                                        <li key={i} className="sfc-point">
                                            <CheckCircle2 size={15} className="sfc-check" />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sfc-tagline">"{service.tagline}"</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Who This Is For ── */}
                <div className="audience-section">
                    <div className="audience-header text-center">
                        <span className="services-eyebrow">Designed For</span>
                        <h2 className="section-title">Who This Is <span className="text-gradient">For</span></h2>
                    </div>
                    <div className="audience-grid">
                        {audience.map((item, i) => (
                            <div key={i} className="audience-card glass">
                                <span className="audience-tick">✔</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="audience-cta-text">
                        <p>
                            Communication is not an optional skill. It is your <strong>professional identity</strong>. When you refine your communication, you don't just improve your language — you elevate your entire professional presence.
                        </p>
                        <p className="audience-closing"><em>Serious about growth? Start with the way you communicate.</em></p>
                    </div>
                </div>

                {/* ── How It Works ── */}
                <div className="how-section">
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <span className="services-eyebrow">The Process</span>
                        <h2 className="section-title">How It <span className="text-gradient">Works</span></h2>
                    </div>
                    <div className="how-grid">
                        {howItWorks.map((h, i) => (
                            <div key={i} className="how-card glass">
                                <div className="how-step-num">{h.step}</div>
                                <h3 className="how-title">{h.title}</h3>
                                <p className="how-desc">{h.desc}</p>
                                {i < howItWorks.length - 1 && (
                                    <ArrowRight size={20} className="how-arrow" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
