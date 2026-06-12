import SectionShell from '../components/SectionShell';
import SectionHeading from '../components/SectionHeading';
import { timeline } from '../data/siteData';

export default function Experience() {
  return (
    <SectionShell>
      <div className="section-shell">
        <SectionHeading eyebrow="Experience" title="Timeline of growth and delivery." />
        <div className="mt-12 space-y-6">
          {timeline.map((item, index) => (
            <div key={item.title} className="grid gap-4 md:grid-cols-[180px_1fr]">
              <div className="text-gold-400">{item.year}</div>
              <div className="glass-card rounded-3xl p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
