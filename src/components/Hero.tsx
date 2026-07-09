import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import PillButton from "./ui/PillButton";
import { interests, contact } from "../data/content";
import { EASE, staggerContainer, fadeUp } from "../lib/motion";

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
  const headerRef = useRef<HTMLElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // A very small cursor-follow drift on the constellation — the kind of
  // ambient depth cue Apple/Linear use, capped tight enough to never feel
  // like a gimmick.
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = headerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: relX * 14, y: relY * 14 });
  };

  return (
    <header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setParallax({ x: 0, y: 0 })}
      className="relative min-h-dvh flex items-center overflow-hidden border-b border-hairline"
    >
      {/* ambient node graph background */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
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
        <motion.div variants={staggerContainer(0.12, 0.05)} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="section-eyebrow mb-5">
            Computer Science · Thapar Institute · 2027
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2.75rem,6.5vw,4.75rem)] leading-[1.05] tracking-tight text-balance mb-6"
          >
            Animesh Dhiman
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-8">
            I build local-first AI systems and study how they fail. Co-author on a deep
            learning paper under review at Elsevier, and the sole engineer behind{" "}
            <a href="#work" className="text-ink link-underline">
              a full-stack AI assistant
            </a>{" "}
            that keeps every byte of inference on-device.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
            {interests.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs tracking-wide text-signal-bright bg-signal/10 border border-signal/20 rounded-full px-3 py-1 transition-colors duration-300 hover:bg-signal/15 hover:border-signal/35"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <PillButton href="#contact" variant="solid" icon={<Mail className="w-4 h-4" />}>
              Get in touch
            </PillButton>
            <PillButton href={contact.github} icon={<GithubIcon className="w-4 h-4" />} external>
              GitHub
            </PillButton>
            <PillButton href={contact.linkedin} icon={<LinkedinIcon className="w-4 h-4" />} external>
              LinkedIn
            </PillButton>
          </motion.div>
        </motion.div>

        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: EASE }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-faint hover:text-muted transition-colors duration-300"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-floatSoft" />
        </motion.a>
      </div>
    </header>
  );
}
