# Staff & Ledger Website Technical Plan

## 1. Project Goal

Build a free-to-host, elegant, responsive marketing website for Staff & Ledger that can be maintained by a non-coder through a real browser-based content editing UI.

The content editor must be able to log into a web interface, edit forms, upload or replace images, and publish changes. Editing Markdown, JSON, YAML, or files directly on GitHub.com is not an acceptable primary workflow.

The site should preserve the visual direction from the supplied concept:

- Black, ivory, and aged-gold palette
- Editorial serif typography
- Cinematic full-viewport hero
- Current season / featured concert section
- Three pillar cards: Perform, Publish, Share
- Manifesto / footer section
- Mobile navigation

The canonical visual target for the initial build is:

```text
docs/MOCKUP.png
```

The production homepage should match this mockup as the target end state for layout, tone, hierarchy, palette, section rhythm, and overall atmosphere while translating it into a responsive, accessible, editable website. Implementation details may adapt for real browser behavior and mobile layouts, but deviations from the desktop mockup should be intentional and justified by responsiveness, accessibility, content editing, or performance needs.

Brand source inputs:

- `docs/MOCKUP.png` - canonical homepage target
- `Logo.svg` - approved logo; preserve unchanged
- `Brand guidelines - 09.pdf` through `Brand guidelines - 11.pdf` - logo overview, variants, and usage rules
- `Brand guidelines - 15.pdf` through `Brand guidelines - 17.pdf` - color system draft
- Nearby brand pages in the same source folder may be referenced for logo clear space, minimum size, and brand attributes

Confirmed brand attributes from the draft guidelines:

- Curated
- Refined
- Warm
- Timeless
- Moving

The first production version should be fast, static-first, inexpensive to operate, and easy to change without vendor lock-in.

### Creative North Star

Staff & Ledger is not simply a choir website. It should read as the public face of a cultural institution that performs, commissions, preserves, and publishes extraordinary vocal music.

The site should feel closer to a beautifully authored cultural artifact than a marketing website. Useful reference territory:

- Criterion Collection
- Monocle
- Herman Miller
- Aman
- The New Yorker
- Museum exhibition labels
- Rare book title pages
- Archival catalog systems
- Beautifully printed concert programs

The guiding one-sentence concept:

```text
It is the vocal music website where manuscript, archive, stage, and ledger become one visual system.
```

Everything in the implementation should support that sentence.

### Brand Essence

The company is simultaneously:

- A world-class chamber choir
- A sheet music publisher
- A cultural institution
- An archive of new music
- A curator of taste

The visual system should make every decision feel inevitable once someone understands the name Staff & Ledger.

Draw from:

- Manuscript paper
- Archival boxes
- Ledger books
- Bookbinding
- Folios
- Paper grain
- Brass
- Linen
- Vellum
- Rehearsal annotations
- Pencil markings
- Museum labels
- Library catalog cards
- Printing registration marks
- Crop marks
- Measure numbers
- Typographic grids
- Music stands
- Architectural acoustics

Avoid obvious choir and nonprofit-arts cliches:

- Music notes as decoration
- Treble clefs
- Singing silhouettes
- Microphones
- Theatrical masks
- Generic concert photography
- Centered luxury landing-page formulas
- Overused nonprofit donation-page tropes

### Signature Idea

The final site should contain one memorable visual idea rather than many small decorative ideas.

Recommended signature:

```text
The page behaves like an archival performance folio: musical staff lines, catalog marks, marginal notes, and warm stage light gradually organize the content as the visitor moves through it.
```

This idea can appear through:

- A subtle staff-line grid that structures sections without becoming literal sheet music
- Folio numbers, catalog labels, and measure-like markers used only when they encode real structure
- Event information typeset like a concert program, archival catalog entry, or rare book title page
- Fine marginalia and metadata that reward slow exploration
- Warm architectural lighting over tactile paper and dark stage materials
- Motion that feels like light crossing paper or a page settling, not software animation

The build should spend its boldness here. Other UI details should stay quiet and disciplined.

## 2. Recommended Stack

### Framework

Use Astro.

Reasons:

- Ideal for static marketing websites
- Minimal JavaScript by default
- Easy component model
- Content collections work well for structured content
- Simpler than Next.js for this use case
- Portable across Netlify, Vercel, Cloudflare Pages, or any static host

### Hosting

Use Netlify Free.

Reasons:

- Free hosting with custom domain and SSL
- Good static-site workflow
- Deploy previews for reviewing edits
- Simple Git-based deployment
- Works well with Astro and TinaCMS

### CMS

Use TinaCMS.

Reasons:

