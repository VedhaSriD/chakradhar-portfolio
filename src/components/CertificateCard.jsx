import { Award, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection.jsx';

export default function CertificateCard({ cert, index }) {
  return (
    <AnimatedSection delay={(index % 3) * 0.08}>
      <article className="card flex h-full flex-col">
        {cert.image && <img src={cert.image} alt={`${cert.title} certificate`} loading="lazy" className="mb-4 rounded-lg border border-sage-light/50" />}
        <Award className="mb-3 text-glow-muted" size={24} />
        <h3 className="font-semibold text-walnut-deep">{cert.title}</h3>
        <p className="mt-1 text-sm text-walnut">{cert.issuer || 'Issuer to be added'}</p>
        <p className="text-sm text-walnut-light">{cert.date || 'Completion date to be added'}</p>
        <div className="mt-auto pt-4">
          {cert.url ? (
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-sage-deep hover:underline">
              Verify credential <ExternalLink size={14} />
            </a>
          ) : (
            <span className="text-xs text-walnut-light">Verification link to be added</span>
          )}
        </div>
      </article>
    </AnimatedSection>
  );
}
