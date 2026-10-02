import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Elegant entrance and gift box drawing timer
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 750);
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <aside
      aria-label="Loading site"
      aria-live="polite"
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#FDF8F4] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
    >
      <div className="flex flex-col items-center text-center px-6">
        {/* Animated SVG Gift Box with stroke-dashoffset */}
        <div className="relative w-20 h-20 mb-6">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-[#C98270]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Box base */}
            <rect
              x="20"
              y="40"
              width="60"
              height="45"
              rx="4"
              className="animate-[dash_1.6s_ease-in-out_forwards]"
              style={{
                strokeDasharray: 210,
                strokeDashoffset: 210,
                animationFillMode: 'forwards',
              }}
            />
            {/* Box lid */}
            <path
              d="M15 32h70v8H15z"
              className="animate-[dash_1.6s_ease-in-out_0.2s_forwards]"
              style={{
                strokeDasharray: 180,
                strokeDashoffset: 180,
                animationFillMode: 'forwards',
              }}
            />
            {/* Vertical ribbon */}
            <line
              x1="50"
              y1="32"
              x2="50"
              y2="85"
              stroke="#E3A58F"
              strokeWidth="4"
              className="animate-[dash_1.2s_ease-in-out_0.4s_forwards]"
              style={{
                strokeDasharray: 60,
                strokeDashoffset: 60,
                animationFillMode: 'forwards',
              }}
            />
            {/* Ribbon bows */}
            <path
              d="M50 32C42 20 30 24 38 32c5 5 12 0 12 0s7 5 12 0c8-8-4-12-12 0z"
              stroke="#6B4F45"
              strokeWidth="3"
              className="animate-[dash_1.4s_ease-in-out_0.5s_forwards]"
              style={{
                strokeDasharray: 120,
                strokeDashoffset: 120,
                animationFillMode: 'forwards',
              }}
            />
          </svg>
        </div>

        {/* Brand Script Title */}
        <h2 className="font-script text-4xl md:text-5xl text-[#6B4F45] tracking-wide mb-1">
          Treasures
        </h2>
        <p className="font-serif uppercase tracking-[0.25em] text-xs text-[#C98270] font-semibold">
          By Mudaso · UK to Nigeria
        </p>

        {/* Subtle Loading Dots */}
        <div className="flex items-center gap-1.5 mt-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E3A58F] animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C98270] animate-pulse [animation-delay:200ms]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#6B4F45] animate-pulse [animation-delay:400ms]" />
        </div>
      </div>
    </aside>
  );
}
