# Evolvic — Next.js site

Marketing site for [Evolvic](https://evolvic.com), rebuilt with the [Next.js](https://nextjs.org) App Router and [Tailwind CSS](https://tailwindcss.com) v4. Content and structure mirror the public WordPress site; visuals use a clean consulting palette (tune colors in `src/app/globals.css` to match pixel-perfect brand tokens).

## Scripts

```bash
npm run dev    # local dev — http://localhost:3000
npm run build  # production build
npm run start  # run production server locally
npm run lint
```

## Project layout

- `src/app/` — routes (`/`, `/about-us`, `/contact`, `/services`, `/services/[slug]`, `/careers`, `/blog`, legal placeholders)
- `src/components/` — header, footer, FAQ, CTA, newsletter
- `src/lib/site.ts` — phone, emails, nav, footer links
- `src/lib/services-data.ts` — service copy from evolvic.com
- `src/lib/faqs.ts` — homepage FAQ items

## Git branches and Vercel

| Branch     | Purpose |
| ---------- | ------- |
| **`develop`** | Day-to-day work and integration. Push here (or merge PRs) for **preview** builds — Vercel gives a unique **Preview URL** per deployment (and a stable branch URL like `…-git-develop-….vercel.app`). Use that for QA. |
| **`main`**    | **Production**. Merge `develop` → `main` when a release is ready. Vercel promotes the result to **Production** (`evolvic.vercel.app` and your custom domain). |

**Typical flow**

1. `git checkout develop` → make changes → `git push origin develop`
2. Open the Preview deployment in the Vercel dashboard (or from the GitHub check) and test.
3. When satisfied: open a PR **`develop` → `main`**, review, merge (or merge locally and push `main`).

**Vercel project settings** (confirm once): **Settings → Git → Production Branch** = **`main`**. All other branches (including `develop`) deploy as **Previews** by default.

## Search indexing (pre-launch vs live)

Until you want Google to index the site:

- Do **not** set `ALLOW_INDEXING` to `true` in Vercel (omit it or leave empty).
- The app then serves **`Disallow: /` in `/robots.txt`**, **`noindex, nofollow`** in root `metadata`, **`X-Robots-Tag: noindex, nofollow, noarchive`** via the [Next.js 16 proxy](https://nextjs.org/docs/messages/middleware-to-proxy) in [`src/proxy.ts`](src/proxy.ts), and an **empty `/sitemap.xml`**.

When **evolvic.com** (or your canonical domain) is live:

1. Set **`NEXT_PUBLIC_SITE_URL`** = `https://evolvic.com` (no trailing slash) for **Production** (and match **Preview** if you want accurate OG URLs in previews).
2. Set **`ALLOW_INDEXING=true`** for the **Production** environment only in Vercel (leave Preview/Development without it so preview URLs stay non-indexable).
3. Redeploy production. Verify `/robots.txt` allows crawling and lists the sitemap.

See [`.env.example`](.env.example). Helpers live in [`src/lib/indexing.ts`](src/lib/indexing.ts).

## Deploy on Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com/new), import the repo — framework preset **Next.js**, root `.` , build `next build`, output default.
3. Set **Production Branch** to **`main`** (see above).
4. Add your production domain and point DNS per Vercel’s instructions when you cut over from WordPress.

Optional: set **Root Directory** if the app lives in a monorepo subfolder. In **GitHub → Settings → General → Default branch**, set **`develop`** if you want new clones and PRs to start from integration by default.

## Notes

- **Emails** in `src/lib/site.ts` are placeholders (`info@` / `talent@`); replace with your live addresses.
- **Newsletter** form is UI-only — wire `action` to Resend, Formspree, or your API.
- **Blog** and **Terms / Privacy** are placeholders; paste WordPress export or CMS content when ready.
- **Partner logos** on the homepage are placeholders; add assets under `public/`.
- **Stats** (“Years / Projects / Countries”) match odd values seen on the legacy homepage — update when you have official numbers.
