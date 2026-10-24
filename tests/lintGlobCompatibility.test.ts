import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createRequire } from 'node:module';
import test from 'node:test';

const loadModule = createRequire(import.meta.url);
const { getRootDirs } = loadModule('@next/eslint-plugin-next/dist/utils/get-root-dirs') as {
  getRootDirs: (context: {
    cwd: string;
    settings: { next?: { rootDir?: string | string[] } };
  }) => string[];
};

test('Next lint root discovery supports directory globs with the scoped glob override', () => {
  const root = mkdtempSync(join(tmpdir(), 'vormex-lint-glob-'));
  try {
    mkdirSync(join(root, 'app-one'));
    mkdirSync(join(root, 'app-two'));
    const normalize = (value: string) => value.replaceAll('\\', '/');
    assert.deepEqual(getRootDirs({ cwd: root, settings: {} }), [root]);
    assert.deepEqual(
      getRootDirs({ cwd: root, settings: { next: { rootDir: `${normalize(root)}/app-*` } } })
        .map(normalize)
        .sort(),
      [normalize(join(root, 'app-one')), normalize(join(root, 'app-two'))]
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
