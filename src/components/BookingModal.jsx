import { X } from 'lucide-react';
import './BookingModal.css';

export default function BookingModal({ onClose }) {
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

                    <form className="booking-form" onSubmit={(e) => {
                        e.preventDefault();
                        alert('Demo Request Sent! We will contact you shortly.');
                        onClose();
                    }}>
                        <div className="form-group">
                            <input type="text" id="modal-name" required placeholder=" " />
                            <label htmlFor="modal-name">Full Name</label>
                        </div>

                        <div className="form-group">
                            <input type="email" id="modal-email" required placeholder=" " />
                            <label htmlFor="modal-email">Email Address</label>
                        </div>

                        <div className="form-group">
                            <input type="tel" id="modal-phone" required placeholder=" " />
                            <label htmlFor="modal-phone">Phone Number</label>
                        </div>

                        <div className="form-group">
                            <select id="modal-course" required defaultValue="">
                                <option value="" disabled>Select a Program</option>
                                <option value="spoken">Spoken English</option>
                                <option value="ielts">IELTS Preparation</option>
                                <option value="soft-skills">Soft Skills</option>
                                <option value="corporate">Corporate Training</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">Confirm Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
