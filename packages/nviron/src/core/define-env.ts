import z from "zod";
import { EnvConfig } from "../types";
import { EnvSchema } from "../types/env-schema";
import { validateEnv } from "./validator";

/**
 * Define and validate environment variables with optional prefix support.
 *
 * @example
 * ```ts
 * import { defineEnv, z } from "@nviron/core";
 *
 * const env = defineEnv({
 *   PORT: z.coerce.number().default(3000),
 *   DATABASE_URL: z.string().url(),
 *   DEBUG: z.boolean().default(false),
 * }, {
 *   source: import.meta.env, // process.env (default)
 *   prefix: "VITE_"
 * });
 *
 * console.log(env.PORT); // number
 * ```
 *
 * @param schema - Zod schemas for your environment variables
 * @param config - Optional config with `source` and `prefix`
 * @returns Typed object with validated environment variables
 * @throws Error if required variables are missing or invalid
 */

const defineEnv = <T extends EnvSchema>(
  schema: T,
  config: EnvConfig = {}
): z.infer<z.ZodObject<T>> => {
  const defaultSource =
    typeof process !== "undefined" && process?.env ? process.env : undefined;

  if (!config.source && !defaultSource) {
    throw new Error(
      "Nviron: no environment source found in this runtime. Pass { source } explicitly."
    );
  }

  const source = config.source ?? defaultSource;
  return validateEnv(schema, source, config);
};

export default defineEnv;