- Provides a real web UI with forms for content editors
- Free plan supports 2 users, which is enough for this project
- Content remains stored in the Git repository
- Editors do not need to use GitHub.com or edit Markdown directly
- Good fit for structured page blocks, event pages, journal posts, and image fields
- Less vendor lock-in than a fully hosted CMS

### UI Component Foundation

Use ShadCN-style owned components backed by Base UI primitives for all basic interactive UI elements.

Reasons:

- Base UI provides unstyled, accessible React primitives with strong behavior defaults.
- ShadCN's model keeps component code inside the project so it can be customized to the Staff & Ledger brand instead of inherited as a generic kit.
- The site can maintain a highly editorial visual language while relying on robust primitives for menus, dialogs, popovers, forms, accordions, and similar interactions.
- This avoids writing complex accessibility behavior from scratch.

Because Astro is the site framework and Base UI is React-based, React should be used deliberately through Astro islands for interactive components rather than turning the whole marketing site into a client-rendered app.

Use Magic UI only where it materially supports the brand experience. It should be treated as an optional accent library, not as a visual default.

Appropriate Magic UI candidates:

- Subtle `Blur Fade` entrance animation for editorial section reveals
- `Text Reveal` or a similarly restrained text treatment for one key manifesto moment
- `Progressive Blur` or `Noise Texture` if it improves the cinematic image treatment without hurting readability
- Possibly `Hero Video Dialog` later if Staff & Ledger has performance footage

Avoid Magic UI components that would make the site feel trendy, SaaS-like, or gimmicky:

- Rainbow, shimmer, neon, sparkles, meteors, confetti, aurora, and heavy gradient effects
- Dock, globe, device mocks, tweet cards, terminal, code comparison, and other product-demo patterns
- Any component that competes with the photography, typography, or music/editorial tone

### Styling Foundation

Use Tailwind CSS 4 as the styling system.

Reasons:

- Tailwind 4 supports CSS-first theme variables through `@theme`, which is a good fit for a clear brand-token system.
- It keeps layout, spacing, typography, and color decisions explicit in implementation.
- It pairs well with Astro, ShadCN-style owned components, and Base UI primitives.
- It avoids a separate JavaScript-heavy theme configuration for a static-first marketing site.

Implementation requirements:

- Install Tailwind 4 using the current Vite/Astro-compatible setup.
- Define brand tokens in CSS with `@theme`, not primarily in a legacy `tailwind.config` file.
- Keep semantic CSS variables for non-utility concepts where useful, but expose reusable design tokens through Tailwind theme variables.
- Do not rely on arbitrary values for core layout, spacing, color, or type. Arbitrary values are acceptable only for one-off optical alignment against `docs/MOCKUP.png`.
- Add a short `docs/DESIGN_SYSTEM.md` later if the token system grows beyond what belongs in this plan.

### Repository

Create the project at:

```text
~/git/clewis/staff-and-ledger-website
```

Use GitHub as the remote repository when ready to deploy.

## 3. Hard Content Editing Requirement

The editor workflow must be:

1. Open the CMS web UI.
2. Log in.
3. Select a page, event, post, or site setting.
4. Edit labeled form fields.
5. Upload or replace images through the CMS.
6. Save or publish.
7. Let Netlify rebuild and deploy the site.

The editor must not need to:

- Clone the repository
- Run terminal commands
- Use VS Code
- Edit Markdown manually
- Edit JSON manually
- Understand Git branches or commits
- Use GitHub.com as the primary content editor

GitHub remains the storage and versioning layer, not the editorial interface.

## 4. Content Model

The site should use structured content that TinaCMS can expose as forms.

Recommended content locations:

```text
src/content/events/
src/content/journal/
src/content/archive/
src/content/publishing/
src/content/people/
src/data/homepage.json
src/data/navigation.json
src/data/site.json
public/images/
```

### Homepage Blocks

The homepage should use a block-oriented model so a non-coder can swap content blocks and adjust copy without changing code.

Initial block types:

- Hero
- Featured event
- Pillar grid
- Manifesto
- Footer callout

Blocks should support the creative system without making editors think about implementation. For example, Tina fields may expose "section label," "folio mark," "caption," or "annotation," but should not expose code concepts like "grid area" or "component variant" unless there is a clear editorial meaning.

Example homepage data:

