# 🚀 Deployment Guide for VELORÉ PARIS

This guide provides step-by-step instructions for deploying your luxury fragrance e-commerce website to popular hosting platforms.

## 📋 Table of Contents
- [Vercel Deployment](#vercel-deployment)
- [Render Deployment](#render-deployment)
- [Netlify Deployment](#netlify-deployment)
- [GitHub Pages Deployment](#github-pages-deployment)

---

## 🌟 Vercel Deployment

### Prerequisites
- GitHub account with repository access
- Vercel account (free)

### Step-by-Step Process

#### 1. Connect Vercel to GitHub
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and continue with GitHub
3. Authorize Vercel to access your GitHub repositories
4. Click "Import Project" or "Add New Project"

#### 2. Import Repository
1. Find `munjam-dev/velore-paris` in your repositories
2. Click "Import" next to the repository
3. Vercel will automatically detect it's a React + Vite project

#### 3. Configure Build Settings
Vercel will auto-configure these settings:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

#### 4. Deploy
1. Click "Deploy"
2. Wait for deployment to complete (usually 2-3 minutes)
3. Your site will be live at: `https://velore-paris-username.vercel.app`

#### 5. Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Vercel Features
- ✅ Automatic deployments on git push
- ✅ Preview URLs for pull requests
- ✅ Edge network optimization
- ✅ HTTPS by default
- ✅ Custom domain support

---

## 🎨 Render Deployment

### Prerequisites
- Render account (free tier available)
- GitHub repository access

### Step-by-Step Process

#### 1. Connect Render to GitHub
1. Go to [render.com](https://render.com)
2. Click "Sign Up" → Continue with GitHub
3. Authorize Render to access your repositories

#### 2. Create New Web Service
1. Click "New +" → "Web Service"
2. Select "Build and deploy from a Git repository"
3. Choose `munjam-dev/velore-paris` repository
4. Click "Connect"

#### 3. Configure Service
**Service Details:**
- Name: `velore-paris`
- Region: Choose nearest to your users
- Branch: `main`

**Build Settings:**
```
Build Command: npm run build
Start Command: npm start
Publish Directory: dist
```

**Environment Variables:**
```
NODE_VERSION: 18
```

#### 4. Deploy
1. Click "Create Web Service"
2. Wait for build and deployment (5-10 minutes)
3. Your site will be live at: `https://velore-paris.onrender.com`

#### 5. Auto-Deploy Configuration
1. Go to Settings → Auto-Deploy
2. Enable "Auto-Deploy on pushes"
3. Select `main` branch

### Render Features
- ✅ Free SSL certificates
- ✅ Custom domains
- ✅ Auto-deploy on git push
- ✅ Environment variables
- ✅ Health checks

---

## 🌐 Netlify Deployment

### Prerequisites
- Netlify account (free)
- GitHub repository

### Step-by-Step Process

#### 1. Connect Netlify to GitHub
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Authorize Netlify access

#### 2. Add New Site
1. Click "Add new site" → "Import an existing project"
2. Select GitHub
3. Choose `munjam-dev/velore-paris`
4. Click "Import"

#### 3. Build Settings
```
Build command: npm run build
Publish directory: dist
```

#### 4. Deploy
1. Click "Deploy site"
2. Your site will be live at: `https://random-name.netlify.app`

---

## 📄 GitHub Pages Deployment

### Prerequisites
- GitHub account
- Repository already pushed

### Step-by-Step Process

#### 1. Configure GitHub Pages
1. Go to your repository: `github.com/munjam-dev/velore-paris`
2. Click Settings → Pages
3. Under "Build and deployment", select:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /dist

#### 2. Update Build Configuration
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### 3. Deploy
1. Commit and push the workflow file
2. GitHub Actions will automatically deploy
3. Your site will be live at: `https://munjam-dev.github.io/velore-paris`

---

## 🔧 Pre-Deployment Checklist

### Before deploying to any platform:

#### ✅ Build Test
```bash
npm run build
npm run preview
```

#### ✅ Environment Variables
- API keys (if any)
- Database URLs
- Third-party service credentials

#### ✅ Performance Optimization
- Image optimization
- Code splitting
- Lazy loading
- Minification

#### ✅ SEO Check
- Meta tags
- Open Graph tags
- Structured data
- Sitemap

---

## 📊 Platform Comparison

| Feature | Vercel | Render | Netlify | GitHub Pages |
|----------|----------|---------|-----------|---------------|
| **Cost** | Free tier available | Free tier available | Free tier available | Free |
| **Custom Domain** | ✅ | ✅ | ✅ | ✅ |
| **Auto-Deploy** | ✅ | ✅ | ✅ | ✅ |
| **Preview URLs** | ✅ | ❌ | ✅ | ❌ |
| **Analytics** | Built-in | Add-on | Built-in | ❌ |
| **Edge Network** | ✅ | ✅ | ✅ | ❌ |
| **Build Time** | Fast | Medium | Fast | Slow |

---

## 🚨 Troubleshooting

### Common Issues & Solutions

#### Build Failures
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for missing dependencies
npm audit
```

#### Deployment Errors
- Check build logs in platform dashboard
- Verify environment variables
- Ensure `package.json` has correct scripts

#### 404 Errors
- Check `vite.config.js` base path
- Verify router configuration
- Ensure `dist` folder contains `index.html`

#### Performance Issues
- Optimize images
- Enable gzip compression
- Use CDN for static assets

---

## 📞 Support Links

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Render**: [render.com/docs](https://render.com/docs)
- **Netlify**: [netlify.com/docs](https://netlify.com/docs)
- **GitHub Pages**: [docs.github.com/en/pages](https://docs.github.com/en/pages)

---

## 🎉 Success Metrics

After deployment, monitor:
- **Page load speed** (< 3 seconds)
- **Mobile responsiveness**
- **SEO score** (> 90)
- **Accessibility** (WCAG 2.1 AA)

---

**VELORÉ PARIS — Deployed for Global Access! 🌍**
