export default function ForumPage() {
    return (
        <main style={{ paddingTop: '150px', minHeight: '80vh', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>Community <span className="text-gradient">Forum</span></h2>
                <p style={{ marginTop: '20px', color: 'var(--text-light)', fontSize: '1.2rem' }}>Ask questions, share experiences, and connect with other learners.</p>

                <div style={{ marginTop: '50px', padding: '50px', border: '2px dashed var(--glass-border)', borderRadius: '20px', color: 'var(--text-light)' }}>
                    Forum discussions coming soon...
                </div>
            </div>
        </main>
    );
}
