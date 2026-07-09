import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "solid" | "outline";
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
};

/**
 * The single button style used across the site — hero CTAs, GitHub/LinkedIn
 * links, the contact section's secondary actions. One definition means the
 * hover lift, radius, and easing stay identical everywhere it appears.
 */
export default function PillButton({
  href,
  children,
  icon,
  variant = "outline",
  size = "md",
  external = false,
  className = "",
}: PillButtonProps) {
  const sizing = size === "sm" ? "text-sm px-4 py-2" : "text-sm px-5 py-2.5";
  const palette =
    variant === "solid"
      ? "bg-ink text-graphite hover:bg-signal-bright"
      : "border border-hairline text-ink hover:border-signal/50 hover:text-signal-bright";

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`inline-flex items-center gap-2 font-medium rounded-lg transition-colors duration-300 ease-premium ${sizing} ${palette} ${className}`}
    >
      {icon}
      {children}
    </motion.a>
  );
}
