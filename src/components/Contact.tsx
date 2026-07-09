import { motion } from "framer-motion";
import { ArrowUp, Check, Copy, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import PillButton from "./ui/PillButton";
import { useMagnetic } from "../hooks/useMagnetic";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { contact } from "../data/content";
import { EASE } from "../lib/motion";

export default function Contact() {
  const magnetic = useMagnetic<HTMLAnchorElement>(0.3);
  const { copied, copy } = useCopyToClipboard();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* ambient glow — the one warm accent reserved for the site's closing moment */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[30%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[110px] animate-pulseGlow"
      />

      {/* oversized ghost "@" — the signature glyph of everything this section is about */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 md:top-10 flex justify-center overflow-hidden select-none"
      >
        <span className="font-display text-[clamp(9rem,32vw,22rem)] leading-none text-ink/[0.035]">
          @
        </span>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="section-eyebrow text-center mb-4"
        >
          Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="font-display text-3xl md:text-5xl text-center max-w-2xl mx-auto mb-14 text-balance"
        >
          Open to research roles, ML engineering, and anything safety-adjacent.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="flex flex-col items-center mb-16"
        >
          <motion.a
            ref={magnetic.ref}
            href={`mailto:${contact.email}`}
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
            animate={{ x: magnetic.offset.x, y: magnetic.offset.y }}
            transition={{ type: "spring", stiffness: 150, damping: 14, mass: 0.4 }}
            className="group relative inline-block min-w-0 max-w-full break-words font-display text-[clamp(1.85rem,6.5vw,4.25rem)] leading-[1.15] tracking-tight text-ink text-center"
          >
            workreachoutanimesh<wbr />@gmail.com
            <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-signal-bright transition-transform duration-500 ease-premium group-hover:scale-x-100" />
          </motion.a>

          <button
            type="button"
            onClick={() => copy(contact.email)}
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-muted hover:text-signal-bright transition-colors duration-300"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-sage-bright" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copied ? "Copied to clipboard" : "Copy email address"}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-3 mb-20"
        >
          <PillButton href={contact.github} size="sm" icon={<GithubIcon className="w-4 h-4" />} external>
            GitHub
          </PillButton>
          <PillButton href={contact.linkedin} size="sm" icon={<LinkedinIcon className="w-4 h-4" />} external>
            LinkedIn
          </PillButton>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-hairline text-faint text-xs font-mono">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> {contact.location}
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-muted transition-colors duration-300"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <span>© {new Date().getFullYear()} Animesh Dhiman</span>
        </div>
      </div>
    </footer>
  );
}
