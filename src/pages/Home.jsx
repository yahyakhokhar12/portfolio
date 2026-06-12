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
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="glass-card rounded-3xl p-6 transition hover:-translate-y-1">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {service.items.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 border border-gold-400/30 px-6 py-3 font-medium text-gold-300 transition hover:border-gold-400/50">
              View All Services →
            </Link>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="section-shell">
          <SectionHeading eyebrow="Testimonials" title="What clients and collaborators say." align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="glass-card rounded-3xl p-6">
                <p className="text-white/70 italic">" {testimonial.quote} "</p>
                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gold-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-white/[0.02]">
        <div className="section-shell">
          <SectionHeading eyebrow="FAQ" title="Common questions answered." align="center" />
          <div className="mt-10 max-w-3xl mx-auto">
            <FAQ
              items={[
                { q: 'How do you approach new projects?', a: 'I start with discovery and strategy, understand your goals, and deliver polished work that moves the needle.' },
                { q: 'What tech stack do you work with?', a: 'Power BI, Python, JavaScript/React, Node.js, SQL, MongoDB, and modern ML/AI frameworks.' },
                { q: 'What are your rates?', a: 'Rates are project-based and scale with scope. Happy to discuss your budget and timeline.' },
                { q: 'Do you offer ongoing support?', a: 'Yes, I offer retainer arrangements for long-term partnerships and continuous optimization.' }
              ]}
            />
          </div>
        </div>
      </SectionShell>
    </>
  );
}
