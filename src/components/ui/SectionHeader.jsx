import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";

export default function SectionHeader({ label, title, subtitle, children }) {
  return (
    <FadeIn>
      <SectionLabel>{label}</SectionLabel>
      <SectionHeading title={title} subtitle={subtitle} />
      {children}
    </FadeIn>
  );
}