```json
{
  "blocks": [
    {
      "type": "hero",
      "headline": "Extraordinary vocal music. Performed, commissioned, and preserved.",
      "body": "Staff & Ledger is a professional vocal ensemble and publishing house dedicated to the music of our time.",
      "image": "/images/hero-stage.jpg",
      "ctaLabel": "Reserve tickets",
      "ctaUrl": "/events/archive-of-air"
    },
    {
      "type": "featured_event",
      "event": "archive-of-air"
    },
    {
      "type": "pillar_grid",
      "items": [
        {
          "title": "Perform",
          "body": "Intimate concerts. New music. World premieres.",
          "image": "/images/perform.jpg",
          "url": "/ensemble"
        },
        {
          "title": "Publish",
          "body": "Beautiful editions. Thoughtful scores. Built to last.",
          "image": "/images/publish.jpg",
          "url": "/publishing"
        },
        {
          "title": "Share",
          "body": "Rehearsals. Stories. Music in motion.",
          "image": "/images/share.jpg",
          "url": "/journal"
        }
      ]
    },
    {
      "type": "manifesto",
      "text": "We believe the choral composer's instrument is people.",
      "accent": "We exist to help great music travel."
    }
  ]
}
```

## 5. Initial Site Map

### Phase 1 Pages

Build these first:

- `/` - Homepage
- `/ensemble` - Ensemble overview
- `/publishing` - Publishing overview
- `/archive` - Past events / works
- `/journal` - Journal index
- `/about` - Mission, artists, contact
- `/events/[slug]` - Event detail page
- `/journal/[slug]` - Journal article page
- `/admin` - TinaCMS editor route

### Phase 2 Pages

Add later if needed:

- `/people/[slug]`
- `/publishing/[slug]`
- `/works/[slug]`
- `/press`
- `/support`
- `/contact`

## 6. Visual System

### Design Objective

The homepage should not become another centered luxury landing page. It should feel authored, asymmetrical, editorial, and physically inhabitable.

Create tension through:

- Asymmetrical composition
- Editorial hierarchy
- Unexpected whitespace
- Oversized typography
- Tiny captions
- Marginalia
- Layered information
- Architectural rhythm

The page should read like a beautifully designed monograph: compressed information, dramatic emptiness, intimate image details, oversized statements, quiet annotations, and immersive darkness should alternate intentionally.

### Color Tokens

Use the early brand-guideline color drafts as the starting point, then tune them against `docs/MOCKUP.png` for the production website.

The draft palette is:

- Sand: neutral system for most text, backgrounds, rules, and surfaces
- Rust: warm accent system for attention, links, and special editorial moments
- Moss: secondary accent system used sparingly when variety is needed

Prefer dark theme. The brand guidelines explicitly note that dark theme better conveys the elegance inherent in the identity.

Use Tailwind 4 `@theme` tokens in the global stylesheet:

```css
@import "tailwindcss";

@theme {
  --color-sand-1: #f5ede2;
  --color-sand-2: #ceb085;
  --color-sand-3: #917b5c;
  --color-sand-4: #514431;
  --color-sand-5: #19140c;
  --color-sand-6: #0e0b06;

  --color-rust-1: #b67150;
  --color-rust-2: #6a402c;
  --color-rust-3: #2c180e;

  --color-moss-1: #91ab67;
  --color-moss-2: #5b6c3f;
  --color-moss-3: #2a331b;

  --color-page: var(--color-sand-6);
  --color-surface: var(--color-sand-5);
  --color-paper: var(--color-sand-1);
  --color-ink: var(--color-sand-6);
  --color-text: var(--color-sand-1);
  --color-muted: var(--color-sand-3);
  --color-accent: var(--color-sand-2);
  --color-accent-rust: var(--color-rust-1);
  --color-accent-moss: var(--color-moss-1);
}
```

Production usage rules:

- Use Sand colors in most cases.
- Use Sand/6 or near-black image areas as the dominant dark background.
- Use Sand/1 for primary text on dark backgrounds.
- Use Sand/2 as the default aged-gold/brass accent, matching the logo ampersand.
- Use Rust and Moss only when variety is needed, such as specific editorial links, hover states, or event graphics.
- Do not let Rust or Moss become dominant homepage colors.
- Keep border/rule colors as translucent Sand, e.g. `color-mix(in srgb, var(--color-sand-1) 16%, transparent)`.

### Typography

Use only freely available fonts and self-host them when practical.

Primary direction:

- Logo: keep the supplied `Logo.svg` exactly as-is. Do not recreate the wordmark in live text.
- Display serif: Reforma 1918, matching the logo's serif DNA. Use it for hero headlines, major editorial headings, event title treatments, and large pull quotes.
- Ampersand: preserve the ampersand inside the SVG logo. Do not separately typeset the logo ampersand in page text.
- Body serif: Libre Baskerville.
- Italic accent: Libre Baskerville Italic for hero accent phrases, event subtitles, and manifesto lines unless an approved Reforma italic webfont is available before launch.
- Utility sans: IBM Plex Sans for CMS-proof navigation, buttons, labels, and body-support text where a sans-serif is clearer.
- Mini monospace headers: IBM Plex Mono for tiny catalog labels, folio marks, metadata, annotation tags, and technical-looking archival headers.

