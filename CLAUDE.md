@AGENTS.md
# CLAUDE.md — 5C&CO

## OUTPUT RULES
- Code only. No preamble, no summary, no "I will now..."
- No repeat of context already here
- If ambiguous → ask ONE question before acting
- No explanations unless explicitly asked (`explain:` prefix)

---

## STACK
- Next.js 15 (App Router) · TypeScript strict · Tailwind CSS · shadcn/ui
- React Hook Form + Zod · Resend · Sanity.io (CMS, optional)
- Deploy: Vercel · Node 20+

---

## STRUCTURE
```
/app
  page.tsx                  # one-pager root
  /api/contact/route.ts     # POST → Resend
/components
  Hero.tsx | Services.tsx | Approach.tsx | Testimonials.tsx | ContactForm.tsx | Footer.tsx
/lib
  resend.ts | validators.ts
/types
  index.ts
```

---

## CODE CONVENTIONS
- Named exports only. No default exports except `page.tsx` / `layout.tsx`
- No `any`. Strict types everywhere
- `"use client"` only if: hooks, events, browser API. Default = Server Component
- Tailwind only — no inline styles, no CSS modules
- Zod schema = single source of truth for form + API validation
- Env vars: `RESEND_API_KEY`, `RESEND_FROM_EMAIL` — never hardcode

---

## COMPONENT PATTERN
```tsx
// Server Component (default)
export function ComponentName({ prop }: Props) { ... }

// Client Component
"use client"
export function ComponentName({ prop }: Props) { ... }
```

---

## API ROUTE PATTERN
```ts
// /api/contact/route.ts
export async function POST(req: Request) {
  const body = ContactSchema.safeParse(await req.json())
  if (!body.success) return Response.json({ error: body.error }, { status: 400 })
  // → Resend
  return Response.json({ success: true })
}
```

---

## PLAN MODE TRIGGERS
Activate plan before acting if ANY:
- Task touches > 2 files
- Task involves new route / new component / architecture change
- Task is underspecified
  → Write plan, pause, wait for approval

---

## SUB-AGENT ROUTING

### Parallel dispatch (ALL must be met)
- 3+ independent tasks
- No shared files / state
- Clear domain boundaries

### Sequential dispatch (ANY triggers)
- B depends on output of A
- Shared file risk (merge conflict)
- Scope unclear

### Domain boundaries
| Agent | Owns |
|---|---|
| `agent:ui` | /components, Tailwind, shadcn variants |
| `agent:api` | /api routes, Resend, env vars |
| `agent:types` | TypeScript interfaces, Zod schemas |
| `agent:review` | Read-only security/quality audit |

**Invoke pattern:**
```
"Implement X. Delegate types to a sub-agent, API route to another. Run in parallel."
```

---

## COMPACTION RULES
When compacting, always preserve:
- List of modified files
- Current task status
- Any pending TODO items
- Env vars referenced

---

## HARD CONSTRAINTS
- NEVER `export default` from a non-page file
- NEVER use `any`
- NEVER hardcode secrets
- NEVER skip Zod validation on API routes
- NEVER add `"use client"` without hooks/events justification
- NEVER create new files outside the structure above without plan approval

---

## SLASH COMMANDS (`.claude/commands/`)
- `/component [Name]` → Server Component in /components
- `/client-component [Name]` → Client Component with "use client"
- `/api-route [name]` → POST route with Zod + Resend pattern
- `/review` → Read-only audit, no writes

---

## DEV COMMANDS
```bash
npm run dev       # local dev
npm run build     # production build check
npm run lint      # ESLint
npm run typecheck # tsc --noEmit
```

---

## TOKEN HYGIENE
- Use `/btw` for quick questions (no context pollution)
- Use `/clear` between unrelated tasks
- Scope research tasks to sub-agents, not main context
- `claude --max-turns 5` for bounded tasks
- `claude -p "..."` for one-shot non-interactive tasks# CLAUDE.md — 5C&CO

