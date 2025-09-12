# The Inventors Academy Website

A full-stack marketing website for The Inventors Academy summer program.

## Deployment to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the Node.js project
   - The `vercel.json` configuration is already set up

## Environment Variables (for production)

Set these in your Vercel dashboard:
- `NODE_ENV=production`
- `DATABASE_URL` (if using database features)

## Build Process

The build process:
1. Builds the React frontend with Vite
2. Bundles the Express server with esbuild
3. Assets are served from `/attached_assets/` and `/assets/` paths
4. Static files are properly configured for production

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Assets

All images are included in the `attached_assets` and `public/assets` directories and will be served correctly in production.# InventorAcademy
