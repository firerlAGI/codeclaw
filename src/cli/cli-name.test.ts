import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { FORK_CLI_NAME, resolveCliName } from "./cli-name.js";

describe("resolveCliName", () => {
  let originalEnvCliName: string | undefined;

  beforeEach(() => {
    originalEnvCliName = process.env.OPENCLAW_CLI_NAME;
    delete process.env.OPENCLAW_CLI_NAME;
  });

  afterEach(() => {
    if (originalEnvCliName === undefined) {
      delete process.env.OPENCLAW_CLI_NAME;
    } else {
      process.env.OPENCLAW_CLI_NAME = originalEnvCliName;
    }
  });

  it("prefers the explicit environment override for the forked CLI name", () => {
    process.env.OPENCLAW_CLI_NAME = FORK_CLI_NAME;

    expect(resolveCliName(["node", "scripts/run-node.mjs"])).toBe("codeclaw");
  });

  it("detects the fork wrapper basename", () => {
    expect(resolveCliName(["node", "/tmp/codeclaw.mjs"])).toBe("codeclaw");
  });
});
