const path = require('node:path');
const { globSync: tinyGlobSync } = require('tinyglobby');

/**
 * Compatibility surface used by Next's lint root-directory lookup. Preserve
 * fast-glob's absolute-pattern and directory-suffix behavior explicitly;
 * tinyglobby's defaults differ in these two cases.
 */
function globSync(pattern, options = {}) {
  if (typeof pattern !== 'string') {
    throw new TypeError('Next lint root discovery expects one glob pattern');
  }
  return tinyGlobSync(pattern, {
    ...options,
    absolute: options.absolute ?? path.isAbsolute(pattern),
  }).map((match) => match.replace(/\/$/, ''));
}

module.exports = { globSync };
