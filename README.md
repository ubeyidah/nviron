# nviron

A minimal and developer friendly environment variable validation and management package. With **nviron**, you define, validate, and safely use environment variables in your project.

## 🚀 Features

- Simple environment config in one file
- Type-safe access to environment variables
- Validation rules (required, number, boolean, defaults, etc.)
- Works with TypeScript and JavaScript
- Minimal boilerplate, maximum safety

---

## 📦 Installation

```bash
npm install nviron
```

or

```bash
pnpm add nviron
```

---

## 🛠 Usage

Create a file like `env.config.{ts,js}` or `utils/env.config.{ts,js}`:

```ts
import { defineEnv } from "nviron";

export const env = defineEnv({
  PORT: { required: true, type: "number" },
  DATABASE_URL: { required: true },
  NODE_ENV: { default: "development" },
});
```

Then use it anywhere in your project:

```ts
import { env } from "./env.config";

console.log(env.PORT); // number
console.log(env.DATABASE_URL); // string
console.log(env.NODE_ENV); // "development" | "production"
```

---

## ✅ Validation Rules

- **required**: throws an error if missing
- **type**: enforce type (string, number, boolean)
- **default**: fallback value if not set

Example:

```ts
export const env = defineEnv({
  API_KEY: { required: true },
  TIMEOUT: { type: "number", default: 5000 },
  DEBUG: { type: "boolean", default: false },
});
```

---

## 🤝 Contribution

We welcome contributions! Please check [`CONTRIBUTING.md`](./CONTRIBUTING.md) for detailed guidelines.

Basic flow:

1. Fork the repo
2. Create a branch (`feature/add-new-rule`)
3. Commit your changes (using conventional commits)
4. Open a Pull Request

---

## 📜 License

MIT © 2025
