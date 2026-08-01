---
name: add_roblox_game
description: Adds a new Roblox game to the portfolio by scraping its URL and generating the required markdown files.
---
# Adding a Roblox Game to the Portfolio

When the user asks to add a Roblox game to the portfolio, follow this workflow:

1. **Scrape Metadata**: Use `read_url_content` on the provided Roblox URL. Extract the `og:title`, `og:description`, and `og:image` meta tags.
2. **Create Directory**: Create a folder for the game in `public/projects/` using a kebab-case slug (e.g., `public/projects/better-music`).
3. **Create info.md**: Create `info.md` in that folder with the following format. **CRITICAL**: Wrap all frontmatter values in double quotes (`"`) to prevent YAML parsing errors with emojis.
   
   ```yaml
   ---
   title: "<Extracted og:title>"
   category: "games"
   link: "<Roblox Game URL>"
   image: "<Extracted og:image>"
   ---
   <Extracted og:description>
   ```
4. **Deploy**: Stage, commit, and push the changes to GitHub. Inform the user that Vercel is automatically deploying the update.
