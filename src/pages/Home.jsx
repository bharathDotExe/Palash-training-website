import Hero from '../components/Hero';
import TrainerIntro from '../components/TrainerIntro';
import Services from '../components/Services';
import BookingForm from '../components/BookingForm';
import Community from '../components/Community';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

export default function Home({ onBookDemo }) {
    return (
        <main>
            <Hero onBookDemo={onBookDemo} />
            <TrainerIntro />
            <Services />
            <BookingForm />
            <Community />
            <Testimonials />
            <CtaBanner onBookDemo={onBookDemo} />
        </main>
    );
}
