import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#activity", label: "Activity" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        scrolled ? "bg-graphite/75 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-[clamp(0.875rem,3.4vw,1.125rem)] tracking-tight text-ink transition-colors duration-300 ease-premium hover:text-signal-bright whitespace-nowrap py-2 pr-2 sm:pr-3 -ml-2 pl-2"
        >
          Animesh Dhiman
        </a>
        <div className="flex items-center gap-0.5 sm:gap-2">
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
      </div>
    </nav>
  );
}
