#!/usr/bin/env node

process.env.OPENCLAW_CLI_NAME ??= "codeclaw";

await import("./openclaw.mjs");
