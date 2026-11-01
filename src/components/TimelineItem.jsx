import AnimatedSection from './AnimatedSection.jsx';

export default function TimelineItem({ title, subtitle, meta, children }) {
  return (
    <AnimatedSection className="relative border-l-2 border-sage-light pl-8">
      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-glow bg-offwhite" />
      <h3 className="text-xl font-semibold text-walnut-deep">{title}</h3>
      <p className="text-sage-deep">{subtitle}</p>
      {meta && <p className="mt-1 text-sm text-walnut-light">{meta}</p>}
      <div className="mt-3 max-w-2xl text-walnut">{children}</div>
    </AnimatedSection>
  );
}
