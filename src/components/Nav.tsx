import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        scrolled ? "bg-graphite/75 backdrop-blur-lg border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-lg tracking-tight text-ink transition-colors duration-300 hover:text-signal-bright py-2 pr-3 -ml-2 pl-2"
        >
          AD
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-block text-sm text-muted hover:text-ink transition-colors duration-300 px-2.5 py-3 sm:px-3"
            >
              <span className="link-underline">{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
