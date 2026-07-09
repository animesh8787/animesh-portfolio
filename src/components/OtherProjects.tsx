import { motion } from "framer-motion";
import { projects } from "../data/content";
import { EASE } from "../lib/motion";

const secondary = projects.filter((p) => !p.featured);
const STACK_PREVIEW_COUNT = 4;

export default function OtherProjects() {
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
          More builds
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="font-display text-3xl md:text-4xl mb-12 max-w-xl text-balance"
        >
          Shorter projects, still shipped end-to-end.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {secondary.map((project, i) => {
            const highlights = project.points.filter((p) => p.highlight).slice(0, 2);
            const visibleStack = project.stack.slice(0, STACK_PREVIEW_COUNT);
            const hiddenStackCount = project.stack.length - visibleStack.length;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="card p-5 flex flex-col transition-all duration-500 ease-premium hover:border-signal/30 hover:-translate-y-1 hover:shadow-card"
              >
                <h3 className="font-display text-xl mb-2">{project.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.tagline}</p>
                <ul className="space-y-2.5 mb-4">
                  {highlights.map((point, j) => (
                    <li key={j} className="text-xs text-ink/70 leading-relaxed flex gap-2">
                      <span className="text-signal shrink-0" aria-hidden="true">
                        ›
                      </span>
                      <div>
                        <p>{point.text}</p>
                        {point.metric && <span className="metric-tag mt-1">{point.metric}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-hairline">
                  {visibleStack.map((s) => (
                    <span key={s} className="font-mono text-[10px] text-faint">
                      {s}
                    </span>
                  ))}
                  {hiddenStackCount > 0 && (
                    <span className="font-mono text-[10px] text-faint/70">+{hiddenStackCount} more</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
