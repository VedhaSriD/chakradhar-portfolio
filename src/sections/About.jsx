import { Target } from 'lucide-react';
import { profile } from '../data/profile.js';
import SectionHeading from '../components/SectionHeading.jsx';
import AnimatedSection from '../components/AnimatedSection.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading title="About Me" subtitle={profile.positioning} />
      <div className="grid gap-10 lg:grid-cols-5">
        <AnimatedSection className="space-y-4 leading-relaxed lg:col-span-3">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="lg:col-span-2">
          <div className="rounded-xl bg-surface p-6">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-sage-deep"><Target size={20} /> Career goals</h3>
            <ul className="space-y-3 text-sm">
              {profile.goals.map((g) => (
                <li key={g} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-glow-muted" />{g}</li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
