// @ts-nocheck
import { browser } from "fumadocs-mdx/runtime/browser";
import type * as Config from "../source.config";

const create = browser<
  typeof Config,
  import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
    DocData: {};
  }
>();
const browserCollections = {
  docs: create.doc("docs", {
    "api-reference.mdx": () =>
      import("../content/docs/api-reference.mdx?collection=docs"),
    "best-practices.mdx": () =>
      import("../content/docs/best-practices.mdx?collection=docs"),
    "faq.mdx": () => import("../content/docs/faq.mdx?collection=docs"),
    "index.mdx": () => import("../content/docs/index.mdx?collection=docs"),
    "migration-guid.mdx": () =>
      import("../content/docs/migration-guid.mdx?collection=docs"),
    "quick-start.mdx": () =>
      import("../content/docs/quick-start.mdx?collection=docs"),
    "troubleshooting.mdx": () =>
      import("../content/docs/troubleshooting.mdx?collection=docs"),
    "examples/advanced.mdx": () =>
      import("../content/docs/examples/advanced.mdx?collection=docs"),
    "examples/environments.mdx": () =>
      import("../content/docs/examples/environments.mdx?collection=docs"),
    "examples/index.mdx": () =>
      import("../content/docs/examples/index.mdx?collection=docs"),
    "examples/microservices.mdx": () =>
      import("../content/docs/examples/microservices.mdx?collection=docs"),
    "examples/nextjs.mdx": () =>
      import("../content/docs/examples/nextjs.mdx?collection=docs"),
    "examples/nodejs.mdx": () =>
      import("../content/docs/examples/nodejs.mdx?collection=docs"),
    "examples/saas.mdx": () =>
      import("../content/docs/examples/saas.mdx?collection=docs"),
    "examples/serverless.mdx": () =>
      import("../content/docs/examples/serverless.mdx?collection=docs"),
    "examples/vite.mdx": () =>
      import("../content/docs/examples/vite.mdx?collection=docs"),
    "installation/index.mdx": () =>
      import("../content/docs/installation/index.mdx?collection=docs"),
    "installation/nextjs.mdx": () =>
      import("../content/docs/installation/nextjs.mdx?collection=docs"),
    "installation/nodejs.mdx": () =>
      import("../content/docs/installation/nodejs.mdx?collection=docs"),
    "installation/vite.mdx": () =>
      import("../content/docs/installation/vite.mdx?collection=docs"),
  }),
};
export default browserCollections;
