import { EnvSchema } from "../types/env-schema";
import { envValidator } from "./validator";

const defineEnv = (schema: EnvSchema) => {
  return envValidator(schema, process.env);
};

export default defineEnv;
