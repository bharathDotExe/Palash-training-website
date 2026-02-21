import './CtaBanner.css';

export default function CtaBanner({ onBookDemo }) {
    return (
        <section className="cta-banner-section section-padding">
            <div className="container">
                <div className="cta-banner-content glass">
                    <div className="cta-text">
                        <h2>Ready to Elevate Your Communication?</h2>
                        <p>Join thousands of successful professionals and students who have transformed their lives with Palash. Your journey to mastery starts here.</p>
                    </div>
                    <div className="cta-actions">
                        <button
                            className="btn btn-primary"
                            style={{ background: 'var(--white)', color: 'var(--palash-orange)' }}
                            onClick={onBookDemo}
                        >
                            Start Learning Today
                        </button>
                    </div>

                    <div className="banner-graphics"></div>
                </div>
            </div>
        </section>
    );
}
