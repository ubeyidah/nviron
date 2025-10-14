import { EnvSchema } from "../types/env-schema";
import { envValidator } from "./validator";

const defineEnv = <T extends EnvSchema>(schema: T) => {
  return envValidator(schema, process.env);
};

export default defineEnv;
