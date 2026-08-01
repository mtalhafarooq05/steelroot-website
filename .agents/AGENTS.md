# Steel Root Studios - Brand & Design Guidelines

When generating or modifying UI components for this workspace, strictly adhere to the following design system:

## 1. Color Palette (The Logo Trio)
- **Primary Background (The Root):** Soft Sunny Orange (`#f0ab5a`).
- **Panels/Cards (The Steel):** Silver/Metal (`#dce1e5`).
- **Accents/Hero (The Leaves):** Vibrant Leaf Green (`#82b936`).
- **Borders & Text (The Ink):** Dark Espresso Brown (`#362215`). Avoid pure black (`#000000`).
- **CRITICAL COLOR CONSTRAINTS:** 
  - NEVER use pure white (`#ffffff`) for backgrounds or large panels.
  - NEVER use sickly yellow/mustard colors (e.g., `#d9a05b` or `#ffc107`).
  - Keep colors bright and saturated, but not blindingly neon.

## 2. Typography
- **Headings & Accents:** `Fredoka One` (provides a bouncy, playful indie game feel).
- **Body Text:** `Nunito` (highly legible, soft sans-serif).

## 3. UI Aesthetic (Indie Game Feel)
- Avoid corporate minimalism, flat design, or extremely thin borders.
- **Borders:** Use thick, chunky borders (e.g., `6px solid var(--border-color)`).
- **Text Borders:** NEVER use `-webkit-text-stroke` as it eats into the text and makes it muddy. Instead, use an 8-directional `text-shadow` to create a solid outer stroke.
- **Shadows:** Use hard, solid drop shadows (e.g., `box-shadow: 8px 8px 0 var(--border-color)`) instead of soft, blurry CSS shadows.
- **Interaction:** ALL interactive elements (buttons, links, cards) MUST have a physical lift effect on hover (e.g., `transform: translateY(-5px)`) and a "press" effect on active states.

## 4. Asset Specific Rules
- **MainIcon.png Scaling:** The `MainIcon.png` image contains extensive transparent padding. When placing it inside buttons or inline text, do not simply increase the `height` to make the radish bigger (this breaks the container height). Instead, use a fixed height and use `transform: scale(1.5)` (or higher) to visually enlarge the radish without affecting layout.

## 5. Performance & Rendering Constraints (GPU Memory)
- **Avoid VRAM Overloads:** Never combine `transform-style: preserve-3d` with heavy filters (like `drop-shadow()` or `blur()`) on multiple animating elements simultaneously. This combination causes severe compositor layer explosions in Chromium browsers.
- **Backdrop Filters:** Do not apply `backdrop-filter` to arrays of overlapping, animated background elements (e.g., particle systems).
- **Strict Selectors:** When using `preserve-3d` or intensive filters, target specific single element IDs (e.g., `#hero-logo`) rather than generic tag selectors (e.g., `img` or `.hero-full img`). This prevents dynamically generated DOM elements from accidentally inheriting heavy rendering properties and crashing the page.
