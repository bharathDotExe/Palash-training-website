import BookingForm from '../components/BookingForm';

export default function ContactPage() {
    return (
        <main className="contact-page" style={{ paddingTop: '150px', minHeight: '80vh' }}>
            <div className="container">
                <div className="contact-header text-center" style={{ marginBottom: '60px' }}>
                    <span className="sp-eyebrow">Get In Touch</span>
                    <h1 className="section-title">Contact <span className="text-gradient">Us</span></h1>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Ready to elevate your communication skills? Reach out to us for any inquiries, business proposals, or to schedule your free consultation.
                    </p>
                </div>

                <div className="contact-info-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginBottom: '80px'
                }}>
                    {/* Contact Detail Cards */}
                    <div className="contact-card glass" style={{ padding: '40px', textAlign: 'center', borderRadius: '20px' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📧</div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Email Us</h3>
                        <p style={{ color: 'var(--text-light)' }}>info@palashtraining.com</p>
                    </div>

                    <div className="contact-card glass" style={{ padding: '40px', textAlign: 'center', borderRadius: '20px' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📞</div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Call Us</h3>
                        <p style={{ color: 'var(--text-light)' }}>+91 98765 43210</p>
                    </div>

                    <div className="contact-card glass" style={{ padding: '40px', textAlign: 'center', borderRadius: '20px' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📍</div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Visit Us</h3>
                        <p style={{ color: 'var(--text-light)' }}>Online Sessions (Global)</p>
                    </div>
                </div>
            </div>

            {/* Reusing the existing Booking Form component for the contact page */}
            <BookingForm />

        </main>
    );
}
