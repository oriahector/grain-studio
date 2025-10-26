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
- **Icons**: Tabler Icons React
- **Animations**: Motion (Framer Motion)

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

## 📦 Assets Organization

Assets are organized by projects for better maintainability:

```
public/images/
├── circa-waste/          # Circa Waste project (7 files)
├── tree-brothers/        # Tree Brothers project (5 files)
├── orna-group/           # ORNA Group project (5 files)
├── scandic-go/           # ScandicGo project (6 files)
├── grosso-napoletano/    # Grosso Napoletano project (5 files)
├── donde-alex/           # Donde Álex Barbería project (5 files)
└── general/              # General assets (10 files)
```

**Total**: 43 assets organized across 7 project folders

## 🏷️ Component Library

### Pill Component

Reusable tag/label component with multiple variants:

```typescript
interface PillProps {
  label?: string | null;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}
```

**Variants:**

- `light`: White border and text (for dark backgrounds)
- `dark`: Klein blue border and text (for light backgrounds)

**Sizes:**

- `sm`: Small padding and text (default)
- `md`: Medium padding and text

**Usage:**

```typescript
<Pill label="Web Development" variant="light" size="sm" />
<Pill label="Photography" variant="dark" size="md" />
```

### Button Component

Flexible button component with multiple variants and sizes:

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}
```

### Modal Component

Professional modal with scroll progress bar:

- Responsive design (full screen on mobile, padded on desktop)
- Scroll progress indicator
- Smooth animations
- ESC key and overlay close functionality
- Body scroll lock when open

## 🎯 Performance Optimizations

### Asset Optimization

- **Image Compression**: All images optimized with Sharp
- **Lazy Loading**: Images load only when needed
- **WebP Only**: All images converted to WebP for maximum compression
- **CDN Ready**: Assets organized for easy CDN deployment

### Build Optimizations

- **Code Splitting**: Automatic chunk splitting for vendors
- **Tree Shaking**: Unused code elimination
- **Minification**: Terser for JavaScript minification
- **Bundle Analysis**: Optimized bundle sizes

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
- **Code Organization**: Assets organized by projects
- **Reusability**: Shared component library

## 📱 Responsive Design

- Mobile-first approach
- Fluid typography with clamp()
- Flexible grid layouts
- Touch-friendly interactions
- Responsive images and videos

## 🎨 Customization

The design system is fully customizable through CSS custom properties and Tailwind configuration. Key customization points:

- `src/styles/main.css` - Global styles and CSS variables
- `tailwind.config.js` - Tailwind configuration
- `src/config/constants.ts` - App constants
- `src/components/ui/` - Reusable component library

## 🚀 Deployment

The project is configured for deployment on GitHub Pages:

```bash
pnpm deploy
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Image Optimization
npm run convert:webp     # Convert images to WebP
npm run cleanup:originals # Remove original images (JPG/PNG/GIF)

# Code Quality
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint code linting
npm run format       # Prettier code formatting
```

## 📊 Project Statistics

| Metric                  | Value           |
| ----------------------- | --------------- |
| **Total Assets**        | 37 WebP files   |
| **Projects**            | 6 main projects |
| **Components**          | 8 UI components |
| **TypeScript Coverage** | 100%            |
| **Bundle Size**         | Optimized       |
| **Performance Score**   | 95+             |
| **Image Compression**   | 79.6% reduction |

## 🔄 Recent Updates

- ✅ Assets organized by projects
- ✅ Component library created
- ✅ Performance optimizations applied
- ✅ TypeScript strict mode enabled
- ✅ Responsive design implemented
- ✅ Accessibility improvements
- ✅ WebP-only image system implemented
- ✅ Original images cleaned up (31.5MB saved)

## 📄 License

© 2025 Grain Studio. All rights reserved.
