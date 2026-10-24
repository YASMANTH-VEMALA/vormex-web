'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Check, GraduationCap, Loader2, MapPin, Search } from 'lucide-react';
import { searchColleges, type CollegeSuggestion } from '@/lib/api/colleges';

const queryCache = new Map<string, CollegeSuggestion[]>();
function CollegeLogo({ college }: { college: CollegeSuggestion }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-stone-100 bg-white dark:border-stone-700 dark:bg-stone-800">
      {college.logoUrl && !failed ? (
        // Institution site icons are optional; a neutral school icon replaces missing images.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={college.logoUrl}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-8 w-8 object-contain"
        />
      ) : (
        <GraduationCap className="h-6 w-6 text-stone-400" aria-hidden="true" />
      )}
    </span>
  );
}
function locationLabel(college: CollegeSuggestion): string {
  return [...new Set([college.city, college.state, college.country].filter(Boolean))].join(', ');
}
export default function CollegeSearch({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [result, setResult] = useState<{
    query: string;
    colleges: CollegeSuggestion[];
    error: boolean;
  } | null>(null);
  const [selected, setSelected] = useState<CollegeSuggestion | null>(null);
  const query = value.trim();
  const eligible = query.length >= 2 && !disabled && selected?.name !== value;
  const visible = open && eligible;
  const ready = result?.query === query;
  const colleges = ready ? result.colleges : [];
  const loading = visible && !ready;

  useEffect(() => {
    if (!visible) return;
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      const cached = queryCache.get(query.toLowerCase());
      if (cached) {
        setResult({ query, colleges: cached, error: false });
        return;
      }
      try {
        const response = await searchColleges(query, controller.signal);
        if (controller.signal.aborted) return;
        if (queryCache.size >= 50) queryCache.delete(queryCache.keys().next().value!);
        queryCache.set(query.toLowerCase(), response.colleges);
        setResult({ query, colleges: response.colleges, error: false });
      } catch {
        if (!controller.signal.aborted) setResult({ query, colleges: [], error: true });
      }
    }, 300);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, visible]);

  function choose(college?: CollegeSuggestion) {
    onChange(college?.name || query);
    setSelected(college || null);
    setOpen(false);
    setActive(-1);
  }
  return (
    <div
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <label htmlFor={id} className="mb-2.5 block text-sm font-medium">
        Where do you study?
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-[18px] h-5 w-5 text-stone-400"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          id={id}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={visible}
          aria-controls={visible ? id + '-results' : undefined}
          aria-activedescendant={visible && active >= 0 ? id + '-option-' + active : undefined}
          aria-describedby={id + '-help'}
          value={value}
          disabled={disabled}
          maxLength={120}
          autoComplete="off"
          placeholder="Search your college or university"
          onFocus={() => setOpen(true)}
          onChange={(event) => {
            onChange(event.target.value);
            setSelected(null);
            setOpen(true);
            setActive(-1);
          }}
          onKeyDown={(event) => {
            if (event.nativeEvent.isComposing) return;
            if (event.key === 'Escape') {
              setOpen(false);
              setActive(-1);
            }
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
              event.preventDefault();
              setOpen(true);
              const count = colleges.length + 1;
              const next =
                event.key === 'ArrowDown'
                  ? (active + 1) % count
                  : active <= 0
                    ? count - 1
                    : active - 1;
              setActive(next);
              document.getElementById(id + '-option-' + next)?.scrollIntoView({ block: 'nearest' });
            }
            if (event.key === 'Enter' && visible) {
              event.preventDefault();
              if (active >= 0) choose(colleges[active]);
            }
          }}
          className="min-h-14 w-full rounded-xl border border-stone-200 bg-white pl-12 pr-11 text-base outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:ring-4 focus:ring-stone-500/5 dark:border-stone-700 dark:bg-stone-900"
        />
        {loading ? (
          <Loader2
            className="pointer-events-none absolute right-4 top-[18px] h-5 w-5 animate-spin text-stone-400"
            aria-hidden="true"
          />
        ) : (
          selected && (
            <Check
              className="pointer-events-none absolute right-4 top-[18px] h-5 w-5 text-[#b65b3d]"
              aria-hidden="true"
            />
          )
        )}
        {visible && (
          <div className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xl shadow-stone-900/10 dark:border-stone-700 dark:bg-stone-900">
            <p role="status" aria-live="polite" className="px-4 py-3 text-xs text-stone-500">
              {loading
                ? 'Searching colleges…'
                : result?.error
                  ? 'Search is unavailable. You can enter your college below.'
                  : colleges.length
                    ? 'Select your institution'
                    : 'No matching institution found. You can still use your college name.'}
            </p>
            <ul
              id={id + '-results'}
              role="listbox"
              aria-label="College suggestions"
              className="max-h-72 overflow-y-auto overscroll-contain p-1.5"
            >
              {colleges.map((college, index) => (
                <li
                  role="option"
                  aria-selected={active === index}
                  id={id + '-option-' + index}
                  key={college.name + college.country}
                >
                  <button
                    type="button"
                    tabIndex={-1}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => choose(college)}
                    className={
                      'flex min-h-[76px] w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition hover:bg-stone-50 dark:hover:bg-stone-800 ' +
                      (active === index ? 'bg-stone-100 dark:bg-stone-800' : '')
                    }
                  >
                    <CollegeLogo key={college.logoUrl} college={college} />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium leading-5 text-stone-900 dark:text-stone-100">
                        {college.name}
                      </span>
                      {locationLabel(college) && (
                        <span className="mt-1 flex items-start gap-1 text-xs leading-5 text-stone-500">
                          <MapPin className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
                          {locationLabel(college)}
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              ))}
              <li
                role="option"
                aria-selected={active === colleges.length}
                id={id + '-option-' + colleges.length}
              >
                <button
                  type="button"
                  tabIndex={-1}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => choose()}
                  className={
                    'w-full rounded-lg border-t border-stone-100 px-3 py-3 text-left text-sm text-stone-600 hover:bg-stone-50 dark:border-stone-800 dark:text-stone-300 dark:hover:bg-stone-800 ' +
                    (active === colleges.length ? 'bg-stone-100 dark:bg-stone-800' : '')
                  }
                >
                  Use “{query}”
                  <span className="mt-1 block text-xs text-stone-400">
                    College not listed? Keep the name you entered.
                  </span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <p id={id + '-help'} className="mt-2 text-xs leading-5 text-stone-500">
        {selected
          ? locationLabel(selected) || 'Institution selected'
          : 'Search by full name or abbreviation. Can’t find it? Enter it yourself.'}
      </p>
    </div>
  );
}
