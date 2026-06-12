import { useMemo, useState } from 'react';
import SectionShell from '../components/SectionShell';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/siteData';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';

const categories = ['All', 'Power BI', 'AI Projects', 'Machine Learning', 'MERN Stack', 'Data Analytics'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = filter === 'All' || p.category === filter || (filter === 'AI Projects' && p.category.includes('AI'));
      const matchesSearch = `${p.title} ${p.description} ${p.technologies.join(' ')}`.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  return (
    <SectionShell>
      <div className="section-shell">
        <SectionHeading eyebrow="Projects" title="Filterable portfolio showcase." description="Search, filter, and inspect details in premium modal layouts." />
        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto]">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search projects..." className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35" />
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm ${filter === item ? 'bg-gold-400 text-ink-950' : 'border border-white/10 bg-white/5 text-white/75'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setActive(project)} />
          ))}
        </div>
      </div>
      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div>
            <img src={active.image} alt={active.title} className="h-80 w-full rounded-2xl object-cover" />
            <h3 className="mt-6 text-3xl font-semibold">{active.title}</h3>
            <p className="mt-3 text-white/70">{active.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {active.technologies.map((tech) => <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/70">{tech}</span>)}
            </div>
          </div>
        )}
      </Modal>
    </SectionShell>
  );
}
