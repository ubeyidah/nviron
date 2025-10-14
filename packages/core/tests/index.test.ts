import { describe, it, expect, vi } from "vitest";
import { envValidator } from "./../src/core/validator";
import z from "zod";

describe("envValidator", () => {
  const schema = {
    NODE_ENV: z.enum(["development", "production"]),
    PORT: z.string(),
  };

  it("returns parsed data when envData is valid", () => {
    const env = {
      NODE_ENV: "development",
      PORT: "3000",
    };

    const result = envValidator(schema, env);
    expect(result).toEqual(env);
  });

  it("logs errors and exits process when envData is invalid", () => {
    const invalidEnv = {
      NODE_ENV: "invalid-env",
    };

    expect(() => envValidator(schema, invalidEnv)).toThrow();
  });
});
