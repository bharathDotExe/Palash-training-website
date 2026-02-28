import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutTrainer from './pages/AboutTrainer';
import TestimonialsPage from './pages/TestimonialsPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import BlogPage from './pages/BlogPage';
import ForumPage from './pages/ForumPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const toggleBookingModal = () => setIsBookingModalOpen(!isBookingModalOpen);

  return (
    <>
      <Header onBookDemo={toggleBookingModal} />
      <Routes>
        <Route path="/" element={<Home onBookDemo={toggleBookingModal} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutTrainer />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      {isBookingModalOpen && <BookingModal onClose={toggleBookingModal} />}
    </>
  );
}

export default App;
