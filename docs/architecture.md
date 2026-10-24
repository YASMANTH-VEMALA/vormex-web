# Web application architecture

The web app uses a modular monolith: Next.js owns rendering and same-origin HTTP
proxying; the Express API owns authorization, durable state, and business rules.
REST requests use the shared cookie/CSRF client. Socket.IO is an additional
delivery channel, never an authorization or persistence authority.

## Ownership

- `app/`: route composition, metadata, loading and error boundaries.
- `components/<domain>/`: views and controls for one product capability.
- `hooks/`: reusable lifecycle and interaction logic; domain-specific hooks stay
  with their feature when they are not reusable.
- `lib/api/`: one typed contract per backend capability. HTTP interceptors unwrap
  the transport response once; domain helpers handle any application envelope.
- `lib/<domain>/`: pure policies, local persistence, and client orchestration.
- `types/`: shared view models. Backend response fixtures verify wire contracts.

Keep state close to its owner. Derive values from existing state instead of
maintaining synchronized copies in effects. Reset a form through a keyed session
when its identity changes. Async work must have cancellation or stale-result
protection. Split large features along capability boundaries, preserving stable
entry points and explicit typed props; do not split by arbitrary line ranges.

Auth checks in browser routing improve navigation only. Every backend read and
write must independently authorize the authenticated principal. Private group and
circle data must remain private through list, detail, membership, and post routes.
Membership capacity and duplicate joins require transactional enforcement.

Database migrations are versioned separately from application startup. Production
rollout must apply and verify migrations before enabling code that requires them.
Do not run destructive schema synchronization against an existing database.

## Verification

Require architecture/file-size checks, project-wide lint, strict TypeScript,
contract and behavior tests, production compilation, and dependency audit. Passing
these checks does not establish that production credentials, database migrations,
payments, uploads, queues, and real authenticated browser workflows are ready.

Guidance applied: [React composition](https://github.com/vercel-labs/agent-skills/blob/main/skills/composition-patterns/SKILL.md)
and [React/Next performance](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-best-practices/SKILL.md).
