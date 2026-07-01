import type { Collection } from "tinacms";

export const navigationCollection: Collection = {
  name: "navigation",
  label: "Navigation",
  path: "src/data",
  format: "json",
  match: {
    include: "navigation"
  },
  fields: [
    {
      type: "object",
      name: "primary",
      label: "Primary navigation links",
      list: true,
      fields: [
        { type: "string", name: "label", label: "Link label", required: true },
        { type: "string", name: "url", label: "Link URL", required: true }
      ]
    },
    {
      type: "object",
      name: "cta",
      label: "Header call to action",
      fields: [
        { type: "string", name: "label", label: "Button label", required: true },
        { type: "string", name: "url", label: "Button URL", required: true }
      ]
    }
  ]
};
