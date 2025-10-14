import z, { ZodObject } from "zod";
import { EnvSchema } from "../types/env-schema";
import { logger } from "../utils/logger";

export const envValidator = <T extends EnvSchema>(
  schema: T,
  envData: Record<string, unknown>
): z.infer<ZodObject<T>> => {
  const zodObject = z.object(schema);
  const parsed = zodObject.safeParse(envData);

  if (!parsed.success) {
    parsed.error.issues.forEach((err) => {
      logger.error(err.message); // TODO: provide better log
    });

    process.exit(1);
  }

  return parsed.data;
};
