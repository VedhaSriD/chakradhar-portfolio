import { projects } from '../data/projects.js';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading title="Projects" subtitle="Real projects will appear here. Entries marked Coming Soon are placeholders, not completed work." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
      </div>
    </section>
  );
}
