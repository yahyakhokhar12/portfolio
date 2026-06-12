import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <button key={item.q} onClick={() => setOpen(open === idx ? -1 : idx)} className="glass-card w-full rounded-2xl p-5 text-left">
          <div className="flex items-center justify-between gap-4">
            <span className="text-lg font-medium text-white">{item.q}</span>
            <Plus className={`transition ${open === idx ? 'rotate-45 text-gold-400' : 'text-white/60'}`} size={18} />
          </div>
          {open === idx && <p className="mt-3 text-sm leading-6 text-white/65">{item.a}</p>}
        </button>
      ))}
    </div>
  );
}
