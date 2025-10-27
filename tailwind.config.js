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
        klein: '#002fa7',
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
    },
  },
  plugins: [],
};
