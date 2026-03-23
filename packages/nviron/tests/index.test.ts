import { describe, it, expect, vi, beforeEach } from "vitest";
import z from "zod";
import { normalizeEnv } from "../src/utils/utils";
import { validateEnv } from "../src/core/validator";
import defineEnv from "../src/core/define-env";

// Helper to strip ANSI color codes for easier assertion
const stripAnsi = (str: string) =>
  str.replace(
    // eslint-disable-next-line no-control-regex
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g,
    "",
  );

describe("Environment Utilities", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("normalizeEnv", () => {
    it("should normalize prefixed keys", () => {
      const env = {
        VITE_PORT: "3000",
        DATABASE_URL: "postgres://localhost",
      };

      const normalized = normalizeEnv(env, "VITE_");

      expect(normalized).toEqual({
        normalizedEnv: {
          PORT: "3000",
          DATABASE_URL: "postgres://localhost",
        },
        keyMap: {
          PORT: "VITE_PORT",
          DATABASE_URL: "DATABASE_URL",
        },
      });
    });

    it("should return original env if no prefix is provided", () => {
      const env = { PORT: "3000" };
      const normalized = normalizeEnv(env);
      expect(normalized).toEqual({
        normalizedEnv: env,
        keyMap: {
          PORT: "PORT",
        },
      });
    });

    it("should throw an error on key collision between prefixed and non-prefixed variables", () => {
      const env = {
        PORT: "3000",
        VITE_PORT: "4000", // This will collide with PORT after normalization
      };

      expect(() => normalizeEnv(env, "VITE_")).toThrow(
        "Environment variable collision: Normalized key 'PORT' from prefixed variable 'VITE_PORT' conflicts with existing non-prefixed variable 'PORT'. Please resolve this conflict.",
      );
    });
  });

  describe("validateEnv", () => {
    it("should validate correct env variables", () => {
      const env = {
        PORT: "3000",
        DATABASE_URL: "postgres://localhost",
      };

      const schema = {
        PORT: z.coerce.number(),
        DATABASE_URL: z.string().url(),
      };

      const validated = validateEnv(schema, env, {});
      expect(validated).toEqual({
        PORT: 3000,
        DATABASE_URL: "postgres://localhost",
      });
    });

    it("should validate prefixed env variables", () => {
      const env = {
        VITE_PORT: "4000",
        VITE_DATABASE_URL: "postgres://localhost",
      };

      const schema = {
        PORT: z.coerce.number(),
        DATABASE_URL: z.string().url(),
      };

      const validated = validateEnv(schema, env, { prefix: "VITE_" });
      expect(validated).toEqual({
        PORT: 4000,
        DATABASE_URL: "postgres://localhost",
      });
    });

    it("should throw on invalid env", () => {
      const env = {
        PORT: "not-a-number",
      };
      const schema = {
        PORT: z.coerce.number(),
      };

      expect(() => validateEnv(schema, env, {})).toThrow(
        "Nviron: validation failed missing or invalid variable(s) in your .env. Check the details above.",
      );
    });

    it("should display original and normalized keys in error messages for prefixed variables", () => {
      const env = {
        VITE_PORT: "not-a-number",
      };
      const schema = {
        PORT: z.coerce.number(),
      };

      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

      expect(() => validateEnv(schema, env, { prefix: "VITE_" })).toThrow(
        "Nviron: validation failed missing or invalid variable(s) in your .env. Check the details above.",
      );
      const loggedLines = consoleSpy.mock.calls.map((call) =>
        stripAnsi(String(call[0])),
      );
      expect(
        loggedLines.some((line) =>
          line.includes(
            "1. VITE_PORT (as PORT) → Invalid input: expected number, received NaN",
          ),
        ),
      ).toBe(true);
    });
  });

  describe("defineEnv", () => {
    it("should validate using defineEnv wrapper", () => {
      const env = {
        PORT: "5000",
        DATABASE_URL: "postgres://localhost",
      };

      const schema = {
        PORT: z.coerce.number(),
        DATABASE_URL: z.string().url(),
      };

      const validated = defineEnv(schema, { source: env });
      expect(validated).toEqual({
        PORT: 5000,
        DATABASE_URL: "postgres://localhost",
      });
    });

    it("should validate with prefix using defineEnv", () => {
      const env = {
        VITE_PORT: "6000",
        VITE_DATABASE_URL: "postgres://localhost",
      };

      const schema = {
        PORT: z.coerce.number(),
        DATABASE_URL: z.string().url(),
      };

      const validated = defineEnv(schema, { source: env, prefix: "VITE_" });
      expect(validated).toEqual({
        PORT: 6000,
        DATABASE_URL: "postgres://localhost",
      });
    });
  });

  describe("ansi color output", () => {
    it("should disable ANSI colors in browser environments", async () => {
      const browserGlobals = globalThis as unknown as Record<string, unknown>;
      const previousWindow = browserGlobals.window;
      const previousDocument = browserGlobals.document;

      vi.resetModules();
      browserGlobals.window = {};
      browserGlobals.document = {};

      try {
        const { paint } = await import("../src/utils/ansi-colors");
        expect(paint.red("validation failed")).toBe("validation failed");
      } finally {
        if (previousWindow === undefined) {
          delete browserGlobals.window;
        } else {
          browserGlobals.window = previousWindow;
        }

        if (previousDocument === undefined) {
          delete browserGlobals.document;
        } else {
          browserGlobals.document = previousDocument;
        }

        vi.resetModules();
      }
    });
  });
});
