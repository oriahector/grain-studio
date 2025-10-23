# Grain Studio Portfolio

A modern, responsive portfolio website built with React 19, TypeScript, and Tailwind CSS 4.

## 🚀 Features

- **Modern Stack**: React 19, TypeScript, Vite, Tailwind CSS 4
- **Responsive Design**: Mobile-first approach with fluid typography
- **Performance Optimized**: Fast loading with optimized assets
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Type Safety**: Full TypeScript coverage with strict mode
- **Component Architecture**: Reusable, maintainable components

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite 6
- **Package Manager**: pnpm
- **Linting**: ESLint, Prettier
- **Email Service**: EmailJS

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   └── icons/        # Icon components
├── config/           # Configuration and constants
├── data/            # Static data and content
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries
├── sections/        # Page sections
├── styles/          # Global styles and CSS
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## 🎨 Design System

- **Typography**: Custom font scale with fluid sizing
- **Colors**: Semantic color tokens
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth, performant transitions

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Start development server**:

   ```bash
   pnpm dev
   ```

3. **Build for production**:
   ```bash
   pnpm build
   ```

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript type checking

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎯 Best Practices

- **Component Composition**: Small, focused components
- **Type Safety**: Strict TypeScript configuration
- **Performance**: Optimized images and lazy loading
- **Accessibility**: Semantic HTML and ARIA labels
- **SEO**: Meta tags and structured data

## 📱 Responsive Design

- Mobile-first approach
- Fluid typography with clamp()
- Flexible grid layouts
- Touch-friendly interactions

## 🎨 Customization

The design system is fully customizable through CSS custom properties and Tailwind configuration. Key customization points:

- `src/styles/main.css` - Global styles and CSS variables
- `tailwind.config.js` - Tailwind configuration
- `src/config/constants.ts` - App constants

## 🚀 Deployment

The project is configured for deployment on GitHub Pages:

```bash
pnpm deploy
```

## 📄 License

© 2024 Grain Studio. All rights reserved.
