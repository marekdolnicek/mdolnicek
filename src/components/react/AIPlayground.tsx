import { useState } from 'react';

export type Idea = {
  id: string;
  title: string;
  description: string;
  impact: string;
};

interface Props {
  ideas: Idea[];
}

export default function AIPlayground({ ideas }: Props) {
  const [index, setIndex] = useState(0);
  const idea = ideas[index] ?? ideas[0];

  const next = () => setIndex((prev) => (prev + 1) % ideas.length);
  const prev = () => setIndex((prev) => (prev - 1 + ideas.length) % ideas.length);

  return (
    <div className="surface-card flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow text-accent">AI sandbox</p>
          <h3 className="text-2xl font-semibold text-white">{idea?.title}</h3>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-full border border-white/20 bg-white/5 p-2 text-white transition hover:border-accent"
            aria-label="Previous AI idea"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-full border border-white/20 bg-white/5 p-2 text-white transition hover:border-accent"
            aria-label="Next AI idea"
          >
            ›
          </button>
        </div>
      </div>
      <p className="text-base text-slate-100">{idea?.description}</p>
      <div className="rounded-2xl border border-accent/40 bg-accent/10 p-4 text-sm text-ink">
        <p className="font-semibold uppercase tracking-wide text-xs text-ink/60">Impact</p>
        <p className="text-lg text-ink">{idea?.impact}</p>
      </div>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>
          Idea {index + 1} / {ideas.length}
        </span>
        <div className="flex gap-1">
          {ideas.map((item, idx) => (
            <span
              key={item.id}
              className={`h-1.5 w-6 rounded-full ${idx === index ? 'bg-accent' : 'bg-white/15'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
