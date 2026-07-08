import { motion } from "framer-motion";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-3"
        >
          Toolbox
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl mb-12 max-w-xl"
        >
          What I actually reach for.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h3 className="font-mono text-xs tracking-wide uppercase text-signal-bright mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-ink/80 bg-surface2 border border-hairline rounded-md px-2.5 py-1"
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
