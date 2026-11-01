import { profile } from '../data/profile.js';
import SectionHeading from '../components/SectionHeading.jsx';
import TimelineItem from '../components/TimelineItem.jsx';

export default function Education() {
  const e = profile.education;
  return (
    <section id="education" className="bg-cream">
      <div className="section">
        <SectionHeading title="Education" />
        <TimelineItem title={e.institution} subtitle={`${e.status} · ${e.degree}`} meta={e.period}>
          <p>{e.description}</p>
        </TimelineItem>
      </div>
    </section>
  );
}
