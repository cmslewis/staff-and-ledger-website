import type { Collection } from "tinacms";

export const archiveCollection: Collection = {
  name: "archive",
  label: "Archive",
  path: "src/content/archive",
  format: "md",
  fields: [
    { type: "string", name: "title", label: "Archive entry title", isTitle: true, required: true },
    { type: "string", name: "description", label: "Archive summary", ui: { component: "textarea" } },
    { type: "image", name: "image", label: "Archive image" },
    { type: "string", name: "imageAlt", label: "Archive image alt text" },
    { type: "rich-text", name: "body", label: "Archive entry body", isBody: true }
  ]
};
