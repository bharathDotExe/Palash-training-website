import './TrainerIntroHome.css';

export default function TrainerIntroHome() {
    return (
        <section id="about" className="trainer-home-section section-padding">
            <div className="container trainer-home-content">
                <div className="trainer-home-image-col">
                    <div className="trainer-home-photo-container glass">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                            alt="Language Trainer"
                            className="trainer-home-img"
                        />
                        <div className="trainer-home-badge text-gradient">
                            <span className="badge-years">10+</span>
                            <span className="badge-label">Years Exp.</span>
                        </div>
                    </div>
                </div>

                <div className="trainer-home-info">
                    <h2 className="section-title">Meet Your <span className="text-gradient">Mentor</span></h2>
                    <h3 className="trainer-home-name">Expert Language Coach</h3>
                    <p className="trainer-home-bio">
                        With over a decade of experience nurturing aspirations and transforming communication skills,
                        our specialized training approach bridges the gap between potential and performance.
                        We focus on modern, engaging methods that resonate with today's generation,
                        ensuring learning is not just effective, but enjoyable.
                    </p>
                    <ul className="trainer-home-highlights">
                        <li>✨ Certified IELTS Examiner</li>
                        <li>✨ Corporate Communication Specialist</li>
                        <li>✨ Interactive &amp; Gen-Z Friendly Teaching Style</li>
                        <li>✨ Personalized Mastery Plans</li>
                    </ul>
                    <button className="btn btn-outline" style={{ marginTop: '20px' }}>Read Full Profile</button>
                </div>
            </div>
        </section>
    );
}
