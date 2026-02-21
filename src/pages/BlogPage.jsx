export default function BlogPage() {
    return (
        <main style={{ paddingTop: '150px', minHeight: '80vh', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>Our <span className="text-gradient">Blog</span></h2>
                <p style={{ marginTop: '20px', color: 'var(--text-light)', fontSize: '1.2rem' }}>Insights, tips, and stories from our trainers and alumni.</p>

                <div style={{ marginTop: '50px', padding: '50px', border: '2px dashed var(--glass-border)', borderRadius: '20px', color: 'var(--text-light)' }}>
                    Blog articles coming soon...
                </div>
            </div>
        </main>
    );
}
