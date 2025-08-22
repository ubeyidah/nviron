# Nviron Express Example

This example demonstrates how to use **nviron** with a Node.js + Express server and load environment variables using **dotenv**.

---

## 📦 Installation

```bash
npm install express dotenv nviron
```

or

```bash
pnpm add express dotenv nviron
```

---

## ⚡ Project Structure

```
my-app/
├── src/
│   └── server.ts
├── utils/
│   └── env.config.ts
├── .env
└── package.json
```

---

## 📝 .env file

```env
PORT=4000
DATABASE_URL=postgres://user:pass@localhost:5432/db
DEBUG=true
```

---

## 📂 env.config.ts

```ts
import "dotenv/config"; // Automatically loads .env
import { defineEnv } from "nviron";

export const env = defineEnv({
  PORT: { required: true, type: "number" },
  DATABASE_URL: { required: true },
  DEBUG: { type: "boolean", default: false },
});
```

---

## 📂 server.ts

```ts
import express from "express";
import { env } from "./env.config";

const app = express();

app.get("/", (req, res) => {
  res.send(`Server is running on port ${env.PORT}`);
});

app.listen(env.PORT, () => {
  console.log(`Server listening on http://localhost:${env.PORT}`);
  console.log(`Debug mode: ${env.DEBUG}`);
});
```

---

## 🚀 Running the Server

1. Run the server:

```bash
pnpm run dev
```

You should see your server running and using the validated environment variables from `.env`.

---

## ✅ Notes

- `nviron` ensures that all required environment variables are set. If any are missing, the app will throw an error on startup.
- Type casting ensures `number` and `boolean` values are correctly interpreted.
- You can use this setup with Node.js 18+ and ES Modules if preferred.