Font sourcing requirements:

- Reforma 1918 must be used for display text if an approved free webfont package can be legally self-hosted.
- If Reforma 1918 files are not available during implementation, use Libre Baskerville as the temporary display fallback, but mark this as a pre-launch brand item.
- Libre Baskerville, IBM Plex Sans, and IBM Plex Mono are freely available and should be self-hosted to avoid relying on third-party font requests at runtime.
- Do not load fonts from the Google Fonts CDN in production; download and self-host the required font files.

Tailwind 4 font tokens:

```css
@theme {
  --font-display: "Reforma 1918", "Libre Baskerville", Georgia, serif;
  --font-serif: "Libre Baskerville", "Reforma 1918", Georgia, serif;
  --font-sans: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  --text-folio: 0.6875rem;
  --text-caption: 0.75rem;
  --text-body: 1rem;
  --text-lede: 1.1875rem;
  --text-section-sm: 2.5rem;
  --text-section-md: 3.75rem;
  --text-section-lg: 5.5rem;
  --text-hero-sm: 3.5rem;
  --text-hero-md: 5.5rem;
  --text-hero-lg: 7.5rem;
}
```

Type usage rules:

- Hero headline: `font-display`, large, high contrast, tight but not negative letter spacing.
- Hero italic phrase: true italic serif, Sand/2 accent, slightly lighter visual weight.
- Body copy: serif or restrained sans depending on section density, with comfortable line height.
- Navigation and buttons: small uppercase sans with moderate tracking.
- Mini headers: `font-mono`, uppercase, 10-12px, generous tracking, used for museum-label/catalog details.
- Numbers and dates: use tabular numerals where available.
- Never scale font size directly with viewport units. Use fixed type tokens at responsive breakpoints instead.

Logo usage rules:

- Use the supplied `Logo.svg` asset unchanged.
- Preserve the two-tone logo when used on dark backgrounds.
- Monotone variants are acceptable only if exported from the approved mark, not reconstructed in code.
- Maintain clear space equal to the rendered logo height on all sides whenever practical.
- Do not render the logo below 30px tall in digital layouts.
- Do not recolor the logo with CSS filters.

### Layout Direction

The homepage should feel like an editorial concert program and not a generic SaaS landing page.

Core layout principles:

- Full-bleed hero image
- Strong left-aligned type composition
- Thin rule lines and section marks derived from folios, catalogs, measures, or ledger entries
- Alternating black and paper-toned bands
- Large serif headings
- Small uppercase metadata
- Restrained animation
- No rounded card-heavy startup aesthetic
- No decorative numbering unless the numbers communicate an actual sequence, archive position, event order, or catalog logic

### Grid and Spacing System

Use a deliberate grid and spacing system implemented with Tailwind 4 tokens.

Core grid:

- Desktop: 12-column grid.
- Tablet: 8-column grid.
- Mobile: 4-column grid.
- Site max width: 1440px.
- Outer margin: `clamp(20px, 4vw, 64px)`.
- Column gap: `clamp(16px, 2vw, 32px)`.
- Section padding block: `clamp(72px, 10vw, 160px)`.

Tailwind 4 spacing/container tokens:

```css
@theme {
  --spacing: 0.25rem;
  --container-site: 90rem;
  --container-copy: 42rem;
  --container-measure: 68ch;
  --breakpoint-xs: 30rem;
  --breakpoint-3xl: 120rem;
}
```

Implementation patterns:

- Create reusable layout utilities or components for `site-grid`, `grid-content`, `grid-margin`, and `section-y`.
- Align hero type, event metadata, pillar cards, and footer content to the same grid system.
- Use the grid to create asymmetry; do not center every section.
- Use spacing in multiples of 4px, with major section rhythm coming from the tokenized `section-y` scale.
- Preserve fixed-format UI dimensions for nav, buttons, cards, and media blocks so hover states and editable CMS text do not shift the layout.
- Let the subtle staff/ledger line system derive from the grid, not from arbitrary decorative lines.

### Hero Direction

The hero should create anticipation rather than immediately behave like a standard logo/headline/paragraph/button block.

