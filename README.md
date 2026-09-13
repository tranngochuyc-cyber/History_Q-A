# ChronoQuest

Playable history exploration built with Next.js 16, React 19, TypeScript, Tailwind and Lucide. Progress is saved in localStorage; no accounts or backend are required.

## Run

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. Node 20.9+ is required. Use the explicit IPv4 address on this machine to avoid an unrelated IPv6 localhost service.

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

Production output is in `out/` and can be served by any static host. `next start` does not serve this export.

## Structure

- `app/`: Home, Setup, Game, Archive, Stats, About and event detail routes.
- `components/`: reusable event cards, quiz renderer, filters and game screens.
- `lib/data/`: 36 existing curated records, 107 questions, country catalog and image credits.
- `lib/game/`: filters, weighted no-repeat selection, scoring and guarded phase transitions.
- `lib/storage/local.ts`: versioned, validated persistence; refresh restores an unfinished journey.
- `tests/game.test.ts`: eight focused checks for data, filters, randomization, scoring and complete journeys.

Add events to the seed in `lib/data/events.ts`. Give each a stable ID, sources, a historical image/alt/credit, a multiple-choice question and a true/false statement. Precisely dated records also receive a year question. Add countries to the shared catalog. Rebuild to generate detail routes.

Scoring: 100 base points, difficulty ×1/1.25/1.5, plus 10 per prior correct streak (cap 100). Year distance: exact 100, ±1 90, ±5 70, ±10 40, ±25 20, otherwise 0. Only exact years count as correct. Negative years mean BCE; zero is invalid.

Each round offers three distinct events. Setup requires a pool of at least three. Unseen records are used first; smaller pools reuse the least-seen records and rotate questions. Historical era boundaries and present-day country labels are navigation conventions.

All discoveries and attempts save immediately, including wrong answers. Unsaved text inside a year input is not persisted. Clearing browser data removes progress. The bundled catalog is visible to the browser and is not designed for competitive anti-cheat.

The latest agreed scope is saved in `CHRONOQUEST_SCOPE.md` and referenced by `AGENTS.md`. Backend, authentication, multiplayer and other expansions are deferred. Image origins and licenses are stored in `lib/data/image-catalog.json` and shown on event detail pages.
## GitHub Pages

The Pages workflow publishes the static `out/` build on pushes to `main`.
Use the public repository `tranngochuyc-cyber.github.io` for root hosting (the current configuration uses root asset URLs). In Settings > Pages, select GitHub Actions as the source. The intended address is https://tranngochuyc-cyber.github.io/; it is not live until the deployment succeeds. A project repository hosted under a subdirectory requires a base-path configuration before deployment.
