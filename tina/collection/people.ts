import type { Collection } from "tinacms";

export const peopleCollection: Collection = {
  name: "people",
  label: "People",
  path: "src/content/people",
  format: "md",
  fields: [
    { type: "string", name: "title", label: "Person or role name", isTitle: true, required: true },
    { type: "string", name: "description", label: "Short bio or role summary", ui: { component: "textarea" } },
    { type: "image", name: "image", label: "Portrait image" },
    { type: "string", name: "imageAlt", label: "Portrait image alt text" },
    { type: "rich-text", name: "body", label: "Profile body", isBody: true }
  ]
};
