import { EnvData } from "../types";

export const normalizeEnv = (envData: EnvData, prefix?: string): EnvData => {
  if (!prefix) return envData;

  const prefixed = Object.entries(envData)
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, value]) => [key.slice(prefix.length), value]);

  return {
    ...Object.fromEntries(
      Object.entries(envData).filter(([key]) => !key.startsWith(prefix))
    ),
    ...Object.fromEntries(prefixed),
  };
};
