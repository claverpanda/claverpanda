<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The site is a single-page anchor landing (`src/routes/index.tsx` with `#repolens`, `#capabilities`, `#about`, `#contact` sections) — this mirrors the supplied reference design; do not split into separate routes unless the user asks.
- Brand fonts are self-hosted woff2 in `public/fonts/` (extracted from the reference design) and loaded via `@font-face` in `src/styles.css`; keep them rather than swapping to hosted font services.

