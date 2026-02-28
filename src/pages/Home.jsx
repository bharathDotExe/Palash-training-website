import Hero from '../components/Hero';
import TrainerIntroHome from '../components/TrainerIntroHome';
import ServicesHome from '../components/ServicesHome';
import BookingForm from '../components/BookingForm';
import Community from '../components/Community';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

export default function Home({ onBookDemo }) {
    return (
        <main>
            <Hero onBookDemo={onBookDemo} />
            <TrainerIntroHome />
            <ServicesHome />
            <BookingForm />
            <Community />
            <Testimonials />
            <CtaBanner onBookDemo={onBookDemo} />
        </main>
    );
}
