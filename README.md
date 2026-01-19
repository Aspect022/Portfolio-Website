# 🚀 Portfolio Website - Jayesh's Personal Portfolio

A modern, feature-rich portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, achievements, and includes an AI-powered chatbot assistant for interactive engagement.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)](https://tailwindcss.com/)

## ✨ Features

### Core Features
- 🎨 **Modern UI/UX** - Clean, responsive design with dark/light mode toggle
- 🤖 **AI Chatbot Assistant** - Interactive chatbot powered by Groq's LLaMA models
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Next.js 15 for optimal loading speeds
- 🎭 **Smooth Animations** - Framer Motion animations and transitions
- 📧 **Contact Form** - Integrated with EmailJS for direct communication
- 🎯 **Easter Eggs** - Hidden interactive elements for engagement

### Sections
- **Hero** - Eye-catching landing section with animated introduction
- **About** - Personal information and technical skills
- **Projects** - Showcase of featured projects with live demos and repositories
- **Achievements** - Certifications, awards, and accomplishments
- **Experience** - Professional timeline and educational background
- **Contact** - Get in touch via form or social media links

### Technical Features
- 🌙 **Theme System** - Next-themes integration for dark/light mode
- 🎨 **Shadcn/UI Components** - Beautiful, accessible UI components
- 📊 **Analytics Ready** - Google Analytics integration support
- 🔒 **Type-Safe** - Full TypeScript implementation
- 🎪 **Component Library** - Comprehensive Radix UI primitives
- 🖼️ **Image Optimization** - Next.js Image component usage
- 🎵 **Lottie Animations** - High-quality vector animations

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15.1.6 (App Router)
- **Language:** TypeScript 5.7.2
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** Radix UI, Shadcn/UI
- **Animations:** Framer Motion 11.11.17
- **Icons:** Lucide React 0.468.0
- **Form Handling:** React Hook Form 7.54.2
- **Validation:** Zod 3.24.1

### Backend & Services
- **AI Integration:** Groq API (LLaMA models)
- **Email Service:** EmailJS
- **Analytics:** Google Analytics (optional)

### Developer Tools
- **Linting:** ESLint 9.18.0
- **Code Formatting:** Prettier
- **Build Tool:** Next.js built-in bundler
- **Package Manager:** npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.17 or higher)
- **npm** (v9 or higher) or **yarn**
- **Git**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Aspect022/Portfolio-Website.git
cd Portfolio-Website/Portfolio_Website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the `Portfolio_Website` directory:

```env
# Groq API for AI Chatbot
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

#### Getting API Keys:

**Groq API Key** (Required for AI Chatbot):
1. Visit [Groq Console](https://console.groq.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create and copy your API key

**Google Analytics** (Optional):
1. Visit [Google Analytics](https://analytics.google.com/)
2. Set up a property
3. Copy your Measurement ID (G-XXXXXXXXXX)

### 4. Configure Personal Information

Update the following files with your information:

- `lib/data.ts` - Personal data, skills, projects, achievements
- `public/jayesh_resume.pdf` - Replace with your resume
- `public/` - Replace project images with your own

## 💻 Development

### Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## 📁 Project Structure

```
Portfolio_Website/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   ├── chat/            # AI chatbot endpoint
│   │   └── health/          # Health check endpoint
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── layout/             # Layout components (header, footer)
│   ├── sections/           # Page sections (hero, about, projects)
│   └── ui/                 # Reusable UI components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and data
│   ├── data.ts             # Portfolio data
│   ├── groq-service.ts     # AI chatbot service
│   └── utils.ts            # Helper functions
├── public/                  # Static assets
│   ├── assets/             # Additional assets
│   └── *.png, *.jpg        # Project images
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── components.json         # Shadcn/UI configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization

### Personal Information

Edit `lib/data.ts` to customize:
- Personal details and bio
- Skills and technologies
- Projects and descriptions
- Achievements and certifications
- Social media links
- Contact information

### Styling

- **Colors:** Modify `tailwind.config.ts` for theme colors
- **Fonts:** Update `app/layout.tsx` for font families
- **Components:** Customize components in `components/ui/`

### Chatbot Personality

Edit `app/api/chat/route.ts` to modify:
- AI assistant personality
- Response style
- Knowledge base
- Context and behavior

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/)
3. Import your repository
4. Add environment variables
5. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Aspect022/Portfolio-Website)

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Render**
- **DigitalOcean App Platform**

**Note:** Ensure API routes are supported (requires server-side rendering).

## 📚 Documentation

Additional documentation:
- [AI Chatbot Setup Guide](Portfolio_Website/CHATBOT_SETUP.md) - Detailed chatbot configuration
- [Portfolio Projects](PORTFOLIO_PROJECTS.md) - Project descriptions and metadata
- [Contributing Guidelines](CONTRIBUTING.md) - How to contribute
- [License](LICENSE) - MIT License

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Jayesh**

- GitHub: [@Aspect022](https://github.com/Aspect022)
- Portfolio: [Live Demo]([https://your-portfolio-url.com](https://portfolio-website-two-blue-82.vercel.app/))

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Shadcn/UI](https://ui.shadcn.com/) - UI component library
- [Radix UI](https://www.radix-ui.com/) - Primitive UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Groq](https://groq.com/) - AI inference API
- [EmailJS](https://www.emailjs.com/) - Email service
- [Lucide](https://lucide.dev/) - Icon library

## 📞 Support

If you encounter any issues or have questions:

1. Check the [documentation](#-documentation)
2. Search [existing issues](https://github.com/Aspect022/Portfolio-Website/issues)
3. Create a [new issue](https://github.com/Aspect022/Portfolio-Website/issues/new)

## ⭐ Show Your Support

If you find this project helpful, please give it a ⭐️!

---

Made with ❤️ by Jayesh
