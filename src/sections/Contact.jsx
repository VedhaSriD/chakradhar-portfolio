import { Mail } from 'lucide-react';
import { profile } from '../data/profile.js';
import SocialLinks from '../components/SocialLinks.jsx';
import AnimatedSection from '../components/AnimatedSection.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-walnut-deep sm:text-4xl">Let&rsquo;s Connect &amp; Explore Opportunities</h2>
        <div className="mx-auto mt-3 h-1 w-14 rounded bg-glow" />
        <p className="mt-5 text-walnut">Interested in cybersecurity, emerging technologies, collaboration or meaningful technical discussions? Feel free to connect.</p>
        <a href={`mailto:${profile.email}`} className="btn btn-dark mt-8"><Mail size={16} /> {profile.email}</a>
        <SocialLinks className="mt-6 justify-center text-sage-deep" />
      </AnimatedSection>
    </section>
  );
}
