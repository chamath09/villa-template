import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Experience from './components/Attractions';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-light-cream font-sans text-dark-green selection:bg-forest-green selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Experience />
      <Reviews />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}
