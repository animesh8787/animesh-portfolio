import { motion } from "framer-motion";
import { stats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";
import { EASE } from "../lib/motion";

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  const { display, start } = useCountUp(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={start}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="group"
    >
      <div className="font-display text-4xl md:text-5xl text-ink tabular-nums mb-2 transition-colors duration-300 group-hover:text-signal-bright">
        {display}
      </div>
      <div className="text-muted text-xs leading-snug tracking-wide">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <StatItem key={s.label} value={s.value} label={s.label} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
