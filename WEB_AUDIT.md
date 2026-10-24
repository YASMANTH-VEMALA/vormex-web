# Vormex web audit — 22 October 2026

This is the original audit baseline. The subsequent repairs and current validation
are recorded in [PRODUCTION_READINESS.md](./PRODUCTION_READINESS.md) and
[the contract change notes](./docs/web-contract-changes.md). The original findings
below are retained for comparison.

The project has useful domain folders and passes its current tests, TypeScript, and a production build. It is not ready to call perfect: there are confirmed API integration failures, dependency advisories, oversized components, and a large lint backlog.

## Scope and verification

- Inventoried 408 implementation, stylesheet, test, and script files under src/, tests/, and scripts/. Dependencies, generated output, lockfile contents, and assets are excluded from the line budget.
- Parsed imports across all 386 TypeScript/TSX source files. No cycles were detected in the local static import/re-export graph, including type imports. Dynamic imports and runtime coupling are outside that result.
- Located 50 modules in src/lib/api, including request/error helpers. Captured 474 static HTTP call sites and compared method/path against 594 current mounted backend routes and the existing Express route fixture.
- 436 captured calls matched a current backend route; 38 did not. These are call sites, not unique endpoints. Missing-route entries include active UI calls and unused/legacy helpers. Matching a route does not prove payload compatibility or authorization correctness.
- Reviewed the dynamic AI request helper paths, upcoming-events query wrapper, and both skill-passport path variants separately. Generic request wrappers are intentionally not treated as concrete endpoints.
- TypeScript: PASS — tsc --noEmit --incremental false.
- Existing tests: PASS — 75/75, zero skipped or failed.
- Broad lint over src, tests, scripts, and main Next/ESLint configuration: FAIL — 124 errors and 111 warnings. Additional public-worker/config lint passed with zero errors or warnings.
- Production build: PASS in an isolated sibling copy. It used the existing dependencies and .env.local. Only that copy’s Turbopack filesystem root was widened to the parent workspace to permit its node_modules junction. The first attempt failed on that junction restriction; this was an audit harness issue. The live development output was not used for the build.
- Read-only live probes: web /api/health and /api/groups/categories returned 200. Backend /api/circles/discover and /api/users/search?q=test returned 404.
- Dependency audit: FAIL — npm reports 23 flagged package entries: 1 critical, 20 high, 2 moderate. Some are development/transitive dependencies, and multiple entries share the same underlying advisory. These totals do not mean 23 independently reachable exploits.
- Account-specific authenticated workflows, payments, uploads, socket delivery, and every browser interaction were not exercised end to end. No accounts, messages, or payments were created for this audit.

## Prioritized findings

### 1. High priority: installed Next.js is affected by critical advisories

[package.json:43](C:/Users/yasma/Downloads/vormex/vormex-web/package.json:43) pins Next.js 16.2.12. The maintainer’s [Windows-hosted server advisory](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36) covers >=16.0 and <16.3.3. This checkout runs on Windows and does not enable Cache Components, so it meets the platform/configuration conditions described by the advisory. No exploit was attempted.

The npm audit also flags Next.js image optimization and next/og advisories, axios, the pinned sharp override, and the pinned brace-expansion override. Runtime reachability varies. Update the affected direct packages and overrides together, then rerun install, broad lint, tests, build, and the dependency audit. Do not blindly accept a major downgrade suggested for a transitive dependency.

### 2. High priority: circles UI calls an API that the backend does not implement

[src/lib/api/circles.ts:117](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/circles.ts:117) requests discover, personal circles, detail, membership, posts, and member routes. [src/app/circles/page.tsx:108](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/circles/page.tsx:108) and the circle detail page use them. The backend circles router only declares PUT /:circleId: [src/modules/groups/routes/circles.routes.ts:7](C:/Users/yasma/Downloads/vormex/vormex-backend-33d1b9d/vormex-backend/src/modules/groups/routes/circles.routes.ts:7). GET /api/circles/discover returned 404 in the running backend.

