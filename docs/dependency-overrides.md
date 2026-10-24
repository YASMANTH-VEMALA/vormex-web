# Dependency overrides

Next.js and eslint-config-next are kept on the same patched release. The image
optimizer uses a patched sharp override, and Firebase's gRPC dependency is bounded
to a patched release. brace-expansion remains compatible with legacy minimatch
through the existing install-time adapter.

eslint-plugin-next 16.4.2 imports fast-glob only for its named `globSync` function
with the `onlyDirectories` option. Its fast-glob tree includes the unpatched
braces advisory GHSA-vfj7-8cjw-p6xm. The scoped npm override replaces that one
dependency with tinyglobby 0.2.17. The guarded install-time patch routes Next's
directory lookup through `packages/next-eslint-glob/index.cjs`. The adapter
preserves absolute paths and directory suffixes, where the libraries' defaults
differ. This does not alter application runtime globbing. A compatibility test exercises
the plugin's configured directory lookup. Remove the override once the upstream
plugin no longer installs the affected tree.

Dependency changes must pass a fresh install, full lint, behavior/contract tests,
type checking, production build, and npm audit. An audit count is a dependency
signal; it does not establish runtime exploitability or production readiness.
