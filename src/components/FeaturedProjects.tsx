import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import Badge from "./ui/Badge";
import ProjectPoint from "./ui/ProjectPoint";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data/content";
import { EASE, fadeUp, staggerContainer } from "../lib/motion";

const featured = projects.filter((p) => p.featured);
const STACK_PREVIEW_COUNT = 4;

type Point = { text: string; metric: string | null; highlight: boolean };
type Project = (typeof featured)[number];

export default function FeaturedProjects() {
  return (
    <section id="work" className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
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
          className="font-display text-3xl md:text-4xl mb-12 max-w-xl text-balance"
        >
          Three shipped products I'd want you to read closely.
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
  const isFlagship = project.id === "jarvis";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12"
    >
      <div>
        <span className="font-mono text-xs text-muted">{String(idx + 1).padStart(2, "0")}</span>
        <h3 className={`font-display text-2xl md:text-3xl mt-2 mb-3 ${isFlagship ? "font-medium" : ""}`}>
          {project.name}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-5">{project.tagline}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {visibleStack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
          {hiddenStackCount > 0 && (
            <Badge
              as="button"
              variant="accent"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={detailsId}
            >
              +{hiddenStackCount} more
            </Badge>
          )}
        </div>
        {(project.links.site || project.links.repo) && (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
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
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-signal-bright text-sm link-underline"
              >
                View repo <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </div>

      <div
        className={`card p-6 md:p-7 transition-all duration-500 ease-premium ${
          isFlagship
            ? "border-signal/15 hover:border-signal/40 hover:shadow-glowLg"
            : "hover:border-signal/25 hover:shadow-glow"
        }`}
      >
        <ul className="space-y-3.5">
          {highlights.map((point, i) => (
            <ProjectPoint key={i} text={point.text} metric={point.metric} />
          ))}
        </ul>

        {hasMore && (
          <>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={detailsId}
                  initial={{ height: 0 }}
                  animate={{ height: "auto", transition: { duration: 0.45, ease: EASE } }}
                  exit={{ height: 0, transition: { duration: 0.3, ease: EASE } }}
                  className="overflow-hidden"
                >
                  <motion.div
                    variants={staggerContainer(0.06)}
                    initial="hidden"
                    animate="show"
                    className="pt-4 mt-4 border-t border-hairline"
                  >
                    {hiddenStackCount > 0 && (
                      <motion.div variants={fadeUp} className="flex flex-wrap gap-1.5 mb-4">
                        {project.stack.slice(STACK_PREVIEW_COUNT).map((s) => (
                          <Badge key={s}>{s}</Badge>
                        ))}
                      </motion.div>
                    )}
                    {rest.length > 0 && (
                      <motion.ul variants={fadeUp} className="space-y-3.5">
                        {rest.map((point, i) => (
                          <ProjectPoint key={i} text={point.text} metric={point.metric} />
                        ))}
                      </motion.ul>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {rest.length > 0 && (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={detailsId}
                className="mt-3 -ml-2 inline-flex items-center gap-1.5 rounded-md font-mono text-xs tracking-wide text-muted hover:text-signal-bright hover:bg-surface2/60 transition-colors duration-300 ease-premium px-2 py-2.5"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ease-premium ${open ? "rotate-180" : ""}`}
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
