const {
  fs,
  ts,
  sourceFiles,
  parse,
  visit,
  dependency,
  relative,
} = require('./source-analysis.cjs');
const files = sourceFiles();
const errors = [];
const graph = new Map();
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.trimEnd().split(/\r?\n/).length;
  if (lines > 500) errors.push(`${relative(file)} has ${lines} lines (maximum 500)`);
  if (file.endsWith('.css')) continue;
  const imports = [];
  visit(parse(file), (node) => {
    if (!(ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) || !node.moduleSpecifier)
      return;
    const target = dependency(file, node.moduleSpecifier.text);
    if (!target) return;
    imports.push(target);
    if (
      /^src\/(lib|hooks|types)\//.test(relative(file)) &&
      relative(target).startsWith('src/app/')
    ) {
      errors.push(`${relative(file)} imports route code ${relative(target)}`);
    }
  });
  graph.set(file, imports);
}
const complete = new Set();
const visiting = new Set();
function walk(file, trail) {
  if (visiting.has(file)) {
    errors.push(
      `Import cycle: ${[...trail.slice(trail.indexOf(file)), file].map(relative).join(' -> ')}`
    );
    return;
  }
  if (complete.has(file)) return;
  visiting.add(file);
  for (const target of graph.get(file) ?? []) walk(target, [...trail, file]);
  visiting.delete(file);
  complete.add(file);
}
for (const file of graph.keys()) walk(file, []);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else
  console.log(
    `Architecture passed: ${files.length} source/style files, maximum 500 lines, no local import cycles or route dependency inversions.`
  );
