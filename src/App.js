import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}