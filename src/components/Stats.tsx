import { motion } from "framer-motion";
import { stats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";
import { EASE } from "../lib/motion";

function StatItem({
  value,
  label,
  href,
  delay,
}: {
  value: string;
  label: string;
  href?: string;
  delay: number;
}) {
  const { display, start } = useCountUp(value);
  const lines = label.split("\n");

  const content = (
    <>
      <div className="font-display text-4xl md:text-5xl text-ink tabular-nums mb-2 transition-colors duration-300 ease-premium group-hover:text-signal-bright">
        {display}
      </div>
      <div className="text-muted text-xs leading-snug tracking-wide space-y-0.5">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={start}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="group"
    >
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="block">
          {content}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-nowrap md:justify-between md:gap-0">
        <h2 className="sr-only">Highlights</h2>
        {stats.map((s, i) => (
          <StatItem key={s.label} value={s.value} label={s.label} href={s.href} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
