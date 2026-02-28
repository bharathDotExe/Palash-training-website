import './TestimonialsPage.css';
import imgWhatsapp from '../assets/testimonial-whatsapp.png';
import imgEmailTom from '../assets/testimonial-email-tom.png';
import imgGreeshma from '../assets/testimonial-greeshma.png';
import imgAishwarya from '../assets/testimonial-aishwarya.png';
import imgPrapti from '../assets/testimonial-prapti.png';
import imgPraveena from '../assets/testimonial-praveena.png';
import imgVivek from '../assets/testimonial-vivek.png';
import imgStudents1 from '../assets/testimonial-students1.png';
import imgStudents2 from '../assets/testimonial-students2.png';

/* ── Screenshot testimonials (real images) ── */
const screenshots = [
    {
        id: 1, name: 'Tom Harding', role: 'Contracts Manager, Timeless (UK)',
        source: '📧 Email', sourceColor: 'blue', image: imgEmailTom,
        quote: '"Sunny and his team have been excellent workers since they arrived in the UK — I just wanted to thank you for helping them through the process."',
    },
    {
        id: 2, name: 'Tom Harding', role: 'Contracts Manager, Timeless (UK)',
        source: '💬 WhatsApp', sourceColor: 'green', image: imgWhatsapp,
        quote: '"She is the teacher who trained us in Magic Billion in English…"',
    },
    {
        id: 3, name: 'Greeshma Menon', role: 'Train the Trainer Course',
        source: '📧 Email', sourceColor: 'blue', image: imgGreeshma,
        quote: '"You were absolutely brilliant and incredibly patient. I truly appreciated how friendly you were, and how you offered corrections in such a gentle and supportive manner."',
    },
    {
        id: 4, name: 'Aishwarya Kolte', role: 'GTM Hiring · Non-Tech Recruiter (India & EMEA)',
        source: '🔗 LinkedIn', sourceColor: 'linkedin', image: imgAishwarya,
        quote: '"Rather than a teacher she was more of a mentor — personal connect with each student, pushing each individual to think out of the box."',
    },
    {
        id: 5, name: 'Prapti Ryan Rajput', role: 'Business Head · Global Delivery · Workforce Mobility',
        source: '🔗 LinkedIn', sourceColor: 'linkedin', image: imgPrapti,
        quote: '"Madhuri is a rare professional who delivers excellent results while making the journey enjoyable and meaningful."',
    },
    {
        id: 6, name: 'Praveena Akepogu', role: 'BDS · Krishna Devaraya College of Dental Sciences',
        source: '🔗 LinkedIn', sourceColor: 'linkedin', image: imgPraveena,
        quote: '"Ms. Madhuri is a dedicated and hardworking professional."',
    },
    {
        id: 7, name: 'Vivek Purohit', role: 'Assistant Manager, DCC at HSBC | Ex-TIAA',
        source: '🔗 LinkedIn', sourceColor: 'linkedin', image: imgVivek,
        quote: '"Madhuri Ma\'am has given a lot of boost into our confidence to speak out our mind. I highly recommend faculties like her in every Management studies."',
    },
];

/* ── Student graphic testimonials ── */
const studentImgs = [
    { id: 8, image: imgStudents1, label: 'Lexicon Mile PGDM Students, Pune — Melantha & Swati Gupta' },
    { id: 9, image: imgStudents2, label: 'Lexicon Mile PGDM Students, Pune — Nishtha & Neha Rathi' },
];

