import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Interests from './sections/Interests.jsx';
import Skills from './sections/Skills.jsx';
import Education from './sections/Education.jsx';
import Certifications from './sections/Certifications.jsx';
import Hackathons from './sections/Hackathons.jsx';
import Projects from './sections/Projects.jsx';
import CurrentlyExploring from './sections/CurrentlyExploring.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-glow focus:px-3 focus:py-2">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Interests />
        <Skills />
        <Education />
        <Certifications />
        <Hackathons />
        <Projects />
        <CurrentlyExploring />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
