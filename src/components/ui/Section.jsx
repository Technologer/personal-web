export default function Section({ id, children }) {
  return (
    <section id={id} className="py-28 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">{children}</div>
    </section>
  );
}
