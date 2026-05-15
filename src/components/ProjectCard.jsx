export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-zinc-900 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs text-zinc-500 font-medium">
          {project.year}
        </span>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 hover:text-white transition-colors duration-200"
          aria-label={`Open ${project.title}`}
        >
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
        {project.title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-5">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-full border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