Agree on whether circles should have their own API or adapt to the existing groups capability, including response schemas. Renaming URLs alone is insufficient because the UI expects circle-specific fields.

### 3. High priority: accountability schemas reject valid backend responses

[src/lib/api/accountability.ts:16](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/accountability.ts:16) requires user1Id, user2Id, and status for every partner. The backend’s getPartners mapper returns none of these: [src/modules/engagement/controllers/accountability.controller.ts:62](C:/Users/yasma/Downloads/vormex/vormex-backend-33d1b9d/vormex-backend/src/modules/engagement/controllers/accountability.controller.ts:62). Non-empty responses therefore fail Zod parsing and the page retains an empty list.

The mentorship schema requires mentorId, menteeId, myRole, mentor, and mentee. The backend returns role and partner instead. Diagnostic safeParse checks using the actual controller response shapes reproduced both failures. Existing schema tests pass because they supply the frontend’s invented shape rather than the backend response.

The same API module also exposes partner/mentorship create/respond/session operations with no corresponding mounted routes. Separate the supported read/check-in contract from unimplemented operations, and test against shared backend fixtures.

### 4. High priority: active group invite and request flows use different URLs

[src/lib/api/groups.ts:322](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:322) uses /groups/:id/requests, while the backend declares /groups/:id/join-requests. The response action needs /join-requests/:requestId/respond. [src/lib/api/groups.ts:361](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:361) posts invite responses to /groups/invites/:id, but the backend expects /groups/invites/:id/respond. The group list/settings pages invoke these helpers.

Several group post and message actions also have no corresponding backend route; see the complete inventory below. Align the method, URL, body, and response contracts before testing these controls with a real group.

### 5. Medium priority: notification preferences cannot persist

[src/app/notifications/settings/page.tsx:112](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/notifications/settings/page.tsx:112) reads and writes /notifications/preferences, but the backend registers /notifications/settings. The frontend also expects a different preference shape. Moreover, the backend settings controller returns fixed defaults and only acknowledges writes: [src/modules/notifications/controllers/notifications.controller.ts](C:/Users/yasma/Downloads/vormex/vormex-backend-33d1b9d/vormex-backend/src/modules/notifications/controllers/notifications.controller.ts). A URL correction alone will not make settings durable.

### 6. Medium priority: reel mention search uses a missing route and wrong envelope

[src/components/reels/MentionInput.tsx:63](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/reels/MentionInput.tsx:63) calls /users/search, which returned 404. The existing mentions API uses /mentions/search. This component reads response.data.users even though the shared Axios interceptor already returns the body. Reuse the domain mention-search helper and its actual response type.

### 7. Medium priority: CI verification does not enforce project-wide lint or file sizes

[package.json:15](C:/Users/yasma/Downloads/vormex/vormex-web/package.json:15) runs lint:focused in verify. That subset has zero errors and two warnings in the broad lint output, while the wider project has 124 errors. CI invokes verify, so the focused lint gate does not protect the rest of the application. CI also runs npm audit, which currently fails. No maximum-file-length or import-boundary check is configured.

The lint errors include 71 set-state-in-effect findings, 17 immutability/declaration-order findings, 9 render-purity findings, and 6 ref-access findings. These require individual review; not every lint diagnostic proves a visible bug. A nested component in NearbyUsers.tsx:640 is also flagged because recreating it during render can reset component state.

### 8. Medium priority: large components combine unrelated responsibilities

35 files exceed 500 physical lines; 8 exceed 1,000. File length is a maintenance signal, not a correctness test. ChatInput combines file/media rules, recording, typing, optimistic sends, retries, AI controls, and the composer UI. FindPeople combines tabs, search, filtering, caching, pagination, and large render branches. Split by responsibility with stable public props and API contracts.

### 9. Lower priority: dormant and duplicated code obscures contracts

