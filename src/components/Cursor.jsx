import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return <div className="pointer-events-none fixed z-[999] hidden h-6 w-6 rounded-full border border-gold-400/40 bg-gold-400/10 blur-[1px] lg:block" style={{ left: pos.x - 12, top: pos.y - 12 }} />;
}
