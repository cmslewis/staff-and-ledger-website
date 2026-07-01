import type { Collection } from "tinacms";

export const publishingCollection: Collection = {
  name: "publishing",
  label: "Publishing",
  path: "src/content/publishing",
  format: "md",
  fields: [
    { type: "string", name: "title", label: "Edition title", isTitle: true, required: true },
    { type: "string", name: "description", label: "Edition summary", ui: { component: "textarea" } },
    { type: "image", name: "image", label: "Edition image" },
    { type: "string", name: "imageAlt", label: "Edition image alt text" },
    { type: "rich-text", name: "body", label: "Edition body", isBody: true }
  ]
};
