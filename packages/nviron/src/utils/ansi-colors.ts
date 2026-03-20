import { isBrowser } from "./detect-env";

// ANSI color codes
export const ANSI_COLOR_CODES = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",

  // Foreground colors
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  gray: "\x1b[90m",

  // Background colors
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
  bgGray: "\x1b[100m",
};

const wrapColor = (code: string) => {
  return (msg: string) => {
    if (isBrowser) return msg;
    return `${code}${msg}${ANSI_COLOR_CODES.reset}`;
  };
};

// Object mapping for color-safe wrapping
export const paint = {
  // Foreground colors
  black: wrapColor(ANSI_COLOR_CODES.black),
  red: wrapColor(ANSI_COLOR_CODES.red),
  green: wrapColor(ANSI_COLOR_CODES.green),
  yellow: wrapColor(ANSI_COLOR_CODES.yellow),
  blue: wrapColor(ANSI_COLOR_CODES.blue),
  magenta: wrapColor(ANSI_COLOR_CODES.magenta),
  cyan: wrapColor(ANSI_COLOR_CODES.cyan),
  white: wrapColor(ANSI_COLOR_CODES.white),
  gray: wrapColor(ANSI_COLOR_CODES.gray),

  // Background colors
  bgBlack: wrapColor(ANSI_COLOR_CODES.bgBlack),
  bgRed: wrapColor(ANSI_COLOR_CODES.bgRed),
  bgGreen: wrapColor(ANSI_COLOR_CODES.bgGreen),
  bgYellow: wrapColor(ANSI_COLOR_CODES.bgYellow),
  bgBlue: wrapColor(ANSI_COLOR_CODES.bgBlue),
  bgMagenta: wrapColor(ANSI_COLOR_CODES.bgMagenta),
  bgCyan: wrapColor(ANSI_COLOR_CODES.bgCyan),
  bgWhite: wrapColor(ANSI_COLOR_CODES.bgWhite),
  bgGray: wrapColor(ANSI_COLOR_CODES.bgGray),

  // Styles
  bold: wrapColor(ANSI_COLOR_CODES.bold),
  dim: wrapColor(ANSI_COLOR_CODES.dim),
  italic: wrapColor(ANSI_COLOR_CODES.italic),
};
