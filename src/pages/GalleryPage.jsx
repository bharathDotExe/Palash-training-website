import './GalleryPage.css';

export default function GalleryPage() {
    const images = [
        { id: 1, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop", title: "Interactive Learning", category: "Spoken English" },
        { id: 2, src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop", title: "Corporate Workshops", category: "Corporate Training" },
        { id: 3, src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop", title: "IELTS Preparation", category: "Study Abroad" },
        { id: 4, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", title: "Group Discussions", category: "Soft Skills" },
        { id: 5, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", title: "Campus Life", category: "Student Community" },
        { id: 6, src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop", title: "Presentation Skills", category: "Corporate Training" }
    ];

    return (
        <main style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>Our <span className="text-gradient">Gallery</span></h2>
                <p style={{ marginTop: '20px', color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '50px' }}>
                    Check out some highlights from our training sessions and events.
                </p>

                <div className="gallery-grid">
                    {images.map(img => (
                        <div key={img.id} className="gallery-item">
                            <img src={img.src} alt={img.title} loading="lazy" />
                            <div className="gallery-overlay">
                                <div className="gallery-title">{img.title}</div>
                                <div className="gallery-category">{img.category}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
