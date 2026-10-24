const fs = require('node:fs');
const path = require('node:path');

// Next uses fast-glob only for root directory lookup. The scoped tinyglobby
// replacement needs an adapter to retain absolute paths and directory suffixes.
const target = require.resolve('@next/eslint-plugin-next/dist/utils/get-root-dirs');
const adapter = path.resolve(__dirname, '../packages/next-eslint-glob/index.cjs');
const relative = path.relative(path.dirname(target), adapter).replaceAll('\\', '/');
const replacement = `require(${JSON.stringify(relative.startsWith('.') ? relative : `./${relative}`)})`;
const source = fs.readFileSync(target, 'utf8');
if (!source.includes(replacement)) {
  if (!source.includes('require("fast-glob")')) {
    throw new Error('Next lint directory lookup changed; review the glob adapter.');
  }
  fs.writeFileSync(target, source.replace('require("fast-glob")', replacement));
}
