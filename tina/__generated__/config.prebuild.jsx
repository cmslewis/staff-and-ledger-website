// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collection/settings.ts
var siteSettingsCollection = {
  name: "siteSettings",
  label: "Site settings",
  path: "src/data",
  format: "json",
  match: {
    include: "site"
  },
  fields: [
    { type: "string", name: "name", label: "Site name", isTitle: true, required: true },
    { type: "string", name: "description", label: "Site description", ui: { component: "textarea" }, required: true },
    { type: "string", name: "url", label: "Canonical site URL", required: true },
    { type: "string", name: "contactEmail", label: "Contact email address", required: true },
    { type: "image", name: "ogImage", label: "Default social sharing image" }
  ]
};

// tina/collection/homepage.ts
var homepageCollection = {
  name: "homepage",
  label: "Homepage",
  path: "src/data",
  format: "json",
  match: {
    include: "homepage"
  },
  fields: [
    {
      type: "object",
      name: "blocks",
      label: "Homepage sections",
      list: true,
      templates: [
        {
          name: "hero",
          label: "Hero",
          fields: [
            { type: "string", name: "sectionLabel", label: "Section label" },
            { type: "string", name: "headline", label: "Hero headline", required: true, ui: { component: "textarea" } },
            { type: "string", name: "body", label: "Hero body text", ui: { component: "textarea" } },
            { type: "image", name: "image", label: "Hero background image" },
            { type: "string", name: "imageAlt", label: "Hero image alt text" },
            { type: "string", name: "ctaLabel", label: "Primary button label" },
            { type: "string", name: "ctaUrl", label: "Primary button URL" },
            { type: "string", name: "annotation", label: "Marginal annotation", ui: { component: "textarea" } }
          ]
        },
        {
          name: "featured_event",
          label: "Featured event",
          fields: [
            { type: "string", name: "sectionLabel", label: "Section label" },
            { type: "string", name: "event", label: "Featured event slug", description: "Use the file name from Events, without .md." }
          ]
        },
        {
          name: "pillar_grid",
          label: "Pillar grid",
          fields: [
            { type: "string", name: "sectionLabel", label: "Section label" },
            {
              type: "object",
              name: "items",
              label: "Pillar cards",
              list: true,
              fields: [
                { type: "string", name: "title", label: "Card title" },
                { type: "string", name: "body", label: "Card body text", ui: { component: "textarea" } },
                { type: "string", name: "url", label: "Card destination page" },
                { type: "string", name: "folio", label: "Card folio label" }
              ]
            }
          ]
        },
        {
          name: "manifesto",
          label: "Manifesto",
          fields: [
            { type: "string", name: "sectionLabel", label: "Section label" },
            { type: "string", name: "text", label: "Manifesto statement", ui: { component: "textarea" } },
            { type: "string", name: "accent", label: "Italic accent line", ui: { component: "textarea" } }
          ]
        }
      ]
    }
  ]
};

// tina/collection/event.ts
var eventCollection = {
  name: "events",
  label: "Events",
  path: "src/content/events",
  format: "md",
  fields: [
    { type: "string", name: "title", label: "Concert title", isTitle: true, required: true },
    { type: "string", name: "subtitle", label: "Concert subtitle" },
    { type: "datetime", name: "date", label: "Concert date" },
    { type: "string", name: "time", label: "Concert time" },
    { type: "string", name: "venue", label: "Venue name" },
    { type: "string", name: "city", label: "City and state" },
    { type: "string", name: "ticketUrl", label: "Ticket URL", description: "Paste the full ticket link. Leave blank if tickets are not available yet." },
    { type: "image", name: "image", label: "Concert image" },
    { type: "string", name: "imageAlt", label: "Concert image alt text" },
    { type: "string", name: "description", label: "Short concert description", ui: { component: "textarea" } },
    { type: "string", name: "catalogNumber", label: "Catalog or folio number" },
    { type: "rich-text", name: "body", label: "Concert page body", isBody: true }
  ]
};

// tina/collection/journal.ts
var journalCollection = {
  name: "journal",
  label: "Journal",
  path: "src/content/journal",
  format: "md",
  fields: [
    { type: "string", name: "title", label: "Article title", isTitle: true, required: true },
    { type: "string", name: "dek", label: "Article summary", ui: { component: "textarea" } },
    { type: "datetime", name: "date", label: "Publication date" },
    { type: "string", name: "author", label: "Author" },
    { type: "image", name: "image", label: "Article image" },
    { type: "string", name: "imageAlt", label: "Article image alt text" },
    { type: "rich-text", name: "body", label: "Article body", isBody: true }
  ]
};

// tina/config.ts
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
var contentApiUrlOverride = clientId && branch ? `https://content.tinajs.io/v1/content/${clientId}/github/${branch}` : void 0;
var config_default = defineConfig({
  branch,
  clientId,
  contentApiUrlOverride,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images/uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      siteSettingsCollection,
      homepageCollection,
      eventCollection,
      journalCollection
    ]
  }
});
export {
  config_default as default
};
