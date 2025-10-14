// ANSI color codes
export const ansi = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  inverse: "\x1b[7m",
  noInverse: "\x1b[27m",

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

// Helper functions for color-safe wrapping
export const paint = {
  // Foreground colors
  black: (msg: string) => `${ansi.black}${msg}${ansi.reset}`,
  red: (msg: string) => `${ansi.red}${msg}${ansi.reset}`,
  green: (msg: string) => `${ansi.green}${msg}${ansi.reset}`,
  yellow: (msg: string) => `${ansi.yellow}${msg}${ansi.reset}`,
  blue: (msg: string) => `${ansi.blue}${msg}${ansi.reset}`,
  magenta: (msg: string) => `${ansi.magenta}${msg}${ansi.reset}`,
  cyan: (msg: string) => `${ansi.cyan}${msg}${ansi.reset}`,
  white: (msg: string) => `${ansi.white}${msg}${ansi.reset}`,
  gray: (msg: string) => `${ansi.gray}${msg}${ansi.reset}`,

  // Background colors
  bgBlack: (msg: string) => `${ansi.bgBlack}${msg}${ansi.reset}`,
  bgRed: (msg: string) => `${ansi.bgRed}${msg}${ansi.reset}`,
  bgGreen: (msg: string) => `${ansi.bgGreen}${msg}${ansi.reset}`,
  bgYellow: (msg: string) => `${ansi.bgYellow}${msg}${ansi.reset}`,
  bgBlue: (msg: string) => `${ansi.bgBlue}${msg}${ansi.reset}`,
  bgMagenta: (msg: string) => `${ansi.bgMagenta}${msg}${ansi.reset}`,
  bgCyan: (msg: string) => `${ansi.bgCyan}${msg}${ansi.reset}`,
  bgWhite: (msg: string) => `${ansi.bgWhite}${msg}${ansi.reset}`,
  bgGray: (msg: string) => `${ansi.bgGray}${msg}${ansi.reset}`,

  // Styles
  bold: (msg: string) => `${ansi.bold}${msg}${ansi.reset}`,
  dim: (msg: string) => `${ansi.dim}${msg}${ansi.reset}`,
  italic: (msg: string) => `${ansi.italic}${msg}${ansi.reset}`,
  underline: (msg: string) => `${ansi.underline}${msg}${ansi.reset}`,
  inverse: (msg: string) =>
    `${ansi.inverse}${msg}${ansi.noInverse}${ansi.reset}`,
};
