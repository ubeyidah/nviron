type CastType = "string" | "number" | "boolean";

interface EnvVarOptions {
  required?: boolean;
  default?: string | number | boolean;
  cast?: CastType;
}

type EnvSchema<T> = {
  [K in keyof T]: EnvVarOptions;
};

function defineEnv<T extends Record<string, EnvVarOptions>>(
  schema: EnvSchema<T>
) {
  const result: Record<string, any> = {};

  for (const key in schema) {
    const {
      required = false,
      default: fallback,
      cast = "string",
    } = schema[key];
    let value = process.env[key] ?? fallback;

    if (required && value === undefined) {
      throw new Error(
        `[nviron] Environment variable ${key} is required but not set.`
      );
    }

    if (value !== undefined) {
      switch (cast) {
        case "number":
          value = Number(value);
          break;
        case "boolean":
          value = value === "true" || value === true;
          break;
        case "string":
        default:
          value = String(value);
      }
    }

    result[key] = value;
  }

  return result as { [K in keyof T]: string | number | boolean };
}

export default defineEnv;
export { defineEnv };
