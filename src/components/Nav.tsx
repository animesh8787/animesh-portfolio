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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-graphite/85 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-lg tracking-tight">
          AD
        </a>
        <div className="flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors link-underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
