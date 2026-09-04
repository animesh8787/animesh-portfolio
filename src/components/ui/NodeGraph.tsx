import type { CSSProperties } from "react";

// Fixed positions for the node graph — hand-placed, not random, so it reads
// as a deliberate constellation rather than scattered clutter.
const NODE_POS = [
  { x: 50, y: 12 },
  { x: 14, y: 34 },
  { x: 86, y: 32 },
  { x: 8, y: 68 },
  { x: 92, y: 66 },
  { x: 50, y: 88 },
];

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [0, 5], [1, 2],
];

// A faint schematic grid, fixed in place, sitting behind the floating nodes.
// It never moves and never animates — a static reference plane that reads
// as "engineering blueprint" without asking for any attention of its own.
const GRID_STYLE: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, rgba(18,184,134,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,184,134,0.06) 1px, transparent 1px)",
  backgroundSize: "44px 44px",
  maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)",
  WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)",
};

type NodeGraphProps = {
  /** Cursor-follow offset in pixels, applied only to the node/edge layer. */
  parallax: { x: number; y: number };
};

/**
 * The hero's ambient background: a static blueprint grid plane with a
 * hand-placed node constellation drifting gently above it. Two layers on
 * purpose — the grid gives a fixed reference frame, the nodes get the
 * parallax and drift, so there's a sense of depth rather than one flat
 * background moving as a single block.
 */
export default function NodeGraph({ parallax }: NodeGraphProps) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0" style={GRID_STYLE} />

      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-70">
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODE_POS[a].x}
              y1={NODE_POS[a].y}
              x2={NODE_POS[b].x}
              y2={NODE_POS[b].y}
              stroke="#12B886"
              strokeWidth="0.08"
              strokeOpacity="0.25"
            />
          ))}
        </svg>
        {NODE_POS.map((pos, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-signal/40 animate-drift"
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, animationDelay: `${i * 0.6}s` }}
          />
        ))}
      </div>
    </div>
  );
}
