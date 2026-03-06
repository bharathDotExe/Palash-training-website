import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './Hero.css';

export default function Hero({ onBookDemo }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const slides = [
        '/slide1.jpg',
        '/slide2.png',
        '/slide3.jpg',
        '/slide4.png'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2500); // 2.5 seconds gap
        return () => clearInterval(timer);
    }, [slides.length]);

    const toggleAudio = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        }
    };
    return (
        <section className="hero-section">
            <div className="container hero-content">
                <div className="hero-text glass">
                    <h1 className="hero-title">
                        Master Language & <br /> Elevate Your <span className="text-gradient">Aspirations</span>
                    </h1>
                    <p className="hero-subtitle">
                        Modern, professional training in Spoken English, IELTS, Soft Skills, and Corporate Communication. Stand out with Gen-Z forward coaching.
                    </p>
                    <div className="hero-ctas">
                        <button className="btn btn-primary" onClick={onBookDemo}>Start Learning</button>
                        <a href="/services" className="btn btn-outline">Explore Programs</a>
                        <a href="/contact" className="btn btn-outline hero-contact-btn">📞 Contact Us</a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number text-gradient">1000+</span>
                            <span className="stat-label">Students Trained</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number text-gradient">4.9/5</span>
                            <span className="stat-label">Average Rating</span>
                        </div>
                    </div>
                </div>

                <div className="hero-graphics">
                    <div className="image-wrapper glass">
                        <div className="slideshow-container">
                            {slides.map((src, index) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className={`hero-img slide-image ${index === currentSlide ? 'active' : ''}`}
                                />
                            ))}
                        </div>

                        {/* Background Music Player */}
                        <audio
                            ref={audioRef}
                            src="https://ik.imagekit.io/dvl5mhvik/Inspirational%20BG%20Music.mpeg"
                            loop
                            preload="none"
                        />
                        <button
                            className="audio-control glass"
                            onClick={toggleAudio}
                            aria-label={isPlaying ? "Pause Music" : "Play Music"}
                        >
                            {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
                        </button>
                    </div>
                    <div className="decor-circle"></div>

                    {/* Floating Badges */}
                    <div className="floating-badge badge-1 glass">
                        <span className="badge-icon">🏆</span>
                        <div className="badge-text">
                            <strong>8.5+ Band</strong>
                            <span>IELTS Guarantee</span>
                        </div>
                    </div>
                    <div className="floating-badge badge-2 glass">
                        <span className="badge-icon">🗣️</span>
                        <div className="badge-text">
                            <strong>100% Fluent</strong>
                            <span>Spoken English</span>
                        </div>
                    </div>
                    <div className="floating-badge badge-3 glass">
                        <span className="badge-icon">💼</span>
                        <div className="badge-text">
                            <strong>Pro Skills</strong>
                            <span>Corporate Ready</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
