export const isBrowser =
  typeof window !== "undefined" && typeof document !== "undefined";

export const isNode =
  typeof process !== "undefined" && !!process.versions?.node && !isBrowser;

export function detectEnvSource() {
  if (isNode) return "node";
  return "browser";
}
