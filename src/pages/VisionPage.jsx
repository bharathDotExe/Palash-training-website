import './VisionPage.css';

export default function VisionPage() {
    return (
        <main className="vision-page" style={{ paddingTop: '150px', minHeight: '80vh' }}>
            <div className="container">
                <div className="vision-header text-center">
                    <span className="vision-eyebrow">Our Ethos</span>
                    <h1 className="vision-title">The <span className="text-gradient">Vision</span></h1>
                </div>

                <div className="vision-content glass">
                    <div className="vision-quote-box">
                        <p className="vision-quote">
                            "To empower individuals and organizations to reach their highest potential through authentic, confident, and effective communication."
                        </p>
                    </div>

                    <div className="vision-text">
                        <p>
                            At Palash Training, we believe that communication is the foundation of every successful relationship, career, and enterprise. Our vision is to bridge the gap between potential and performance by equipping our students with the linguistic tools and soft skills necessary to thrive in a globalized world.
                        </p>
                        <p>
                            We envision a world where language is never a barrier, but a bridge. Whether it's a skilled laborer seeking opportunities abroad, a corporate professional aiming for leadership, or a student preparing for international education, our goal is to tailor our training to meet their unique journey.
                        </p>

                        <div className="vision-pillars">
                            <div className="pillar">
                                <h3>Authenticity</h3>
                                <p>We foster genuine expression over rote memorization, encouraging students to find their true voice.</p>
                            </div>
                            <div className="pillar">
                                <h3>Excellence</h3>
                                <p>We uphold the highest standards in our coaching, focusing on measurable progress and concrete results.</p>
                            </div>
                            <div className="pillar">
                                <h3>Empathy</h3>
                                <p>We understand that learning a new skill can be daunting. We provide a supportive, patient environment for growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
