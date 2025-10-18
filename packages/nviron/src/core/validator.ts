import z, { ZodObject } from "zod";
import { EnvSchema } from "../types/env-schema";
import { Logger } from "../utils/logger";
import { EnvData } from "../types";

export const envValidator = <T extends EnvSchema>(
  schema: T,
  envData: EnvData
): z.infer<ZodObject<T>> => {
  const zodObject = z.object(schema);
  const parsed = zodObject.safeParse(envData);

  if (!parsed.success) {
    const logger = new Logger();
    const issues = parsed.error.issues;

    logger.header();
    logger.summary(issues.length);

    issues.forEach((issue, i) => {
      const field = issue.path.join(".") || "unknown";
      logger.issue(i + 1, field, issue.message);
    });

    logger.tip();
    process.exit(1);
  }

  return parsed.data;
};
