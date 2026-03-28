# Deploying Hive Documentation

The Hive documentation is built with VitePress and can be deployed to various hosting platforms.

## Local Development

```bash
# Start dev server with hot reload
pnpm docs:dev

# Build for production
pnpm docs:build

# Preview production build locally
pnpm docs:preview
```

## Deploy to GitHub Pages

### Option 1: GitHub Actions (Recommended)

Create `.github/workflows/docs.yml`:

```yaml
name: Deploy Docs

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: pnpm docs:build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then:
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch - docs will auto-deploy!

### Option 2: Manual Deployment

```bash
# Build docs
pnpm docs:build

# The output is in docs/.vitepress/dist
# Deploy this directory to any static hosting service
```

## Deploy to Vercel

1. Import your repository on Vercel
2. Set build settings:
   - Build Command: `pnpm docs:build`
   - Output Directory: `docs/.vitepress/dist`
3. Deploy!

Or use Vercel CLI:

```bash
pnpm add -g vercel
cd docs/.vitepress/dist
vercel --prod
```

## Deploy to Netlify

1. Connect repository on Netlify
2. Set build settings:
   - Build Command: `pnpm docs:build`
   - Publish Directory: `docs/.vitepress/dist`
3. Deploy!

Or use Netlify CLI:

```bash
pnpm add -g netlify-cli
pnpm docs:build
netlify deploy --prod --dir=docs/.vitepress/dist
```

## Deploy to Cloudflare Pages

1. Connect repository on Cloudflare Pages
2. Set build settings:
   - Build Command: `pnpm docs:build`
   - Build Output Directory: `docs/.vitepress/dist`
3. Deploy!

## Custom Domain

### GitHub Pages

1. Add a `CNAME` file to `docs/public/` with your domain:
   ```
   docs.yourdomain.com
   ```

2. Update `docs/.vitepress/config.mts`:
   ```ts
   export default defineConfig({
     base: '/', // Change from '/hive/' to '/'
     // ...rest of config
   })
   ```

### Vercel/Netlify

Just add your custom domain in the dashboard - no code changes needed!

## Troubleshooting

### Links not working after deployment

Make sure the `base` setting in `docs/.vitepress/config.mts` matches your deployment path:

- GitHub Pages (user site): `base: '/hive/'`
- Custom domain: `base: '/'`
- Subdirectory: `base: '/docs/'`

### Build fails

1. Ensure all markdown files in `SUMMARY.md` exist
2. Check that image paths are correct (use `/hive/` prefix for GitHub Pages)
3. Run `pnpm docs:build` locally to catch errors before deploying
