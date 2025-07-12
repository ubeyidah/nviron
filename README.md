# envgaurd

A lightweight utility for safe and readable access to environment variables in Node.js and TypeScript/JavaScript projects. It ensures that required environment variables are set and provides optional fallback values.

---

## 📦 Installation

You can install `envgaurd` using your preferred package manager:

```bash
# npm
npm install envgaurd

# pnpm
pnpm add envgaurd

# yarn
yarn add envgaurd
```

---

## 🚀 Usage

### Basic Usage

```ts
import { env } from "envgaurd";
```

```ts
import env from "envgaurd";
```

```ts
import { env } from "envgaurd";

const dbHost = env("DB_HOST"); // throws if DB_HOST is not defined
```

### With Default Value (Fallback)

```ts
const dbPort = env("DB_PORT", 5432); // uses 5432 if DB_PORT is not defined
```

### When Not Set and No Fallback

```ts
env("MISSING_VAR");
// ❌ Throws: Environment variable MISSING_VAR is not set
```

---

## 🔍 API Reference

### `env(name: string, alt?: any): string | any`

| Parameter | Type     | Description                                               |
| --------- | -------- | --------------------------------------------------------- |
| `name`    | `string` | The name of the environment variable to read.             |
| `alt`     | `any`    | (Optional) A fallback value if the variable is undefined. |

**Returns:**

- The value of the environment variable as a string (or fallback `alt` if provided).

**Throws:**

- Error if the variable is not set and no fallback is given.

---

## 🧠 Why use envgaurd?

- ✅ Avoid silent failures due to missing environment variables
- ✅ Cleaner and safer code
- ✅ Lightweight with zero dependencies

---

## 🛠️ TypeScript Support

This package is written in TypeScript and provides full type definitions out of the box.

---

## 📄 License

MIT License

---

## 🤝 Contributing

Pull requests and issues are welcome. If you'd like to contribute, feel free to open an issue or PR.

---

## ✨ Example `.env` file

```
DB_HOST=localhost
DB_PORT=5432
```

Use with a `.env` loader like `dotenv` for local development:

```ts
import "dotenv/config";
import { env } from "envgaurd";

const host = env("DB_HOST");
```

---

## 💬 Feedback

Have ideas to improve `envgaurd`? Open an issue or reach out — all suggestions welcome!
