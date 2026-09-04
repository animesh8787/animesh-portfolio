import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import Badge from "./ui/Badge";
import ProjectPoint from "./ui/ProjectPoint";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data/content";
import { EASE, fadeUp, staggerContainer } from "../lib/motion";

const secondary = projects.filter((p) => !p.featured);
const STACK_PREVIEW_COUNT = 4;

type Point = { text: string; metric: string | null; highlight: boolean };
type Project = (typeof secondary)[number];

export default function OtherProjects() {
  return (
    <section className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {secondary.map((project, i) => {
            const highlights = project.points.filter((p) => p.highlight);
            const rest = project.points.filter((p) => !p.highlight);
            const visibleStack = project.stack.slice(0, STACK_PREVIEW_COUNT);
            const hiddenStackCount = project.stack.length - visibleStack.length;
            const hasMore = rest.length > 0 || hiddenStackCount > 0;

            return (
              <OtherProjectCard
                key={project.id}
                idx={i}
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

function OtherProjectCard({
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
  const detailsId = `other-tech-details-${project.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
      className="card p-5 flex flex-col transition-all duration-500 ease-premium hover:border-signal/30 hover:-translate-y-1 hover:shadow-card"
    >
      <h3 className="font-display text-xl mb-2">{project.name}</h3>
      <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.tagline}</p>
      {(project.links.site || project.links.repo) && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-4">
          {project.links.site && (
            <a
              href={project.links.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-signal-bright text-xs link-underline"
            >
              Visit site <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-signal-bright text-xs link-underline"
            >
              View repo <GithubIcon className="w-3 h-3" />
            </a>
          )}
        </div>
      )}
      <ul className="space-y-2.5 mb-4">
        {highlights.map((point, j) => (
          <ProjectPoint key={j} text={point.text} metric={point.metric} size="sm" />
        ))}
      </ul>

      {hasMore && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={detailsId}
              initial={{ height: 0 }}
              animate={{ height: "auto", transition: { duration: 0.4, ease: EASE } }}
              exit={{ height: 0, transition: { duration: 0.28, ease: EASE } }}
              className="overflow-hidden"
            >
              <motion.div variants={staggerContainer(0.06)} initial="hidden" animate="show" className="pb-4">
                {rest.length > 0 && (
                  <motion.ul variants={fadeUp} className="space-y-2.5 mb-3">
                    {rest.map((point, j) => (
                      <ProjectPoint key={j} text={point.text} metric={point.metric} size="sm" />
                    ))}
                  </motion.ul>
                )}
                {hiddenStackCount > 0 && (
                  <motion.div variants={fadeUp} className="flex flex-wrap gap-1.5">
                    {project.stack.slice(STACK_PREVIEW_COUNT).map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-3 border-t border-hairline">
        {visibleStack.map((s) => (
          <span key={s} className="font-mono text-[10px] text-muted">
            {s}
          </span>
        ))}
        {hasMore && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={detailsId}
            className="ml-auto inline-flex items-center gap-1 rounded-md font-mono text-[10px] tracking-wide text-muted hover:text-signal-bright hover:bg-surface2/60 transition-colors duration-300 ease-premium px-1.5 py-1"
          >
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-300 ease-premium ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
            {open ? "Hide details" : "Details"}
          </button>
        )}
      </div>
    </motion.div>
  );
}
