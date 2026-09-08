# Wet- en regelgeving Springbank Roleplay

Documentatiesite met de wet- en regelgeving van Springbank Roleplay, gebouwd met
[Fumadocs](https://fumadocs.dev) (Next.js, static export).

## Inhoud

De content staat als MDX in `content/docs/`:

- `index.mdx` — Home
- `apv.mdx` — Algemene Plaatselijke Verordening
- `wetboek.mdx` — Wetboek
- `eiland.mdx` — Eiland Regelgeving
- `offroad.mdx` — Voertuigklasses
- `douanegebieden.mdx` — Douanegebieden

De volgorde in de zijbalk staat in `content/docs/meta.json`. Afbeeldingen staan in `public/img/`.

## Lokaal draaien

```bash
npm install
npm run dev
```

De site draait daarna op http://localhost:3000.

## Bouwen (static export)

```bash
npm run build
```

Dit genereert de map `out/` met een volledig statische site (o.a. voor GitHub Pages).

## Hosting op GitHub Pages

De workflow `.github/workflows/deploy.yml` bouwt en publiceert de site automatisch bij
elke push naar `main`. Zet in de repo-instellingen **Settings → Pages → Build and deployment →
Source** op **GitHub Actions**. Het eigen domein staat in `public/CNAME`
(`wetboek.srp-fivem.nl`).

## Aanpassen

- Primary kleur: `app/global.css` (`--color-fd-primary`, nu Mantine blue `#228be6`).
- Navigatie/logo/links: `lib/layout.shared.tsx` en `lib/shared.ts`.
- De "meelopende" table-of-contents (clerk-stijl) staat aan in
  `app/(docs)/[[...slug]]/page.tsx` via `tableOfContent={{ style: 'clerk' }}`.
