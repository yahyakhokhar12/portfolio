import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold-400/30 bg-white p-1.5 shadow-sm shadow-black/20 md:h-16 md:w-16">
            <img
              src="/logo4.1.jpeg"
              alt="Muhammad Yahya Khokhar logo"
              className="h-full w-full rounded-lg object-contain object-center"
            />
          </div>
          <div>
            <p className="text-sm text-white/60">Muhammad Yahya Khokhar</p>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Portfolio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'text-gold-400' : 'text-white/75 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink-950 lg:hidden">
          <nav className="section-shell flex flex-col py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-white/80 hover:bg-white/5 hover:text-gold-400"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
