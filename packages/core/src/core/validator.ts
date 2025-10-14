import z from "zod";
import { EnvSchema } from "../types/env-schema";
import { logger } from "../utils/logger";

export const envValidator = (
  schema: EnvSchema,
  envData: Record<string, unknown>
) => {
  const zodObject = z.object(schema);
  const parsed = zodObject.safeParse(envData);

  if (!parsed.success) {
    parsed.error.issues.forEach((err) => {
      logger.error(err.message);
    });

    process.exit(1);
  }

  return parsed.data as z.infer<typeof zodObject>;
};
