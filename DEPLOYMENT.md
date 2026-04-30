# GitHub Pages Deployment Guide

This guide will help you deploy your Angular portfolio to GitHub Pages.

## Prerequisites
- Git installed and configured
- Node.js and npm installed
- A GitHub account
- `angular-cli-ghpages` installed globally (already done)

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio` or `tanuj-portfolio`)
4. Keep it **Public** (required for free GitHub Pages)
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

### 2. Initialize Git Repository Locally

Open your terminal in the portfolio folder and run:

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: Angular portfolio website"
```

### 3. Connect to GitHub Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Build and Deploy to GitHub Pages

Run these commands to build and deploy:

```bash
# Build the production version
ng build --configuration production --base-href /YOUR_REPO_NAME/

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

**Important:** Replace `YOUR_REPO_NAME` with your actual repository name in the `--base-href` flag.

### 5. Access Your Deployed Site

After deployment completes (usually 1-2 minutes), your site will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## Quick Commands Reference

### For subsequent deployments (after making changes):

```bash
# 1. Commit your changes
git add .
git commit -m "Your commit message"
git push

# 2. Rebuild and redeploy
ng build --configuration production --base-href /YOUR_REPO_NAME/
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

### Troubleshooting

**404 Error on GitHub Pages:**
- Make sure you used the correct `--base-href` with your repository name
- Check that your repository is set to Public
- Verify GitHub Pages is enabled in repository settings (Settings > Pages)

**Blank Page:**
- Check browser console for errors (F12)
- Ensure `--base-href` matches your repository name exactly
- Clear browser cache and hard refresh (Ctrl+Shift+R)

**Build Errors:**
- Make sure all dependencies are installed: `npm install`
- Check that the dev server runs without errors: `npm start`
- Verify all JSON files are valid

## Alternative: Custom Domain

If you want to use a custom domain (e.g., tanujgupta.com):

1. Add a `CNAME` file in `src/` with your domain name
2. Update your domain's DNS settings to point to GitHub Pages
3. Build with: `ng build --configuration production --base-href /`
4. Deploy: `npx angular-cli-ghpages --dir=dist/portfolio/browser --cname=yourdomain.com`

## Automated Deployment with GitHub Actions (Optional)

Create `.github/workflows/deploy.yml` for automatic deployment on every push:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build -- --configuration production --base-href /${{ github.event.repository.name }}/
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/portfolio/browser
```

## Contact Information Update

Before deploying, make sure to update:
- Resume PDF file location (if you have one)
- Social media links in `src/app/data/social.json`
- Any placeholder URLs or images

---

**Your portfolio is now live! 🚀**

Share your portfolio link:
- On LinkedIn
- In your resume
- With potential employers
- On your GitHub profile README
