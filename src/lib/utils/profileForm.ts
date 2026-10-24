/** Native selects return strings even when their option values are numeric. */
export function profileFieldValue(name: string, value: string): string | number | undefined {
  if (name === 'currentYear' || name === 'graduationYear') {
    return value === '' ? undefined : Number(value);
  }
  return value;
}

/** Hydrate unchanged fields while keeping edits made since the previous snapshot. */
export function mergeProfileDraft<T extends object>(draft: T, previous: T, incoming: T): T {
  const next = { ...incoming };
  for (const key of Object.keys(draft) as (keyof T)[]) {
    if (JSON.stringify(draft[key]) !== JSON.stringify(previous[key])) next[key] = draft[key];
  }
  return next;
}
