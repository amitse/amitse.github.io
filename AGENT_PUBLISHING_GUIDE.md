# Newsletter Markdown Template for Agents

When publishing a newsletter edition, write a `.md` file with this exact structure.
Save it to the correct directory, commit, and push to `main`.

## File path
- AI Dev Daily: `src/ai-dev-daily/YYYY-MM-DD.md`
- A11y × AI Daily: `src/a11y-ai-daily/YYYY-MM-DD.md`
- Agent & MCP Weekly: `src/agent-mcp-weekly/YYYY-MM-DD.md`

## Frontmatter (required)
```yaml
---
layout: post.njk
title: "Newsletter Name — D Month YYYY"
date: YYYY-MM-DD
newsletter: ai-dev-daily        # or: a11y-ai-daily / agent-mcp-weekly
edition: 1                      # increment from previous edition
sources: ["Hacker News", "X/Twitter", "GitHub Trending"]
summary: "One sentence. What was the most important thing this edition."
---
```

## Body structure

Write clean markdown. No HTML. No script tags. No inline styles.

### Sections to include:
- `## Highlights` — 2-3 sentence editorial lede. What actually mattered.
- `---` horizontal rule
- `## [Theme]` — e.g. Tools, Models, Frameworks, Research, Community
  - `### Item title`
  - 2-3 sentences. What happened. Why it matters.
  - `[Source →](url)`
- Repeat sections as needed
- `---`
- `## What to watch [tomorrow/next week]`

### Rules:
- No filler. Every item must have a reason to exist.
- Source links inline, not footnoted.
- No invented stats or fake quotes.
- Titles are factual, not clickbait.
- Do not repeat items covered in the previous 3 editions (check the site archive before writing).

## Committing
After writing the file:
```bash
cd /tmp/amitse-site  # or wherever the repo is cloned
git add src/
git commit -m "newsletter: [newsletter-name] edition [N] — YYYY-MM-DD"
git push origin main
```
