#!/bin/bash

# CI/CD Setup Verification Script for Nviron
# This script helps verify that all necessary configurations are in place

set -e

echo "🔍 Nviron CI/CD Setup Verification"
echo "=================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✓${NC} $2"
    else
        echo -e "${RED}✗${NC} $2"
    fi
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: Must be run from repository root${NC}"
    exit 1
fi

echo "📦 Checking Package Configuration..."
echo ""

# Check package.json has required fields
HAS_REPO=$(node -p "Boolean(require('./packages/nviron/package.json').repository)" 2>/dev/null || echo "false")
HAS_HOMEPAGE=$(node -p "Boolean(require('./packages/nviron/package.json').homepage)" 2>/dev/null || echo "false")
HAS_DESCRIPTION=$(node -p "Boolean(require('./packages/nviron/package.json').description)" 2>/dev/null || echo "false")
HAS_KEYWORDS=$(node -p "Array.isArray(require('./packages/nviron/package.json').keywords) && require('./packages/nviron/package.json').keywords.length > 0" 2>/dev/null || echo "false")

print_status $([[ "$HAS_REPO" == "true" ]] && echo 0 || echo 1) "Repository field configured"
print_status $([[ "$HAS_HOMEPAGE" == "true" ]] && echo 0 || echo 1) "Homepage field configured"
print_status $([[ "$HAS_DESCRIPTION" == "true" ]] && echo 0 || echo 1) "Description field configured"
print_status $([[ "$HAS_KEYWORDS" == "true" ]] && echo 0 || echo 1) "Keywords configured"

echo ""
echo "🔧 Checking Workflow Files..."
echo ""

# Check workflow files exist
print_status $([ -f ".github/workflows/ci.yml" ] && echo 0 || echo 1) "CI workflow exists"
print_status $([ -f ".github/workflows/release.yml" ] && echo 0 || echo 1) "Release workflow exists"
print_status $([ -f ".github/workflows/version-bump.yml" ] && echo 0 || echo 1) "Version bump workflow exists"

echo ""
echo "📚 Checking Documentation..."
echo ""

print_status $([ -f "CICD_SETUP.md" ] && echo 0 || echo 1) "CI/CD setup guide exists"
print_status $([ -f "CHANGELOG.md" ] && echo 0 || echo 1) "Changelog exists"

echo ""
echo "🔨 Testing Build..."
echo ""

# Test if dependencies can be installed
echo "Installing dependencies..."
if pnpm install --frozen-lockfile > /dev/null 2>&1; then
    print_status 0 "Dependencies install successfully"
else
    print_status 1 "Dependencies installation failed"
fi

# Test if build works
echo "Testing build..."
if pnpm build > /dev/null 2>&1; then
    print_status 0 "Build completes successfully"
else
    print_status 1 "Build failed"
fi

# Check if dist folder was created
print_status $([ -d "packages/nviron/dist" ] && echo 0 || echo 1) "Build output (dist/) created"

echo ""
echo "🔐 Required Secrets Check..."
echo ""

echo -e "${YELLOW}⚠${NC}  The following secrets need to be configured in GitHub:"
echo "   - NPM_TOKEN (for publishing to npm)"
echo "   - GITHUB_TOKEN (automatically provided by GitHub)"
echo ""
echo "   To check if secrets are configured:"
echo "   https://github.com/ubeyidah/nviron/settings/secrets/actions"

echo ""
echo "✅ Next Steps:"
echo ""
echo "1. Configure NPM_TOKEN secret in GitHub repository settings"
echo "2. Ensure GitHub Actions has read/write permissions"
echo "3. Review CICD_SETUP.md for detailed instructions"
echo "4. Test the release workflow by creating a version tag"
echo ""
echo "For detailed setup instructions, see: CICD_SETUP.md"