[src/components/feed/EngagementAnalyticsModal.tsx:80](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/feed/EngagementAnalyticsModal.tsx:80) substitutes fabricated analytics on API failure. No external reference/import to this component was found in src, so this is dormant-code risk rather than a confirmed active screen issue. Remove the demo fallback or show an explicit unavailable state before enabling it.

There are two ReportModal implementations, both referenced by different screens, and duplicated legacy mention helpers across posts.ts and mentions.ts. The posts.ts mention endpoints do not exist on the backend. Reconcile these by supported capability rather than moving files just to reduce line counts.

## What is already organized well

- App Router pages, reusable components, hooks, domain API modules, and shared types have separate top-level folders.
- Many component subfolders follow product domains; chat outbox and auth/routing utilities already have dedicated modules.
- Shared HTTP configuration includes timeouts, cookie credentials, CSRF attachment, and coordinated session refresh.
- Query keys and query-provider defaults centralize caching policies. Reels has dedicated hooks for feed, playback, preload, and engagement.
- Strict TypeScript is enabled, tests exist for several security/auth/routing policies, and production compilation succeeds.

## Files over 500 lines

Physical line counts include comments and blank lines, excluding a trailing empty split entry. A 500-line ceiling should be applied to authored implementation files; generated data and declarative assets need separate limits.

| File | Lines | Priority |
| --- | ---: | --- |
| [src/components/chat/ChatMessages.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/chat/ChatMessages.tsx) | 1437 | Over 1,000 |
| [src/components/find-people/FindPeople.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/find-people/FindPeople.tsx) | 1429 | Over 1,000 |
| [src/components/chat/ChatInput.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/chat/ChatInput.tsx) | 1380 | Over 1,000 |
| [src/components/feed/CreatePostModal.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/feed/CreatePostModal.tsx) | 1252 | Over 1,000 |
| [src/app/groups/[slug]/settings/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/groups/[slug]/settings/page.tsx) | 1094 | Over 1,000 |
| [src/components/feed/PostCard.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/feed/PostCard.tsx) | 1048 | Over 1,000 |
| [src/components/profile/ProfileHeader.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/profile/ProfileHeader.tsx) | 1048 | Over 1,000 |
| [src/components/chat/ChatList.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/chat/ChatList.tsx) | 1003 | Over 1,000 |
| [src/components/profile/ProfilePage.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/profile/ProfilePage.tsx) | 963 | Over 500 |
| [src/components/stories/StoryViewer.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/stories/StoryViewer.tsx) | 963 | Over 500 |
| [src/app/login/login.css](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/login/login.css) | 903 | Over 500 |
| [src/components/feed/Feed.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/feed/Feed.tsx) | 887 | Over 500 |
| [src/lib/socket.ts](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/socket.ts) | 841 | Over 500 |
| [src/app/interviews/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/interviews/page.tsx) | 816 | Over 500 |
| [src/app/more/games/startup/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/more/games/startup/page.tsx) | 778 | Over 500 |
| [src/app/learning/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/learning/page.tsx) | 777 | Over 500 |
| [src/components/feed/Comments.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/feed/Comments.tsx) | 730 | Over 500 |
| [src/app/challenges/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/challenges/page.tsx) | 726 | Over 500 |
| [src/app/jobs/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/jobs/page.tsx) | 704 | Over 500 |
| [src/app/more/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/more/page.tsx) | 690 | Over 500 |
| [src/components/find-people/NearbyUsers.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/find-people/NearbyUsers.tsx) | 654 | Over 500 |
| [src/components/reels/ReelCreate.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/reels/ReelCreate.tsx) | 650 | Over 500 |
| [src/components/find-people/PeopleYouKnowTab.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/find-people/PeopleYouKnowTab.tsx) | 632 | Over 500 |
| [src/components/feed/EditPostModal.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/feed/EditPostModal.tsx) | 615 | Over 500 |
| [src/app/store/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/store/page.tsx) | 596 | Over 500 |
| [src/components/stories/StoryCreator.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/stories/StoryCreator.tsx) | 587 | Over 500 |
| [src/app/more/safety/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/more/safety/page.tsx) | 555 | Over 500 |
| [src/app/more/games/typing/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/more/games/typing/page.tsx) | 549 | Over 500 |
| [src/app/more/games/wordle/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/more/games/wordle/page.tsx) | 549 | Over 500 |
| [src/lib/api/engagement.ts](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/engagement.ts) | 542 | Over 500 |
| [src/lib/api/games.ts](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/games.ts) | 532 | Over 500 |
| [src/app/streaks/page.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/streaks/page.tsx) | 522 | Over 500 |
| [src/components/ui/dock.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/ui/dock.tsx) | 517 | Over 500 |
| [src/components/chat/AIChatAssistant.tsx](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/chat/AIChatAssistant.tsx) | 504 | Over 500 |
| [src/lib/api/groups.ts](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts) | 501 | Over 500 |

