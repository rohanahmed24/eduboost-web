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
