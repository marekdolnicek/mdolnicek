import { useState } from 'react';
import type { FormEvent } from 'react';
import { defaultLang, languages, useTranslations } from '../../i18n/ui';

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

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface OpportunityFormProps {
  lang?: keyof typeof languages;
}

export default function OpportunityForm({ lang = defaultLang }: OpportunityFormProps) {
  const [state, setState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<FormStatus>('idle');
  const t = useTranslations(lang);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Mock the async request so the form still works on static hosts.
    setStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="surface-card text-center">
        <p className="eyebrow text-accent">{t('form.successEyebrow')}</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{t('form.successTitle')}</h3>
        <p className="mt-3 text-slate-200">{t('form.successBody')}</p>
        <button
          type="button"
          className="mt-4 rounded-full bg-accent px-4 py-2 font-semibold text-ink"
          onClick={() => {
            setStatus('idle');
            setState(initialState);
          }}
        >
          {t('form.successCta')}
        </button>
      </div>
    );
  }

  return (
    <form className="surface-card space-y-4" onSubmit={onSubmit}>
      <div>
        <label htmlFor="company" className="text-sm font-medium text-slate-200">
          {t('form.companyLabel')}
        </label>
        <input
          id="company"
          name="company"
          value={state.company}
          onChange={(event) => setState((prev) => ({ ...prev, company: event.target.value }))}
          required
          className="mt-1 w-full rounded-2xl border border-white/15 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-accent"
          placeholder={t('form.companyPlaceholder')}
        />
      </div>
      <div>
        <label htmlFor="scope" className="text-sm font-medium text-slate-200">
          {t('form.scopeLabel')}
        </label>
        <textarea
          id="scope"
          name="scope"
          value={state.scope}
          onChange={(event) => setState((prev) => ({ ...prev, scope: event.target.value }))}
          required
          className="mt-1 min-h-[90px] w-full rounded-2xl border border-white/15 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-accent"
          placeholder={t('form.scopePlaceholder')}
        />
      </div>
      <div>
        <label htmlFor="timeline" className="text-sm font-medium text-slate-200">
          {t('form.timelineLabel')}
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
            {t('form.timelineDefault')}
          </option>
          <option value="rush">{t('form.timeline.rush')}</option>
          <option value="month">{t('form.timeline.month')}</option>
          <option value="quarter">{t('form.timeline.quarter')}</option>
        </select>
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-300">{t('form.error')}</p>
      )}
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-4 py-3 text-lg font-semibold text-ink transition hover:bg-accentMuted disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? t('form.submitting') : t('form.submit')}
      </button>
    </form>
  );
}
