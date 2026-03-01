# The Journal - Editorial Blog Theme

A minimalist, typography-focused blog theme for GitHub Pages.

## Quick Start

1. **Create a new GitHub repository** named `yourusername.github.io`

2. **Copy these files** into the repository:
   - `_config.yml` (edit with your details)
   - `_layouts/`
   - `_posts/`
   - `assets/`
   - `index.html`
   - `about.md`
   - `archive.md`
   - `Gemfile`

3. **Edit `_config.yml`**:
   - Change `url` to your GitHub Pages URL
   - Change `github_username` to your GitHub username

4. **Push to GitHub** — your blog will be live at `https://yourusername.github.io`

## Adding Posts

Create new files in `_posts/` with the format:
```
YYYY-MM-DD-your-post-title.md
```

With this front matter:
```yaml
---
layout: post
title: "Your Post Title"
categories: Category
description: A short description
author: Your Name
date: YYYY-MM-DD
---
```

## Customisation

- Edit `assets/css/style.css` to change colors/fonts
- The accent color is `#606c38` (olive)
- Georgia is the primary font

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000`

## Decap CMS

This repo includes Decap CMS at `/admin`:
- `admin/index.html`
- `admin/config.yml`

No navigation links point to `/admin`, so the CMS is only reachable if you go directly to:
- `https://aidanjames.github.io/admin/`

### GitHub OAuth setup for `/admin` login

Decap CMS with the GitHub backend needs an OAuth gateway service.

1. Deploy a Decap-compatible GitHub OAuth gateway service and note its public URL.
2. In GitHub, create an OAuth App:
   - Go to `Settings -> Developer settings -> OAuth Apps -> New OAuth App`
   - Set Homepage URL to `https://aidanjames.github.io`
   - Set Authorization callback URL to your OAuth gateway callback URL (from your gateway docs)
3. Add your OAuth App `Client ID` and `Client Secret` to that OAuth gateway service.
4. Update `admin/config.yml`:
   - `base_url`: set to your OAuth gateway origin (for example, `https://oauth.example.com`)
   - `auth_endpoint`: keep as `/auth` unless your gateway uses a different path
5. Commit and push.
6. Open `https://aidanjames.github.io/admin/` and log in with GitHub.

### Notes

- Posts created in CMS are written to `_posts/` with your front matter fields:
  `layout`, `title`, `categories`, `description`, `author`, `date`, and markdown body.
- Uploaded media is stored in `assets/uploads`.
