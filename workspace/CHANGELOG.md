<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
- 2026-07-08: Fixed Vercel 404s by adding React Router routes for /meme and /pfp, SPA rewrites, and AI generator API routes.
  - Files: vercel.json, src/App.tsx, src/pages/*, api/generate-meme.ts, api/generate-pfp.ts, src/lib/generator.ts
  - Pattern: Client pages call /api/* serverless functions; set OPENAI_API_KEY in Vercel for image generation.
- 2026-07-08: Improved LiveChart DexScreener reliability with timeout fallback and secondary embed retry.
  - Files: src/sections/LiveChart/index.tsx
  - Pattern: Keep one canonical pair URL, retry with alternate embed params, and retain minimal __ANIMA_DBG__ logs.
- 2026-07-08: Fixed LiveChart DexScreener loading by centralizing canonical pair URL and adding iframe load/error debug logs.
  - Files: src/sections/LiveChart/index.tsx
  - Pattern: Use one canonical DexScreener URL source for both CTA href and iframe src to prevent drift.
- 2026-07-08: Updated "JOIN THE HERD" / X Community links to the new community URL.
  - Files: src/sections/Hero/components/HeroContent.tsx, src/sections/Hero/components/HeroActions.tsx, src/sections/Footer/components/FooterLinks.tsx
  - Pattern: Keep CTA labels unchanged while swapping only community href targets.
- 2026-07-08: Updated X profile links to new account URL in hero/footer components.
  - Files: src/sections/Footer/components/FooterLinks.tsx, src/sections/Hero/components/HeroContent.tsx, src/sections/Hero/components/HeroActions.tsx
  - Pattern: Centralized profile link text remains "FOLLOW ON X" while only href changed.
<!-- NEXT_ENTRY_HERE -->
</changelog>
