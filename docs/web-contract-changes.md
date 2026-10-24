# Web contract repairs

The web uses the existing Express API as the business and persistence authority.
The static route manifest in `api-contract.json` records the mounted router paths;
`npm run check:contracts` checks captured HTTP calls against it. Generic transports,
response shapes, authentication, and authorization still need behavior tests.

## Persistent capabilities

- Circles: discovery, membership lists, detail, members, posts, creation, join,
  leave, and posting now use existing circle tables. Private circles are hidden
  from outsiders. Joining locks the parent row before checking membership and
  capacity; repeat joins and leaves do not corrupt counts.
- Group posts: the previous mock post controller now persists posts, likes,
  pinning, and deletion. Group membership controls writes; author/moderator roles
  control deletion and pinning. Likes serialize on the post row.
- Group invitations and message interactions: routes now match the web helpers,
  check group roles, and persist cancellation, reactions, and deletion.
- Notification settings: partial updates persist per user and serialize on the
  user row. Strict validation rejects unknown keys and invalid values. Push
  delivery applies category settings and quiet hours in the saved time zone.
- Mentions: the dashboard resolves mentions through the server's accept/reject
  workflow. It no longer reports a successful local-only “mark as read”.

The additive migration is
`prisma/migrations/20261022120000_web_contract_persistence/migration.sql` in the
backend project. It creates `notification_preferences`, `group_posts`, and
`group_post_likes`, their indexes, and foreign keys. It does not delete or rewrite
existing application records. Deploy the migration before starting the generated
Prisma client that requires these tables. The existing startup schema check derives
its requirements from the generated client and rejects an incomplete schema.

## Client contracts

People autocomplete, blocked users, group join requests/invite responses,
accountability pairs, mentorship partners, social-proof envelopes, GitHub stats,
and notification settings now use the actual backend paths and response shapes.
Unused helpers for unavailable endpoints were removed. The dormant analytics
dialog reports that analytics is unavailable instead of fabricating metrics.

Queries own server state; editable local values have explicit authoritative reset
keys. Dialogs and conversations use keyed sessions, preventing draft/state leakage
between identities. Chat pagination commits messages and the virtual offset in one
pure state update so React replay cannot move the offset twice. The outbox schema
version remains 2, matching existing browser databases without deleting messages.
Upgrading a version 1 store also creates missing owner indexes. IndexedDB tests
cover both existing versions, owner isolation, and rollback after a failed write.

## Validation and rollout

Run `npm run verify` in the web and backend projects. The web command includes the
500-line source/style budget, local dependency checks, static route contracts,
full lint, TypeScript, tests, production build, and dependency audit.

The backend's opt-in `web-persistence.integration.test.ts` runs only when
`WEB_PERSISTENCE_INTEGRATION=true` and DATABASE_URL identifies
`127.0.0.1:55432/vormex_validation`. It creates disposable users and checks durable
settings, competing joins, repeat joins/leaves, private access, reaction counts,
authorization, and foreign-key cleanup, then removes its fixture records.

The migration was also applied to a local pre-change schema. That isolated fixture
substitutes text for two unrelated pgvector columns because the installed native
PostgreSQL lacks pgvector. This validates the new migration and affected contracts;
it does not validate the production vector extension or production data migration.

Before release, verify the configured database connection and migration history,
apply the migration, and exercise real authenticated sessions, media uploads,
socket delivery, push delivery, queues, and payment verification in staging.
Passing static tests is not evidence that those external systems are configured.
