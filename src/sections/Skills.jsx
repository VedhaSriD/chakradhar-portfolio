import { skillCategories } from '../data/skills.js';
import SectionHeading from '../components/SectionHeading.jsx';
import SkillCard from '../components/SkillCard.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading title="Technical Skills" subtitle="Levels are self-assessed: Learning, Foundational, Familiar, Working Knowledge." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((c, i) => <SkillCard key={c.title} category={c} index={i} />)}
      </div>
    </section>
  );
}
