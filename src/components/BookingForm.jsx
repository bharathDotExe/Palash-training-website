import './BookingForm.css';

export default function BookingForm() {
    return (
        <section className="booking-section section-padding">
            <div className="container booking-container glass">
                <div className="booking-content">
                    <h2 className="section-title">Book a <span className="text-gradient">Free Demo</span></h2>
                    <p className="booking-subtitle">Experience our unique Gen-Z friendly teaching methodology. No commitments.</p>

                    <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" id="name" required placeholder=" " />
                            <label htmlFor="name">Full Name</label>
                        </div>

                        <div className="form-group">
                            <input type="email" id="email" required placeholder=" " />
                            <label htmlFor="email">Email Address</label>
                        </div>

                        <div className="form-group">
                            <select id="course" required defaultValue="">
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
                <div className="booking-graphics">
                    <div className="graphic-element circle-1"></div>
                    <div className="graphic-element circle-2"></div>
                    <div className="glass-pane">
                        <h3>"The best decision for my career!"</h3>
                        <p>- Rahul M., IELTS Score: 8.5</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
