import AnimatedSection from './AnimatedSection.jsx';

export default function InterestCard({ item, index }) {
  const Icon = item.icon;
  return (
    <AnimatedSection delay={index * 0.07}>
      <article className="card group h-full">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sage-deep text-glow-soft transition duration-300 group-hover:rotate-6 group-hover:scale-110">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-walnut-deep">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-walnut">{item.text}</p>
      </article>
    </AnimatedSection>
  );
}
