import { motion } from "framer-motion";
import { ArrowUp, Check, Copy, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { contact } from "../data/content";
import { EASE } from "../lib/motion";

export default function Contact() {
  const { copied, copy } = useCopyToClipboard();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8"
        >
          <p className="section-eyebrow flex items-center gap-2">
            <span className="text-signal">◆</span> Connect
          </p>
          <p className="text-sm text-muted max-w-sm sm:text-right leading-relaxed">
            Open to research roles, ML engineering, and anything safety-adjacent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className="card overflow-hidden"
        >
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-hairline">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group p-6 transition-colors duration-300 ease-premium hover:bg-surface2 active:bg-surface2"
            >
              <p className="section-eyebrow mb-3">LinkedIn</p>
              <div className="flex items-center gap-2.5 text-base sm:text-lg min-w-0">
                <LinkedinIcon className="w-4 h-4 text-signal-bright shrink-0" />
                <span className="text-ink truncate group-hover:text-signal-bright transition-colors duration-300">
                  Animesh Dhiman
                </span>
              </div>
            </a>

            <div className="p-6">
              <p className="section-eyebrow mb-3">Email</p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-base sm:text-lg min-w-0 flex-1 text-ink hover:text-signal-bright active:text-signal-bright transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-signal-bright shrink-0" />
                  <span className="truncate min-w-0 flex-1" title={contact.email}>
                    {contact.email}
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => copy(contact.email)}
                  aria-label="Copy email address"
                  className="shrink-0 text-muted hover:text-signal-bright active:scale-90 transition-all duration-300 p-2 -m-2"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-sage-bright" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="group p-6 transition-colors duration-300 ease-premium hover:bg-surface2 active:bg-surface2"
            >
              <p className="section-eyebrow mb-3">GitHub</p>
              <div className="flex items-center gap-2.5 text-base sm:text-lg min-w-0">
                <GithubIcon className="w-4 h-4 text-signal-bright shrink-0" />
                <span className="text-ink truncate group-hover:text-signal-bright transition-colors duration-300">
                  animesh8787
                </span>
              </div>
            </a>
          </div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 mt-10 border-t border-hairline text-muted text-xs font-mono">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> {contact.location}
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-ink active:text-ink transition-colors duration-300 py-2 px-1 -mx-1"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <span>© {new Date().getFullYear()} Animesh Dhiman</span>
        </div>
      </div>
    </footer>
  );
}
