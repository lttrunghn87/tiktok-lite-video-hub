# Deploy to Cloudflare Pages

This project is a static Astro site. Use GitHub plus Cloudflare Pages for automatic deploys.

## GitHub

Create an empty GitHub repository, then run these commands from this folder:

```powershell
git remote add origin https://github.com/<github-user>/<repo-name>.git
git branch -M main
git push -u origin main
```

If the `git push` command asks for authentication, sign in with GitHub in the browser or use a GitHub personal access token with repository write permission.

## Cloudflare Pages

1. Open Cloudflare Dashboard.
2. Go to `Workers & Pages`.
3. Create a Pages project from Git.
4. Select the GitHub repository.
5. Use these settings:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
```

After the first deploy, Cloudflare gives the site a public URL like:

```text
https://<project-name>.pages.dev
```

Every future GitHub push to `main` will trigger a new deployment.

## Custom Domain

After the Pages project is live, add a domain from the Cloudflare project page:

```text
Workers & Pages -> project -> Custom domains -> Set up a custom domain
```