export default function TestimonialsPage() {
    return (
        <main className="testimonials-page">
            <div className="container">

                {/* ── Header ── */}
                <div className="tp-header text-center">
                    <span className="tp-eyebrow">Real Words. Real Results.</span>
                    <h1 className="tp-title">What People <span className="text-gradient">Say</span></h1>
                    <p className="tp-subtitle">
                        Authentic feedback from students, corporate professionals, and collaborators across the globe.
                    </p>
                </div>

                {/* ── Stats ── */}
                <div className="tp-stats">
                    {[
                        { num: '25+', label: 'Years Experience' },
                        { num: '500+', label: 'Students Trained' },
                        { num: '9+', label: 'Testimonials' },
                        { num: '🌍', label: 'Global Reach' },
                    ].map((s, i) => (
                        <div key={i} className="tp-stat glass">
                            <span className="tp-stat-num">{s.num}</span>
                            <span className="tp-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* ── Screenshot Grid: 7 cards, 3 columns ── */}
                <div className="tp-section-label">
                    <span className="tp-eyebrow">Professional & Corporate Feedback</span>
                </div>
                <div className="tp-grid">
                    {/* Col 1 */}
                    <div className="tp-col">
                        <TestiCard t={screenshots[0]} />
                        <TestiCard t={screenshots[3]} />
                        <TestiCard t={screenshots[6]} />
                    </div>
                    {/* Col 2 — WhatsApp tall in center */}
                    <div className="tp-col">
                        <TestiCard t={screenshots[1]} featured />
                        <TestiCard t={screenshots[5]} />
                    </div>
                    {/* Col 3 */}
                    <div className="tp-col">
                        <TestiCard t={screenshots[2]} />
                        <TestiCard t={screenshots[4]} />
                    </div>
                </div>

                {/* ── Full Text Testimonial: Greeshma Menon ── */}
                <div className="tp-section-label" style={{ marginTop: '56px' }}>
                    <span className="tp-eyebrow">✉ Featured Feedback</span>
                </div>
                <div className="tp-fulltext-card glass">
                    <div className="tp-ft-header">
                        <div className="tp-ft-meta">
                            <div className="tp-author-avatar" style={{ width: '48px', height: '48px', fontSize: '1.1rem' }}>G</div>
                            <div>
                                <p className="tp-author-name" style={{ fontSize: '1rem' }}>Greeshma Menon</p>
                                <p className="tp-author-role">greeshma_____@gmail.com &nbsp;·&nbsp; Feb 23, 2026</p>
                            </div>
                        </div>
                        <span className="tp-source tp-source-blue" style={{ borderRadius: '50px', alignSelf: 'center' }}>📧 Email · Train the Trainer Course</span>
                    </div>
                    <div className="tp-ft-body">
                        <p>Dear Madhuri Ma'am,</p>
                        <p>Hope you are doing well.</p>
                        <p>I am writing to share my feedback on your lessons for the Train the Trainer course. You were <strong>absolutely brilliant and incredibly patient</strong> throughout the sessions. I became aware of several shortcomings in how I approach my audience, and your guidance helped me reflect on and improve my training style.</p>
                        <p>One of my biggest challenges has been bridging the technology gap for senior staff who may feel intimidated by technology or are hesitant to learn due to age-related constraints. You helped me understand the importance of identifying their needs and approaching training with the intention of making their work easier, rather than overwhelming them with information.</p>
                        <p>Your focus throughout the training was not only on delivering content but also on ensuring that I truly understood each topic and could <strong>confidently walk through it myself</strong>. This made a significant difference in my learning experience.</p>
                        <p>I truly appreciated how friendly and pleasant you were, and how you offered corrections in <strong>such a gentle and supportive manner</strong>.</p>
                        <p>Thank you for your guidance and dedication. I hope you continue to share your knowledge and help others achieve their goals, just as you have helped me.</p>
                        <p className="tp-ft-sign">Kind regards,<br /><strong>Greeshma</strong></p>
                    </div>
                </div>


                {/* ── Student Testimonial Graphics ── */}
                <div className="tp-section-label" style={{ marginTop: '56px' }}>
                    <span className="tp-eyebrow">Student Testimonials · Lexicon Mile, Pune</span>
                </div>
                <div className="tp-student-grid">
                    {studentImgs.map((s) => (
                        <div key={s.id} className="tp-student-card glass">
                            <img src={s.image} alt={s.label} className="tp-student-img" loading="lazy" />
                            <p className="tp-student-label">{s.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}

function TestiCard({ t, featured }) {
    return (
        <div className={`tp-card glass ${featured ? 'tp-card-featured' : ''}`}>
            <span className={`tp-source tp-source-${t.sourceColor}`}>{t.source}</span>
            <div className="tp-img-wrap">
                <img src={t.image} alt={`Testimonial from ${t.name}`} className="tp-img" loading="lazy" />
            </div>
            <div className="tp-quote-row">
                <p className="tp-quote">{t.quote}</p>
            </div>
            <div className="tp-author">
                <div className="tp-author-avatar">{t.name.charAt(0)}</div>
                <div>
                    <p className="tp-author-name">{t.name}</p>
                    <p className="tp-author-role">{t.role}</p>
                </div>
            </div>
        </div>
    );
}
