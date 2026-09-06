import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "../lib/motion";

const LINKS = [
  { href: "#activity", label: "Activity" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        tickingRef.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The mobile dropdown covers the section it would jump to, so close it on
  // any anchor click rather than leaving it open over the new scroll position.
  const closeMenu = () => setOpen(false);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        scrolled || open ? "bg-graphite/95 md:bg-graphite/75 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={closeMenu}
          className="font-display text-[clamp(0.875rem,3.4vw,1.125rem)] tracking-tight text-ink transition-colors duration-300 ease-premium hover:text-signal-bright whitespace-nowrap py-2 pr-2 sm:pr-3 -ml-2 pl-2"
        >
          Animesh Dhiman
        </a>

        <div className="hidden md:flex items-center gap-0.5 sm:gap-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-block text-sm text-muted hover:text-ink transition-colors duration-300 ease-premium px-1.5 sm:px-3 py-3"
            >
              <span className="link-underline">{l.label}</span>
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 -mr-1.5 rounded-md text-ink hover:text-signal-bright transition-colors duration-300 ease-premium"
        >
          {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.3, ease: EASE } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.22, ease: EASE } }}
            className="md:hidden overflow-hidden bg-graphite/95 backdrop-blur-md border-b border-hairline"
          >
            <div className="max-w-5xl mx-auto px-6 py-2 flex flex-col">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="text-base text-muted hover:text-ink transition-colors duration-300 ease-premium py-3 border-b border-hairline last:border-b-0"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
