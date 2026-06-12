import { useEffect, useState } from 'react';

export default function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let current = 0;
    const target = parseInt(value, 10) || 0;
    const step = Math.max(1, Math.ceil(target / 50));
    const id = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(id);
      }
      setCount(current);
    }, 20);
    return () => clearInterval(id);
  }, [value]);
  return <span>{count}+</span>;
}
