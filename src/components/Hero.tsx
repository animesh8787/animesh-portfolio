import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import PillButton from "./ui/PillButton";
import NodeGraph from "./ui/NodeGraph";
import { interests, contact } from "../data/content";
import { staggerContainer, fadeUp } from "../lib/motion";

export default function Hero() {
  const headerRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
  }, []);

  // A very small cursor-follow drift on the constellation — the kind of
  // ambient depth cue Apple/Linear use, capped tight enough to never feel
  // like a gimmick. Throttled to one update per animation frame so rapid
  // mousemove events don't trigger more re-renders than the screen can show.
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = headerRef.current;
    if (!el || rafRef.current !== null) return;
    const { clientX, clientY } = e;
    rafRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const relX = (clientX - rect.left) / rect.width - 0.5;
      const relY = (clientY - rect.top) / rect.height - 0.5;
      setParallax({ x: relX * 14, y: relY * 14 });
      rafRef.current = null;
    });
  };

  return (
    <header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
        setParallax({ x: 0, y: 0 });
      }}
      className="relative min-h-dvh flex items-center overflow-hidden border-b border-hairline"
    >
      <NodeGraph parallax={parallax} />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-28 w-full">
        <motion.div variants={staggerContainer(0.12, 0.05)} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="section-eyebrow mb-5">
            Computer Science · Thapar Institute
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2.75rem,6.5vw,4.75rem)] leading-[1.05] tracking-tight text-balance mb-6"
          >
            Animesh Dhiman
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-8">
            I build privacy-first, on-device AI systems and study how they fail under
            real-world conditions. My work spans production software engineering, applied
            ML research, and the systems design that ties them together — including
            co-authoring a deep learning paper under review at Elsevier, and building{" "}
            <a href="#work" className="text-ink link-underline">
              a full-stack AI assistant
            </a>{" "}
            that keeps every byte of inference on-device.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
            {interests.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs tracking-wide text-signal-bright bg-signal/10 border border-signal/20 rounded-full px-3 py-1 transition-colors duration-300 ease-premium hover:bg-signal/15 hover:border-signal/35"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <PillButton href={`mailto:${contact.email}`} icon={<Mail className="w-4 h-4" aria-hidden="true" />}>
              Mail
            </PillButton>
            <PillButton href={contact.github} icon={<GithubIcon className="w-4 h-4" />} external>
              GitHub
            </PillButton>
            <PillButton href={contact.linkedin} icon={<LinkedinIcon className="w-4 h-4" />} external>
              LinkedIn
            </PillButton>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
