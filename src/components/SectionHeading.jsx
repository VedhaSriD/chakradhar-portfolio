import AnimatedSection from './AnimatedSection.jsx';

export default function SectionHeading({ title, subtitle }) {
  return (
    <AnimatedSection className="mb-12 max-w-2xl">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-walnut-deep sm:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-14 rounded bg-glow" />
      {subtitle && <p className="mt-4 text-walnut/90">{subtitle}</p>}
    </AnimatedSection>
  );
}