## API method/path mismatches

These 38 captured call sites have no method/path match in the current mounted backend source. :param denotes a dynamic path segment. Some helpers are unused or admin/legacy-only. Presence here does not by itself prove an active user journey is broken. The source inventory and the existing Express fixture agree on these mismatches.

| Method | Web path | Source |
| --- | --- | --- |
| GET | /notifications/preferences | [src/app/notifications/settings/page.tsx:112](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/notifications/settings/page.tsx:112) |
| PUT | /notifications/preferences | [src/app/notifications/settings/page.tsx:126](C:/Users/yasma/Downloads/vormex/vormex-web/src/app/notifications/settings/page.tsx:126) |
| GET | /posts/:param/analytics | [src/components/feed/EngagementAnalyticsModal.tsx:76](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/feed/EngagementAnalyticsModal.tsx:76) |
| GET | /users/search | [src/components/reels/MentionInput.tsx:63](C:/Users/yasma/Downloads/vormex/vormex-web/src/components/reels/MentionInput.tsx:63) |
| POST | /accountability/partners | [src/lib/api/accountability.ts:81](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/accountability.ts:81) |
| POST | /accountability/partners/:param/respond | [src/lib/api/accountability.ts:88](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/accountability.ts:88) |
| POST | /accountability/mentorships | [src/lib/api/accountability.ts:105](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/accountability.ts:105) |
| POST | /accountability/mentorships/:param/respond | [src/lib/api/accountability.ts:112](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/accountability.ts:112) |
| POST | /accountability/mentorships/:param/session | [src/lib/api/accountability.ts:124](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/accountability.ts:124) |
| GET | /circles/discover | [src/lib/api/circles.ts:117](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/circles.ts:117) |
| GET | /circles/my/all | [src/lib/api/circles.ts:121](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/circles.ts:121) |
| GET | /circles/:param | [src/lib/api/circles.ts:125](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/circles.ts:125) |
| POST | /circles/:param/join | [src/lib/api/circles.ts:129](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/circles.ts:129) |
| POST | /circles/:param/leave | [src/lib/api/circles.ts:133](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/circles.ts:133) |
| POST | /circles | [src/lib/api/circles.ts:145](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/circles.ts:145) |
| GET | /circles/:param/members | [src/lib/api/circles.ts:152](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/circles.ts:152) |
| GET | /circles/:param/posts | [src/lib/api/circles.ts:159](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/circles.ts:159) |
| POST | /circles/:param/posts | [src/lib/api/circles.ts:166](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/circles.ts:166) |
| POST | /circles/admin/seed | [src/lib/api/circles.ts:170](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/circles.ts:170) |
| GET | /users/blocked?page=:param&limit=:param | [src/lib/api/connections.ts:222](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/connections.ts:222) |
| POST | /games/admin/seed/trivia | [src/lib/api/games.ts:519](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/games.ts:519) |
| POST | /games/admin/seed/wordle | [src/lib/api/games.ts:523](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/games.ts:523) |
| POST | /games/admin/seed/typing | [src/lib/api/games.ts:527](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/games.ts:527) |
| POST | /games/admin/seed/coding | [src/lib/api/games.ts:531](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/games.ts:531) |
| GET | /groups/:param/requests | [src/lib/api/groups.ts:322](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:322) |
| POST | /groups/:param/requests/:param | [src/lib/api/groups.ts:330](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:330) |
| GET | /groups/:param/invites | [src/lib/api/groups.ts:350](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:350) |
| POST | /groups/invites/:param | [src/lib/api/groups.ts:361](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:361) |
| DELETE | /groups/:param/invites/:param | [src/lib/api/groups.ts:368](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:368) |
| POST | /groups/:param/posts/:param/like | [src/lib/api/groups.ts:407](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:407) |
| PUT | /groups/:param/posts/:param/pin | [src/lib/api/groups.ts:415](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:415) |
| DELETE | /groups/:param/posts/:param | [src/lib/api/groups.ts:422](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:422) |
| POST | /groups/:param/messages/:param/reactions | [src/lib/api/groups.ts:463](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:463) |
| DELETE | /groups/:param/messages/:param | [src/lib/api/groups.ts:470](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/groups.ts:470) |
| POST | /posts/:param/impression | [src/lib/api/posts.ts:176](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/posts.ts:176) |
| GET | /mentions/unread | [src/lib/api/posts.ts:247](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/posts.ts:247) |
| POST | /mentions/read | [src/lib/api/posts.ts:262](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/posts.ts:262) |
| POST | /social-proof/track-view | [src/lib/api/social-proof.ts:142](C:/Users/yasma/Downloads/vormex/vormex-web/src/lib/api/social-proof.ts:142) |

