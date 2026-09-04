import { useEffect, useMemo, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";
import { contact } from "../data/content";
import { EASE } from "../lib/motion";

type Contributions = Record<string, number>;
const HEAT_COLORS = ["#22262D", "#0B6E52", "#0F9970", "#12B886", "#3DDC9A"];

const GITHUB_USERNAME = contact.github.replace(/\/$/, "").split("/").pop() ?? "";

const dayKey = (date: Date) => date.toISOString().slice(0, 10);

async function getGitHubActivity(): Promise<{ contributions: Contributions; totalsByYear: Record<string, number> }> {
  const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=all`);
  if (!response.ok) throw new Error("GitHub activity could not be loaded");
  const payload = await response.json();
  const contributions: Contributions = {};
  for (const entry of payload.contributions ?? []) {
    contributions[entry.date] = Number(entry.count);
  }
  return { contributions, totalsByYear: payload.total ?? {} };
}

function heatLevel(value: number, maximum: number) {
  if (!value) return 0;
  const ratio = value / Math.max(maximum, 1);
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

export default function GitHubActivity() {
  const [contributions, setContributions] = useState<Contributions>({});
  const [totalsByYear, setTotalsByYear] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getUTCFullYear());
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let active = true;
    getGitHubActivity()
      .then(({ contributions: c, totalsByYear: t }) => {
        if (!active) return;
        setContributions(c);
        setTotalsByYear(t);
        setLoading(false);
      })
      .catch(() => {
        if (!active) return;
        setFailed(true);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const availableYears = useMemo(() => {
    const years = Object.keys(totalsByYear)
      .map(Number)
      .filter((y) => !Number.isNaN(y))
      .sort((a, b) => b - a);
    return years.length ? years : [new Date().getUTCFullYear()];
  }, [totalsByYear]);

  useEffect(() => {
    if (availableYears.length && !availableYears.includes(selectedYear)) {
      setSelectedYear(availableYears[0]);
    }
  }, [availableYears, selectedYear]);

  const yearCalendar = useMemo(() => {
    const firstDay = new Date(Date.UTC(selectedYear, 0, 1));
    const lastDay = new Date(Date.UTC(selectedYear, 11, 31));
    const calendar = [];

    for (let d = new Date(firstDay); d <= lastDay; d.setUTCDate(d.getUTCDate() + 1)) {
      const copy = new Date(d);
      const key = dayKey(copy);
      calendar.push({ date: copy, key, count: contributions[key] ?? 0 });
    }
    return calendar;
  }, [selectedYear, contributions]);

  const weeks = yearCalendar.length / 7;
  const total = totalsByYear[String(selectedYear)] ?? yearCalendar.reduce((sum, day) => sum + day.count, 0);
  const activeDays = yearCalendar.filter((day) => day.count > 0).length;
  const max = Math.max(...yearCalendar.map((day) => day.count), 1);
  const monthMarkers = yearCalendar.filter((day) => day.date.getUTCDate() === 1);
  const yearSummary = `${total} contributions across ${activeDays} active days in ${selectedYear}`;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollLeft = container.scrollWidth;
  }, [weeks, loading, selectedYear]);

  return (
    <section id="activity" className="border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
            <div>
              <p className="section-eyebrow mb-3">Shipping cadence</p>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">GitHub activity.</h2>
              <p className="text-muted mt-3 max-w-xl leading-relaxed">
                Live contribution calendar, pulled straight from{" "}
                <a href={contact.github} target="_blank" rel="noreferrer" className="text-signal-bright link-underline">
                  github.com/{GITHUB_USERNAME}
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="text-right">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted mb-1">Active days, {selectedYear}</p>
                <p className="font-display text-4xl md:text-5xl tracking-tight">{loading ? "—" : activeDays}</p>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted">Year</span>
                <select
                  value={selectedYear}
                  onChange={(event) => setSelectedYear(Number(event.target.value))}
                  className="rounded-full border border-hairline bg-surface px-3 py-2 text-sm text-ink"
                >
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="card p-4 md:p-6 shadow-card overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <p className="font-mono text-xs text-muted">{loading ? "Syncing GitHub…" : yearSummary}</p>
              <div className="flex items-center gap-2 font-mono text-[10px] text-faint" aria-label="Contribution intensity legend">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((level) => (
                  <span key={level} className="h-3 w-3 rounded-sm" style={{ backgroundColor: HEAT_COLORS[level] }} />
                ))}
                <span>More</span>
              </div>
            </div>

            <div ref={scrollRef} className="overflow-x-auto">
              <div className="min-w-[max(100%,calc(53*12px+42px))]">
                <div className="grid grid-cols-[42px_1fr] gap-2">
                  <div className="pt-5 grid grid-rows-7 gap-[3px] font-mono text-[9px] text-faint">
                    <span className="row-start-2">Mon</span>
                    <span className="row-start-4">Wed</span>
                    <span className="row-start-6">Fri</span>
                  </div>
                  <div>
                    <div
                      className="grid h-10 gap-[3px] font-mono text-[11px] text-faint"
                      style={{ gridTemplateColumns: `repeat(${weeks}, 12px)` }}
                    >
                      {monthMarkers.map((day) => (
                        <span key={day.key} style={{ gridColumn: Math.floor(yearCalendar.indexOf(day) / 7) + 1 }}>
                          {day.date.toLocaleString("en", { month: "short", timeZone: "UTC" })}
                        </span>
                      ))}
                    </div>
                    <div
                      className="gap-[3px] mt-2"
                      style={{
                        display: "grid",
                        gridAutoFlow: "column",
                        gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                        gridTemplateColumns: `repeat(${weeks}, 12px)`,
                      }}
                      role="grid"
                      aria-label="GitHub contribution heatmap"
                    >
                      {yearCalendar.map((day) => {
                        const level = heatLevel(day.count, max);
                        const label = `${day.date.toLocaleDateString("en-IN", {
                          dateStyle: "medium",
                          timeZone: "UTC",
                        })}: ${day.count} contribution${day.count === 1 ? "" : "s"}`;
                        return (
                          <span
                            key={day.key}
                            role="gridcell"
                            title={label}
                            aria-label={label}
                            className="w-3 h-3 rounded-[2px]"
                            style={{ backgroundColor: HEAT_COLORS[level] }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {loading && <LoaderCircle className="h-4 w-4 animate-spin text-signal mt-5" aria-label="Loading activity" />}
            {!loading && failed && (
              <p className="mt-5 text-xs text-muted">
                GitHub activity is temporarily unavailable right now — check back shortly.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
