# Deployment Process

## Overview

This document outlines the deployment process for both the website and CMS components of the Compleo Health platform.

## Repository Structure

- **Website Repository**: CompleoHealthWeb (staging branch)
- **CMS Repository**: CompleoHealthCMS (master branch)

## Deployment Process

### Website Deployment

Website code is always deployed to the **staging** branch:

```bash
# Make changes to website code
git add .
git commit -m "Your commit message"
git push origin staging
```

- Staging branch is used for website changes
- Main branch triggers AWS Amplify deployment (production)

### CMS Deployment

CMS requires a build process due to memory constraints on the Lightsail VM:

1. **Build locally** (required - VM runs out of memory during builds):
   ```bash
   cd C:\VSProjects\CompleoHealthCMS
   npm run build
   ```

2. **Commit built files** to master branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin master
   ```

3. **Deploy on Lightsail VM** (manual process):

   SSH into VM via browser session, then run these exact commands:

   ```bash
   pm2 stop strapi
   cd /home/ubuntu/CompleoHealthCMS
   git pull origin master
   pm2 start strapi
   ```

## Important Notes

### Build Process

- **Local builds only**: VM memory limitations require building locally
- **Dist directory**: Built files go to `dist/` directory, which Strapi uses for admin panel
- **Never copy files between repositories**: CMS and website are completely separate

### Directory Structure

On Lightsail VM:
- Strapi runs from: `/home/ubuntu/CompleoHealthCMS`
- Admin panel served from: `/home/ubuntu/CompleoHealthCMS/dist/`

### Common Mistakes to Avoid

- ❌ Do not copy built CMS files to website repository
- ❌ Do not attempt to build directly on Lightsail VM
- ❌ Do not use GitHub workflows for CMS deployment (manual process only)
- ❌ Do not push website changes to main branch unless ready for production

### Process Summary

1. **Website changes**: Push to staging branch
2. **CMS changes**: Build locally → Commit to master → Manual deploy on VM
3. **CMS admin panel**: Uses files from `dist/` directory after build

## Verification

After CMS deployment, verify:
- PM2 status: `pm2 list` (should show strapi as "online")
- Admin panel accessible at: https://cms.compleohealth.com/admin
- New Collection Types/changes visible in admin interface