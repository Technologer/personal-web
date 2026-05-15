import {
  NavBar,
  Hero,
  Projects,
  Skills,
  Contact,
  Footer,
  EasterEgg,
} from "./components";
import { useKonami } from "./hooks/useKonami";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [easterEggVisible, closeEasterEgg] = useKonami();

  return (
    <div className="bg-zinc-950 min-h-screen text-white antialiased">
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      {easterEggVisible && <EasterEgg onClose={closeEasterEgg} />}
      <ScrollToTop />
    </div>
  );
}
