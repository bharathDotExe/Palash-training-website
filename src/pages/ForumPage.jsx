import { useState, useEffect } from 'react';
import './ForumPage.css';
import API_BASE_URL from '../api';
import {
    Search, PenSquare, Home, Hash, TrendingUp, User,
    Bookmark, Bell, MessageSquare, ThumbsUp, Eye,
    Share2, MoreHorizontal, Send
} from 'lucide-react';

// Helper: normalise a DB row to the shape the UI expects
function normaliseArticle(row) {
    const dt = new Date(row.created_at || Date.now());
    const dateOptions = { month: 'short', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: '2-digit' };
    return {
        ...row,
        avatar: (row.author || 'NA').substring(0, 2).toUpperCase(),
        date: dt.toLocaleDateString('en-US', dateOptions),
        time: dt.toLocaleTimeString('en-US', timeOptions),
        tags: Array.isArray(row.tags) ? row.tags : (row.tags ? row.tags.split(',') : []),
        imageUrl: row.image_url || '',
        likes: parseInt(row.likes) || 0,
        views: parseInt(row.views) || 0,
        comments: row.commentList ? row.commentList.length : 0,
        isSaved: false,
        commentList: row.commentList || [],
        previewLength: 150
    };
}

export default function ForumPage() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [apiError, setApiError] = useState(null);
    const [isWriting, setIsWriting] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [expandedArticleId, setExpandedArticleId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Form state
    const [newArticle, setNewArticle] = useState({
        title: '', author: '', tags: '', imageUrl: '', content: ''
    });

    // Load articles from the PHP API on mount
    useEffect(() => {
        fetch(`${API_BASE_URL}/articles.php`)
            .then(res => {
                if (!res.ok) throw new Error(`Server error: ${res.status}`);
                return res.json();
            })
            .then(data => {
                setArticles(Array.isArray(data) ? data.map(normaliseArticle) : []);
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Failed to load articles:', err);
                setApiError('Could not load articles. Please try again later.');
                setIsLoading(false);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewArticle(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newArticle.title || !newArticle.author || !newArticle.content) {
            alert('Please fill in the title, author, and content fields.');
            return;
        }
        setIsSubmitting(true);
        try {
            const res = await fetch(`${API_BASE_URL}/articles.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: newArticle.title,
                    author: newArticle.author,
                    content: newArticle.content,
                    tags: newArticle.tags,
                    imageUrl: newArticle.imageUrl
                })
            });
            const result = await res.json();
            if (!res.ok) throw new Error(result.error || 'Unknown error');

            // Optimistically add to the top of the feed
            const optimistic = normaliseArticle({
                id: result.id || Date.now(),
                title: newArticle.title,
                author: newArticle.author,
                content: newArticle.content,
                tags: newArticle.tags,
                image_url: newArticle.imageUrl,
                likes: 0, views: 0,
                created_at: new Date().toISOString(),
                commentList: []
            });
            setArticles(prev => [optimistic, ...prev]);
            setNewArticle({ title: '', author: '', tags: '', imageUrl: '', content: '' });
            setIsWriting(false);
        } catch (err) {
            alert('Failed to publish article: ' + err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleExpand = (id) => {
        if (expandedArticleId === id) {
            setExpandedArticleId(null);
        } else {
            setExpandedArticleId(id);
        }
    };

    const toggleSave = (e, id) => {
        e.stopPropagation();
        setArticles(articles.map(article =>
            article.id === id ? { ...article, isSaved: !article.isSaved } : article
        ));
    };

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="forum-layout-container">
            <div className="forum-max-width">

                {/* Left Navigation Sidebar */}
                <aside className="forum-left-sidebar">
                    <nav className="forum-nav-menu">
                        <a href="#" className="nav-item active"><Home size={20} /> <span>Home</span></a>
                        <a href="#" className="nav-item"><Hash size={20} /> <span>Categories</span></a>
                        <a href="#" className="nav-item"><TrendingUp size={20} /> <span>Trending</span></a>
                        <a href="#" className="nav-item"><User size={20} /> <span>My Posts</span></a>
                        <a href="#" className="nav-item"><Bookmark size={20} /> <span>Saved Articles</span></a>
                        <a href="#" className="nav-item"><Bell size={20} /> <span>Notifications</span></a>
                    </nav>

                    <div className="popular-tags-widget">
                        <h3>Popular Tags</h3>
                        <div className="tags-list">
                            <span className="hashtag">#ielts</span>
                            <span className="hashtag">#softskills</span>
                            <span className="hashtag">#communication</span>
                            <span className="hashtag">#interviewtips</span>
                            <span className="hashtag">#publicspeaking</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <section className="forum-main-feed">

                    {/* Top Header: Search and Write Button */}
                    <div className="feed-controls-header">
                        <div className="search-bar-wrapper">
                            <Search size={18} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search articles, topics, or users..."
                                className="search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="btn write-article-btn" onClick={() => setIsWriting(!isWriting)}>
                            <PenSquare size={18} /> Write your own blog
                        </button>
                    </div>

                    {/* Write Post Form */}
                    {isWriting && (
                        <div className="write-post-modal">
                            <form className="modern-form" onSubmit={handleSubmit}>
                                <div className="form-head">
                                    <h3>Create a New Article</h3>
                                    <button type="button" className="close-btn" onClick={() => setIsWriting(false)}>×</button>
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text" name="title" placeholder="Article Title..."
                                        className="title-input" value={newArticle.title} onChange={handleInputChange} autoFocus
                                    />
                                </div>
                                <div className="input-group split-row">
                                    <input
                                        type="text" name="author" placeholder="Your Name"
                                        className="standard-input" value={newArticle.author} onChange={handleInputChange}
                                    />
                                    <input
                                        type="text" name="tags" placeholder="Tags (comma separated)"
                                        className="standard-input" value={newArticle.tags} onChange={handleInputChange}
                                    />
                                    <input
                                        type="url" name="imageUrl" placeholder="Paste Thumbnail Image URL from Google/Unsplash..."
                                        className="standard-input" value={newArticle.imageUrl} onChange={handleInputChange}
                                    />
                                </div>
                                <div className="input-group">
                                    <textarea
                                        name="content" placeholder="Write your content here... (Markdown supported mentally!)"
                                        className="content-textarea" rows="8" value={newArticle.content} onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <div className="form-actions-row">
                                    <button type="button" className="btn btn-muted" onClick={() => setIsWriting(false)}>Cancel</button>
                                    <button type="submit" className="btn btn-publish">Publish Article</button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Articles List */}
                    <div className="articles-feed-container">
                        {filteredArticles.length === 0 ? (
                            <div className="no-results">No articles found matching "{searchQuery}"</div>
                        ) : (
                            filteredArticles.map((article) => {
                                const isExpanded = expandedArticleId === article.id;
                                const previewText = article.content.length > article.previewLength
                                    ? article.content.substring(0, article.previewLength) + '...'
                                    : article.content;

                                return (
                                    <article key={article.id} className="dev-article-card">
                                        {/* Author Info Row */}
                                        <div className="article-author-header">
                                            <div className="author-avatar">{article.avatar}</div>
                                            <div className="author-info-block">
                                                <span className="author-name">{article.author}</span>
                                                <span className="post-timestamp">{article.date} • {article.time}</span>
                                            </div>
                                            <button className="options-btn" aria-label="More options"><MoreHorizontal size={20} /></button>
                                        </div>

                                        {/* Article Content Clickable Area */}
                                        <div className="article-body-clickable" onClick={() => toggleExpand(article.id)}>
                                            <h2 className="dev-article-title">{article.title}</h2>
                                            <div className="dev-article-tags">
                                                {article.tags.map(tag => (
                                                    <span key={tag} className="tag-pill">#{tag}</span>
                                                ))}
                                            </div>
                                            {article.imageUrl && (
                                                <div className="article-thumbnail-container">
                                                    <img src={article.imageUrl} alt="Article Thumbnail" className="dev-article-thumbnail" />
                                                </div>
                                            )}
                                            <div className={`dev-article-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                                                {isExpanded ? (
                                                    article.content.split('\n').map((paragraph, i) => (
                                                        <p key={i}>{paragraph}</p>
                                                    ))
                                                ) : (
                                                    <p>{previewText}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Footer Stats & Interactions */}
                                        <div className="dev-article-footer">
                                            <div className="footer-stats-left">
                                                <button className="interaction-pill hoverable">
                                                    <ThumbsUp size={18} />
                                                    <span>{article.likes}</span>
                                                    <span className="hide-mobile">Likes</span>
                                                </button>
                                                <button className="interaction-pill hoverable" onClick={() => toggleExpand(article.id)}>
                                                    <MessageSquare size={18} />
                                                    <span>{article.comments}</span>
                                                    <span className="hide-mobile">Comments</span>
                                                </button>
                                                <div className="interaction-pill text-only">
                                                    <Eye size={18} />
                                                    <span>{article.views}</span>
                                                    <span className="hide-mobile">Views</span>
                                                </div>
                                            </div>
                                            <div className="footer-actions-right">
                                                <button className="action-icon-btn hoverable">
                                                    <Share2 size={20} />
                                                </button>
                                                <button className={`action-icon-btn hoverable ${article.isSaved ? 'saved' : ''}`} onClick={(e) => toggleSave(e, article.id)}>
                                                    <Bookmark size={20} fill={article.isSaved ? "currentColor" : "none"} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Expanded Comments Section */}
                                        {isExpanded && (
                                            <div className="comments-section-wrapper">
                                                <h3 className="comments-heading">Discussion ({article.comments})</h3>

                                                <div className="comment-input-area">
                                                    <div className="author-avatar small">GU</div>
                                                    <div className="comment-input-box">
                                                        <textarea placeholder="Add to the discussion..." rows="2"></textarea>
                                                        <div className="comment-submit-row">
                                                            <button className="btn btn-publish small"><Send size={14} /> Reply</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="comments-list">
                                                    {article.commentList.length > 0 ? (
                                                        article.commentList.map(comment => (
                                                            <div key={comment.id} className="comment-thread">
                                                                <div className="author-avatar small">{comment.avatar}</div>
                                                                <div className="comment-bubble">
                                                                    <div className="comment-meta">
                                                                        <span className="comment-author">{comment.user}</span>
                                                                        <span className="comment-time">• {comment.time}</span>
                                                                    </div>
                                                                    <p className="comment-text">{comment.text}</p>
                                                                    <div className="comment-actions">
                                                                        <button><ThumbsUp size={14} /> 0 likes</button>
                                                                        <button><MessageSquare size={14} /> Reply</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div className="no-comments-msg">Be the first to comment!</div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </article>
                                )
                            })
                        )}
                    </div>
                </section>

                {/* Right Margin to balance standard layouts (empty mostly) */}
                <div className="forum-right-margin"></div>
            </div>
        </main>
    );
}
