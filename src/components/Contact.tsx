import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { contact } from "../data/content";

export default function Contact() {
  return (
    <footer id="contact">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-3"
        >
          Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-5xl max-w-xl mb-10"
        >
          Open to research roles, ML engineering, and anything safety-adjacent.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-14"
        >
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 bg-ink text-graphite font-medium text-sm rounded-lg px-5 py-3 hover:bg-signal-bright transition-colors"
          >
            <Mail className="w-4 h-4" /> {contact.email}
          </a>
          <a
            href={contact.github}
            className="inline-flex items-center gap-2 border border-hairline text-ink font-medium text-sm rounded-lg px-5 py-3 hover:border-signal/50 hover:text-signal-bright transition-colors"
          >
            <GithubIcon className="w-4 h-4" /> GitHub
          </a>
          <a
            href={contact.linkedin}
            className="inline-flex items-center gap-2 border border-hairline text-ink font-medium text-sm rounded-lg px-5 py-3 hover:border-signal/50 hover:text-signal-bright transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" /> LinkedIn
          </a>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-hairline text-faint text-xs font-mono">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> {contact.location}
          </span>
          <span>© {new Date().getFullYear()} Animesh Dhiman</span>
        </div>
      </div>
    </footer>
  );
}
