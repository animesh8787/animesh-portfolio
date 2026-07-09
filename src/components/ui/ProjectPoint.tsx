type ProjectPointProps = {
  text: string;
  metric?: string | null;
  size?: "md" | "sm";
};

/**
 * One bullet row inside a project card: a marker, the point text, and an
 * optional metric badge on its own line underneath (never crammed inline
 * after long text, which is what caused it to overflow on narrow screens).
 */
export default function ProjectPoint({ text, metric, size = "md" }: ProjectPointProps) {
  const rowClass =
    size === "md"
      ? "flex gap-3 text-sm leading-relaxed text-ink/85"
      : "flex gap-2 text-xs leading-relaxed text-ink/70";

  return (
    <li className={rowClass}>
      <span className="text-signal mt-1 shrink-0" aria-hidden="true">
        ›
      </span>
      <div>
        <p>{text}</p>
        {metric && <span className="metric-tag mt-1.5">{metric}</span>}
      </div>
    </li>
  );
}
