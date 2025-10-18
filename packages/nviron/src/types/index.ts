import z from "zod";
import { EnvSchema } from "./env-schema";

export type EnvData = Record<string, unknown>;
export interface EnvConfig {
  source?: EnvData;
  prefix?: string;
}

export type ValidatedEnv<T extends EnvSchema> = z.infer<z.ZodObject<T>>;
