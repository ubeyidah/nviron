<div align="center">
  <h2>NVIRON</h2>
  <p>
    Lightweight, type-safe environment variable validation for modern TypeScript and JavaScript apps.
  </p>
  <p>
    <a href="https://nviron.vercel.app/docs"><strong>Documentation</strong></a>
    &middot;
    <a href="https://github.com/ubeyidah/nviron/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/ubeyidah/nviron/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

## Install

```bash
pnpm add nviron
```

```bash
npm install nviron
```

```bash
yarn add nviron
```

## Quick Example

```ts
import { defineEnv, z } from "nviron";

const env = defineEnv({
  PORT: z.coerce.number(),
  DATABASE_URL: z.string().url(),
});

console.log(env.PORT);
```

## Framework Example (Vite)

```ts
import { defineEnv, z } from "nviron";

const env = defineEnv(
  {
    PORT: z.coerce.number(),
    DATABASE_URL: z.string().url(),
  },
  {
    source: import.meta.env,
    prefix: "VITE_",
  },
);
```

## Full Docs

For API reference, detailed setup guides, and best practices, visit:

- https://nviron.vercel.app/docs
