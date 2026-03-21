<div align="center">
  <a href="https://github.com/ubeyidah/nviron">
    <img src="./docs/public/logo.png" alt="Logo" height="80">
  </a>

<h3 align="center">NVIRON</h3>

  <p align="center">Nviron is a lightweight, type-safe e[nviron]ment variable management library built for modern JavaScript and TypeScript projects. It helps you define, validate, and safely access environment variables using <a href="https://zod.dev">Zod</a>.
    <br />
    <br />
    <a href="https://nviron.vercel.app"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/ubeyidah/nviron/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/ubeyidah/nviron/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

## Quick Start

Install:

```bash
pnpm add nviron
```

```bash
npm install nviron
```

```bash
yarn add nviron
```

Define and validate your environment:

```ts
import { defineEnv, z } from "nviron";

const env = defineEnv({
  PORT: z.coerce.number(),
  DATABASE_URL: z.string().url(),
});

console.log(env.PORT);
```

Use custom source and prefix (for example Vite):

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

## Documentation

For full guides, API reference, examples, and framework setup, visit:

- https://nviron.vercel.app/docs

## Contributing

Contributions are welcome. Please read `CONTRIBUTING.md` before opening a PR.
