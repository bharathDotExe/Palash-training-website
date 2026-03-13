import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import galleryData from '../data/galleryData.json';
import './GalleryPage.css';

function GallerySection({ data, isReversed }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 3.5 seconds
    useEffect(() => {
        if (!data.images || data.images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % data.images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [data.images]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % data.images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + data.images.length) % data.images.length);
    };

    return (
        <div className={`gallery-row ${isReversed ? 'reversed' : ''}`}>
            {/* Slider Column */}
            <div className="gallery-slider-col">
                {data.images && data.images.length > 0 ? (
                    <div className="slider-container">
                        <img 
                            src={data.images[currentIndex]} 
                            alt={`${data.title} slide ${currentIndex + 1}`} 
                            className="slider-image fade-in-animation"
                            key={currentIndex}
                        />
                        
                        {data.images.length > 1 && (
                            <div className="slider-controls">
                                <button className="slider-btn prev" aria-label="Previous slide" onClick={prevSlide}>&#10094;</button>
                                <button className="slider-btn next" aria-label="Next slide" onClick={nextSlide}>&#10095;</button>
                            </div>
                        )}
                        
                        {data.images.length > 1 && (
                            <div className="slider-indicators">
                                {data.images.map((_, idx) => (
                                    <span 
                                        key={idx} 
                                        className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentIndex(idx)}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    ></span>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="no-images">No images available for {data.title}</div>
                )}
            </div>

            {/* Content Column */}
            <div className="gallery-content-col">
                <h3 className="gallery-section-title text-gradient">{data.title}</h3>
                <div className="gallery-section-divider"></div>
                <p className="gallery-section-description">{data.description}</p>
                
                <Link 
                    to={`/gallery/${data.id}`}
                    className="view-images-btn" 
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    Click here to view event images
                </Link>
            </div>
        </div>
    );
}

export default function GalleryPage() {
    return (
        <main className="section-padding gallery-main">
            <div className="container">
                <div className="text-center space-60">
                    <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>
                        Our <span className="text-gradient">Gallery</span>
                    </h2>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginTop: '16px' }}>
                        Browse through our training activities, workshops, and recognition events.
                    </p>
                </div>

                <div className="gallery-sections">
                    {galleryData.map((section, index) => (
                        <GallerySection 
                            key={section.id} 
                            data={section} 
                            isReversed={index % 2 !== 0} 
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
