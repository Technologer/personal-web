import { Section, SectionHeader, FadeIn } from "./ui";
import { SKILLS } from "../constants";

const STAGGER_MS = 60;

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        label="Skills"
        title="Tools & Technologies"
        subtitle="Harder. Better. Faster. Stronger."
      />
      <div className="flex flex-wrap gap-x-3 gap-y-6">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill} delay={i * STAGGER_MS} inline>
            <span className="text-sm text-zinc-300 bg-zinc-900 border border-white/8 px-4 py-2 rounded-full hover:border-white/20 hover:text-white transition-all duration-200 cursor-default">
              {skill}
            </span>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
