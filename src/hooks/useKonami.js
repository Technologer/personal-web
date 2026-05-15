import { useState, useEffect, useRef } from "react";

const KONAMI_KEYS = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonami() {
  const [triggered, setTriggered] = useState(false);
  const progress = useRef(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === KONAMI_KEYS[progress.current]) {
        progress.current += 1;
        if (progress.current === KONAMI_KEYS.length) {
          setTriggered(true);
          progress.current = 0;
        }
      } else {
        progress.current = e.key === KONAMI_KEYS[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return [triggered, () => setTriggered(false)];
}
