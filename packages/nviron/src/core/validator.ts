import z, { ZodObject } from "zod";
import { EnvSchema } from "../types/env-schema";
import { Logger } from "../utils/logger";
import { EnvConfig, EnvData } from "../types";
import { normalizeEnv } from "../utils/utils";

export const validateEnv = <T extends EnvSchema>(
  schema: T,
  envData: EnvData,
  config: EnvConfig
): z.infer<ZodObject<T>> => {
  const { normalizedEnv, keyMap } = normalizeEnv(envData, config.prefix);
  const zodObject = z.object(schema);
  const parsed = zodObject.safeParse(normalizedEnv);

  if (!parsed.success) {
    const logger = new Logger();
    const issues = parsed.error.issues;

    logger.header();
    logger.summary(issues.length);

    issues.forEach((issue, i) => {
      const normalizedKey = issue.path.join(".") || "unknown";
      const originalKey = keyMap[normalizedKey] || normalizedKey;
      logger.issue(i + 1, normalizedKey, issue.message, originalKey);
    });

    logger.tip();
    process.exit(1);
  }

  return parsed.data;
};
