# TikTok Lite Video Hub

Minimal Astro/Tailwind website for collecting public TikTok Lite links to long videos.

## Scripts

```powershell
cmd /d /s /c npm.cmd install
cmd /d /s /c npm.cmd run dev
cmd /d /s /c npm.cmd run build
```

Tailwind is wired through PostCSS for Astro 6 build compatibility. See `docs/troubleshooting.md`.

## Content

Edit `src/data/videos.ts` to replace, add, or remove links. The site links out to TikTok Lite and does not host video files.

## Deploy

Build command:

```powershell
cmd /d /s /c npm.cmd run build
```

Static output folder: `dist`

Recommended online path: Cloudflare Pages with framework preset `Astro`.
