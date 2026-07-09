import type { ButtonHTMLAttributes, ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent";
  as?: "span" | "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * A single tech-stack chip. Used anywhere a technology or "+N more" toggle
 * is shown, so sizing and contrast only need to be tuned in one place.
 */
export default function Badge({
  children,
  variant = "default",
  as = "span",
  className = "",
  ...rest
}: BadgeProps) {
  const styles =
    variant === "accent"
      ? "text-signal-bright bg-signal/10 border-signal/25 hover:bg-signal/15"
      : "text-muted bg-surface2 border-hairline";

  const base = `font-mono text-[11px] tracking-wide border rounded px-2 py-1 transition-colors duration-300 ${styles} ${className}`;

  if (as === "button") {
    return (
      <button type="button" className={base} {...rest}>
        {children}
      </button>
    );
  }

  return <span className={base}>{children}</span>;
}
