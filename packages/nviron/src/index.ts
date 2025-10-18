import defineEnv from "./core/define-env";
import z from "zod";

export default defineEnv;
export { defineEnv, z };

// type export
export type { EnvConfig, ValidatedEnv } from "./types";
export type { EnvSchema } from "./types/env-schema";
