import { profile } from '../data/profile.js';
import SectionHeading from '../components/SectionHeading.jsx';
import AnimatedSection from '../components/AnimatedSection.jsx';

export default function CurrentlyExploring() {
  return (
    <section className="bg-ink text-offwhite">
      <div className="section grid gap-12 lg:grid-cols-2">
        <div>
          <AnimatedSection className="mb-6">
            <h2 className="font-display text-3xl font-semibold">Currently Exploring</h2>
            <div className="mt-3 h-1 w-14 rounded bg-glow" />
          </AnimatedSection>
          <ul className="flex flex-wrap gap-2">
            {profile.exploring.map((x, i) => (
              <AnimatedSection as="li" key={x} delay={i * 0.06}>
                <span className="block rounded-full border border-sage/60 px-4 py-2 text-sm text-sage-light transition hover:border-glow hover:text-glow-soft">{x}</span>
              </AnimatedSection>
            ))}
          </ul>
        </div>
        <div>
          <AnimatedSection className="mb-6">
            <h2 className="font-display text-3xl font-semibold">Beyond Technology</h2>
            <div className="mt-3 h-1 w-14 rounded bg-glow" />
          </AnimatedSection>
          <dl className="space-y-4">
            {profile.values.map(([t, d]) => (
              <AnimatedSection key={t}>
                <dt className="font-semibold text-glow-soft">{t}</dt>
                <dd className="text-sm text-sage-light">{d}</dd>
              </AnimatedSection>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