The current screenshot direction should be preserved: a dark, cinematic performance/rehearsal space, left-weighted editorial typography, restrained copy, and warm architectural light. The experience should feel like entering an empty rehearsal room, opening an archival folio, or standing in a performance space before singers arrive.

The approved Staff & Ledger logo must not be redesigned.

### Event Information Direction

Concerts should not appear as generic event cards.

Event information should feel like one of:

- A beautifully typeset concert program
- An archival catalog entry
- A museum placard
- A rare book title page
- A formal performance invitation

Required event data should be clear and scannable, but the presentation should carry institutional authority.

### Motion Direction

Motion should feel architectural rather than technological.

Appropriate motion references:

- Light grazing paper or embossed typography
- Slow stage-light reveal
- Dust or grain in warm light
- Paper settling
- Manuscript page turn
- Brass catching light

Avoid motion that feels flashy, gamified, or product-demo-like. One orchestrated atmospheric behavior is better than many scattered animations.

### UI Styling Direction

The ShadCN/Base UI layer should be restyled to match the brand, not left with default examples.

Interactive elements should use:

- Square or lightly softened corners, generally 0-4px
- Thin ivory or aged-gold rules
- Serif typography where it fits the brand
- Small uppercase labels for navigation and metadata
- Aged-gold focus and hover states
- Clear keyboard focus rings that match the visual system
- Motion that feels like stage lighting or page turning, not app chrome
- Button and link treatments inspired by engraved brass, archival labels, library cards, concert tickets, embossed paper, debossed leather, or printed invitations

Do not use the stock ShadCN visual language as the finished design. The implementation should own the components and make them feel native to Staff & Ledger.

### Image Direction

Use real or generated photographic assets:

- Dark rehearsal or empty performance spaces
- Music stands and stage lighting
- Annotated score paper
- Printed editions
- Hands marking scores
- Pencil corrections
- Page turns
- Conductor gestures
- Manuscript details
- Instrument cases
- Linen, walnut, brass, and vellum
- Rehearsal or singer imagery when intimate and specific

Photography should celebrate process as much as performance. Avoid generic performance photography and any imagery that looks like stock choral promotion.

### Copy Direction

Copy should be specific, restrained, and institutional.

Preferred language:

- Perform
- Commission
- Preserve
- Publish
- Archive
- Edition
- Folio
- Season
- Program
- Rehearsal
- Catalog

Avoid breathless promotional language, generic nonprofit appeals, and overly clever copy that competes with the design. The voice should feel like a cultural institution with taste, not a ticketing funnel.

Store optimized images in:

```text
public/images/
```

## 7. Component Architecture

Recommended component structure:

```text
src/
  components/
    base/
      button.tsx
      dialog.tsx
      dropdown-menu.tsx
      navigation-menu.tsx
      popover.tsx
      sheet.tsx
      tabs.tsx
    blocks/
      HeroBlock.astro
      FeaturedEventBlock.astro
      PillarGridBlock.astro
      ManifestoBlock.astro
    global/
      SiteHeader.astro
      SiteFooter.astro
      MobileNav.astro
      Logo.astro
      MobileNavIsland.tsx
    cards/
      EventCard.astro
      JournalCard.astro
      PillarCard.astro
    ui/
      Button.astro
      SectionLabel.astro
      Rule.astro
    effects/
      BlurFade.tsx
      TextReveal.tsx
  layouts/
    BaseLayout.astro
    ContentLayout.astro
  pages/
    index.astro
    ensemble.astro
    publishing.astro
    archive.astro
    journal.astro
    about.astro
    events/[slug].astro
    journal/[slug].astro
  content/
    events/
    journal/
    archive/
    publishing/
    people/
  data/
    homepage.json
    navigation.json
    site.json
  styles/
    global.css
    tokens.css
    typography.css
    utilities.css
```

The homepage renderer should map block types to block components. Unknown block types should fail visibly during development.

### ShadCN/Base UI Implementation Rules

- Basic interactive elements should be React components built in the ShadCN style.
- Base UI should provide the underlying accessible behavior for primitives where available.
- Astro components should compose those React primitives only when interactivity is required.
- Static presentation components should remain `.astro` components.
- Do not import an entire visual kit or large block library for simple marketing sections.
- Keep owned component APIs small and brand-specific.
- Prefer composition over one-off props when a component needs to support editorial layouts.

Likely Base UI-backed components:

- Mobile menu / sheet
- Dialogs
- Dropdown navigation
- Popovers
- Tabs
- Accordions
- Form controls used by any future contact or signup forms

Likely plain Astro components:

- Hero sections
- Editorial content sections
- Event cards
- Journal cards
- Footer
- Layout wrappers

### Magic UI Usage Rules

