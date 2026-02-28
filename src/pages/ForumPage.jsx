export default function ForumPage() {
    return (
        <main className="section-padding" style={{ minHeight: '80vh', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>Community <span className="text-gradient">Forum</span></h2>
                <p className="space-24" style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>Ask questions, share experiences, and connect with other learners.</p>
                <div className="space-48" style={{ padding: '32px', border: '2px dashed var(--glass-border)', borderRadius: '20px', color: 'var(--text-light)' }}>
                    Forum discussions coming soon...
                </div>
            </div>
        </main>
    );
}
