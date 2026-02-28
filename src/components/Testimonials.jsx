import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'IT Professional',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        content: 'The Corporate Training transformed how I present myself in board meetings. The Gen-Z approach to learning made everything click instantly.'
    },
    {
        id: 2,
        name: 'Karan Singh',
        role: 'Students - IELTS 8.0',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
        content: 'I was struggling with the writing section, but Palash gave me exactly the frameworks I needed. Highly recommend for serious aspirants.'
    },
    {
        id: 3,
        name: 'Neha Gupta',
        role: 'Content Creator',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        content: 'My spoken English was hesitant, but the soft skills and daily practice sessions built up my confidence massively. Best investment in myself!'
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials-section section-padding">
            <div className="container">
                <h2 className="section-title text-center" style={{ marginBottom: '50px' }}>What Our <span className="text-gradient">Students Say</span></h2>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div key={t.id} className={`testimonial-card glass ${index === 1 ? 'highlighted-card' : ''}`}>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--palash-orange)" color="var(--palash-orange)" />)}
                            </div>
                            <p className="testimonial-text">"{t.content}"</p>
                            <div className="student-info">
                                <img src={t.image} alt={t.name} className="student-img" />
                                <div>
                                    <h4 className="student-name">{t.name}</h4>
                                    <p className="student-role">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-64" style={{ marginTop: '64px' }}>
                    <p className="space-24" style={{ fontSize: '1.2rem', color: 'var(--text-dark)', fontWeight: 500 }}>Ready to write your own success story?</p>
                    <button className="btn btn-primary">Join Palash Training</button>
                </div>
            </div>
        </section>
    );
}
