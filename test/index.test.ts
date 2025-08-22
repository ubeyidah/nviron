import { describe, it, expect, beforeEach } from "vitest";
import { defineEnv } from "../src/index";

describe("defineEnv", () => {
  beforeEach(() => {
    // Reset environment variables before each test
    process.env = {};
  });

  it("should return required env variable", () => {
    process.env.DB_HOST = "localhost";

    const env = defineEnv({
      DB_HOST: { required: true },
    });

    expect(env.DB_HOST).toBe("localhost");
  });

  it("should throw if required env is missing", () => {
    expect(() =>
      defineEnv({
        DB_HOST: { required: true },
      })
    ).toThrowError(
      "[nviron] Environment variable DB_HOST is required but not set."
    );
  });

  it("should use default value when env is missing", () => {
    const env = defineEnv({
      DB_PORT: { default: 5432, cast: "number" },
    });

    expect(env.DB_PORT).toBe(5432);
  });

  it("should cast to number", () => {
    process.env.DB_PORT = "1234";

    const env = defineEnv({
      DB_PORT: { cast: "number" },
    });

    expect(env.DB_PORT).toBe(1234);
    expect(typeof env.DB_PORT).toBe("number");
  });

  it("should cast to boolean", () => {
    process.env.ENABLE_CACHE = "true";

    const env = defineEnv({
      ENABLE_CACHE: { cast: "boolean" },
    });

    expect(env.ENABLE_CACHE).toBe(true);
    expect(typeof env.ENABLE_CACHE).toBe("boolean");
  });

  it("should fallback to default boolean", () => {
    const env = defineEnv({
      ENABLE_CACHE: { default: false, cast: "boolean" },
    });

    expect(env.ENABLE_CACHE).toBe(false);
  });

  it("should fallback to default string", () => {
    const env = defineEnv({
      MODE: { default: "development" },
    });

    expect(env.MODE).toBe("development");
  });
});
