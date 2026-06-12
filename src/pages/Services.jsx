import SectionShell from '../components/SectionShell';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/siteData';

export default function Services() {
  return (
    <SectionShell>
      <div className="section-shell">
        <SectionHeading eyebrow="Services" title="Premium service cards built for high-trust conversations." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="glass-card rounded-3xl p-7 transition hover:-translate-y-1">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <ul className="mt-5 space-y-3 text-white/70">
                {service.items.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
