import Hero from '../components/Hero';
import SectionShell from '../components/SectionShell';
import SectionHeading from '../components/SectionHeading';
import { projects, services, stats, testimonials } from '../data/siteData';
import ProjectCard from '../components/ProjectCard';
import AnimatedCounter from '../components/AnimatedCounter';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />
      <SectionShell>
        <SectionHeading eyebrow="Featured Skills" title="A cross-functional builder with a strong analytics core." description="Comfortable across dashboards, web apps, and AI-assisted workflows." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {['Power BI', 'ML/AI', 'MERN Stack', 'Data Analytics'].map((item) => (
            <div key={item} className="glass-card rounded-3xl p-6">
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-white/65">Premium, strategic, and production-ready output.</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-white/[0.02]">
        <div className="section-shell">
          <SectionHeading eyebrow="Featured Projects" title="Latest dashboards and product work." align="center" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {projects.filter((item) => item.featured).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="section-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-3xl p-6 text-center">
              <p className="text-4xl font-semibold text-gold-400"><AnimatedCounter value={stat.value} /></p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-white/[0.02]">
        <div className="section-shell">
          <SectionHeading eyebrow="Services" title="Premium service offerings" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="glass-card rounded-3xl p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/65">
                  {service.items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="glass-card rounded-3xl p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-400">{item.role}</p>
              <p className="mt-4 text-lg text-white/85">{item.quote}</p>
              <p className="mt-6 text-sm text-white/50">{item.name}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-white/[0.02]">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="FAQ" title="Quick answers for clients." />
          <FAQ
            items={[
              { q: 'Do you build custom dashboards?', a: 'Yes. I design premium Power BI dashboards with business-first storytelling and clean data models.' },
              { q: 'Can you handle web and AI projects too?', a: 'Absolutely. I also work on MERN apps, AI assistants, RAG systems, and automation workflows.' },
              { q: 'Are you available for freelance or full-time work?', a: 'Yes. The contact page is set up for both project inquiries and long-term opportunities.' }
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell>
        <div className="section-shell rounded-[2rem] border border-gold-400/20 bg-gradient-to-r from-gold-400/15 to-white/[0.03] p-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-400">Contact CTA</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Have an idea worth building?</h2>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-gold-400 px-6 py-3 font-medium text-ink-950">Let’s talk</Link>
        </div>
      </SectionShell>
    </>
  );
}
