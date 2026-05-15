import { Section, SectionHeader, FadeIn } from "./ui";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../constants";

const STAGGER_MS = 120;

export default function Projects() {
  return (
    <Section id="work">
      <SectionHeader
        label="Work"
        title="Side Projects"
        subtitle="Around the World"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((p, i) => (
          <FadeIn key={p.title} delay={i * STAGGER_MS}>
            <ProjectCard project={p} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