## OUTPUT RULES
- Code only. No preamble, no summary, no "I will now..."
- No repeat of context already here
- If ambiguous → ask ONE question before acting
- No explanations unless explicitly asked (`explain:` prefix)

---

## STACK
- Next.js 15 (App Router) · TypeScript strict · Tailwind CSS · shadcn/ui
- React Hook Form + Zod · Resend · Sanity.io (CMS, optional)
- Deploy: Vercel · Node 20+

---

## STRUCTURE
```
/app
  page.tsx                  # one-pager root
  /api/contact/route.ts     # POST → Resend
/components
  Hero.tsx | Services.tsx | Approach.tsx | Testimonials.tsx | ContactForm.tsx | Footer.tsx
/lib
  resend.ts | validators.ts
/types
  index.ts
```

---

## CODE CONVENTIONS
- Named exports only. No default exports except `page.tsx` / `layout.tsx`
- No `any`. Strict types everywhere
- `"use client"` only if: hooks, events, browser API. Default = Server Component
- Tailwind only — no inline styles, no CSS modules
- Zod schema = single source of truth for form + API validation
- Env vars: `RESEND_API_KEY`, `RESEND_FROM_EMAIL` — never hardcode

---

## COMPONENT PATTERN
```tsx
// Server Component (default)
export function ComponentName({ prop }: Props) { ... }

// Client Component
"use client"
export function ComponentName({ prop }: Props) { ... }
```

---

## API ROUTE PATTERN
```ts
// /api/contact/route.ts
export async function POST(req: Request) {
  const body = ContactSchema.safeParse(await req.json())
  if (!body.success) return Response.json({ error: body.error }, { status: 400 })
  // → Resend
  return Response.json({ success: true })
}
```

---

## PLAN MODE TRIGGERS
Activate plan before acting if ANY:
- Task touches > 2 files
- Task involves new route / new component / architecture change
- Task is underspecified
  → Write plan, pause, wait for approval

---

## SUB-AGENT ROUTING

### Parallel dispatch (ALL must be met)
- 3+ independent tasks
- No shared files / state
- Clear domain boundaries

### Sequential dispatch (ANY triggers)
- B depends on output of A
- Shared file risk (merge conflict)
- Scope unclear

### Domain boundaries
| Agent | Owns |
|---|---|
| `agent:ui` | /components, Tailwind, shadcn variants |
| `agent:api` | /api routes, Resend, env vars |
| `agent:types` | TypeScript interfaces, Zod schemas |
| `agent:review` | Read-only security/quality audit |

**Invoke pattern:**
```
"Implement X. Delegate types to a sub-agent, API route to another. Run in parallel."
```

---

## COMPACTION RULES
When compacting, always preserve:
- List of modified files
- Current task status
- Any pending TODO items
- Env vars referenced

---

## HARD CONSTRAINTS
- NEVER `export default` from a non-page file
- NEVER use `any`
- NEVER hardcode secrets
- NEVER skip Zod validation on API routes
- NEVER add `"use client"` without hooks/events justification
- NEVER create new files outside the structure above without plan approval

---

## SLASH COMMANDS (`.claude/commands/`)
- `/component [Name]` → Server Component in /components
- `/client-component [Name]` → Client Component with "use client"
- `/api-route [name]` → POST route with Zod + Resend pattern
- `/review` → Read-only audit, no writes

---

## DEV COMMANDS
```bash
npm run dev       # local dev
npm run build     # production build check
npm run lint      # ESLint
npm run typecheck # tsc --noEmit
```

---

## TOKEN HYGIENE
- Use `/btw` for quick questions (no context pollution)
- Use `/clear` between unrelated tasks
- Scope research tasks to sub-agents, not main context
- `claude --max-turns 5` for bounded tasks
- `claude -p "..."` for one-shot non-interactive tasks