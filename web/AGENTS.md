<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## UI/UX (Eduboost)

When working under `web/app` on layout, styling, components, or visual polish:

1. **Project rules** — Follow [`.cursor/rules/eduboost-ui-ux.mdc`](../.cursor/rules/eduboost-ui-ux.mdc) (brand, typography, pill CTAs in `globals.css`, motion, a11y, Figma workflow).
2. **Skills (on demand only)** — Do **not** pull extra skills for routine edits. Load **`frontend-design`** when building or substantially restyling UI for high craft; load **`web-design-guidelines`** when the user asks for UX/a11y audits or guideline checks.
3. **Discovery** — Use **`find-skills`** only when you need a domain-specific installable skill. Prefer vetted sources; `npx skills find <query>` or [skills.sh](https://skills.sh/).

## Agent cost

Prefer minimal tool use and concise replies: [`.cursor/rules/frugal-agent.mdc`](../.cursor/rules/frugal-agent.mdc) and your global User Rule (or `~/.cursor/rules/credit-efficient.mdc` on disk).

## Cursor Cloud specific instructions

### Project overview
EduBoost is a static marketing/landing website built with **Next.js 16.2.1** (App Router, Turbopack), React 19, Tailwind CSS 4, Framer Motion, and TypeScript. All data (courses, teachers, pricing) is hardcoded — there is no backend, database, or API.

### Running the app
The project lives in `/workspace/web`. Standard commands (`npm run dev`, `npm run build`, `npm run lint`) are in `package.json`. The dev server runs on port **3000**.

### Key pages / routes
`/` (home), `/about`, `/courses`, `/courses/[slug]`, `/teachers`, `/teachers/[slug]`.

### Gotchas
- Next.js 16.x has breaking changes vs. earlier versions. Always check `node_modules/next/dist/docs/` before using Next.js APIs.
- Lint produces 2 pre-existing warnings (unused var in `WhyEduBoostSection.tsx`, unused eslint-disable in `TeacherDetailHero.tsx`) — these are not errors.
- No `.env` file is needed; no external services or secrets are required.
