import { useEffect, useState } from 'react';

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (window.scrollY / height) * 100 : 0;
      setProgress(value);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
}
