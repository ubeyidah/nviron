# Nviron Next.js Example

This example demonstrates how to use **nviron** in a **Next.js** project for both server-side and API route environment variables.

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

## ⚡ Project Structure

```
my-next-app/
├── src/
├── utils/
│   └── env.config.ts
│   └── pages/
│       └── api/
│           └── hello.ts
├── .env.local
└── package.json
```

---

## 📝 .env.local file

```env
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=supersecret
PORT=3000
```

---

## 📂 env.config.ts

```ts
import { defineEnv } from "nviron";

export const env = defineEnv({
  NEXT_PUBLIC_API_URL: { required: true },
  SECRET_KEY: { required: true },
  PORT: { type: "number", default: 3000 },
});
```

---

## 📂 pages/api/hello.ts

```ts
import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "@/utils/env.config";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    message: `API running on port ${env.PORT}`,
    apiUrl: env.NEXT_PUBLIC_API_URL,
  });
}
```

---

## 🚀 Running the Next.js App

1. Start the development server:

```bash
pnpm run dev
```

2. Open your browser at `http://localhost:3000/api/hello`.

You should see the validated environment variables returned in the API response.

---

## ✅ Notes

- `nviron` validates that all required environment variables are present.
- Type casting ensures number and boolean variables are interpreted correctly.
- Works with `.env.local`, `.env.development`, `.env.production` in Next.js.
- Use `NEXT_PUBLIC_` prefix for variables you want exposed to the browser.
