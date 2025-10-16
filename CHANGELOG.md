# Changelog

All notable changes to this project are documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://github.com/ubeyidah/nviron/compare/v2.0.0...v2.1.0) (2025-10-16)

### Refactors

- Merge internal core package directly into main Nviron package
- Convert logger object into class-based structure for extensibility and better color-coded output
- Improved internal directory structure and code clarity

### Chores

- Clean tsconfig and package structure
- Remove unused workspace dependency on `@nviron/core`

**Full Changelog**: https://github.com/ubeyidah/nviron/compare/v2.0.0...v2.1.0

## [2.0.0](https://github.com/ubeyidah/nviron/compare/v1.5.0...v2.0.0) (2025-10-15)

### Breaking Changes

- Refactored `defineEnv` from a custom object to a fully Zod-validated structure
- Migrated the codebase to a monorepo with Turborepo and updated folder structure
- Improved documentation with a dedicated docs page
- Replaced generic logging with structured, color-coded output
- Full type safety is now enforced across the codebase

### Features

- Centralized and typed environment configuration using `defineEnv` with Zod validation
- Enhanced error diagnostics with clear, color-coded messages
- Documentation site added ([https://nviron.vercel.app](https://nviron.vercel.app))
- Monorepo structure supports scalable development

### Bug Fixes

- Corrected type definitions and fixed validation issues
- Ensured consistent versioning with npm package

---

## [1.5.0](https://github.com/ubeyidah/nviron/compare/v1.4.0...v1.5.0) (2025-08-22)

### Features

- Added `defineEnv` for centralized and typed environment configuration ([0a71a88](https://github.com/ubeyidah/nviron/commit/0a71a881ba75f71765d1450432cb987856470f8e))
- Version synchronized with npm ([373fb53](https://github.com/ubeyidah/nviron/commit/373fb530a408407248735b646f96ff9170553b3c))

---

## [1.4.0](https://github.com/ubeyidah/nviron/compare/v1.3.0...v1.4.0) (2025-08-22)

### Features

- Added `defineEnv` for centralized and typed environment configuration ([0a71a88](https://github.com/ubeyidah/nviron/commit/0a71a881ba75f71765d1450432cb987856470f8e))
- Version synchronized with npm ([373fb53](https://github.com/ubeyidah/nviron/commit/373fb530a408407248735b646f96ff9170553b3c))

---

## [1.3.1](https://github.com/ubeyidah/envguard/compare/v1.3.0...v1.3.1) (2025-08-22)

- Patch release, no notable features

---

## [1.3.0](https://github.com/ubeyidah/envguard/compare/v1.2.2...v1.3.0) (2025-08-22)

### Features

- Version synchronized with npm ([373fb53](https://github.com/ubeyidah/envguard/commit/373fb530a408407248735b646f96ff9170553b3c))

---

## [1.2.1](https://github.com/ubeyidah/envguard/compare/v1.2.0...v1.2.1) (2025-07-14)

- Fixed type definitions
- Added TypeScript support

---

## [1.2.0](https://github.com/ubeyidah/envguard/compare/v1.1.1...v1.2.0) (2025-07-12)

### Features

- Added support for default import ([1d64572](https://github.com/ubeyidah/envguard/commit/1d64572bdd5f76febd242c28184c7eaa2356103b))

---

## [1.1.1](https://github.com/ubeyidah/envguard/compare/v1.1.0...v1.1.1) (2025-07-12)

- Patch release, no notable features

---

## [1.1.0](https://github.com/ubeyidah/envguard/compare/v1.0.0...v1.1.0) (2025-07-12)

### Features

- Added tests for `env` function with Vitest ([4dd0df2](https://github.com/ubeyidah/envguard/commit/4dd0df2))
- Added `tsconfig` ([779ea46](https://github.com/ubeyidah/envguard/commit/779ea46))
- Created `env` function ([f341dd7](https://github.com/ubeyidah/envguard/commit/f341dd7))
