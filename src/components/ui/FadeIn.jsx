import { useInView } from "../../hooks/useInView";

export default function FadeIn({ children, delay = 0, className = "", inline = false }) {
  const [ref, inView] = useInView();
  const Tag = inline ? "span" : "div";
  return (
    <Tag
      ref={ref}
      className={inline ? `inline-block ${className}` : className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
