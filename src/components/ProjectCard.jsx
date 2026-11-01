import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection.jsx';

export default function ProjectCard({ project, index }) {
  const soon = project.status === 'Coming Soon';
  return (
    <AnimatedSection delay={(index % 3) * 0.08}>
      <article className={`card flex h-full flex-col ${soon ? 'border-dashed' : ''}`}>
        {project.image ? (
          <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" className="mb-4 aspect-video w-full rounded-lg object-cover" />
        ) : (
          <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-surface text-sage"><FolderGit2 size={36} /></div>
        )}
        <div className="mb-2 flex items-center justify-between gap-2 text-xs">
          <span className="rounded-full bg-sage-light/50 px-2.5 py-1 text-sage-deep">{project.category}</span>
          <span className={`rounded-full px-2.5 py-1 ${soon ? 'bg-glow-soft/60 text-walnut-deep' : 'bg-sage-deep text-offwhite'}`}>{project.status}</span>
        </div>
        <h3 className="font-semibold text-walnut-deep">{project.name}</h3>
        <p className="mt-1 text-sm text-walnut">{project.description}</p>
        {project.stack.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((t) => <li key={t} className="rounded bg-surface px-2 py-0.5 text-xs text-walnut">{t}</li>)}
          </ul>
        )}
        <div className="mt-auto flex gap-4 pt-4 text-sm font-medium text-sage-deep">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline"><Github size={15} /> Code</a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline"><ExternalLink size={15} /> Live demo</a>}
        </div>
      </article>
    </AnimatedSection>
  );
}