Magic UI may be used only after a component is selected for a clear purpose.

Allowed first-pass uses:

- One subtle reveal animation pattern for sections
- One restrained text animation for the manifesto or hero accent
- One image-treatment helper if it improves cinematic polish

Implementation constraints:

- Respect `prefers-reduced-motion`
- Keep animation durations slow and quiet
- Avoid looping motion except for very subtle ambient treatments
- Do not use more than two Magic UI components on the initial homepage
- Remove any component that feels detached from the Staff & Ledger brand

## 8. Design Review Checklist

Before implementation and again before launch, review the site against these questions:

- Does the desktop homepage visually match `docs/MOCKUP.png` as the target end state?
- Are any differences from `docs/MOCKUP.png` intentional, documented, and justified by responsive behavior, accessibility, CMS editability, or performance?
- Are Tailwind 4 theme variables, not scattered arbitrary values, carrying the core color, type, spacing, and grid decisions?
- Does the implementation use the Sand/Rust/Moss palette with Sand dominant, Sand/2 as the brass accent, and Rust/Moss only sparingly?
- Is the supplied `Logo.svg` used unchanged, with clear space and minimum-size rules respected?
- Does the typography system include display serif, body serif, italic accent, utility sans, and mini monospace metadata roles?
- Can the homepage be described in one sentence that is specific to Staff & Ledger?
- Does the site fuse vocal performance, music publishing, and archive culture into one system?
- Does any section look like it could belong to a generic choir, arts nonprofit, or luxury hotel?
- Are manuscript, ledger, folio, paper, brass, catalog, and stage-light references subtle but coherent?
- Is there one memorable visual idea, or have too many effects been added?
- Are event details presented with the dignity of a program, placard, catalog entry, or invitation?
- Does every animation reinforce atmosphere, material, or orientation?
- Are ShadCN/Base UI components visually transformed enough to feel native to the brand?
- Has Magic UI been used only where it deepens the concept?
- Would a designer notice connected details after several minutes of slow exploration?

## 9. TinaCMS Configuration

TinaCMS should define schemas for all editable content. The Tina configuration should make the CMS feel like a form editor rather than a code editor.

Recommended Tina schema groups:

- Site settings
- Navigation
- Homepage
- Events
- Journal
- Archive
- Publishing
- People

Key implementation files will likely include:

```text
tina/config.ts
tina/collection/event.ts
tina/collection/journal.ts
tina/collection/page.ts
tina/collection/settings.ts
```

The exact file structure can be adjusted to match Tina's current Astro starter guidance when implementation begins.

### Editor Experience Requirements

Tina field labels must be plain-language and specific:

- "Hero headline"
- "Hero body text"
- "Hero background image"
- "Primary button label"
- "Primary button URL"
- "Concert title"
- "Concert date and time"
- "Venue name"
- "Ticket URL"
- "Card image"
- "Card destination page"

Use descriptions/help text for fields where mistakes are likely.

Example:

```ts
{
  type: "string",
  name: "ticketUrl",
  label: "Ticket URL",
  description: "Paste the full ticket link. Leave blank if tickets are not available yet."
}
```

### Image Uploads

Images should be editable through Tina and stored in the repository or Tina's configured media flow.

Preferred phase 1 path:

```text
public/images/uploads/
```

Editors should be able to upload:

- Hero images
- Event images
- Journal images
- Publishing cover images
- People headshots

## 10. Deployment Plan

### Build Commands

```text
npm install
npm run dev
npm run build
```

Netlify configuration:

```toml
[build]
  command = "npx tinacms build && npm run build"
  publish = "dist"
```

TinaCMS will need its required environment variables configured in Netlify once the Tina project is created.

Required Netlify environment variables:

```text
NEXT_PUBLIC_TINA_CLIENT_ID
TINA_TOKEN
NEXT_PUBLIC_TINA_BRANCH
```

`NEXT_PUBLIC_TINA_BRANCH` should use Netlify's branch context where possible. For production, it should resolve to `main`.

### Domain

Use:

```text
www.staffandledger.com
```

Recommended DNS:

- Set `www` as the primary domain.
- Redirect `staffandledger.com` to `www.staffandledger.com`.
- Let Netlify issue SSL automatically.

## 11. Accessibility and Performance Requirements

Minimum requirements before launch:

- Semantic headings
- Keyboard-accessible mobile nav
- Visible focus styles
- Alt text for all meaningful images
- Sufficient contrast for ivory/gold text on black
- No text baked into images where it needs to be readable
- Responsive layout tested at mobile, tablet, and desktop widths
- Lighthouse performance target of 90+
- Optimized images
- No autoplay audio or video
- Respect `prefers-reduced-motion`
- Base UI-backed components verified for keyboard behavior and focus management
- Magic UI effects disabled or simplified for reduced-motion users

