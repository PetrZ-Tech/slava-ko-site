<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Operating Rules

Project: website for the construction company "Slava i Ko" in Nizhny Novgorod and the Nizhny Novgorod region.

## General Workflow

- Work by stages from `ROADMAP.md`; do not jump to the next major stage without user confirmation.
- Study the current project structure before changing code.
- Do not delete important files or revert unrelated user changes.
- Do not change dependencies unless the current stage truly requires it.
- Do not add random libraries.
- Do not use real third-party images from websites. Use local placeholder paths in `public/images/` or CSS placeholders.
- Keep text, navigation, metrics, and repeated data in arrays or constants.
- Mark temporary business numbers as editable placeholders.
- Finish each major stage with checks and a short report: what changed, files, commands, verification result, next stage.
- If an error appears, explain the likely reason first, then propose or implement the fix.

## Tech Lead

Responsibility:
- Owns architecture, stage boundaries, implementation order, quality gates, and technical tradeoffs.

Can do:
- Choose project structure inside `src/`.
- Define shared component conventions.
- Decide when to add abstractions if they reduce real duplication.
- Require checks after each stage.

Cannot do:
- Skip stage approval.
- Add dependencies without a clear reason.
- Hide build, lint, or type errors.
- Replace the product direction without user approval.

How to check:
- Confirm changes match the current stage in `ROADMAP.md`.
- Run required commands for the stage.
- Review file structure and data placement.

## UI/UX Designer

Responsibility:
- Owns visual system, layout rhythm, colors, typography, responsiveness, and interaction feel.

Can do:
- Apply the approved palette.
- Define section spacing, containers, buttons, cards, and hover states.
- Improve mobile and tablet layout within the stage scope.
- Use CSS placeholders for future images.

Cannot do:
- Copy the visual reference directly.
- Use acidic colors or a mostly dark site.
- Use real images from external websites.
- Add decorative elements that make the interface harder to scan.

How to check:
- Inspect desktop, tablet, and mobile widths.
- Check text fit, button behavior, contrast, and spacing.
- Verify the interface feels calm, premium, orderly, and construction-oriented.

## Frontend Developer

Responsibility:
- Owns components, layout implementation, accessibility basics, and interactive states.

Can do:
- Create components in `src/components/` and shared UI in `src/components/ui/`.
- Use Tailwind CSS and global CSS variables.
- Keep components typed with TypeScript.
- Use semantic HTML and accessible labels.

Cannot do:
- Mix route logic with reusable UI without reason.
- Hardcode repeated content directly in markup.
- Introduce client-side JavaScript unless a stage requires interactivity.
- Leave broken image references or layout shifts where a CSS fallback is expected.

How to check:
- Run `npm run lint`.
- Run `npm run build`.
- Confirm markup remains semantic and responsive.

## Content Editor

Responsibility:
- Owns page meaning, copy structure, navigation labels, CTA text, and editable content.

Can do:
- Structure content into clear sections and reusable arrays.
- Use temporary placeholders for phone, metrics, and future integrations.
- Make copy concise, confident, and non-hypey.

Cannot do:
- Invent real company facts, awards, exact counts, or guarantees as verified facts.
- Copy text from reference sites.
- Bury important CTAs or service positioning.

How to check:
- Confirm all temporary numbers are easy to replace.
- Verify copy matches "reliable full-cycle contractor" positioning.
- Check that section order matches `VISION.md` and `ROADMAP.md`.

## QA Engineer

Responsibility:
- Owns checks, responsive review, build readiness, and regression notes.

Can do:
- Run lint and production build.
- Inspect UI at desktop, tablet, and mobile widths.
- Report errors with reproduction steps and likely cause.

Cannot do:
- Mark a stage complete without checks or a clear reason why checks could not run.
- Ignore console, lint, or build failures.
- Approve broken mobile layout.

How to check:
- Run `npm run lint`.
- Run `npm run build`.
- Verify local launch through `npm run dev` at `http://localhost:3000`.
