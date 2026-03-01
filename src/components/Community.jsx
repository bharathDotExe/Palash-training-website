import './Community.css';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
export default function Community() {
    return (
        <section id="blog" className="community-section section-padding">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Latest from the <span className="text-gradient">Community</span></h2>
                        <p className="section-subtitle">Insights, tips, and stories to keep you inspired.</p>
                    </div>
                    <Link to="/blog" className="btn btn-outline">View All Articles</Link>
                </div>

                <div className="blog-grid">
                    {blogPosts.slice(0, 3).map((article) => (
                        <div key={article.id} className="blog-card glass">
                            <div className="blog-image">
                                <img src={`https://picsum.photos/seed/${article.id + 1045}/600/400`} alt={article.title} />
                                <span className="category-badge">{article.category}</span>
                            </div>
                            <div className="blog-content">
                                <p className="blog-date">{article.date} • {article.readTime}</p>
                                <h3 className="blog-title">{article.title}</h3>
                                {article.isExternal ? (
                                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="read-more">
                                        Read Article <ArrowUpRight size={16} />
                                    </a>
                                ) : (
                                    <Link to="/blog" className="read-more">
                                        Read Article <ArrowUpRight size={16} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
