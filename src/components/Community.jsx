import './Community.css';
import { ArrowUpRight } from 'lucide-react';

const articles = [
    {
        id: 1,
        title: '5 Daily Habits to Neutralize Your Mother Tongue Influence',
        category: 'Spoken English',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
        date: 'Oct 12, 2023'
    },
    {
        id: 2,
        title: 'How to score an 8.0 in IELTS Writing Task 2',
        category: 'IELTS Prep',
        image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
        date: 'Oct 05, 2023'
    },
    {
        id: 3,
        title: 'Navigating Corporate Culture: A Gen-Z Guide',
        category: 'Soft Skills',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
        date: 'Sep 28, 2023'
    }
];

export default function Community() {
    return (
        <section id="blog" className="community-section section-padding">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Latest from the <span className="text-gradient">Community</span></h2>
                        <p className="section-subtitle">Insights, tips, and stories to keep you inspired.</p>
                    </div>
                    <button className="btn btn-outline">View All Articles</button>
                </div>

                <div className="blog-grid">
                    {articles.map((article) => (
                        <div key={article.id} className="blog-card glass">
                            <div className="blog-image">
                                <img src={article.image} alt={article.title} />
                                <span className="category-badge">{article.category}</span>
                            </div>
                            <div className="blog-content">
                                <p className="blog-date">{article.date}</p>
                                <h3 className="blog-title">{article.title}</h3>
                                <a href="#" className="read-more">
                                    Read Article <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
