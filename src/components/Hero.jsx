import './Hero.css';

export default function Hero({ onBookDemo }) {
    return (
        <section className="hero-section">
            <div className="container hero-content">
                <div className="hero-text glass">
                    <h1 className="hero-title">
                        Master Language & <br /> Elevate Your <span className="text-gradient">Aspirations</span>
                    </h1>
                    <p className="hero-subtitle">
                        Modern, professional training in Spoken English, IELTS, Soft Skills, and Corporate Communication. Stand out with Gen-Z forward coaching.
                    </p>
                    <div className="hero-ctas">
                        <button className="btn btn-primary" onClick={onBookDemo}>Start Learning</button>
                        <button className="btn btn-outline">Explore Programs</button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number text-gradient">1000+</span>
                            <span className="stat-label">Students Trained</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number text-gradient">4.9/5</span>
                            <span className="stat-label">Average Rating</span>
                        </div>
                    </div>
                </div>

                <div className="hero-graphics">
                    <div className="image-wrapper glass">
                        <img src="/genz_students.png" alt="Gen-Z Students Learning" className="hero-img" />
                    </div>
                    <div className="decor-circle"></div>

                    {/* Floating Badges */}
                    <div className="floating-badge badge-1 glass">
                        <span className="badge-icon">🏆</span>
                        <div className="badge-text">
                            <strong>8.5+ Band</strong>
                            <span>IELTS Guarantee</span>
                        </div>
                    </div>
                    <div className="floating-badge badge-2 glass">
                        <span className="badge-icon">🗣️</span>
                        <div className="badge-text">
                            <strong>100% Fluent</strong>
                            <span>Spoken English</span>
                        </div>
                    </div>
                    <div className="floating-badge badge-3 glass">
                        <span className="badge-icon">💼</span>
                        <div className="badge-text">
                            <strong>Pro Skills</strong>
                            <span>Corporate Ready</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
