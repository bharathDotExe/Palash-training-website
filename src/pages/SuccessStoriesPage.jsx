import { useEffect, useState } from 'react';
import './SuccessStoriesPage.css';

export default function SuccessStoriesPage() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-20% 0px -60% 0px' });

        const sections = document.querySelectorAll('.sp-story-card, .sp-section-label[id]');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <main className="success-page">
            <div className="container">
                <div className="sp-header text-center">
                    <span className="sp-eyebrow">Real Transformations</span>
                    <h1 className="sp-title">Success <span className="text-gradient">Stories</span></h1>
                    <p className="sp-subtitle">
                        Discover how targeted communication training has helped our students and professionals achieve their academic and career goals.
                    </p>
                </div>

                {/* ── Page Layout: Sidebar + Main Content ── */}
                <div className="sp-layout">
                    {/* ── Sidebar Navigation ── */}
                    <aside className="sp-sidebar">
                        <div className="sp-sidebar-title">
                            📖 Story Index
                        </div>
                        <nav className="sp-page-nav">
                            <a href="#story-carpenters" className={`sp-nav-edge ${activeSection === 'story-carpenters' ? 'active' : ''}`}>
                                <span className="sp-edge-icon">01</span>
                                <span>Basic English to UK</span>
                            </a>
                            <a href="#story-migration" className={`sp-nav-edge ${activeSection === 'story-migration' ? 'active' : ''}`}>
                                <span className="sp-edge-icon">02</span>
                                <span>Migration Pathway</span>
                            </a>
                            <a href="#story-interview" className={`sp-nav-edge ${activeSection === 'story-interview' ? 'active' : ''}`}>
                                <span className="sp-edge-icon">03</span>
                                <span>Interview Success</span>
                            </a>
                            <a href="#story-leadership" className={`sp-nav-edge ${activeSection === 'story-leadership' ? 'active' : ''}`}>
                                <span className="sp-edge-icon">04</span>
                                <span>Influencing Leadership</span>
                            </a>
                            <a href="#video-testimonials" className={`sp-nav-edge ${activeSection === 'video-testimonials' ? 'active' : ''}`}>
                                <span className="sp-edge-icon">05</span>
                                <span>Video Stories</span>
                            </a>
                        </nav>
                    </aside>

                    {/* ── Main Content Area ── */}
                    <div className="sp-main-content">
                        {/* ── Written Case Studies ── */}
                        <div className="sp-section-label">
                            <span className="sp-eyebrow">📝 Written Case Studies</span>
                        </div>

                        <div className="sp-story-list">
                            {/* Story 1 */}
                            <div id="story-carpenters" className="sp-story-card glass">
                                <div className="sp-story-content">
                                    <h3 className="sp-story-title">From Basic English to UK - A Journey of Skilled Workers</h3>
                                    <p className="sp-story-highlight">Scored CEFR level B2 from A1. If They Can Do It, So Can You</p>

                                    <img src="/story1_uk_construction_1772278053838.png" alt="Workers in UK construction" className="sp-story-image float-right" />

                                    <p>When 26 skilled carpenters walked into my IELTS classroom, most of them were at A1/A2 level. They were neither fluent, nor confident or could not even frame a sentence. But they had something powerful. A dream.</p>
                                    <p>They had invested their hard-earned savings; they had left their families behind but were dedicatedly preparing for UKVI- IELTS to build a better future in the UK. Most important was, they were trusting me to guide them.</p>

                                    <h4>The Challenge</h4>
                                    <p>To clear IELTS, they needed to reach B2-level performance or at least a score of 4.5 band in just 45 days. It seemed impossible. But instead of focusing on how far they had to go, we focused on the next small step.</p>
                                    <p>We started with:</p>
                                    <ul>
                                        <li>Basic grammar foundations</li>
                                        <li>Sentence structure building</li>
                                        <li>Functional vocabulary</li>
                                        <li>Daily speaking drills</li>
                                        <li>Structured writing practice</li>
                                        <li>Intensive mock test feedback</li>
                                    </ul>
                                    <p>We rebuilt their English from the ground up. Step by step. Practice by practice. Correction by correction.</p>

                                    <h4>The Result?</h4>
                                    <p>After 45 days of disciplined effort:</p>
                                    <ul>
                                        <li>6 of them achieved their required 4.5 band</li>
                                        <li>4 scored Band 5, and to our huge surprise,</li>
                                        <li>3 of them bagged a band of 5.5 and even 6</li>
                                    </ul>
                                    <p>Today, they are working in UK construction companies. Earning with dignity, supporting their families and living the life they once only imagined. This was not luck.</p>
                                    <p className="sp-story-quote">"It was structure + strategy + relentless practice."</p>

                                    <h4>What Makes My IELTS Training Different?</h4>
                                    <ul className="sp-story-checklist">
                                        <li>I don’t "teach lessons." I build foundations.</li>
                                        <li>I don’t rush to mock tests. I prepare you for them.</li>
                                        <li>I understand CEFR levels and bridge the gap strategically.</li>
                                        <li>I work on mindset as much as language.</li>
                                        <li>I treat your goal as a responsibility, not a routine batch.</li>
                                    </ul>

                                    <p>Whether you are a working professional, a skilled worker preparing for UKVI, a student aiming for higher bands, or someone who feels "English is not my strength" — You are not behind. You just need the right system.</p>

                                    <h4>If You Are Serious About Clearing IELTS…</h4>
                                    <p>You don’t need perfect English today. You need commitment and the right guidance. If carpenters starting from basic sentence formation can reach their target bands in 45 days — imagine what structured training can do for you.</p>
                                    <p>Let’s work together to make your IELTS score your stepping stone — not your obstacle.</p>
                                    <p><em>📩 Book a consultation today. Your journey to confidence and your future abroad can begin now.</em></p>
                                </div>
                            </div>

                            {/* Story 2 */}
                            <div id="story-migration" className="sp-story-card glass" style={{ marginTop: '40px' }}>
                                <div className="sp-story-content">
                                    <h3 className="sp-story-title">Success Was Not an Accident; It Was a System</h3>
                                    <p className="sp-story-highlight">Built a migration pathway</p>

                                    <img src="/story2_ielts_study_1772278084085.png" alt="IELTS students studying" className="sp-story-image float-left" />

                                    <p>After the remarkable success of the first batch of 26 skilled workers, I was assigned another group of 24 IELTS aspirants preparing to move to the UK. Most of them were at A2 level.</p>
                                    <p>Once again, the target was clear: They needed to perform at B2 level to secure their future. But this time, something was different. The challenge no longer felt overwhelming. Because I now knew with certainty that transformation was possible.</p>
                                    <p>The main difference - Confidence Backed by Proven Results.</p>

                                    <p>We followed the same structured approach:</p>
                                    <ul className="sp-story-checklist">
                                        <li>Strong grammar foundation</li>
                                        <li>Sentence-building drills</li>
                                        <li>Intensive speaking practice</li>
                                        <li>Writing structure training</li>
                                        <li>Mock test analysis</li>
                                        <li>Interview preparation</li>
                                    </ul>
                                    <p>But this time, I carried something powerful into the classroom, and that was ‘belief’. Belief built from experience. Belief built from results. And the students felt it. Within just one week, improvement became visible.</p>
                                    <p>Their confidence grew. Their mock scores started climbing. Long study hours. Focused corrections. Detailed feedback sessions. Relentless practice. The system was working again.</p>

                                    <h4>The Outcome</h4>
                                    <p>16 out of 24 cleared IELTS and secured placements in the UK. That is not coincidence. That is clarity of method.</p>
                                    <p>It once again proved that Success in IELTS is neither about background, nor about education level and not even about where you start from.</p>
                                    <p>It is about:</p>
                                    <ul className="sp-story-checklist">
                                        <li>Structured strategy</li>
                                        <li>Consistent practice</li>
                                        <li>Correct feedback</li>
                                        <li>Mindset training</li>
                                        <li>A trainer who understands the journey</li>
                                    </ul>
                                    <p>And of course, the student’s perseverance and faith.</p>

                                    <h4>When Guidance Meets Determination, Results Follow.</h4>
                                    <p>Two batches. 48 skilled workers trained. 29+ successful UK placements. The difference was not talent, it was training.</p>
                                    <p>If you are preparing for IELTS and feel unsure about your level, remember this: You don’t need to be perfect to begin, you need the right guidance to progress. And when the approach is right, progress is inevitable.</p>
                                    <p className="sp-story-quote">"They didn’t start strong, rather, they finished stronger."</p>
                                </div>
                            </div>

                            {/* Story 3 */}
                            <div id="story-interview" className="sp-story-card glass" style={{ marginTop: '40px' }}>
                                <div className="sp-story-content">
                                    <h3 className="sp-story-title">Real Success is Never Memorised</h3>
                                    <p className="sp-story-highlight">It is built with discipline, direction, and with the right mentor.</p>

                                    <img src="/story3_girl_studying_1772277997956.png" alt="Girl studying late at night" className="sp-story-image float-right" />

                                    <p>It was an ordinary Sunday morning when my domestic help walked in with her daughter, a young girl in her early twenties. She carried a notebook and quietly sat in a corner while her mother worked.</p>
                                    <p>Out of curiosity, I noticed she was repeatedly memorising answers from that notebook. When I asked, she said she was preparing for job interviews. She was a graduate in Arts from a Hindi medium background.</p>
                                    <p>As I went through the notebook, I realised something deeper, she was memorising answers without even understanding the questions.</p>
                                    <p>That moment stayed with me. I gently asked her the meaning of a few interview questions. She struggled. That’s when I told her something very simple but powerful:</p>
                                    <p className="sp-story-quote">"There is never a shortcut to success. If you truly want to grow, you must understand, not just memorise."</p>
                                    <p>She agreed.</p>

                                    <p>I took it as a personal challenge. For the next 40-45 days, we worked consistently, building basic English understanding, improving comprehension, practising interview responses, and most importantly, building confidence.</p>

                                    <img src="/story3_telecaller_success_1772278018991.png" alt="Girl working successfully as telecaller" className="sp-story-image float-left" style={{ marginTop: '20px' }} />

                                    <p>Slowly, she began to change. Her fear reduced. Her voice became clearer. Her confidence became visible.</p>
                                    <p>By the end of those 40-45 days, she could understand nearly 50–60% of spoken English and respond with clarity.</p>

                                    <p>Soon after, she received an interview call from a well-known pharma company for a tele caller position. We prepared intensely. She faced the interview with confidence.</p>
                                    <p>She got selected. Her starting salary was ₹22,000 per month.</p>
                                    <p>She was in tears. For her, the impossible had become possible. For her widowed mother, it was a moment of unimaginable pride.</p>

                                    <p>And then something beautiful happened. After her success, four to five more girls from similar backgrounds approached me.</p>
                                    <p>Today, all of them are working in different companies, earning their livelihood, and supporting their families with dignity.</p>
                                    <p>They all understood one powerful truth: There is no shortcut to success. You don’t memorise your way to growth. You build it, step by step through understanding, discipline, and hard work.</p>
                                    <p className="sp-story-quote">"Where others see limitation, I build capability."</p>
                                </div>
                            </div>

                            {/* Story 4 */}
                            <div id="story-leadership" className="sp-story-card glass" style={{ marginTop: '40px' }}>
                                <div className="sp-story-content">
                                    <h3 className="sp-story-title">Influencing Without Authority</h3>
                                    <p className="sp-story-highlight">Leadership skills training</p>

                                    <img src="/story4_leadership_training_1772281724654.png" alt="Corporate leadership training" className="sp-story-image float-left" />

                                    <p>I was assigned a 1-week training session on Leadership Skills for three very senior officials. Age, experience, position, and industry exposure, they were far ahead of me. Each had spent over 25 years in the construction industry and had risen through sheer experience.</p>
                                    <p>When I entered the room, the air felt heavy. Their body language was stiff. Their expressions showed reluctance. The unspoken question was clear, <em>“What can she possibly teach us?”</em></p>
                                    <p>They did not understand why the organisation had nominated them. They did not believe they needed training. And they certainly did not believe I was at par with them to train them. It was indeed a challenge.</p>

                                    <p>They avoided conversation. Engagement was minimal. I realised one thing immediately: they were already offended. The last thing I wanted was to make it worse.</p>

                                    <h4>So, I changed my approach.</h4>
                                    <p>Instead of creating a typical trainer–learner environment, I pulled a chair and sat beside them. No slides. No authority. No posturing.</p>

                                    <p>I began by asking about their journey. Their projects, their milestones, their contributions to the industry. Slowly, the stiffness reduced. They spoke with pride about what they had built over the years.</p>

                                    <p className="sp-story-quote">"And in that conversation, something shifted."</p>

                                    <p>As they became comfortable, they began opening up about team challenges, communication gaps, generational differences, resistance from juniors, and internal conflicts. They gave me every answer I needed….without me asking a single confrontational question.</p>
                                    <p>That discussion shaped my entire training plan. I assured them of one thing: This would not be a lecture. It would be a mutual learning and knowledge-sharing experience.</p>

                                    <h4>Over the next 7 days, something remarkable happened.</h4>
                                    <p>They began to see leadership beyond technical expertise. They recognised the importance of emotional intelligence, communication clarity, delegation, adaptability, and people management, even at the highest levels.</p>
                                    <p>By the end of the program, they not only completed the training with engagement but also acknowledged the areas they needed to work on.</p>

                                    <p>But the real validation came later. The same officials who were once reluctant recommended a batch of 20 senior team members for the same training. They didn’t just accept the program. They believed in it.</p>
                                    <p>I worked with senior professionals to strengthen the one skill…but they left with many.</p>
                                </div>
                            </div>

                        </div>

                        {/* ── Video Testimonials ── */}
                        <div id="video-testimonials" className="sp-section-label" style={{ marginTop: '80px' }}>
                            <span className="sp-eyebrow">🎥 IELTS Success Stories</span>
                        </div>

                        <div className="sp-video-grid">
                            {/* Video 1: Pushpender Yadav */}
                            <div className="sp-video-card glass">
                                <div className="sp-video-wrap">
                                    <video
                                        controls
                                        className="sp-video"
                                        preload="metadata"
                                    >
                                        <source src="/WhatsApp Video 2026-02-24 at 12.25.00.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="sp-video-info">
                                    <div className="sp-video-header">
                                        <div className="sp-author-avatar">P</div>
                                        <div>
                                            <p className="sp-author-name">Pushpender Yadav</p>
                                            <p className="sp-author-role">Skilled Labour · Now working in UK 🇬🇧</p>
                                        </div>
                                        <span className="sp-band-badge">Band 6.0 ✓</span>
                                    </div>
                                    <p className="sp-video-desc">
                                        From Haryana, Pushpender came in at <strong>CEFR B1 level</strong> and was brought up to <strong>B2 level</strong> through focused IELTS coaching — achieving his target band score and securing skilled employment in the UK.
                                    </p>
                                </div>
                            </div>

                            {/* Video 2: Sunil Kumar */}
                            <div className="sp-video-card glass">
                                <div className="sp-video-wrap">
                                    <video
                                        controls
                                        className="sp-video"
                                        preload="metadata"
                                    >
                                        <source src="/WhatsApp Video 2026-02-24 at 12.29.24.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="sp-video-info">
                                    <div className="sp-video-header">
                                        <div className="sp-author-avatar">S</div>
                                        <div>
                                            <p className="sp-author-name">Sunil Kumar</p>
                                            <p className="sp-author-role">IELTS Student · Rajasthan</p>
                                        </div>
                                        <span className="sp-band-badge">Band 5.5 ✓</span>
                                    </div>
                                    <p className="sp-video-desc">
                                        Sunil started at <strong>CEFR A1 level</strong> — one of the most challenging starting points — and was brought all the way to <strong>B1 level</strong>, achieving a 5.5 band score through structured, patient coaching.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>{/* End Main Content */}
                </div>{/* End Layout */}
            </div>{/* End Container */}
        </main>
    );
}
