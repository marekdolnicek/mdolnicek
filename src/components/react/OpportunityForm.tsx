import { useState } from 'react';
import type { FormEvent } from 'react';

interface FormState {
  company: string;
  scope: string;
  timeline: string;
}

const initialState: FormState = {
  company: '',
  scope: '',
  timeline: ''
};

export default function OpportunityForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="surface-card text-center">
        <p className="eyebrow text-accent">Message queued</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Thanks for reaching out.</h3>
        <p className="mt-3 text-slate-200">
          I’ll respond within one business day with availability and next steps.
        </p>
        <button
          type="button"
          className="mt-4 rounded-full bg-accent px-4 py-2 font-semibold text-ink"
          onClick={() => {
            setSubmitted(false);
            setState(initialState);
          }}
        >
          Send another brief
        </button>
      </div>
    );
  }

  return (
    <form className="surface-card space-y-4" onSubmit={onSubmit}>
      <div>
        <label htmlFor="company" className="text-sm font-medium text-slate-200">
          Company or project name
        </label>
        <input
          id="company"
          name="company"
          value={state.company}
          onChange={(event) => setState((prev) => ({ ...prev, company: event.target.value }))}
          required
          className="mt-1 w-full rounded-2xl border border-white/15 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-accent"
          placeholder="Acme Labs"
        />
      </div>
      <div>
        <label htmlFor="scope" className="text-sm font-medium text-slate-200">
          What should React handle?
        </label>
        <textarea
          id="scope"
          name="scope"
          value={state.scope}
          onChange={(event) => setState((prev) => ({ ...prev, scope: event.target.value }))}
          required
          className="mt-1 min-h-[90px] w-full rounded-2xl border border-white/15 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-accent"
          placeholder="Dashboard, AI-assisted form builder, design system cleanup..."
        />
      </div>
      <div>
        <label htmlFor="timeline" className="text-sm font-medium text-slate-200">
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={state.timeline}
          onChange={(event) => setState((prev) => ({ ...prev, timeline: event.target.value }))}
          required
          className="mt-1 w-full rounded-2xl border border-white/15 bg-slate-950/40 px-4 py-3 text-white focus:border-accent"
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="rush">1-2 weeks (rapid spike)</option>
          <option value="month">3-5 weeks</option>
          <option value="quarter">6+ weeks retainer</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-4 py-3 text-lg font-semibold text-ink transition hover:bg-accentMuted"
      >
        Share project brief
      </button>
    </form>
  );
}
