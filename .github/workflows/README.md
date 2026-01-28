# GitHub Actions Workflows

This directory contains the GitHub Actions workflows for the nviron project.

## Workflows

### 1. CI (ci.yml)

**Triggers:**
- Push to `main` branch
- Pull requests to `main` branch

**Purpose:**
- Ensures code quality and correctness
- Runs on every code change

**Steps:**
1. Format checking with Prettier
2. Linting with ESLint
3. Type checking with TypeScript
4. Running tests with Vitest
5. Building packages

**Status:** This workflow must pass before merging PRs.

---

### 2. Release (release.yml)

**Triggers:**
- When a version tag is pushed (e.g., `v2.1.8`)

**Purpose:**
- Automates the release process
- Publishes to npm
- Creates GitHub releases

**Steps:**
1. Runs full CI checks
2. Builds the package
3. Publishes to npm with provenance
4. Extracts release notes from CHANGELOG.md
5. Creates a GitHub release

**Required Secrets:**
- `NPM_TOKEN` - For publishing to npm
- `GITHUB_TOKEN` - Auto-provided by GitHub

**Manual trigger:**
```bash
git tag v2.1.8
git push origin v2.1.8
```

---

### 3. Version Bump (version-bump.yml)

**Triggers:**
- Manual workflow dispatch from GitHub UI

**Purpose:**
- Simplifies version management
- Creates release preparation PRs

**Steps:**
1. Bumps version in package.json
2. Updates CHANGELOG.md with new version
3. Creates a pull request with changes
4. Provides release instructions in PR

**How to use:**
1. Go to Actions tab
2. Select "Version Bump" workflow
3. Click "Run workflow"
4. Choose version type (patch/minor/major)
5. Review and merge the created PR
6. Follow instructions to create and push the tag

---

## Workflow Permissions

The workflows require the following permissions:

### Repository Settings
- Go to: Settings → Actions → General
- Workflow permissions: **Read and write permissions**
- ✓ Allow GitHub Actions to create and approve pull requests

### Secrets Required
- `NPM_TOKEN`: Create at npmjs.com → Access Tokens
  - Type: Automation
  - Add to: Settings → Secrets and variables → Actions

---

## Common Tasks

### Release a new version

**Option A: Manual**
1. Update version: `cd packages/nviron && npm version patch`
2. Update CHANGELOG.md
3. Commit: `git commit -am "chore: bump version to v2.1.8"`
4. Push: `git push`
5. Tag: `git tag v2.1.8 && git push origin v2.1.8`

**Option B: Using workflow**
1. Actions → Version Bump → Run workflow
2. Choose version type
3. Review and merge PR
4. Tag and push (as shown in PR)

### Check workflow status
- GitHub repository → Actions tab
- Click on any workflow run to see details
- Review logs if workflows fail

### Test locally before pushing
```bash
pnpm format --check
pnpm lint
pnpm check-types
pnpm test
pnpm build
```

---

## Troubleshooting

### Release workflow fails with "401 Unauthorized"
- Check NPM_TOKEN is correctly set in repository secrets
- Verify token has "Automation" type
- Ensure you have publish permissions for the package

### Version Bump PR not created
- Verify workflow permissions include PR creation
- Check that workflow has write access to contents

### Tag doesn't trigger release
- Ensure tag format is `vX.Y.Z` (e.g., `v2.1.8`)
- Verify you pushed the tag: `git push origin v2.1.8`
- Check Actions tab for workflow run

---

For detailed setup instructions, see [CICD_SETUP.md](../../CICD_SETUP.md) in the repository root.
