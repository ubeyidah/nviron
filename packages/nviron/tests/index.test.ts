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
    ""
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
        "Environment variable collision: Normalized key 'PORT' from prefixed variable 'VITE_PORT' conflicts with existing non-prefixed variable 'PORT'. Please resolve this conflict."
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

    it("should exit process on invalid env", () => {
      const env = {
        PORT: "not-a-number",
      };
      const schema = {
        PORT: z.coerce.number(),
      };

      const exitMock = vi.spyOn(process, "exit").mockImplementation(() => {
        throw new Error("process.exit called");
      });

      expect(() => validateEnv(schema, env, {})).toThrow("process.exit called");
      expect(exitMock).toHaveBeenCalledWith(1);
    });

    it("should display original and normalized keys in error messages for prefixed variables", () => {
      const env = {
        VITE_PORT: "not-a-number",
      };
      const schema = {
        PORT: z.coerce.number(),
      };

      const exitMock = vi.spyOn(process, "exit").mockImplementation(() => {
        throw new Error("process.exit called");
      });
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

      expect(() => validateEnv(schema, env, { prefix: "VITE_" })).toThrow(
        "process.exit called"
      );
      expect(exitMock).toHaveBeenCalledWith(1);
      expect(stripAnsi(consoleSpy.mock.calls[2][0])).toContain(
        "1. VITE_PORT (as PORT) → Invalid input: expected number, received NaN"
      );
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
});
