import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import galleryData from '../data/galleryData.json';
import './GalleryCategoryPage.css';

export default function GalleryCategoryPage() {
    const { categoryId } = useParams();
    const categoryData = galleryData.find(item => item.id === categoryId);

    if (!categoryData) {
        return (
            <main className="section-padding gallery-category-main flex-center">
                <div className="container text-center">
                    <h2>Category Not Found</h2>
                    <Link to="/gallery" className="back-link mt-4">
                        <ArrowLeft size={20} /> Back to Gallery
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="section-padding gallery-category-main">
            <div className="container">
                <div className="gallery-category-header">
                    <Link to="/gallery" className="back-link">
                        <ArrowLeft size={20} /> Back to Gallery
                    </Link>
                    <h2 className="text-gradient mt-4">{categoryData.title}</h2>
                    <p className="category-meta">{categoryData.images.length} Images</p>
                    <p className="category-desc mt-2">{categoryData.description}</p>
                </div>

                <div className="full-gallery-grid mt-8">
                    {categoryData.images.map((imgSrc, idx) => (
                        <div key={idx} className="full-gallery-item">
                            <img src={imgSrc} alt={`${categoryData.title} ${idx + 1}`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
