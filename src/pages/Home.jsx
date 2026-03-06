import Hero from '../components/Hero';
import TrainerIntroHome from '../components/TrainerIntroHome';
import ServicesHome from '../components/ServicesHome';
import Community from '../components/Community';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

export default function Home({ onBookDemo }) {
    return (
        <main>
            <Hero onBookDemo={onBookDemo} />
            <TrainerIntroHome />
            <ServicesHome />
            <Community />
            <Testimonials />
            <CtaBanner onBookDemo={onBookDemo} />
        </main>
    );
}
