# Contributing to Portfolio Website

First off, thank you for considering contributing to this portfolio website! It's people like you that make open source such a great community.

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the repository owner.

### Our Pledge

We are committed to providing a welcoming and inspiring community for all and expect our code of conduct to be honored. Anyone who violates this code of conduct may be banned from the community.

### Our Standards

Examples of behavior that contributes to a positive environment:
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior:
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

## 🤔 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

**Bug Report Template:**
```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows 11, macOS 14]
 - Browser: [e.g. Chrome 120, Firefox 121]
 - Node.js Version: [e.g. 18.17.0]
 - Project Version: [e.g. 0.1.0]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

**Enhancement Template:**
```markdown
**Is your feature request related to a problem?**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions.

**Additional context**
Add any other context or screenshots about the feature request.
```

### Pull Requests

1. **Fork the Repository** - Create your own fork of the project
2. **Create a Branch** - Make your changes in a new git branch
3. **Follow Code Standards** - Ensure your code follows our style guidelines
4. **Write Clear Commit Messages** - Use meaningful commit messages
5. **Test Your Changes** - Make sure everything works as expected
6. **Update Documentation** - Update relevant documentation if needed
7. **Submit PR** - Create a pull request with a clear description

## 🚀 Development Setup

### Prerequisites

- Node.js (v18.17 or higher)
- npm (v9 or higher)
- Git

### Initial Setup

1. **Clone your fork:**
```bash
git clone https://github.com/YOUR-USERNAME/Portfolio-Website.git
cd Portfolio-Website/Portfolio_Website
```

2. **Add upstream remote:**
```bash
git remote add upstream https://github.com/Aspect022/Portfolio-Website.git
```

3. **Install dependencies:**
```bash
npm install
```

4. **Create environment file:**
```bash
cp .env.example .env.local
# Add your API keys
```

5. **Start development server:**
```bash
npm run dev
```

### Keeping Your Fork Updated

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

## 💻 Development Workflow

### Branch Naming Convention

Use descriptive branch names with prefixes:

- `feature/` - New features (e.g., `feature/add-blog-section`)
- `fix/` - Bug fixes (e.g., `fix/navigation-mobile`)
- `docs/` - Documentation changes (e.g., `docs/update-readme`)
- `style/` - Code style changes (e.g., `style/format-components`)
- `refactor/` - Code refactoring (e.g., `refactor/contact-form`)
- `test/` - Adding tests (e.g., `test/add-unit-tests`)
- `chore/` - Maintenance tasks (e.g., `chore/update-dependencies`)

### Creating a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### Making Changes

1. Make your changes in your feature branch
2. Follow the code style guidelines (see below)
3. Write or update tests if applicable
4. Update documentation as needed

### Committing Changes

Write clear, descriptive commit messages following this format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
git commit -m "feat(chatbot): add conversation history feature"
git commit -m "fix(contact): resolve email validation bug"
git commit -m "docs(readme): update installation instructions"
```

### Pushing Changes

```bash
git push origin feature/your-feature-name
```

## 🎨 Code Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for all new files
- Follow existing code structure and patterns
- Use functional components with hooks
- Prefer `const` over `let`, avoid `var`
- Use descriptive variable and function names
- Add JSDoc comments for complex functions
- Use proper TypeScript types, avoid `any`

**Example:**
```typescript
// Good
interface UserProfile {
  name: string;
  email: string;
  role: 'admin' | 'user';
}

const getUserProfile = async (userId: string): Promise<UserProfile> => {
  // Implementation
};

// Avoid
const getUser = async (id: any): Promise<any> => {
  // Implementation
};
```

### React Components

- Use functional components with TypeScript
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper prop typing
- Follow the existing component structure

**Example:**
```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  );
};
```

### CSS/Tailwind

- Use Tailwind CSS utility classes
- Follow existing styling patterns
- Keep responsive design in mind
- Use the project's color scheme variables
- Group related classes logically

**Example:**
```tsx
<div className="flex flex-col items-center justify-center gap-4 p-6 bg-background text-foreground md:flex-row md:gap-6 lg:p-8">
  {/* Content */}
</div>
```

### File Organization

- Place components in appropriate directories
- Keep related files together
- Use index files for clean imports
- Follow existing naming conventions

```
components/
├── ui/              # Reusable UI components
├── layout/          # Layout components
└── sections/        # Page sections
```

### Naming Conventions

- **Files:** kebab-case (e.g., `contact-form.tsx`)
- **Components:** PascalCase (e.g., `ContactForm`)
- **Functions:** camelCase (e.g., `handleSubmit`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Types/Interfaces:** PascalCase (e.g., `UserProfile`)

## ✅ Testing Guidelines

### Before Submitting

- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test responsive design on different screen sizes
- [ ] Verify dark/light mode works correctly
- [ ] Check for console errors and warnings
- [ ] Test accessibility features
- [ ] Ensure no TypeScript errors (`npm run build`)
- [ ] Run linter (`npm run lint`)

### Manual Testing Checklist

1. **Navigation**
   - All links work correctly
   - Smooth scrolling functions properly
   - Mobile menu opens/closes correctly

2. **Sections**
   - All sections render correctly
   - Content is readable and properly formatted
   - Images load properly

3. **Features**
   - Contact form sends emails successfully
   - Chatbot responds correctly
   - Theme toggle works
   - Animations play smoothly

4. **Performance**
   - Page loads quickly
   - No lag or jank in animations
   - Images are optimized

## 📝 Pull Request Process

### Before Submitting

1. Ensure your code follows the style guidelines
2. Update documentation if needed
3. Test thoroughly
4. Rebase your branch on the latest main branch
5. Write a clear PR description

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
Describe the tests you ran and how to reproduce them.

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested on multiple browsers
- [ ] I have tested responsive design
```

### Review Process

1. **Automated Checks** - CI/CD runs linting and builds
2. **Code Review** - Maintainer reviews your code
3. **Feedback** - Address any requested changes
4. **Approval** - Once approved, PR will be merged
5. **Merge** - Maintainer merges your PR

### After Your PR is Merged

1. Delete your feature branch
2. Update your local main branch
3. Celebrate! 🎉

## 🐛 Issue Labels

We use labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on
- `duplicate` - This issue or PR already exists

## 💡 Feature Requests

We welcome feature requests! Please:

1. Check if the feature has already been requested
2. Provide a clear use case
3. Explain why it would be useful
4. Be open to discussion and alternative solutions

## 🔒 Security

If you discover a security vulnerability, please email the repository owner directly instead of creating a public issue. Security issues should be handled privately until they are resolved.

## 📚 Resources

### Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com/)

### Project-Specific Resources

- [README.md](README.md) - Project overview and setup
- [CHATBOT_SETUP.md](Portfolio_Website/CHATBOT_SETUP.md) - Chatbot configuration
- [PORTFOLIO_PROJECTS.md](PORTFOLIO_PROJECTS.md) - Project metadata

## 📞 Getting Help

If you need help:

1. Check the [README](README.md) and documentation
2. Search existing issues
3. Ask in discussions
4. Create a new issue with the `question` label

## 🎯 Priorities

Current priorities for contributions:

1. Bug fixes and stability improvements
2. Performance optimizations
3. Accessibility enhancements
4. Documentation improvements
5. New features (after discussion)

## 🌟 Recognition

Contributors will be recognized in:
- The project's README
- Release notes
- GitHub contributors list

Thank you for contributing! Your efforts make this project better for everyone. 🙌

---

**Questions?** Feel free to reach out by creating an issue or discussion.

**Happy Contributing!** 🚀
