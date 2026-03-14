# CodeClaw

CodeClaw is an unofficial OpenClaw fork maintained by **firerlAGI**. It keeps the OpenClaw gateway and agent architecture, adds native `trae-cli` backend integration, and is being adapted so OpenClaw can use Trae Agent more effectively for coding workflows.

## Fork Notice

- This repository is **not** the original upstream for OpenClaw.
- This repository is **not** the original upstream for Trae Agent.
- OpenClaw is the original upstream project by **Peter Steinberger** and the OpenClaw contributors.
- Trae Agent is the original upstream project by **ByteDance Ltd. and/or its affiliates** and the Trae Agent contributors.

See `NOTICE.md` for attribution and license details. See `UPSTREAM.md` for source provenance and fork-specific scope.

## Why This Fork Exists

This fork exists to adapt OpenClaw for a coding-agent workflow centered on Trae Agent rather than relying only on the stock embedded model/runtime path.

Current fork-specific work includes:

- a built-in `trae-cli` backend option in the OpenClaw CLI agent runner
- model strings such as `trae-cli/openai/gpt-4o` that map to Trae CLI provider/model arguments
- repository rebranding and attribution work so the fork is clearly presented as a secondary-development project

## Current Status

This is an engineering fork, not an official OpenClaw release channel.

- Public source fork: `https://github.com/firerlAGI/codeclaw`
- Upstream OpenClaw project: `https://github.com/openclaw/openclaw`
- Upstream Trae Agent project: `https://github.com/bytedance/trae-agent`

## Development

```bash
pnpm install
pnpm build
pnpm codeclaw --help
```

Compatibility note: much of the internal source tree still uses historical `openclaw` identifiers. That is expected while the fork is being de-branded at the repository and package surface first.

## Upstream Resources

If you need the original project documentation, releases, or official support channels, use the upstream resources directly:

- OpenClaw docs: `https://docs.openclaw.ai`
- OpenClaw upstream repository: `https://github.com/openclaw/openclaw`
- Trae Agent upstream repository: `https://github.com/bytedance/trae-agent`

## License

This fork is distributed under the terms of the upstream OpenClaw MIT license for the copied OpenClaw codebase. Additional attribution for referenced Trae Agent work is documented in `NOTICE.md`.
