import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/content";

const featured = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section id="work" className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-3"
        >
          Selected work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl mb-16 max-w-xl"
        >
          Two projects I'd want you to read closely.
        </motion.h2>

        <div className="space-y-20">
          {featured.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12"
            >
              <div>
                <span className="font-mono text-xs text-faint">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl md:text-3xl mt-2 mb-3">{project.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{project.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((s) => (
                    <span key={s} className="font-mono text-[11px] text-muted bg-surface2 border border-hairline rounded px-2 py-1">
                      {s}
                    </span>
                  ))}
                </div>
                {project.links.site && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-signal-bright text-sm link-underline"
                  >
                    Visit site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <div className="card p-6 md:p-7">
                <ul className="space-y-3.5">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                      <span className="text-signal mt-1 shrink-0">—</span>
                      <span>
                        {point.text}
                        {point.metric && <span className="metric-tag ml-1.5">{point.metric}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
