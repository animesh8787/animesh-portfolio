import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { projects } from "../data/content";
import { EASE } from "../lib/motion";

const featured = projects.filter((p) => p.featured);
const STACK_PREVIEW_COUNT = 4;

function PointRow({ point }: { point: { text: string; metric: string | null } }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-ink/85">
      <span className="text-signal mt-1 shrink-0" aria-hidden="true">
        ›
      </span>
      <div>
        <p>{point.text}</p>
        {point.metric && <span className="metric-tag mt-1.5">{point.metric}</span>}
      </div>
    </li>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="work" className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="section-eyebrow mb-3"
        >
          Selected work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="font-display text-3xl md:text-4xl mb-16 max-w-xl text-balance"
        >
          Two projects I'd want you to read closely.
        </motion.h2>

        <div className="space-y-20">
          {featured.map((project, idx) => {
            const highlights = project.points.filter((p) => p.highlight);
            const rest = project.points.filter((p) => !p.highlight);
            const visibleStack = project.stack.slice(0, STACK_PREVIEW_COUNT);
            const hiddenStackCount = project.stack.length - visibleStack.length;
            const hasMore = rest.length > 0 || hiddenStackCount > 0;

            return (
              <ProjectCard
                key={project.id}
                idx={idx}
                project={project}
                highlights={highlights}
                rest={rest}
                visibleStack={visibleStack}
                hiddenStackCount={hiddenStackCount}
                hasMore={hasMore}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

type Point = { text: string; metric: string | null; highlight: boolean };
type Project = (typeof featured)[number];

function ProjectCard({
  idx,
  project,
  highlights,
  rest,
  visibleStack,
  hiddenStackCount,
  hasMore,
}: {
  idx: number;
  project: Project;
  highlights: Point[];
  rest: Point[];
  visibleStack: string[];
  hiddenStackCount: number;
  hasMore: boolean;
}) {
  const [open, setOpen] = useState(false);
  const detailsId = `tech-details-${project.id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12"
    >
      <div>
        <span className="font-mono text-xs text-faint">{String(idx + 1).padStart(2, "0")}</span>
        <h3 className="font-display text-2xl md:text-3xl mt-2 mb-3">{project.name}</h3>
        <p className="text-muted text-sm leading-relaxed mb-5">{project.tagline}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {visibleStack.map((s) => (
            <span key={s} className="font-mono text-[11px] text-muted bg-surface2 border border-hairline rounded px-2 py-1">
              {s}
            </span>
          ))}
          {hiddenStackCount > 0 && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={detailsId}
              className="font-mono text-[11px] text-signal-bright bg-signal/10 border border-signal/25 rounded px-2 py-1 hover:bg-signal/15 transition-colors duration-300"
            >
              +{hiddenStackCount} more
            </button>
          )}
        </div>
        {project.links.site && (
          <a
            href={project.links.site}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-signal-bright text-sm link-underline"
          >
            Visit site <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}
      </div>

      <div className="card p-6 md:p-7 transition-all duration-500 ease-premium hover:border-signal/25 hover:shadow-glow">
        <ul className="space-y-3.5">
          {highlights.map((point, i) => (
            <PointRow key={i} point={point} />
          ))}
        </ul>

        {hasMore && (
          <>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={detailsId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="pt-3.5 mt-3.5 border-t border-hairline">
                    {hiddenStackCount > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.stack.slice(STACK_PREVIEW_COUNT).map((s) => (
                          <span
                            key={s}
                            className="font-mono text-[11px] text-muted bg-surface2 border border-hairline rounded px-2 py-1"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                    {rest.length > 0 && (
                      <ul className="space-y-3.5">
                        {rest.map((point, i) => (
                          <PointRow key={i} point={point} />
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {rest.length > 0 && (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={detailsId}
                className="mt-2 -ml-2 inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-muted hover:text-signal-bright transition-colors duration-300 px-2 py-2.5"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
                {open ? "Hide technical details" : "Technical details"}
              </button>
            )}
          </>
        )}
      </div>
    </motion.article>
  );
}
