# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project generally follows [Semantic Versioning](https://semver.org/).

## [2.1.9] - 2026-03-21

### Changed

- Reduced `packages/nviron/README.md` to a concise docs-first format.
- Updated package metadata with improved keywords and repository fields.

### Fixed

- CI type-check reliability for docs by including generated docs source in build outputs.

## [2.1.8] - 2026-03-21

### Changed

- Streamlined root `README.md` and moved detailed guidance to docs site.

## [2.1.7] - 2025-11-18

### Fixed

- Disabled ANSI color wrapping in browser environments to avoid raw escape codes in console output.
- Improved environment detection to distinguish browser and Node runtimes more safely.

## [2.1.6] - 2025-11-15

### Fixed

- Updated Vite/browser behavior to throw validation errors instead of exiting the process.

## [2.1.5] - 2025-10-20

### Fixed

- Rebuilt and republished package artifacts to include required build output.

## [2.1.4] - 2025-10-20

### Fixed

- Validation error output now shows both original and normalized env keys (for example `VITE_PORT` and `PORT`).

### Internal

- Updated env normalization mapping and validator reporting flow.

## [2.1.3] - 2025-10-18

### Added

- Optional `EnvConfig` argument for `defineEnv` with `source` and `prefix` support.
- Type exports for `EnvConfig`, `EnvSchema`, and `ValidatedEnv`.
- Re-export of `z` for simplified imports.

## [2.1.1] - 2025-10-16

### Documentation

- Added package README to published package output.

## [2.1.0] - 2025-10-16

### Changed

- Merged internal core package into main `nviron` package.
- Refactored logger to class-based structure.
- Improved package structure and internal organization.

## [2.0.0] - 2025-10-15

### Breaking

- Moved to Zod-first schema validation and monorepo architecture.

### Added

- Dedicated documentation site.
- Stronger type-safe environment configuration workflow.

## [1.5.0] - 2025-08-22

### Added

- Introduced `defineEnv` for centralized environment configuration.

## [1.4.0] - 2025-08-22

### Added

- Early improvements around typed env setup and package synchronization.

## [1.3.1] - 2025-08-22

### Changed

- Patch release with no notable feature changes.

## [1.3.0] - 2025-08-22

### Changed

- Version synchronization improvements.

## [1.2.1] - 2025-07-14

### Fixed

- Type definitions and TypeScript support updates.

## [1.2.0] - 2025-07-12

### Added

- Support for default import usage.

## [1.1.1] - 2025-07-12

### Changed

- Patch release with no notable feature changes.

## [1.1.0] - 2025-07-12

### Added

- Initial test coverage with Vitest.
- TypeScript project setup.
- First `env` utility implementation.

[2.1.9]: https://github.com/ubeyidah/nviron/compare/v2.1.8...v2.1.9
[2.1.8]: https://github.com/ubeyidah/nviron/compare/v2.1.7...v2.1.8
[2.1.7]: https://github.com/ubeyidah/nviron/compare/v2.1.6...v2.1.7
[2.1.6]: https://github.com/ubeyidah/nviron/compare/v2.1.5...v2.1.6
[2.1.5]: https://github.com/ubeyidah/nviron/compare/v2.1.4...v2.1.5
[2.1.4]: https://github.com/ubeyidah/nviron/compare/v2.1.3...v2.1.4
[2.1.3]: https://github.com/ubeyidah/nviron/compare/v2.1.2...v2.1.3
[2.1.1]: https://github.com/ubeyidah/nviron/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/ubeyidah/nviron/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/ubeyidah/nviron/compare/v1.5.0...v2.0.0
[1.5.0]: https://github.com/ubeyidah/nviron/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/ubeyidah/nviron/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/ubeyidah/nviron/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/ubeyidah/nviron/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/ubeyidah/nviron/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/ubeyidah/nviron/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/ubeyidah/nviron/compare/v1.1.0...v1.1.1
