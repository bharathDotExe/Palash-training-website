import { Mic2, Briefcase, Globe2, Target, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesHome.css';

const services = [
    {
        id: 1,
        number: '01',
        title: 'Executive English Communication Coaching',
        tagline: "It's time to step into every conversation with confidence and authority.",
        icon: <Mic2 size={28} />,
        color: 'orange',
        points: [
            'Personalized, high-impact coaching to elevate fluency, clarity, and professional presence.',
            'Focused on confident speaking, structured thinking, and impactful expression.',
        ],
    },
    {
        id: 2,
        number: '02',
        title: 'Workplace & Business Communication',
        tagline: 'Communicate like a leader, not just a participant.',
        icon: <Briefcase size={28} />,
        color: 'red',
        points: [
            'Advanced training in professional communication during meetings.',
            'Presentation skills and Business communication.',
        ],
    },
    {
        id: 3,
        number: '03',
        title: 'IELTS Preparation (Academic & General)',
        tagline: 'Achieve your desired band score with clarity and confidence.',
        icon: <Globe2 size={28} />,
        color: 'orange',
        points: [
            'Strategy-driven coaching for all four modules.',
            'Structured practice & mock evaluations.',
        ],
    },
    {
        id: 4,
        number: '04',
        title: 'Interview & Presentation Mastery',
        tagline: 'Own the room. Own the opportunity.',
        icon: <Target size={28} />,
        color: 'red',
        points: [
            'Focused coaching to refine articulation and body language.',
            'Structured responses & delivery confidence.',
        ],
    },
];

export default function ServicesHome() {
    return (
        <section id="services" className="services-home-section section-padding">
            <div className="container">
                <div className="sh-header text-center">
                    <span className="sh-eyebrow">What I Offer</span>
                    <h2 className="section-title">My <span className="text-gradient">Programs</span></h2>
                    <p className="section-subtitle">Comprehensive training modules designed for measurable growth</p>
                </div>

                <div className="sh-grid">
                    {services.map((service) => (
                        <div key={service.id} className={`sh-card glass sh-card-${service.color}`}>
                            <div className="sh-left">
                                <span className="sh-number">{service.number}</span>
                                <div className={`sh-icon-wrap ${service.color}`}>
                                    {service.icon}
                                </div>
                            </div>
                            <div className="sh-right">
                                <h3 className="sh-title">{service.title}</h3>
                                <ul className="sh-points">
                                    {service.points.map((pt, i) => (
                                        <li key={i} className="sh-point">
                                            <CheckCircle2 size={15} className="sh-check" />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sh-tagline">"{service.tagline}"</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '50px' }}>
                    <Link to="/services" className="btn btn-outline">Explore All 8 Programs</Link>
                </div>
            </div>
        </section>
    );
}
