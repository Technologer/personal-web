import { useEffect } from "react";

function DaftPunkHelmetSVG() {
  return (
    <svg
      width="160"
      height="200"
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="dome" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4d4d4" />
          <stop offset="40%" stopColor="#f2f2f2" />
          <stop offset="100%" stopColor="#7a7a7a" />
        </linearGradient>
        <linearGradient id="visor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0c800" />
          <stop offset="60%" stopColor="#c8a000" />
          <stop offset="100%" stopColor="#7a5e00" />
        </linearGradient>
        <linearGradient id="chin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#555" />
          <stop offset="100%" stopColor="#222" />
        </linearGradient>
      </defs>
      <path
        d="M80 8 C34 8 10 50 10 92 L10 148 Q10 168 32 174 L128 174 Q150 168 150 148 L150 92 C150 50 126 8 80 8 Z"
        fill="url(#dome)"
      />
      <ellipse
        cx="58"
        cy="52"
        rx="22"
        ry="30"
        fill="rgba(255,255,255,0.18)"
        transform="rotate(-20,58,52)"
      />
      <rect
        x="16"
        y="108"
        width="128"
        height="50"
        rx="6"
        fill="url(#visor)"
        className="visor-glow"
      />
      <rect
        x="16"
        y="108"
        width="128"
        height="18"
        rx="6"
        fill="rgba(255,255,255,0.22)"
      />
      <rect
        x="16"
        y="146"
        width="128"
        height="12"
        rx="6"
        fill="rgba(0,0,0,0.25)"
      />
      <path
        d="M32 172 Q80 194 128 172 L128 184 Q80 208 32 184 Z"
        fill="url(#chin)"
      />
      <rect x="2" y="96" width="11" height="52" rx="5" fill="#888" />
      <rect x="147" y="96" width="11" height="52" rx="5" fill="#888" />
      <rect x="4" y="104" width="5" height="36" rx="2" fill="#aaa" />
      <rect x="151" y="104" width="5" height="36" rx="2" fill="#aaa" />
    </svg>
  );
}

export default function EasterEgg({ onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      style={{ animation: "helmet-in 0.25s ease forwards" }}
      onClick={onClose}
    >
      <div
        className="flex flex-col items-center helmet-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <DaftPunkHelmetSVG />
        <p className="text-white text-2xl font-bold tracking-[0.2em] uppercase mt-6">
          One More Time
        </p>
        <p className="text-zinc-500 text-xs tracking-widest mt-2 uppercase">
          ↑ ↑ ↓ ↓ ← → ← → B A
        </p>
        <button
          onClick={onClose}
          className="mt-6 text-zinc-600 hover:text-zinc-400 text-xs tracking-widest uppercase transition-colors duration-200"
        >
          Press Esc or click to close
        </button>
      </div>
    </div>
  );
}
