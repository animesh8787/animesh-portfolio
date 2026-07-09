import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import PillButton from "./ui/PillButton";
import NodeGraph from "./ui/NodeGraph";
import { interests, contact } from "../data/content";
import { staggerContainer, fadeUp } from "../lib/motion";

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
      <NodeGraph parallax={parallax} />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-32 w-full">
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
            <PillButton href={`mailto:${contact.email}`} icon={<Mail className="w-4 h-4" />}>
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
