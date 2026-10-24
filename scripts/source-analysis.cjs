const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');

function sourceFiles(directory = path.join(root, 'src')) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(file) : /\.(tsx?|css)$/.test(file) ? [file] : [];
  });
}
function parse(file) {
  return ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
}
function visit(node, callback) {
  callback(node);
  ts.forEachChild(node, (child) => visit(child, callback));
}
function literal(node) {
  if (!node) return null;
  if (ts.isStringLiteralLike(node)) return node.text;
  if (ts.isTemplateExpression(node)) {
    return (
      node.head.text +
      node.templateSpans
        .map((span) => {
          const value = span.expression;
          const query =
            (ts.isIdentifier(value) && value.text === 'params') ||
            (ts.isConditionalExpression(value) && literal(value.whenTrue)?.startsWith('?'));
          return (query ? '' : ':param') + span.literal.text;
        })
        .join('')
    );
  }
  if (ts.isCallExpression(node) && node.expression.getText() === 'buildPathWithQuery')
    return literal(node.arguments[0]);
  return null;
}
function dependency(file, specifier) {
  const base = specifier.startsWith('@/')
    ? path.join(root, 'src', specifier.slice(2))
    : specifier.startsWith('.')
      ? path.resolve(path.dirname(file), specifier)
      : null;
  if (!base) return null;
  return (
    [
      base,
      `${base}.ts`,
      `${base}.tsx`,
      path.join(base, 'index.ts'),
      path.join(base, 'index.tsx'),
    ].find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile()) ?? null
  );
}
function relative(file) {
  return path.relative(root, file).replaceAll('\\', '/');
}
module.exports = { fs, path, ts, root, sourceFiles, parse, visit, literal, dependency, relative };
