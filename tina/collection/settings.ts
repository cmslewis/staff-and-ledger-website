import type { Collection } from "tinacms";

export const siteSettingsCollection: Collection = {
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
