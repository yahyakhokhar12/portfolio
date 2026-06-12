import SectionShell from '../components/SectionShell';
import SectionHeading from '../components/SectionHeading';
import { stats, timeline } from '../data/siteData';

export default function About() {
  return (
    <SectionShell>
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="Professional bio, journey, and ambitions." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card rounded-3xl p-8 text-white/70">
            <p className="leading-8">
<<<<<<< HEAD
              I’m Muhammad Yahya Khokhar, a portfolio-focused builder working across business intelligence, ML/AI development, full-stack products, and modern web experiences. I enjoy turning messy data and vague ideas into clear systems that feel polished, useful, and trustworthy.
=======
              I'm Muhammad Yahya Khokhar, a portfolio-focused builder working across business intelligence, ML/AI development, full-stack products, and modern web experiences. I enjoy turning messy data and vague ideas into clear systems that feel polished, useful, and trustworthy.
>>>>>>> 8269a60d1630ea7198a52f324d52f2685acf7a32
            </p>
            <div className="mt-8 space-y-4">
              {timeline.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-gold-400">{item.year}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-3xl p-6">
                <p className="text-3xl font-semibold text-gold-400">{stat.value}</p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
