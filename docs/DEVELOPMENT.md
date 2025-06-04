---
title: Development Guide
description: Complete guide for developing and contributing to the MDMD project
---

# MDMD Development Guide

This guide covers the complete development workflow for the MDMD (Membrane Design MarkDown) project, including both plugin development and documentation maintenance.

## Prerequisites

- Node.js (v18 or later)
- npm
- Git

## Repository Structure

```
mdmd/
├── src/                    # TypeScript plugin source code
├── docs/                   # MyST documentation source
├── MDMD_Specification/     # Core MDMD specification
├── AgentOps/              # Development methodology docs
├── .github/workflows/     # CI/CD automation
└── dist/                  # Compiled plugin output
```

## Plugin Development

### Building the Plugin

The MDMD MyST plugin is written in TypeScript and provides `{unit}` and `{composition}` directives for MyST Markdown.

```bash
# Install dependencies
npm install

# Build the plugin
npm run build

# Test with example document
myst build test-doc.myst.md --html
```

### Plugin Architecture

- **`src/index.ts`**: Main plugin entry point
- **`src/directives/unitDirective.ts`**: Implementation of `{unit}` directive
- **`src/directives/compositionDirective.ts`**: Implementation of `{composition}` directive

### Testing Changes

After making changes to the plugin:

1. Rebuild: `npm run build`
2. Test with: `myst build test-doc.myst.md --html`
3. Check output in `_build/html/`

## Documentation Development

The project documentation is built with MyST and includes specifications, concepts, and usage examples.

### Local Development Workflow

**Step 1: Build Documentation**
```bash
cd docs
npx myst build --html
```

**Step 2: Serve Locally**
```bash
npx serve docs/_build/html -p 3003
```

**Step 3: Access Documentation**
Open `http://localhost:3003` in your browser.

### Documentation Structure

```
docs/
├── index.md                    # Main landing page
├── myst.yml                   # MyST configuration
├── Concepts/                  # MDMD philosophy and concepts
├── Compositions/              # Composition directive examples
├── Units/                     # Unit directive examples
├── MDMD_Specification/        # Symlinked specification docs
└── _build/                    # Generated output (gitignored)
```

### Making Documentation Changes

1. Edit MyST Markdown files in `docs/`
2. Rebuild: `cd docs && npx myst build --html`
3. Test locally: `npx serve docs/_build/html -p 3003`
4. Commit and push changes

### MyST Configuration

Key configuration in `docs/myst.yml`:

- **Site settings**: Title, navigation, project metadata
- **Base URL**: Configured for GitHub Pages deployment (`/mdmd`)
- **Navigation**: Structured menu for documentation sections

## Deployment

### Automatic Deployment

Documentation is automatically deployed to GitHub Pages via GitHub Actions:

1. **Trigger**: Push to main branch
2. **Build**: MyST with `BASE_URL=/mdmd` for GitHub Pages
3. **Deploy**: Static HTML to `https://yourorg.github.io/mdmd`

### Manual Deployment

For testing deployment configuration:

```bash
# Build with GitHub Pages base URL
cd docs
BASE_URL=/mdmd npx myst build --html

# Verify output
ls _build/html/
```

## File Management

### Gitignore Strategy

Build artifacts are gitignored following best practices:

- `docs/_build/` - MyST build output
- `dist/` - Compiled plugin
- `node_modules/` - Dependencies

This ensures:
- Clean repository focused on source
- Reproducible builds
- No merge conflicts on generated files

### Key Files

- **Source**: All `.md`, `.ts`, `.yml` files
- **Generated**: `_build/`, `dist/` directories
- **Configuration**: `package.json`, `tsconfig.json`, `myst.yml`

## Development Best Practices

### For Plugin Development

1. Follow TypeScript best practices
2. Test with example documents
3. Maintain backward compatibility
4. Document directive options

### For Documentation

1. Follow MyST Markdown syntax
2. Use proper YAML frontmatter
3. Cross-reference with `[[id]]` links
4. Test local builds before pushing

### For Specifications

1. Treat MDMD files as source code
2. Ensure internal links are valid
3. Validate syntax and structure
4. Maintain consistency across files

## Troubleshooting

### Common Issues

**Build Errors**
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review TypeScript compilation errors

**Documentation Issues**
- Validate YAML frontmatter syntax
- Check MyST directive syntax
- Verify internal links work

**Deployment Problems**
- Check GitHub Actions logs
- Verify base URL configuration
- Test local builds match deployment

### Getting Help

1. Check existing issues in the repository
2. Review the MDMD specification for guidance
3. Consult MyST documentation for syntax questions
4. Open an issue for bugs or feature requests

## Contributing

See the main README for contribution guidelines. Focus on:

1. **Quality over speed**: Ensure thorough testing
2. **Documentation**: Update docs for any changes
3. **Consistency**: Follow existing patterns and conventions
4. **Open source**: Keep the project accessible and maintainable
