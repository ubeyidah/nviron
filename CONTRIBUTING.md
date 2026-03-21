# Contributing to Nviron

Thanks for your interest in contributing.

This guide explains how to propose changes, open pull requests, and run local checks.

## Scope

This repository contains:

- `packages/nviron`: the published environment validation library
- `docs`: documentation site
- shared config packages for linting and TypeScript

Please keep pull requests focused and avoid unrelated refactors.

## Development Setup

1. Fork and clone the repository.
2. Install dependencies:

```bash
npm install -g pnpm
pnpm install
```

3. Create a branch from `main`:

```bash
git checkout -b fix/short-description
```

Branch examples:

- `fix/browser-ansi-output`
- `feat/runtime-error-strategy`
- `docs/quickstart-update`

## Project Commands

Run from repository root:

```bash
pnpm format --check
pnpm lint
pnpm build
pnpm check-types
pnpm test
```

For package-focused work, you can use filters:

```bash
pnpm --filter nviron test
pnpm --filter docs build
```

## Coding Guidelines

- Follow existing TypeScript and linting rules.
- Prefer small, reviewable commits.
- Add or update tests when behavior changes.
- Keep documentation aligned with implementation.

## Pull Request Guidelines

Before opening a PR:

- Ensure CI-equivalent checks pass locally.
- Confirm your branch is up to date with `main`.
- Include a clear summary of what changed and why.
- Link related issues (for example `Closes #123`).

PR title examples:

- `fix: disable ANSI output in browser logs`
- `feat: add safer runtime error strategy`
- `docs: update Vite setup guide`

## Commit Message Style

Use Conventional Commits:

```text
type(scope): short description
```

Examples:

- `fix(core): handle prefixed env collisions`
- `feat(api): add optional error callback`
- `docs(readme): simplify quick start`

## Reporting Issues

Use the repository issue templates for bug reports and feature requests:

- Bug reports: include reproduction steps and environment details.
- Feature requests: describe the problem and proposed solution.

## Security

Do not commit secrets, API keys, or `.env` values.

If you discover a security issue, report it responsibly via a private channel before opening a public issue.

## License

By contributing, you agree that your contributions are licensed under the repository's license.
