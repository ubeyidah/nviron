export type EnvData = Record<string, unknown>;
export interface EnvConfig {
  source?: EnvData;
  prefix?: string;
}
