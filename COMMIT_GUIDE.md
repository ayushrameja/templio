# Commit Guide

## Making a Commit

Just use the normal git command:

```bash
git commit
```

This will automatically launch an interactive prompt that asks you:

### 1. **Type** (What is it?)
- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation only changes
- `style` - Code style changes (formatting, missing semicolons, etc.)
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `build` - Changes to build system or dependencies
- `ci` - CI/CD configuration changes
- `chore` - Other changes (maintenance, tooling, etc.)
- `revert` - Reverts a previous commit

### 2. **Scope** (What part of code?)
Examples: `auth`, `api`, `ui`, `database`, `dependencies`, `config`

### 3. **Short description**
Brief summary (max 100 chars)

### 4. **Long description** (Optional)
Detailed explanation if needed

### 5. **Breaking changes?** (Optional)
Any breaking changes

### 6. **Issues closed?** (Optional)
Related issue numbers

## What Happens Before Commit?

The pre-commit hook automatically:

1. ✅ **Linting check** - Fails if any errors
2. 🧪 **Runs tests** - Fails if any test fails
3. 📊 **Shows coverage** - Displays test coverage
4. 🎨 **Auto-formats** - Runs Prettier and ESLint --fix on staged files

## Example Commit Messages

```
feat(auth): add social login support

Added Google and GitHub OAuth integration for user authentication.
Includes new AuthProvider component and updated login page.
```

```
fix(api): resolve race condition in data fetching

Fixed issue where concurrent API calls could return stale data.
Added proper request cancellation and debouncing.
```

```
chore(dependencies): update Next.js to v16

Updated Next.js and related packages to latest versions.
```

## Quick Commit (Skip Interactive Prompt)

If you want to skip the interactive prompt and write the message directly:

```bash
git commit -m "feat(scope): your message"
```

The commit-msg hook will validate the format, so make sure it follows the convention!

