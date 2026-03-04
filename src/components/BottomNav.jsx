import React from 'react';
import { Home, BookOpen, Users, Phone } from 'lucide-react';
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
            <a href="/contact" className="nav-item">
                <Phone size={20} />
                <span>Contact Us</span>
            </a>
        </nav>
    );
}
