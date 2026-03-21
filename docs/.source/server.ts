// @ts-nocheck
import * as __fd_glob_22 from "../content/docs/installation/vite.mdx?collection=docs"
import * as __fd_glob_21 from "../content/docs/installation/nodejs.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/installation/nextjs.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/installation/index.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/examples/vite.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/examples/serverless.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/examples/saas.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/examples/nodejs.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/examples/nextjs.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/examples/microservices.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/examples/index.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/examples/environments.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/examples/advanced.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/troubleshooting.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/quick-start.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/migration-guid.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/faq.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/best-practices.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/api-reference.mdx?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/installation/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/examples/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "examples/meta.json": __fd_glob_1, "installation/meta.json": __fd_glob_2, }, {"api-reference.mdx": __fd_glob_3, "best-practices.mdx": __fd_glob_4, "faq.mdx": __fd_glob_5, "index.mdx": __fd_glob_6, "migration-guid.mdx": __fd_glob_7, "quick-start.mdx": __fd_glob_8, "troubleshooting.mdx": __fd_glob_9, "examples/advanced.mdx": __fd_glob_10, "examples/environments.mdx": __fd_glob_11, "examples/index.mdx": __fd_glob_12, "examples/microservices.mdx": __fd_glob_13, "examples/nextjs.mdx": __fd_glob_14, "examples/nodejs.mdx": __fd_glob_15, "examples/saas.mdx": __fd_glob_16, "examples/serverless.mdx": __fd_glob_17, "examples/vite.mdx": __fd_glob_18, "installation/index.mdx": __fd_glob_19, "installation/nextjs.mdx": __fd_glob_20, "installation/nodejs.mdx": __fd_glob_21, "installation/vite.mdx": __fd_glob_22, });