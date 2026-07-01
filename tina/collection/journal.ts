import type { Collection } from "tinacms";

export const journalCollection: Collection = {
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
