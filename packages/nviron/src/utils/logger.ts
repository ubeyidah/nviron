import { paint } from "./ansi-colors";

class Logger {
  header() {
    console.log(
      paint.red(
        `\n${`❌ ${
          "E" +
          paint.bgRed(paint.white("nviron")) +
          paint.red("ment Variable Missing or Invalid")
        } `}\n`,
      ),
    );
  }
  summary(total: number) {
    console.log(
      paint.bold(
        paint.yellow(
          `${total} issue${total > 1 ? "s" : ""} found in your environment configuration.\n`,
        ),
      ),
    );
  }

  issue(index: number, name: string, message: string, originalKey?: string) {
    let reason = message;

    // Slightly smarter messaging:
    if (reason.includes("required")) reason = "Required but missing";
    if (reason.includes("Expected number")) reason = "Expected a number";
    if (reason.includes("Expected string")) reason = "Expected a string";

    const keyDisplay =
      originalKey && originalKey !== name
        ? `${paint.cyan(paint.bold(originalKey))} (as ${paint.cyan(paint.bold(name))})`
        : paint.cyan(paint.bold(name));

    console.log(
      `${paint.gray(`${index}.`)} ${keyDisplay} ${paint.red("→")} ${paint.red(reason)}`,
    );
  }

  tip() {
    console.log(
      paint.blue(
        "\n💡 Check your .env file or environment variables before starting the server.",
      ),
    );
  }
}

export { Logger };
