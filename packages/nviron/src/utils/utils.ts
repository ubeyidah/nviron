import { EnvData } from "../types";

export const normalizeEnv = (
  envData: EnvData,
  prefix?: string
): { normalizedEnv: EnvData; keyMap: Record<string, string> } => {
  const keyMap: Record<string, string> = {};
  const normalizedEnv: EnvData = {};

  const nonPrefixedEntries = Object.entries(envData).filter(
    ([key]) => !prefix || !key.startsWith(prefix)
  );

  for (const [originalKey, value] of nonPrefixedEntries) {
    normalizedEnv[originalKey] = value;
    keyMap[originalKey] = originalKey;
  }

  if (prefix) {
    const prefixedEntries = Object.entries(envData).filter(([key]) =>
      key.startsWith(prefix)
    );

    for (const [originalKey, value] of prefixedEntries) {
      const normalizedKey = originalKey.slice(prefix.length);

      if (Object.prototype.hasOwnProperty.call(normalizedEnv, normalizedKey)) {
        throw new Error(
          `Environment variable collision: Normalized key '${normalizedKey}' from prefixed variable '${originalKey}' conflicts with existing non-prefixed variable '${keyMap[normalizedKey]}'. Please resolve this conflict.`
        );
      }

      normalizedEnv[normalizedKey] = value;
      keyMap[normalizedKey] = originalKey;
    }
  }

  return { normalizedEnv, keyMap };
};
