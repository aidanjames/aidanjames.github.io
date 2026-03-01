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
