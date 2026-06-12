# Troubleshooting

## Astro 6 + TailwindCSS build issue

If the build fails with `Missing field tsconfigPaths on BindingViteResolvePluginConfig.resolveOptions`, keep Tailwind wired through PostCSS instead of `@tailwindcss/vite`.

Required files:

- `postcss.config.mjs` with `@tailwindcss/postcss`
- `src/styles/global.css` with `@import "tailwindcss";`
- `astro.config.mjs` without the Tailwind Vite plugin

On Windows PowerShell, run npm actions as separate commands:

```powershell
cmd /d /s /c npm.cmd install
cmd /d /s /c npm.cmd run build
```
