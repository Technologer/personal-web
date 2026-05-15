export default function SectionHeading({ title, subtitle }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      {subtitle && (
        <p className="text-zinc-700 text-xs tracking-[0.25em] uppercase mb-10">
          {subtitle}
        </p>
      )}
    </>
  );
}
