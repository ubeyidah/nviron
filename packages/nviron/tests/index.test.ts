import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { z } from "zod";
import defineEnv from "../src/index";

describe("defineEnv", () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    process.env = { ...ORIGINAL_ENV };
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
    vi.restoreAllMocks();
  });

  it("should parse and coerce valid environment variables", () => {
    process.env.PORT = "3000";
    process.env.DEBUG = "true";

    const env = defineEnv({
      PORT: z.coerce.number(),
      DEBUG: z.coerce.boolean().default(false),
    });

    expect(env.PORT).toBe(3000);
    expect(env.DEBUG).toBe(true);
  });

  it("should apply default values when variables are missing", () => {
    delete process.env.PORT;
    delete process.env.DEBUG;

    const env = defineEnv({
      PORT: z.coerce.number().default(8080),
      DEBUG: z.coerce.boolean().default(false),
    });

    expect(env.PORT).toBe(8080);
    expect(env.DEBUG).toBe(false);
  });

  it("should exit process when required variable is missing", () => {
    delete process.env.API_KEY;

    expect(() => {
      defineEnv({
        API_KEY: z.string(),
      });
    }).toThrow();
  });

  it("should exit process when validation fails (invalid type)", () => {
    process.env.PORT = "not-a-number";

    expect(() => {
      defineEnv({
        PORT: z.number(), // fails for non-numeric string
      });
    }).toThrow();
  });
});
