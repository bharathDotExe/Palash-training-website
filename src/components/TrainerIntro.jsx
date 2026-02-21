import './TrainerIntro.css';

export default function TrainerIntro() {
    return (
        <section id="about" className="trainer-section section-padding">
            <div className="container trainer-content">
                <div className="trainer-image-col">
                    <div className="trainer-photo-container glass">
                        {/* Placeholder for trainer photo */}
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Language Trainer" className="trainer-img" />
                        <div className="experience-badge text-gradient">
                            <span className="years">10+</span>
                            <span className="text">Years Exp.</span>
                        </div>
                    </div>
                </div>

                <div className="trainer-info">
                    <h2 className="section-title">Meet Your <span className="text-gradient">Mentor</span></h2>
                    <h3 className="trainer-name">Expert Language Coach</h3>
                    <p className="trainer-bio">
                        With over a decade of experience nurturing aspirations and transforming communication skills,
                        our specialized training approach bridges the gap between potential and performance.
                        We focus on modern, engaging methods that resonate with today's generation,
                        ensuring learning is not just effective, but enjoyable.
                    </p>
                    <ul className="trainer-highlights">
                        <li>✨ Certified IELTS Examiner</li>
                        <li>✨ Corporate Communication Specialist</li>
                        <li>✨ Interactive & Gen-Z Friendly Teaching Style</li>
                        <li>✨ Personalized Mastery Plans</li>
                    </ul>
                    <button className="btn btn-outline" style={{ marginTop: '20px' }}>Read Full Profile</button>
                </div>
            </div>
        </section>
    );
}
