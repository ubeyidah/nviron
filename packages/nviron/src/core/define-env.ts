import { EnvSchema, envValidator } from "@nviron/core";

/**
 * Define and validate your environment variables.
 *
 * @example
 * ```ts
 * import { defineEnv } from "@nviron/core";
 * import { z } from "zod";
 *
 * const env = defineEnv({
 *   PORT: z.coerce.number().default(3000),
 *   DATABASE_URL: z.string().url(),
 *   DEBUG: z.boolean().default(false),
 * });
 *
 * console.log(env.PORT); // number
 * console.log(env.DATABASE_URL); // string
 * console.log(env.DEBUG); // boolean
 * ```
 *
 * @param schema - A record of Zod schemas for each environment variable
 * @returns A fully typed object with validated environment variables
 * @throws Will exit the process if required variables are missing or invalid
 */

const defineEnv = <T extends EnvSchema>(schema: T) => {
  return envValidator(schema, process.env);
};

export default defineEnv;
