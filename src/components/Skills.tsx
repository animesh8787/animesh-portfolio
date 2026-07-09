import { motion } from "framer-motion";
import { skills } from "../data/content";
import { EASE } from "../lib/motion";

export default function Skills() {
  return (
    <section className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="section-eyebrow mb-3"
        >
          Toolbox
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="font-display text-3xl md:text-4xl mb-12 max-w-xl text-balance"
        >
          What I actually reach for.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
            >
              <h3 className="flex items-center gap-2 font-mono text-xs tracking-wide uppercase text-signal-bright mb-3.5">
                <span className="w-2.5 h-px bg-signal-bright/50" aria-hidden="true" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-ink/80 bg-surface2 border border-hairline rounded-md px-2.5 py-1 transition-colors duration-300 hover:text-ink hover:border-signal/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
