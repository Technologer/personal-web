import { Section, SectionHeader, FadeIn } from "./ui";
import { CONTACTS } from "../constants";

const STAGGER_MS = 100;

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        label="Contact"
        title="Let's work together"
        subtitle="Something About Us"
      >
        <p className="text-zinc-400 max-w-md mb-4 leading-relaxed">
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>
      </SectionHeader>

      <div className="flex flex-col gap-2 mt-8">
        {CONTACTS.map((contact, i) => (
          <FadeIn key={contact.label} delay={i * STAGGER_MS}>
            <a
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-200 w-fit"
            >
              <span className="text-zinc-500 group-hover:text-white transition-colors duration-200">
                {contact.icon}
              </span>
              <span className="text-sm">{contact.label}</span>
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
