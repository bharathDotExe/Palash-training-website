import { MessageCircle, Globe2, Users, Briefcase } from 'lucide-react';
import './Services.css';

const services = [
    {
        id: 1,
        title: 'Spoken English',
        description: 'Master conversational English with confidence. Tailored sessions focusing on fluency, pronunciation, and real-world usage.',
        icon: <MessageCircle size={32} className="service-icon" />,
        color: 'orange'
    },
    {
        id: 2,
        title: 'IELTS Preparation',
        description: 'Achieve your target band score with intensive practice, proven strategies, and comprehensive mock tests.',
        icon: <Globe2 size={32} className="service-icon" />,
        color: 'red'
    },
    {
        id: 3,
        title: 'Soft Skills Training',
        description: 'Elevate your personality. Learn critical thinking, emotional intelligence, and interpersonal communication.',
        icon: <Users size={32} className="service-icon" />,
        color: 'orange'
    },
    {
        id: 4,
        title: 'Corporate Training',
        description: 'Empower your workforce with professional communication skills, email etiquette, and leadership presence.',
        icon: <Briefcase size={32} className="service-icon" />,
        color: 'red'
    }
];

export default function Services() {
    return (
        <section id="services" className="services-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our <span className="text-gradient">Programs</span></h2>
                    <p className="section-subtitle">Comprehensive training modules designed for measurable growth</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card glass">
                            <div className={`icon-wrapper ${service.color}`}>
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <button className="service-link text-gradient">Learn More →</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
