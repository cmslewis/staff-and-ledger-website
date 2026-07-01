import { defineCollection, z } from "astro:content";

const eventCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string(),
    time: z.string(),
    venue: z.string(),
    city: z.string(),
    ticketUrl: z.string().url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    description: z.string(),
    catalogNumber: z.string().optional()
  })
});

const journalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    date: z.string(),
    author: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional()
  })
});

const simpleEditorialCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional()
  })
});

export const collections = {
  events: eventCollection,
  journal: journalCollection,
  archive: simpleEditorialCollection,
  publishing: simpleEditorialCollection,
  people: simpleEditorialCollection
};
