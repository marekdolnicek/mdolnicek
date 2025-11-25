import { useState } from 'react';

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath = '/' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Get the language prefix from the current path
  const langMatch = currentPath.match(/^\/(cs|de|es|it|fr)\//);
  const langPrefix = langMatch ? `/${langMatch[1]}` : '';

  const navItems = [
    { label: 'Projects', href: `${langPrefix}/projects` },
    { label: 'Timeline', href: `${langPrefix}/#timeline` },
    { label: 'Vocabulary', href: `${langPrefix}/vocabulary` }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-6 sm:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-semibold text-slate-300 transition hover:text-accent"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 sm:hidden"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`h-0.5 w-6 bg-slate-300 transition-all ${
            isOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-slate-300 transition-all ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-slate-300 transition-all ${
            isOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 sm:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex min-h-screen flex-col items-center justify-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-semibold text-slate-200 transition hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
