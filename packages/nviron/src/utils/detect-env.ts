export const isNode = typeof process !== "undefined" && process.env;
export const isVite =
    typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.VITE_APP;

export function detectEnvSource() {
  if (isNode) return "node";
  if (isVite) return "vite";
  return "unknown";
}
