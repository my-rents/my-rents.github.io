---
name: seo-content-refresh
description: Audit and improve a My Rents page or section for SEO using the seo-content agent.
argument-hint: '[page or section] [locale] [goal]'
agent: seo-content
model: GPT-5.4 (copilot)
---

Use [the SEO rules](../instructions/seo-content.instructions.md) and [the SEO skill](../skills/seo-content-optimization/SKILL.md).

Task:

1. Identify the target page, section, or default to the home page if none is provided.
2. Build a short brief using [content-brief-template.md](../skills/seo-content-optimization/content-brief-template.md).
3. Research the latest official Google guidance relevant to the task.
4. Use Search Console if the current browser session has access; otherwise continue with repo evidence and public Google sources.
5. Improve the content, title, description, and related SEO copy where justified.
6. Keep every claim grounded in the repo and do not invent features.
7. If a shared product claim changes, review both English and Spanish content.
8. Validate the edited files and summarize the evidence behind the changes.
