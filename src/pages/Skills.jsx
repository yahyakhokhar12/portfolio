import SectionShell from '../components/SectionShell';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/siteData';

export default function Skills() {
  return (
    <SectionShell>
      <div className="section-shell">
        <SectionHeading eyebrow="Skills" title="Categorized expertise with premium visual treatment." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skills.map((group) => (
            <div key={group.group} className="glass-card rounded-3xl p-6">
              <h3 className="text-2xl font-semibold">{group.group}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item, idx) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 h-2 rounded-full bg-white/5">
                <div className="h-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-300" style={{ width: `${70 + (group.items.length % 5) * 6}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
