import { useRef, useState } from "react";

/**
 * Gives an element a subtle "magnetic" pull toward the cursor on hover —
 * the kind of restrained cursor interaction you'd find on Linear or Vercel.
 * Pair the returned offset with a spring-animated transform; the element
 * itself doesn't move on its own, this just tracks where it should go.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.25) {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: relX * strength, y: relY * strength });
  };

  const onMouseLeave = () => setOffset({ x: 0, y: 0 });

  return { ref, offset, onMouseMove, onMouseLeave };
}
