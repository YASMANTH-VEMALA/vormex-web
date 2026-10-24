const {
  fs,
  path,
  ts,
  root,
  sourceFiles,
  parse,
  visit,
  literal,
  relative,
} = require('./source-analysis.cjs');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'docs/api-contract.json'), 'utf8'));
const helpers = {
  getJson: 'get',
  postJson: 'post',
  putJson: 'put',
  patchJson: 'patch',
  deleteJson: 'delete',
  apiGet: 'get',
  apiPost: 'post',
  readSocialProof: 'get',
};
const normalize = (endpoint) =>
  endpoint
    .split('?')[0]
    .replace(/:[^/]+/g, ':param')
    .replace(/\/$/, '');
const routes = new Set(
  manifest.routes.map((route) => `${route.method} ${normalize(route.endpoint)}`)
);
const errors = [];
let captured = 0;
for (const file of sourceFiles().filter((file) => !file.endsWith('.css'))) {
  const source = parse(file);
  visit(source, (node) => {
    if (!ts.isCallExpression(node)) return;
    let method;
    if (
      ts.isPropertyAccessExpression(node.expression) &&
      node.expression.expression.getText(source) === 'apiClient'
    )
      method = node.expression.name.text;
    else if (ts.isIdentifier(node.expression)) method = helpers[node.expression.text];
    if (!['get', 'post', 'put', 'patch', 'delete'].includes(method)) return;
    const argument = node.arguments[0];
    const endpoints =
      argument && ts.isConditionalExpression(argument)
        ? [literal(argument.whenTrue), literal(argument.whenFalse)]
        : [literal(argument)];
    const location = `${relative(file)}:${source.getLineAndCharacterOfPosition(node.getStart()).line + 1}`;
    for (const endpoint of endpoints) {
      if (endpoint === null) {
        // Generic transports are reviewed here; callers remain statically checked.
        const generic =
          ['src/lib/api/request.ts', 'src/lib/api/social-proof.ts'].includes(relative(file)) &&
          /^(path|buildPathWithQuery\(path, params\))$/.test(argument?.getText(source) ?? '');
        const aiTransport =
          relative(file) === 'src/lib/api/ai-chat.ts' && argument?.getText(source) === 'path';
        if (!generic && !aiTransport) errors.push(`${location}: unresolved ${method} endpoint`);
        continue;
      }
      captured++;
      if (!routes.has(`${method} ${normalize(`/api${endpoint}`)}`))
        errors.push(`${location}: backend route missing for ${method.toUpperCase()} ${endpoint}`);
    }
  });
}
// Optional comparison against a fresh mounted-route capture from the sibling API.
if (process.env.BACKEND_ROUTE_MANIFEST) {
  const current = JSON.parse(fs.readFileSync(process.env.BACKEND_ROUTE_MANIFEST, 'utf8'));
  const normalized = (rows) =>
    rows.map((route) => `${route.method} ${normalize(route.endpoint)}`).sort();
  if (JSON.stringify(normalized(current.routes)) !== JSON.stringify(normalized(manifest.routes)))
    errors.push('Backend route manifest changed; review and regenerate docs/api-contract.json.');
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else
  console.log(
    `API contracts passed: ${captured} captured calls checked against ${manifest.routes.length} mounted backend routes. Payloads and authorization require behavior tests.`
  );