## 12. SEO Requirements

Add:

- Unique title and description per page
- Open Graph image
- Canonical URL
- Sitemap
- `robots.txt`
- Structured data for events where practical
- Redirects for old URLs if any exist later

Event pages should include:

- Event title
- Date and time
- Venue
- City
- Ticket URL
- Description

## 13. Forms and Contact

For phase 1, use a mailto link:

```text
contact@staffandledger.com
```

If a form is needed later, use Netlify Forms first because it is simple and native to the chosen host.

## 14. Analytics

Start without analytics to keep the launch clean.

If needed later:

1. Plausible Analytics
2. Fathom Analytics
3. Netlify Analytics
4. Google Analytics only if required

## 15. Implementation Phases

### Phase 0: Repository Setup

- Initialize Git repo
- Add README
- Add this plan
- Add license if needed
- Add `.gitignore`

### Phase 0B: Design Calibration

- Treat `docs/MOCKUP.png` as the canonical desktop homepage target
- Convert the creative north star into a compact token system for color, type, layout, material, and motion
- Define the signature folio/staff/ledger visual system before assembling page sections
- Select the one Magic UI candidate, if any, that supports the signature idea
- Reject any early design choice that reads as generic choir, nonprofit, luxury hotel, or component-library styling
- Capture a first-pass homepage screenshot and compare it against `docs/MOCKUP.png` and the design review checklist

### Phase 1: Astro Foundation

- Scaffold Astro project
- Add Tailwind CSS 4 using the current Astro/Vite-compatible setup
- Add React integration for interactive islands
- Add TypeScript configuration
- Add global Tailwind 4 `@theme` tokens for color, typography, spacing, grid, breakpoints, and radius
- Add base layout
- Add header, footer, and mobile nav
- Add supplied `Logo.svg` asset unchanged
- Self-host approved free fonts

### Phase 1B: UI Primitive Foundation

- Add ShadCN-style local component structure
- Add Base UI dependency
- Build brand-styled button, dialog, sheet/mobile menu, dropdown, popover, tabs, and accordion primitives as needed
- Confirm components meet keyboard and focus requirements
- Document when to use Astro-only components versus React islands

### Phase 2: TinaCMS Foundation

- Add TinaCMS
- Configure 2-user editorial workflow
- Define site settings schema
- Define homepage schema
- Define media upload path
- Verify editor can log in and edit forms

### Phase 3: Homepage

- Build hero block
- Build featured event block
- Build pillar grid
- Build manifesto/footer band
- Wire homepage to Tina-editable content
- Add responsive behavior

### Phase 4: Content Pages

- Add events collection
- Add journal collection
- Add archive collection
- Add publishing collection
- Build index and detail pages

### Phase 5: Deployment

- Connect GitHub repo to Netlify
- Configure build settings
- Configure Tina environment variables
- Set `main` as the production branch
- Keep Netlify Deploy Previews enabled for developer pull requests
- Add custom domain
- Verify SSL
- Add redirects
- Verify production build

### Phase 6: QA and Launch

- Browser QA
- Mobile QA
- Desktop visual QA against `docs/MOCKUP.png`
- Creative review against the design review checklist
- Accessibility pass
- Performance pass
- SEO metadata pass
- Verify Netlify production build succeeds from `main`
- Verify `/admin` loads on the deployed domain
- Verify TinaCMS login works for both editor users
- Verify a content editor can edit homepage content, upload an image, save, and see production update
- Verify both `www.staffandledger.com` and `staffandledger.com` resolve correctly
- Verify failed builds are diagnosable from Netlify logs
- Launch

## 16. Third-Party Services & Operations

### Service Ownership

Before launch, identify one owner/admin for each external service:

- GitHub repository
- Netlify site
- TinaCloud project
- Domain registrar / DNS host
- Future analytics provider, if analytics are added
- Future form provider, if forms are added

Login recovery details and backup codes should live in a password manager, not in the repository. The repository should remain private unless there is a specific reason to make it public.

### Secrets and Environment Variables

Secrets must never be committed to the repo.

Use service dashboards for secrets:

- TinaCloud stores project/editor configuration.
- Netlify stores build environment variables.
- The password manager stores service credentials, backup codes, and account recovery notes.

Netlify environment variables should be set in the Netlify UI rather than `netlify.toml`, because `netlify.toml` is committed to the repository. Production and deploy-preview values may differ later, but v1 should keep the setup simple unless a real staging need appears.

