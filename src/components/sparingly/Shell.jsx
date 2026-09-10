// Shared chrome for the Sparingly pages, in the same visual language as the
// rest of the site: zinc-950 ground, white headings, zinc-400 body, hairline
// white/5 rules.

export const SUPPORT_EMAIL = "vnenco@gmail.com";
export const LAST_UPDATED = "10 September 2026";

export function PageShell({ eyebrow, title, standfirst, children }) {
  return (
    <div className="bg-zinc-950 min-h-screen text-white antialiased">
      <nav className="w-full border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="/"
            className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
          >
            ← vnenco
          </a>
          <a
            href="/sparingly/"
            className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
          >
            Sparingly
          </a>
        </div>
      </nav>

      <header className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <p className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
          {title}
        </h1>
        {standfirst && (
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">{standfirst}</p>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-28">{children}</main>

      <footer className="border-t border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <span className="text-zinc-600 text-sm">© 2026 vnenco</span>
          <a
            href="/sparingly/privacy-policy/"
            className="text-zinc-600 hover:text-zinc-300 text-xs transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export function Section({ id, label, title, children }) {
  return (
    <section
      id={id}
      className="py-12 border-t border-white/5 first:border-t-0 first:pt-0"
    >
      {label && (
        <p className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="max-w-2xl text-zinc-400 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export function EmailLink({ subject }) {
  return (
    <a
      href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`}
      className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-colors duration-200"
    >
      {SUPPORT_EMAIL}
    </a>
  );
}
