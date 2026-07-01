import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/Users/christopher.lewis/Documents/Staff & Ledger Website/tina/__generated__/.cache/1782886795328', url: 'http://localhost:4001/graphql', token: 'undefined', queries,  });
export default client;
  