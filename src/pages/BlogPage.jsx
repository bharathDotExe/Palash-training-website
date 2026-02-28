import React, { useState } from 'react';
import './BlogPage.css';
import trainerPhoto from '../assets/trainer-photo.png';

import { blogPosts } from '../data/blogPosts';

export default function BlogPage() {
    const [activePost, setActivePost] = useState(null);

    // Render the article list
    if (!activePost) {
        return (
            <main className="blog-page section-padding">
                <div className="container" style={{ maxWidth: '1400px' }}>
                    <div className="bp-header text-center">
                        <span className="bp-eyebrow">Insights & Stories</span>
                        <h1 className="bp-title">Our <span className="text-gradient">Blog</span></h1>
                        <p className="bp-subtitle">Expert articles, communication strategies, and real-world career transformations.</p>
                    </div>

                    <div className="bp-grid">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bp-card glass" onClick={() => {
                                if (post.isExternal) {
                                    window.open(post.link, '_blank', 'noopener,noreferrer');
                                } else {
                                    setActivePost(post);
                                }
                            }}>
                                <div className="bp-card-image-wrap">
                                    <div className="bp-category-badge">{post.category}</div>
                                    <img
                                        src={`https://picsum.photos/seed/${post.id + 1045}/600/400`}
                                        alt={post.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="bp-card-content">
                                    <div className="bp-meta">
                                        <span>{post.date}</span>
                                        <span className="bp-dot">•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="bp-card-title">{post.title}</h3>
                                    <p className="bp-card-excerpt">{post.excerpt}</p>

                                    <div className="bp-card-footer">
                                        <div className="bp-author">
                                            <img src={post.authorImage} alt={post.author} className="bp-author-img" />
                                            <span className="bp-author-name">{post.author}</span>
                                        </div>
                                        <button className="bp-read-more text-gradient">Read Article →</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    // Render the active article full view
    return (
        <main className="blog-article-page section-padding">
            {/* Background Decorations */}
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>

            <div className="container" style={{ maxWidth: '1100px', position: 'relative', zIndex: 1 }}>
                <div className="bp-article-nav">
                    <button
                        className="bp-back-btn p-pill"
                        onClick={() => {
                            setActivePost(null);
                            window.scrollTo(0, 0);
                        }}
                    >
                        ← Back to articles
                    </button>
                    <a href={activePost.link} target="_blank" rel="noopener noreferrer" className="bp-linkedin-pill">
                        View on LinkedIn
                    </a>
                </div>

                <article className="bp-full-article glass shadow-lg">
                    {/* Featured Image */}
                    <div className="bp-featured-image">
                        <img
                            src={`https://picsum.photos/seed/${activePost.id + 1045}/1200/600`}
                            alt={activePost.title}
                            loading="eager"
                        />
                    </div>

                    <div className="bp-article-content-wrapper">
                        <header className="bp-article-header text-center">
                            <span className="bp-category-tag">{activePost.category}</span>
                            <h1 className="bp-article-title">{activePost.title}</h1>

                            <div className="bp-article-author-card">
                                <img src={activePost.authorImage} alt={activePost.author} className="bp-author-avatar-large" />
                                <div className="bp-author-details">
                                    <span className="bp-author-name-large">Written by {activePost.author}</span>
                                    <span className="bp-article-pub-info">{activePost.date} • {activePost.readTime}</span>
                                </div>
                            </div>
                        </header>

                        <div className="bp-article-body" dangerouslySetInnerHTML={{ __html: activePost.content }} />

                        <footer className="bp-article-footer">
                            <div className="bp-cta-box glass">
                                <div className="bp-cta-text">
                                    <h4>Enjoyed this perspective?</h4>
                                    <p>Join the conversation and see more insights on LinkedIn.</p>
                                </div>
                                <a href={activePost.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Comment on LinkedIn
                                </a>
                            </div>
                        </footer>
                    </div>
                </article>
            </div>
        </main>
    );
}
