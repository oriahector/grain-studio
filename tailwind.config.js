/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        klein: 'var(--color-klein)',
      },
      spacing: {
        15: '3.75rem',
      },
      fontSize: {
        title: 'var(--title-size)',
      },
      transitionDuration: {
        320: '320ms',
        520: '520ms',
      },
      opacity: {
        99: '0.99',
      },
      scale: {
        99: '0.99',
        103: '1.03',
      },
      // Mejoras de Tailwind 4: usar CSS variables directamente
      zIndex: {
        60: '60',
      },
    },
  },
  plugins: [],
  // Tailwind 4: Optimizaciones de build
  future: {
    hoverOnlyWhenSupported: true,
  },
};
