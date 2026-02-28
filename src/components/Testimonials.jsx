import { Link } from 'react-router-dom';
import './Testimonials.css';

import imgWhatsapp from '../assets/testimonial-whatsapp.png';
import imgAishwarya from '../assets/testimonial-aishwarya.png';
import imgVivek from '../assets/testimonial-vivek.png';
import imgPrapti from '../assets/testimonial-prapti.png';
import imgPraveena from '../assets/testimonial-praveena.png';

const col1Testimonials = [
    {
        id: 1, name: 'Aishwarya Kolte', role: 'GTM Hiring · Non-Tech Recruiter',
        source: '🔗 LinkedIn', sourceColor: 'linkedin', image: imgAishwarya,
        quote: '"Rather than a teacher she was more of a mentor — personal connect with each student, pushing each individual to think out of the box."',
    },
    {
        id: 4, name: 'Prapti Ryan Rajput', role: 'Business Head',
        source: '🔗 LinkedIn', sourceColor: 'linkedin', image: imgPrapti,
        quote: '"Madhuri is a rare professional who delivers excellent results while making the journey enjoyable and meaningful."',
    }
];

const col2Testimonials = [
    {
        id: 2, name: 'Tom Harding', role: 'Contracts Manager (UK)',
        source: '💬 WhatsApp', sourceColor: 'green', image: imgWhatsapp,
        quote: '"She is the teacher who trained us in Magic Billion in English…"',
        featured: true
    }
];

const col3Testimonials = [
    {
        id: 3, name: 'Vivek Purohit', role: 'Assistant Manager, DCC',
        source: '🔗 LinkedIn', sourceColor: 'linkedin', image: imgVivek,
        quote: '"Madhuri Ma\'am has given a lot of boost into our confidence to speak out our mind."',
    },
    {
        id: 5, name: 'Praveena Akepogu', role: 'BDS',
        source: '🔗 LinkedIn', sourceColor: 'linkedin', image: imgPraveena,
        quote: '"Ms. Madhuri is a dedicated and hardworking professional."',
    }
];

function TestiCard({ t }) {
    return (
        <div className={`th-card glass ${t.featured ? 'th-card-featured' : ''}`}>
            <span className={`th-source th-source-${t.sourceColor}`}>{t.source}</span>
            <div className="th-img-wrap">
                <img src={t.image} alt={`Testimonial from ${t.name}`} className="th-img" loading="lazy" />
            </div>
            <div className="th-quote-row">
                <p className="th-quote">{t.quote}</p>
            </div>
            <div className="th-author">
                <div className="th-author-avatar">{t.name.charAt(0)}</div>
                <div>
                    <p className="th-author-name">{t.name}</p>
                    <p className="th-author-role">{t.role}</p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials-home-section section-padding">
            <div className="container">
                <div className="th-header text-center">
                    <span className="th-eyebrow">Real Words. Real Results.</span>
                    <h2 className="section-title">What Our <span className="text-gradient">Students Say</span></h2>
                    <p className="th-subtitle">
                        Authentic feedback from students, corporate professionals, and collaborators.
                    </p>
                </div>

                <div className="th-grid">
                    <div className="th-col">
                        {col1Testimonials.map(t => <TestiCard key={t.id} t={t} />)}
                    </div>
                    <div className="th-col">
                        {col2Testimonials.map(t => <TestiCard key={t.id} t={t} />)}
                    </div>
                    <div className="th-col">
                        {col3Testimonials.map(t => <TestiCard key={t.id} t={t} />)}
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '50px' }}>
                    <Link to="/testimonials" className="btn btn-outline">Read All Testimonials</Link>
                </div>
            </div>
        </section>
    );
}
