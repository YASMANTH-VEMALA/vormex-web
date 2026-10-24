import { existsSync, readFileSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';

/** Inspect the current colocated implementation after a feature is split.
 * Follow real relative imports/re-exports, never copied source snapshots.
 */
export function readFeatureSource(relativePath: string): string {
  const entry = resolve(process.cwd(), relativePath);
  const boundary = dirname(entry);
  const seen = new Set<string>();
  function read(file: string): string {
    if (seen.has(file)) return '';
    seen.add(file);
    const source = readFileSync(file, 'utf8');
    const dependencies = [...source.matchAll(/from\s+['"](\.[^'"]+)['"]/g)]
      .map((match) => resolve(dirname(file), match[1]))
      .filter((target) => target.startsWith(boundary));
    return [
      source,
      ...dependencies.map((target) => {
        const candidates = extname(target)
          ? [target, `${target}.ts`, `${target}.tsx`]
          : [`${target}.ts`, `${target}.tsx`, join(target, 'index.ts'), join(target, 'index.tsx')];
        const found = candidates.find(existsSync);
        return found ? read(found) : '';
      }),
    ].join('\n');
  }
  return read(entry);
}
