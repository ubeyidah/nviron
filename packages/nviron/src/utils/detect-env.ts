export const isNode = typeof process !== "undefined" && process.env;

export function detectEnvSource() {
  if (isNode) return "node";
  return "unknown";
}