### TinaCMS Production Workflow

Use direct publish for v1:

1. Editor logs into TinaCMS through `/admin`.
2. Editor changes form fields or uploads images.
3. TinaCMS saves the change to the GitHub repo's `main` branch.
4. Netlify detects the change.
5. Netlify rebuilds and publishes production automatically.

TinaCloud must be connected to the GitHub repository. The production build must run `tinacms build` before the Astro build so the CMS admin is available at `/admin`.

Do not enable PR-only branch protection until Tina's write behavior has been verified in production. If editorial review becomes necessary later, revisit Tina's branching/editorial workflow before adding stricter GitHub rules.

### GitHub Workflow

Use GitHub as the source repository and version history.

For v1:

- TinaCMS content edits write directly to `main`.
- Developer code changes may use pull requests.
- Netlify Deploy Previews should remain enabled for developer pull requests.
- Git history is the first backup layer for content and code.

Avoid workflows that require the content editor to understand branches, pull requests, commits, or GitHub file editing.

### Netlify Workflow

Use Netlify as the production host.

Required setup:

- Production branch: `main`
- Build command: `npx tinacms build && npm run build`
- Publish directory: `dist`
- Deploy Previews: enabled for developer pull requests
- Environment variables: set in Netlify UI

Launch checklist:

- Production build succeeds from `main`.
- `/admin` loads on the deployed domain.
- TinaCMS login works.
- TinaCMS save triggers a GitHub commit.
- Netlify rebuilds after that commit.
- Public pages update after deploy.
- Custom domain resolves.
- SSL certificate is active.
- Apex-to-`www` redirect works.

### Domain and DNS

Use `www.staffandledger.com` as the canonical production domain.

Required behavior:

- `www.staffandledger.com` serves the site.
- `staffandledger.com` redirects to `www.staffandledger.com`.
- Netlify manages SSL for both hostnames.

Document the registrar, DNS host, and account owner in the password manager. Do not store registrar credentials in the repository.

### Media Uploads and Backups

TinaCMS uploads should go to:

```text
public/images/uploads/
```

Editor image guidance:

- Use descriptive filenames, such as `archive-of-air-score-detail.jpg`.
- Prefer JPEG or WebP for photography and PNG only when transparency is required.
- Keep most uploads under 1 MB where practical.
- Provide meaningful alt text for all content images.
- Use the largest useful source image once, then let the build optimize or constrain display sizes.

Backup approach:

- Git history is the first backup layer.
- Before launch, keep a local or cloud backup of final brand assets, source images, logo files, and the approved mockup outside the repo.
- If the site moves away from Git-backed CMS later, add a recurring CMS export step.

### Failure Runbook

If the site fails to build:

- Check the latest Netlify deploy log.
- Confirm dependencies installed successfully.
- Confirm `tinacms build` ran before `npm run build`.
- Confirm required environment variables exist in Netlify.

If `/admin` fails:

- Check `NEXT_PUBLIC_TINA_CLIENT_ID`.
- Check `TINA_TOKEN`.
- Check the TinaCloud project connection to GitHub.
- Check branch configuration.

If edits do not publish:

- Confirm TinaCMS reported a successful save.
- Check whether a GitHub commit was created.
- Check whether Netlify started a new build.
- Check whether that build passed.

If the domain fails:

- Check registrar DNS records.
- Check Netlify domain settings.
- Check SSL certificate status.
- Check apex-to-`www` redirect configuration.

## 17. Maintenance Model

Non-coder maintenance:

- Log into TinaCMS
- Edit content fields
- Upload or replace images
- Save changes
- Netlify rebuilds and publishes automatically

Developer maintenance:

- Update dependencies monthly or quarterly
- Add new block types as the site evolves
- Adjust visual system if brand evolves
- Review accessibility/performance after major changes

## 18. Backup Options

If TinaCMS does not feel right after a prototype:

### Option A: Sanity

Use Sanity if the priority becomes the richest hosted CMS editing experience. It has a polished Studio UI and generous free plan, but content lives in Sanity's hosted content lake rather than directly in the Git repo.

### Option B: Cosmic

Use Cosmic if the team prefers a simpler hosted CMS dashboard and the 2-user free plan remains enough. This is more like a traditional headless CMS, but its paid tiers are significantly more expensive than Tina's entry path.

### Option C: Decap CMS

Use Decap only if Tina is a poor fit. Decap provides forms, but its GitHub workflow is less editor-friendly because users commonly need GitHub accounts and repository access.

The first prototype should validate Tina before changing direction.
