import { useState } from 'react';
import { X } from 'lucide-react';
import './BookingModal.css';
import API_BASE_URL from '../api';

export default function BookingModal({ onClose }) {
    const [form, setForm] = useState({
        fullName: '', email: '', phone: '', course: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        // Map the modal input IDs to form state keys
        const key = id.replace('modal-', '');
        const keyMap = { name: 'fullName', email: 'email', phone: 'phone', course: 'course' };
        setForm(prev => ({ ...prev, [keyMap[key] || key]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const res = await fetch(`${API_BASE_URL}/demo_booking.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            const result = await res.json();

            if (!res.ok) throw new Error(result.error || 'Something went wrong.');

            setSubmitted(true);
            setTimeout(() => onClose(), 3000); // auto-close after 3 seconds
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-body">
                    <div className="modal-header">
                        <h2 className="modal-title">Book your <span className="text-gradient">Free Demo</span></h2>
                        <p className="modal-subtitle">Start your journey towards professional communication excellence today.</p>
                    </div>

                    {submitted ? (
                        <div className="booking-success">
                            <div className="success-icon">✓</div>
                            <h3>Booking Confirmed!</h3>
                            <p>Thank you, <strong>{form.fullName}</strong>! We will contact you at <strong>{form.phone}</strong> shortly.</p>
                        </div>
                    ) : (
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" id="modal-name" required placeholder=" " value={form.fullName} onChange={handleChange} />
                                <label htmlFor="modal-name">Full Name</label>
                            </div>

                            <div className="form-group">
                                <input type="email" id="modal-email" required placeholder=" " value={form.email} onChange={handleChange} />
                                <label htmlFor="modal-email">Email Address</label>
                            </div>

                            <div className="form-group">
                                <input type="tel" id="modal-phone" required placeholder=" " value={form.phone} onChange={handleChange} />
                                <label htmlFor="modal-phone">Phone Number</label>
                            </div>

                            <div className="form-group">
                                <select id="modal-course" required value={form.course} onChange={handleChange}>
                                    <option value="" disabled>Select a Program</option>
                                    <option value="ielts-general">IELTS General</option>
                                    <option value="ielts-academic">IELTS Academic</option>
                                    <option value="train-the-trainer">Train the Trainer</option>
                                    <option value="english-communication">English communication - Speaking &amp; writing</option>
                                    <option value="corporate-training">Corporate training - Business communication</option>
                                    <option value="interview-preparation">Interview preparation</option>
                                    <option value="confidence-building">Confidence Building</option>
                                    <option value="public-speaking">Public Speaking</option>
                                    <option value="leadership-skills">Leadership Skills</option>
                                    <option value="presentation-skills">Presentation skills</option>
                                </select>
                            </div>

                            {error && <p className="booking-error">⚠️ {error}</p>}

                            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
