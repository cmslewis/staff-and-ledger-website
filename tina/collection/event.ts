import type { Collection } from "tinacms";

export const eventCollection: Collection = {
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
