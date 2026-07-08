import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { interests, contact } from "../data/content";

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

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden border-b border-hairline">
      {/* ambient node graph background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-70">
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODE_POS[a].x}
              y1={NODE_POS[a].y}
              x2={NODE_POS[b].x}
              y2={NODE_POS[b].y}
              stroke="#5B8DEF"
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

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow mb-5">Computer Science · Thapar Institute · 2027</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">
            Animesh Dhiman
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-8">
            I build local-first AI systems and study how they fail. Co-author on a deep
            learning paper under review at Elsevier, and the sole engineer behind{" "}
            <a href="#projects" className="text-ink link-underline">
              a full-stack AI assistant
            </a>{" "}
            that keeps every byte of inference on-device.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {interests.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs tracking-wide text-signal-bright bg-signal/10 border border-signal/20 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 bg-ink text-graphite font-medium text-sm rounded-lg px-5 py-2.5 hover:bg-signal-bright transition-colors"
            >
              <Mail className="w-4 h-4" /> Get in touch
            </a>
            <a
              href={contact.github}
              className="inline-flex items-center gap-2 border border-hairline text-ink font-medium text-sm rounded-lg px-5 py-2.5 hover:border-signal/50 hover:text-signal-bright transition-colors"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={contact.linkedin}
              className="inline-flex items-center gap-2 border border-hairline text-ink font-medium text-sm rounded-lg px-5 py-2.5 hover:border-signal/50 hover:text-signal-bright transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-faint hover:text-muted transition-colors"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.a>
      </div>
    </header>
  );
}
