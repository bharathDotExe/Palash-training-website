import React from 'react';
import { Home, BookOpen, Users, User } from 'lucide-react';
import './BottomNav.css';

export default function BottomNav() {
    return (
        <nav className="bottom-nav">
            <a href="#" className="nav-item active">
                <Home size={20} />
                <span>Home</span>
            </a>
            <a href="#services" className="nav-item">
                <BookOpen size={20} />
                <span>Courses</span>
            </a>
            <a href="#community" className="nav-item">
                <Users size={20} />
                <span>Community</span>
            </a>
            <a href="#profile" className="nav-item">
                <User size={20} />
                <span>Profile</span>
            </a>
        </nav>
    );
}
