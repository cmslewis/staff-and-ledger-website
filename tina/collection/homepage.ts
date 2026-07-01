import type { Collection } from "tinacms";

export const homepageCollection: Collection = {
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
            {
              type: "string",
              name: "foundedBy",
              label: "Founded by text",
              description: "Use *asterisks* around a phrase to highlight it.",
              ui: { component: "textarea" }
            },
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
