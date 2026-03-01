import './GalleryPage.css';

export default function GalleryPage() {
    const images = [
        {
            id: 7,
            src: "/Certificate-Distribution.png",
            title: "Certificate Distribution",
            category: "Awards & Recognition",
            description: "Workshop on Research Methodology - FDP(faculty Development Program) @ Lexicon"
        },
        {
            id: 3,
            src: "/15th-Annual-Convocation.png",
            title: "15th Annual Convocation",
            category: "Awards & Recognition",
            description: "It's indeed a moment of pride for all of us as parents and certainly your college & university to see you graduating with flying colors and attaining your Master's degree in Interactive Design (UI/UX). Your hardwork has been rewarded Ttannya Bedekar.\n\nWishing you all the best for all your future endeavours. There's a great path ahead. I am sure this is just a begining. You have miles to go with many huge accomplishments to achieve. Best of luck 🎉🎓 👍"
        },
        {
            id: 4,
            src: "/Time-Management-Drawing.jpg",
            title: "Time Management Workshop",
            category: "Corporate Training",
            description: "It's a great moment for me to share that I have finally learned how to create concept-based sketchnotes 😊"
        },
        { id: 5, src: "/Pillars-of-Work-Life-Balance.jpg", title: "Work-Life Balance Session", category: "Soft Skills", description: "" },
        { id: 6, src: "/Group-Activity.jpg", title: "Team Building Activity", category: "Student Community", description: "" },
        {
            id: 1,
            src: "/Lexicon-Publication.png",
            title: "Lexicon Publication",
            category: "Media & Press",
            description: "Write up published in Lexicon publication",
            contain: true,
            bg: "#ffffff"
        },
        {
            id: 2,
            src: "/Bridge-Skill-Development.png",
            title: "Bridge Skill Academy",
            category: "Corporate Training",
            description: "Training activities at Bridge Skill Development academy, Hyderabad"
        }
    ];

    return (
        <main className="section-padding" style={{ minHeight: '80vh', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>Our <span className="text-gradient">Gallery</span></h2>
                <p className="space-24" style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>
                    Check out some highlights from our training sessions and events.
                </p>

                <div className="gallery-grid">
                    {images.map(img => (
                        <div key={img.id} className="gallery-item">
                            <img
                                src={img.src}
                                alt={img.title}
                                loading="lazy"
                                style={{
                                    objectFit: img.contain ? 'contain' : 'cover',
                                    backgroundColor: img.bg || 'transparent',
                                    padding: img.contain ? '12px' : '0',
                                    imageRendering: img.contain ? 'crisp-edges' : 'auto'
                                }}
                            />
                            <div className="gallery-overlay">
                                <div className="gallery-title">{img.title}</div>
                                <div className="gallery-category">{img.category}</div>
                                {img.description && (
                                    <div className="gallery-description">{img.description}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
