import { interests } from '../data/interests.js';
import SectionHeading from '../components/SectionHeading.jsx';
import InterestCard from '../components/InterestCard.jsx';

export default function Interests() {
  return (
    <section id="interests" className="bg-cream">
      <div className="section">
        <SectionHeading title="Areas of Exploration" subtitle="Topics I am actively learning about, not claiming mastery of." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((it, i) => <InterestCard key={it.title} item={it} index={i} />)}
        </div>
      </div>
    </section>
  );
}
