<a id="readme-top"></a>

<br />
<div align="center">

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

<!-- ABOUT THE PROJECT -->

## About The Project

Nviron simplifies how you work with environment variables in modern JavaScript and TypeScript projects.
Instead of manually checking `process.env` or writing repetitive validation logic, nviron provides a declarative, type-safe, and <a href="https://zod.dev">Zod</a> powered approach that ensures your app runs with confidence no missing or invalid envs.

### Built With

<table> <tr> <td><a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a></td> <td><a href="https://github.com/colinhacks/zod"><img src="https://img.shields.io/badge/Zod-3068E8?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" /></a></td> <td><a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /></a></td> <td><a href="https://pnpm.io/"><img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm" /></a></td> <td><a href="https://turbo.build/"><img src="https://img.shields.io/badge/Turborepo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Turborepo" /></a></td> <td><a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest" /></a></td> </tr> </table>

## 🚀 Getting Started

To start using nviron, simply install it in your Node.js or TypeScript project.
It’s lightweight, type-safe, and works out of the box with Zod

📦 Installation

Using your preferred package manager:

```bash
# Using pnpm
pnpm add nviron zod
```

```bash
# or npm
npm install nviron zod
```

```bash
# or yarn
yarn add nviron zod

```

### 🧩 Requirements

---

Node.js 18 or higher

TypeScript (recommended for type-safety)

Zod (peer dependency for validation)

## Usage

Here’s a quick example to get started:

```ts
import { defineEnv } from "nviron";
import { z } from "zod";

const env = defineEnv({
  PORT: z.coerce.number(),
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production"]),
});

console.log(env.PORT); // Safely typed & validated
```

If any variable is missing or invalid, nviron will display a clear, color-coded error message and exit gracefully helping you catch issues early.

### Example Output (when validation failure)

```ts
❌ Environment Variable Missing or Invalid

1 issue found in your environment configuration.

1. API_KEY → Invalid input: expected string, received undefined

💡 Check your .env file or environment variables before starting the server.
```

For more examples, detailed configuration options, please refer to the <a href="https://nviron.vercel.app">Documentation</a>

## 🗺️ Roadmap

- [x] Core `nviron` package
- [x] Zod validation support
- [x] Better error diagnostics & colored console output
- [ ] CLI tool
  - [ ] Environment file generation (`.env.example` creator)
  - [ ] Schema auto-generation from `.env` files

See the [open issues](https://github.com/ubeyidah/nviron/issues) for a full list of proposed features (and known issues).

## 🤝 Contributing

Contributions are always welcome! 🎉
We believe open source grows stronger through collaboration whether it’s bug fixes, documentation improvements, typo or brand-new features.

If you’d like to contribute, please read our detailed [CONTRIBUTING.md](./CONTRIBUTING.md)

#### Don’t forget to ⭐ star the repo if you find it helpful, it really means a lot!

## 📬 Contact

Developed and maintained by [@ubeyidah](https://twitter.com/ubeyidah)  
📧 Email: **ubeyidah@gmail.com**
