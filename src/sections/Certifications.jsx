import { certifications } from '../data/certifications.js';
import SectionHeading from '../components/SectionHeading.jsx';
import CertificateCard from '../components/CertificateCard.jsx';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading title="Certifications & Learning" subtitle="Course topics completed or in progress. Details are added only once verified." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => <CertificateCard key={c.title} cert={c} index={i} />)}
      </div>
    </section>
  );
}
