import { useMemo, useState } from 'react';

export type TimelineEntry = {
  id: string;
  year: string;
  title: string;
  summary: string;
  stack: string[];
};

interface Props {
  entries: TimelineEntry[];
}

export default function ProjectTimeline({ entries }: Props) {
  const [activeId, setActiveId] = useState(entries[0]?.id ?? '');

  const activeEntry = useMemo(
    () => entries.find((entry) => entry.id === activeId) ?? entries[0],
    [activeId, entries]
  );

  return (
    <div className="surface-card flex flex-col gap-6 lg:flex-row">
      <ul className="flex flex-1 flex-col gap-3">
        {entries.map((entry) => (
          <li key={entry.id}>
            <button
              type="button"
              onClick={() => setActiveId(entry.id)}
              className={`w-full rounded-2xl border px-4 py-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${(entry.id === activeId && 'border-accent bg-white/10 shadow-card') || 'border-white/10 hover:border-accent/50'}`}
            >
              <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
                {entry.year}
              </span>
              <p className="mt-1 font-semibold text-lg text-white">{entry.title}</p>
              <p className="text-sm text-slate-300">{entry.summary}</p>
            </button>
          </li>
        ))}
      </ul>

      {activeEntry ? (
        <aside className="flex-1 rounded-3xl border border-accent/40 bg-gradient-to-b from-accent/10 to-transparent p-6 shadow-card">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">{activeEntry.year}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{activeEntry.title}</h3>
          <p className="mt-3 text-base text-slate-100">{activeEntry.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {activeEntry.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </aside>
      ) : null}
    </div>
  );
}
