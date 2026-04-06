# Contributing to Eduboost

Welcome to Eduboost! 🎉 We're thrilled that you're considering contributing to our project. This document will guide you through the process of contributing to make it as smooth as possible.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Commit Message Conventions](#commit-message-conventions)
- [Reporting Issues](#reporting-issues)

---

## Code of Conduct

This project and everyone participating in it is governed by our commitment to provide a friendly, safe, and welcoming environment for all contributors.

### Our Standards

**Expected behavior:**
- Be respectful and inclusive in your communication
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what's best for the community and the project
- Show empathy towards other community members

**Unacceptable behavior:**
- Harassment, discrimination, or intimidation of any kind
- Trolling, insulting/derogatory comments, or personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## How to Contribute

### Getting Started

1. **Fork the repository**
   ```bash
   # Click the "Fork" button at the top right of the repository page
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Eduboost.git
   cd Eduboost
   ```

3. **Add the upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/Eduboost.git
   ```

4. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix-name
   ```

5. **Make your changes and commit them**

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request** from your fork to the main repository

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug fixes** - Fix issues reported by users
- ✨ **New features** - Add new functionality
- 📚 **Documentation** - Improve docs, tutorials, or examples
- 🎨 **UI/UX improvements** - Enhance the user interface
- ⚡ **Performance improvements** - Optimize code execution
- 🧪 **Tests** - Add or improve test coverage
- 🔧 **Refactoring** - Clean up and improve code quality

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Eduboost.git
   cd Eduboost
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Code Quality

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## Pull Request Guidelines

Before submitting a pull request, please ensure:

### Before Submitting

- [ ] Your code follows the existing code style
- [ ] All tests pass locally
- [ ] You've added tests for new functionality
- [ ] Documentation is updated if needed
- [ ] Your branch is up to date with the main branch
- [ ] Commit messages follow our conventions

### PR Description

Your pull request description should include:

1. **What** - A clear description of what changes were made
2. **Why** - The motivation behind the changes
3. **How** - How the changes solve the problem
4. **Testing** - Steps to test the changes

### Review Process

1. A maintainer will review your PR within a few days
2. Address any requested changes promptly
3. Once approved, a maintainer will merge your PR

### PR Title Format

Use one of these prefixes for your PR title:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat: add user authentication system`

## Commit Message Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. This helps us generate changelogs and maintain a clear project history.

### Commit Message Structure

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Description |
|------|-------------|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation only changes |
| `style` | Changes that don't affect code meaning (white-space, formatting) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Code change that improves performance |
| `test` | Adding or correcting tests |
| `chore` | Changes to build process, dependencies, etc. |

### Examples

```bash
# Simple commit
feat: add login button

# Commit with scope
feat(auth): implement JWT authentication

# Commit with body
fix(api): resolve user data loading issue

The user profile was not loading correctly when
accessing the dashboard. This was caused by
an incorrect API endpoint.

Closes #123

# Commit with breaking change
feat!: remove deprecated API endpoints

BREAKING CHANGE: The /v1/api/users endpoint has been removed.
Use /v2/api/users instead.
```

## Reporting Issues

Found a bug or have a feature request? We'd love to hear from you!

### Before Creating an Issue

- Search existing issues to avoid duplicates
- Check if the issue has already been fixed in the latest version
- Gather relevant information (error messages, screenshots, etc.)

### Bug Report Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. iOS, Windows, Linux]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.
```

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

### Security Issues

**⚠️ Important:** If you discover a security vulnerability, please do not create a public issue. Instead, email us directly at security@eduboost.com with details about the vulnerability.

---

## Questions?

If you have any questions or need help getting started, feel free to:

- Open a [Discussion](https://github.com/YOUR_USERNAME/Eduboost/discussions)
- Join our community chat
- Contact the maintainers

Thank you for contributing to Eduboost! 🚀
