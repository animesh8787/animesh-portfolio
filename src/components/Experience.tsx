import { motion } from "framer-motion";
import { experience } from "../data/content";
import { EASE } from "../lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="section-eyebrow mb-3">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-2xl text-balance">
            Where the research turned into a shipped system.
          </h2>
        </motion.div>

        <div className="space-y-10">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: EASE }}
              className="rounded-3xl border border-hairline bg-surface2 p-8"
            >
              <div className="md:flex md:items-start md:justify-between gap-8">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.24em] text-signal-bright mb-3">
                    {item.company}
                  </p>
                  <h3 className="font-display text-2xl text-ink">{item.role}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {item.location} · {item.period}
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-4 text-sm leading-7 text-ink/85">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 text-signal-bright" aria-hidden="true">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
