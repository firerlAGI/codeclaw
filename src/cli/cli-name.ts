import path from "node:path";

export const DEFAULT_CLI_NAME = "openclaw";
export const FORK_CLI_NAME = "codeclaw";

const KNOWN_CLI_NAMES = new Set([
  DEFAULT_CLI_NAME,
  FORK_CLI_NAME,
  "openclaw.mjs",
  "codeclaw.mjs",
  "openclaw.js",
  "codeclaw.js",
]);
const CLI_PREFIX_RE = /^(?:((?:pnpm|npm|bunx|npx)\s+))?(openclaw|codeclaw)\b/;

export function resolveCliName(argv: string[] = process.argv): string {
  const envName = process.env.OPENCLAW_CLI_NAME?.trim();
  if (envName === DEFAULT_CLI_NAME || envName === FORK_CLI_NAME) {
    return envName;
  }

  for (const candidate of [process.argv0, argv[1]]) {
    if (!candidate) {
      continue;
    }
    const base = path.basename(candidate).trim();
    if (base === "openclaw.mjs" || base === "openclaw.js") {
      return DEFAULT_CLI_NAME;
    }
    if (base === "codeclaw.mjs" || base === "codeclaw.js") {
      return FORK_CLI_NAME;
    }
    if (KNOWN_CLI_NAMES.has(base)) {
      return base;
    }
  }
  return DEFAULT_CLI_NAME;
}

export function replaceCliName(command: string, cliName = resolveCliName()): string {
  if (!command.trim()) {
    return command;
  }
  if (!CLI_PREFIX_RE.test(command)) {
    return command;
  }
  return command.replace(CLI_PREFIX_RE, (_match, runner: string | undefined) => {
    return `${runner ?? ""}${cliName}`;
  });
}
