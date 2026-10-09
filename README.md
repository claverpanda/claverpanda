# Clever Panda — Company Website

The official marketing website for **Clever Panda**, a software product company
building practical tools for developers and engineering teams. The site
introduces the company and its first product, **RepoLens** — a tool (in active
development) for exploring codebase architecture and understanding repository
dependencies.

- Production domain: https://claverpanda.dev
- Contact: founder@claverpanda.dev
- Intended repository name: `cleverpanda-website`

## Technology stack

- **React 19** with **TanStack Start v1** (SSR-capable, file-based routing)
- **Vite 7** build tooling
- **Tailwind CSS v4** (design tokens in `src/styles.css`)
- **TypeScript**
- Brand fonts (Matter, Season Mix, Matter Semi Mono) self-hosted in `public/fonts/`

The site is a static marketing page: no backend, database, authentication, or
analytics.

## Run locally

```sh
bun install      # or: npm install
bun dev          # or: npm run dev
```

The dev server starts on http://localhost:8080 by default.

## Production build

```sh
bun run build    # or: npm run build
```

Build output is emitted to `dist/` (client assets under `dist/client`).

## Deployment

The project builds to static assets and can be hosted on any static host
(Cloudflare Pages, Vercel, Netlify, or GitHub Pages with a build step).

On Lovable (where this project is developed): click **Publish** in the editor.
The published site can then be connected to the custom domain.

### Connecting claverpanda.dev

The domain is registered at Name.com. After deploying:

1. In your host's dashboard, add `claverpanda.dev` (and optionally
   `www.claverpanda.dev`) as a custom domain.
2. At Name.com, create the DNS records your host instructs — typically:
   - an `A` record (or `ALIAS`/`ANAME`) for the apex domain `claverpanda.dev`
     pointing at the host, and
   - a `CNAME` record for `www` pointing at the host's provided target.
3. Wait for DNS propagation and confirm the host has provisioned the SSL
   certificate (most hosts do this automatically once DNS resolves).

Do not consider the domain live until the site loads over
`https://claverpanda.dev` with a valid certificate.

## Project structure

```
src/
  routes/index.tsx     # Landing page (all sections) + head metadata
  routes/__root.tsx    # HTML shell, global head defaults
  components/          # Header, hero, product sections, preview, about, contact, footer
  styles.css           # Design system: fonts, color tokens, button/badge/section styles
public/
  fonts/               # Self-hosted brand fonts (woff2)
  favicon.svg          # Brand mark favicon
  sitemap.xml          # Single-URL sitemap for the landing page
```