The ten unresolved scanner expressions comprise seven generic request-wrapper internals, the AI helper’s dynamic path, upcoming-events query construction, and the conditional skill-passport path. Those concrete dynamic helper routes were reviewed separately. The corrected chat/sync query interpolation is not a missing route.

## Refactoring order and acceptance criteria

1. Resolve the dependency advisories and pinned overrides. Validate on the supported Node runtime without changing API behavior.
2. Align active circles, accountability, group, notification, and mention contracts. Add cross-project fixtures or contract tests that fail on the current mismatches. Confirm authenticated reads and authorized writes in an appropriate test account/environment.
3. Make full lint the gate, triage the current errors, and enforce an agreed line budget. Prefer <=500 lines, with documented exceptions for cohesive code; treat >1,000 as a refactor trigger.
4. Refactor chat first: extract recording/upload lifecycle hooks, typing state, send/outbox orchestration, attachment controls, composer UI, and message rendering. Preserve queue/retry and socket semantics.
5. Split FindPeople into query/filter/search state and tab/panel components; split CreatePostModal into draft/upload/submission hooks and post-type editors.
6. Split group settings by settings section and permissions workflow; split ProfileHeader and PostCard into cohesive actions, panels, and media/content components.
7. Consolidate duplicate report/mention implementations, remove dormant demo paths, and keep route pages as composition layers where practical.
8. Require full lint, typecheck, tests, production build, dependency audit, backend contract checks, and representative authenticated browser workflows before considering the cleanup complete.

No application refactor or dependency upgrade was performed during this audit. Application source retains the earlier IndexedDB version fix. Audit reports and diagnostics were added; the development servers were left running.

## Evidence

- [File inventory](C:/Users/yasma/Downloads/vormex/.audit-web/.audit-files.json)
- [Full lint diagnostics](C:/Users/yasma/Downloads/vormex/.audit-web/.audit-eslint.json)
- [API and import inventory](C:/Users/yasma/Downloads/vormex/.audit-web/api-and-imports.json)
- [Test output](C:/Users/yasma/Downloads/vormex/.audit-web/.audit-tests.txt)
- [Dependency audit](C:/Users/yasma/Downloads/vormex/.audit-web/npm-audit.json)
- [Isolated production build output](C:/Users/yasma/Downloads/vormex/.audit-web/production-build.txt)
