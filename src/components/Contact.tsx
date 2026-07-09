import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { contact } from "../data/content";
import { EASE } from "../lib/motion";

export default function Contact() {
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
            Looking for opportunities to build meaningful software, learn continuously, and
            grow alongside exceptional teams.
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

            <a
              href={`mailto:${contact.email}`}
              className="group p-6 transition-colors duration-300 ease-premium hover:bg-surface2 active:bg-surface2"
            >
              <p className="section-eyebrow mb-3">Email</p>
              <div className="flex items-center gap-2.5 text-base sm:text-lg min-w-0">
                <Mail className="w-4 h-4 text-signal-bright shrink-0" />
                <span className="text-ink truncate group-hover:text-signal-bright transition-colors duration-300">
                  Mail
                </span>
              </div>
            </a>

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
          <span>Built by Animesh Dhiman</span>
        </div>
      </div>
    </footer>
  );
}
