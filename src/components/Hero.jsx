import { useState, useEffect } from "react";

const ENTRY_DELAY_MS = 80;
const ENTRY_STEP_MS = 120;

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), ENTRY_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const base = "transition-all duration-700 ease-out";
  const show = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-6";

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6 ${base} ${show}`}
        >
          Hello, my name is Jan Vnencak,
          <br />
          <span className="text-zinc-500">but everybody calls me Vnenco.</span>
        </h1>
        <span
          className={`inline-block text-xs font-medium text-zinc-400 tracking-widest uppercase mt-12 mb-4 border border-white/10 rounded-full px-3 py-1 ${base} ${show}`}
          style={{ transitionDelay: `${ENTRY_STEP_MS * 1}ms` }}
        >
          Frontend Engineer
        </span>
        <p
          className={`text-zinc-400 text-lg max-w-xl leading-relaxed mb-10 ${base} ${show}`}
          style={{ transitionDelay: `${ENTRY_STEP_MS * 2}ms` }}
        >
          I'm a frontend engineer with 7+ years of experience building fast,
          accessible, and modern web applications. Specialising in React and
          Next.js — I care about the details that make a product feel right.
        </p>
        <div
          className={`flex flex-wrap gap-3 ${base} ${show}`}
          style={{ transitionDelay: `${ENTRY_STEP_MS * 3}ms` }}
        >
          <a
            href="#work"
            className="bg-white text-zinc-900 font-medium text-sm px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent text-white font-medium text-sm px-5 py-2.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
