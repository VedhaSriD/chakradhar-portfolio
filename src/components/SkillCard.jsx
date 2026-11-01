import AnimatedSection from './AnimatedSection.jsx';
import { levelScale } from '../data/skills.js';

export default function SkillCard({ category, index }) {
  const Icon = category.icon;
  return (
    <AnimatedSection delay={(index % 3) * 0.08}>
      <article className="card group h-full">
        <div className="mb-4 flex items-center gap-3">
          <Icon size={22} className="text-sage-deep transition duration-300 group-hover:scale-125 group-hover:text-glow-muted" />
          <h3 className="font-semibold text-walnut-deep">{category.title}</h3>
        </div>
        <ul className="space-y-2">
          {category.items.map((it) => (
            <li key={it.name} className="flex items-center justify-between gap-3 text-sm">
              <span>{it.name}</span>
              <span className="flex shrink-0 items-center gap-2 text-xs text-walnut-light">
                <span className="hidden sm:inline">{it.level}</span>
                <span className="flex gap-0.5" role="img" aria-label={`Level: ${it.level}`}>
                  {[1, 2, 3, 4].map((n) => (
                    <span key={n} className={`h-1.5 w-3 rounded-full ${n <= levelScale[it.level] ? 'bg-sage-deep' : 'bg-sage-light/60'}`} />
                  ))}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </article>
    </AnimatedSection>
  );
}
