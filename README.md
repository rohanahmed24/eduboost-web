<div align="center">

<img src="https://raw.githubusercontent.com/rohanahmed24/eduboost-web/main/web/public/logo.png" alt="Eduboost Logo" width="200" />

# Eduboost

### *Modern Online Learning Platform*

[![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
<br/>
[![Build](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://github.com/rohanahmed24/eduboost-web/actions)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.38.0-FF4154?style=flat-square&logo=framer)](https://www.framer.com/motion/)

[Live Demo](https://eduboost-web.vercel.app) · [Report Bug](https://github.com/rohanahmed24/eduboost-web/issues) · [Request Feature](https://github.com/rohanahmed24/eduboost-web/issues)

</div>

---

## About Eduboost

**Eduboost** is a modern, cutting-edge online learning platform built with the latest web technologies. It provides an immersive educational experience with beautiful animations, responsive design, and seamless user interactions.

Whether you're a student looking to expand your knowledge or an educator wanting to share your expertise, Eduboost offers a powerful platform that makes learning engaging and accessible.

### Key Highlights

- Next.js 16 with App Router for optimal performance
- Tailwind CSS 4 for modern, utility-first styling
- React 19 with latest concurrent features
- Framer Motion for smooth, captivating animations
- Fully Responsive design for all devices
- Accessible UI following WCAG guidelines

---

## Features

| Feature | Description | Status |
|---------|-------------|--------|
| Hero Section | Animated hero with falling pill stack effects | ✅ |
| Course Catalog | Browse and explore courses with detailed views | ✅ |
| Teacher Profiles | Instructor showcases with expertise areas | ✅ |
| Testimonials | Student success stories and reviews | ✅ |
| FAQ Section | Comprehensive frequently asked questions | ✅ |
| Pricing Plans | Flexible subscription options | ✅ |
| Motion Effects | Scroll-triggered animations and reveals | ✅ |
| Modern UI | Clean, contemporary design aesthetic | ✅ |

### Design Features

- **Scroll Paint Animations** - Text color transitions on scroll
- **Reveal Animations** - Elements fade in as you navigate
- **Reduced Motion Support** - Respects user accessibility preferences
- **Bento Grid Layout** - Modern card-based layouts
- **Pill CTA Buttons** - Rounded, engaging call-to-action elements

---

## Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.2.1 | React Framework with App Router |
| [React](https://react.dev/) | 19.2.4 | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | 5.0+ | Type Safety |

### Styling & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | 4.0 | Utility-first CSS |
| [PostCSS](https://postcss.org/) | - | CSS Processing |

### Animation
| Technology | Version | Purpose |
|------------|---------|---------|
| [Framer Motion](https://www.framer.com/motion/) | 12.38.0 | React Animation Library |

### Development Tools
| Technology | Purpose |
|------------|---------|
| [ESLint](https://eslint.org/) | Code Linting |
| [ESLint Config Next](https://nextjs.org/docs/app/building-your-application/configuring/eslint) | Next.js ESLint Rules |

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9.x or later (or yarn/pnpm)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/rohanahmed24/eduboost-web.git
cd eduboost-web
```

2. **Navigate to the web directory**

```bash
cd web
```

3. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

4. **Start the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## Usage Guide

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

### Project Structure

```
eduboost-web/
├── web/
│   ├── app/                    # Next.js App Router
│   │   ├── _components/        # Reusable React components
│   │   │   ├── motion/         # Animation components
│   │   │   ├── layout/         # Layout components
│   │   │   ├── course-detail/  # Course detail components
│   │   │   ├── teacher-detail/ # Teacher detail components
│   │   │   └── pricing/        # Pricing components
│   │   ├── _lib/               # Utility functions & data
│   │   ├── courses/            # Courses page & dynamic routes
│   │   ├── teachers/           # Teachers page & dynamic routes
│   │   ├── about/              # About page
│   │   ├── page.tsx            # Home page
│   │   └── layout.tsx          # Root layout
│   ├── public/                 # Static assets
│   ├── next.config.ts          # Next.js configuration
│   ├── tsconfig.json           # TypeScript configuration
│   └── package.json            # Dependencies
└── README.md
```

### Customization

1. **Update branding** in `app/_lib/eb-asset.ts`
2. **Modify courses** in `app/_lib/courses.ts`
3. **Update teachers** in `app/_lib/teachers.ts`
4. **Customize pricing** in `app/_components/pricing/pricing-plans.ts`

---

## Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear, descriptive commit messages
- Add comments for complex logic
- Ensure accessibility standards are met
- Test your changes thoroughly
- Update documentation if needed

### Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code:

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards others

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Eduboost

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Acknowledgments

- Design inspiration from modern educational platforms
- Built with [Next.js](https://nextjs.org/) and [React](https://react.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">

**[Back to Top](#eduboost)**

Made with love by [Rohan Ahmed](https://github.com/rohanahmed24)

</div>
