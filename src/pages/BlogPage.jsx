export default function BlogPage() {
    return (
        <main className="section-padding" style={{ minHeight: '80vh', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>Our <span className="text-gradient">Blog</span></h2>
                <p className="space-24" style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 48px' }}>Insights, tips, and stories from our trainers and alumni. Stay tuned for expert articles.</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px',
                    textAlign: 'left'
                }}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} style={{
                            background: 'var(--white)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}>
                            <div style={{ height: '200px', background: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '2rem', filter: 'grayscale(1)', opacity: 0.5 }}>📰</span>
                            </div>
                            <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: '0.85rem', color: 'var(--palash-orange)', fontWeight: 600, marginBottom: '8px' }}>Coming Soon</div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-dark)' }}>Expert Language Tips & Strategies</h3>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1 }}>We are preparing valuable content to help you master communication and advance your career. Check back soon for our first article!</p>
                                <button className="btn btn-outline" disabled style={{ opacity: 0.5, cursor: 'not-allowed', width: 'fit-content', padding: '8px 20px', fontSize: '0.9rem' }}>Read Article</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
