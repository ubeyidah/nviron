import { describe, it, expect, vi, beforeEach } from "vitest";
import z from "zod";
import { normalizeEnv } from "../src/utils/utils";
import { validateEnv } from "../src/core/validator";
import defineEnv from "../src/core/define-env";

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
        PORT: "3000",
        DATABASE_URL: "postgres://localhost",
      });
    });

    it("should return original env if no prefix is provided", () => {
      const env = { PORT: "3000" };
      const normalized = normalizeEnv(env);
      expect(normalized).toEqual(env);
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
