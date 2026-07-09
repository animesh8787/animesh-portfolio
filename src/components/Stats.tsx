import { motion } from "framer-motion";
import { stats } from "../data/content";
import { EASE } from "../lib/motion";

export default function Stats() {
  return (
    <section className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            className="group"
          >
            <div className="font-display text-3xl md:text-4xl text-ink tabular-nums mb-1.5 transition-colors duration-300 group-hover:text-signal-bright">
              {s.value}
            </div>
            <div className="text-muted text-sm leading-snug">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
