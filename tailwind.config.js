/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arimo: ['var(--font-arimo)', 'ui-sans-serif', 'system-ui'],
        anton: ['var(--font-anton)', 'sans-serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        klein: '#002fa7',
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        accent: 'var(--color-accent)',
      },
      spacing: {
        container: 'var(--spacing-container)',
        15: '3.75rem',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
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
    },
  },
  plugins: [],
};
