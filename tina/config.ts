import { defineConfig } from "tinacms";
import { siteSettingsCollection } from "./collection/settings";
import { homepageCollection } from "./collection/homepage";
import { eventCollection } from "./collection/event";
import { journalCollection } from "./collection/journal";
import { archiveCollection } from "./collection/archive";
import { publishingCollection } from "./collection/publishing";
import { peopleCollection } from "./collection/people";
import { navigationCollection } from "./collection/navigation";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.HEAD ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  "main";
const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const contentApiUrlOverride =
  clientId && branch
    ? `https://content.tinajs.io/v1/content/${clientId}/github/${branch}`
    : undefined;

export default defineConfig({
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
      navigationCollection,
      homepageCollection,
      eventCollection,
      journalCollection,
      archiveCollection,
      publishingCollection,
      peopleCollection
    ]
  }
});
