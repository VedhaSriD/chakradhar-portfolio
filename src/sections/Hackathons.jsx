import { Trophy } from 'lucide-react';
import { hackathons } from '../data/achievements.js';
import SectionHeading from '../components/SectionHeading.jsx';
import AnimatedSection from '../components/AnimatedSection.jsx';

export default function Hackathons() {
  return (
    <section id="hackathons" className="bg-cream">
      <div className="section">
        <SectionHeading title="Hackathons & Technical Experiences" />
        <div className="grid gap-5 md:grid-cols-2">
          {hackathons.map((h, i) => (
            <AnimatedSection key={h.name} delay={i * 0.1}>
              <article className="card h-full bg-offwhite">
                <Trophy className="mb-3 text-glow-muted" size={24} />
                <h3 className="text-xl font-semibold text-walnut-deep">{h.name}</h3>
                <p className="mt-2 text-sm text-walnut">{h.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {h.highlights.map((x) => <li key={x} className="rounded-full bg-sage-light/50 px-3 py-1 text-xs text-sage-deep">{x}</li>)}
                </ul>
                {h.projectTitle && <p className="mt-4 text-sm"><b>Project:</b> {h.projectTitle}</p>}
                {h.contribution && <p className="text-sm"><b>Contribution:</b> {h.contribution}</p>}
                {h.date && <p className="text-sm"><b>Date:</b> {h.date}</p>}
                {h.certificate && <a href={h.certificate} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-sage-deep hover:underline">View certificate</a>}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
