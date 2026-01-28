# CI/CD Setup Guide for Nviron

This guide provides comprehensive instructions for setting up automated npm package releases and GitHub releases for the nviron project.

## Overview

The nviron project uses GitHub Actions for continuous integration and automated releases. The CI/CD pipeline includes:

1. **Continuous Integration (CI)** - Runs on every push and pull request
2. **Automated Releases** - Publishes to npm and creates GitHub releases when tags are pushed
3. **Version Management** - Workflow to help create version bump PRs

## Required Secrets

### NPM_TOKEN

This token is required to publish packages to the npm registry.

#### How to Create NPM_TOKEN:

1. **Login to npmjs.com**
   - Go to [https://www.npmjs.com/](https://www.npmjs.com/)
   - Login with your account (or create one if you don't have it)

2. **Generate Access Token**
   - Click on your profile picture → "Access Tokens"
   - Click "Generate New Token" → "Classic Token"
   - Select **"Automation"** type (required for CI/CD publishing with provenance)
   - Give it a descriptive name like "GitHub Actions - nviron"
   - Copy the token (it will only be shown once!)

3. **Add Token to GitHub Repository**
   - Go to your GitHub repository: `https://github.com/ubeyidah/nviron`
   - Navigate to: Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your npm token
   - Click "Add secret"

### GITHUB_TOKEN

This is automatically provided by GitHub Actions and doesn't need manual setup. It's used for:
- Creating GitHub releases
- Commenting on PRs
- Pushing changes in workflows

## Workflow Permissions

Ensure your repository has the correct workflow permissions:

1. Go to: Settings → Actions → General
2. Under "Workflow permissions", select:
   - **"Read and write permissions"**
   - Check ✓ "Allow GitHub Actions to create and approve pull requests"
3. Click "Save"

## Package Configuration

The `packages/nviron/package.json` should include:

```json
{
  "name": "nviron",
  "version": "2.1.7",
  "description": "Lightweight, type-safe environment variable management library",
  "repository": {
    "type": "git",
    "url": "https://github.com/ubeyidah/nviron.git",
    "directory": "packages/nviron"
  },
  "homepage": "https://nviron.vercel.app",
  "bugs": {
    "url": "https://github.com/ubeyidah/nviron/issues"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "files": [
    "dist",
    "src",
    "README.md",
    "LICENSE"
  ]
}
```

## Workflows

### 1. CI Workflow (`.github/workflows/ci.yml`)

**Trigger:** Runs on every push to `main` and all pull requests

**Purpose:** 
- Format checking
- Linting
- Type checking
- Running tests
- Building packages

**No secrets required** - Uses only public actions

### 2. Release Workflow (`.github/workflows/release.yml`)

**Trigger:** Runs when a version tag (e.g., `v2.1.8`) is pushed

**Purpose:**
- Runs full CI checks
- Builds the package
- Publishes to npm with provenance
- Creates a GitHub release with changelog

**Required secrets:**
- `NPM_TOKEN` - For publishing to npm
- `GITHUB_TOKEN` - Auto-provided for GitHub releases

### 3. Version Bump Workflow (`.github/workflows/version-bump.yml`)

**Trigger:** Manual workflow dispatch from GitHub Actions tab

**Purpose:**
- Creates a PR with version bump
- Updates package.json
- Updates CHANGELOG.md
- Provides release instructions

**Required permissions:**
- Write access to contents
- Pull request creation

## Release Process

### Option 1: Manual Release (Recommended for learning)

1. **Update version in package.json**
   ```bash
   cd packages/nviron
   npm version patch  # or minor, or major
   ```

2. **Update CHANGELOG.md**
   - Add a new section for the version
   - Document all changes

3. **Commit changes**
   ```bash
   git add .
   git commit -m "chore: bump version to v2.1.8"
   git push origin main
   ```

4. **Create and push tag**
   ```bash
   git tag v2.1.8
   git push origin v2.1.8
   ```

5. **Watch the release workflow**
   - Go to Actions tab in GitHub
   - The release workflow will run automatically
   - Package will be published to npm
   - GitHub release will be created

### Option 2: Using Version Bump Workflow (Automated)

1. **Go to GitHub Actions**
   - Navigate to: Actions → Version Bump

2. **Run workflow**
   - Click "Run workflow"
   - Select version type (patch/minor/major)
   - Click "Run workflow"

3. **Review and merge PR**
   - A PR will be created automatically
   - Review the changes
   - Merge the PR

4. **Create and push tag**
   - Follow the instructions in the PR description
   - Create and push the version tag
   - Release workflow runs automatically

## Verifying Setup

### Test NPM_TOKEN
```bash
# This will be done automatically by the release workflow
npm publish --dry-run
```

### Test Release Workflow Locally (without publishing)

You can test the build and checks locally:

```bash
# Install dependencies
pnpm install

# Run all checks
pnpm format --check
pnpm lint
pnpm check-types
pnpm test

# Build packages
pnpm build

# Check what would be published
cd packages/nviron
npm pack --dry-run
```

## Troubleshooting

### NPM Publish Failed: 401 Unauthorized
- Verify `NPM_TOKEN` secret is set correctly
- Ensure token has "Automation" type
- Check token hasn't expired
- Verify you have publish permissions for the package

### GitHub Release Failed: 403 Forbidden
- Check workflow permissions (Settings → Actions → General)
- Ensure "Read and write permissions" is enabled
- Verify "Allow GitHub Actions to create and approve pull requests" is checked

### Version Already Published
- Check if version already exists on npm: `npm view nviron versions`
- Bump version number if needed
- Ensure version in package.json matches the git tag

### Workflow Not Triggering
- Ensure tag follows pattern `v*` (e.g., `v2.1.8`)
- Check workflow file syntax
- Verify you pushed the tag: `git push origin <tagname>`

## Best Practices

1. **Semantic Versioning**
   - PATCH (x.x.X): Bug fixes, no breaking changes
   - MINOR (x.X.x): New features, backward compatible
   - MAJOR (X.x.x): Breaking changes

2. **Changelog Management**
   - Always update CHANGELOG.md before releasing
   - Use clear, descriptive messages
   - Group changes by type (Features, Fixes, Breaking Changes)

3. **Testing Before Release**
   - Always run full test suite locally
   - Verify build succeeds
   - Test in a real project if possible

4. **Git Tags**
   - Use annotated tags: `git tag -a v2.1.8 -m "Release v2.1.8"`
   - Tag format must be `vX.Y.Z`
   - Never delete or move tags after pushing

## Additional Resources

- [npm Publishing Guide](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## Support

If you encounter issues with CI/CD setup:
1. Check workflow runs in the Actions tab
2. Review workflow logs for detailed error messages
3. Verify all secrets and permissions are configured
4. Open an issue if problems persist
