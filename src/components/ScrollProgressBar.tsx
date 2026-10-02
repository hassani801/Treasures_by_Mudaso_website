import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9997] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#E3A58F] via-[#C98270] to-[#6B4F45] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(201,130,112,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
