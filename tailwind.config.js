/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arimo': ['var(--font-arimo)', 'ui-sans-serif', 'system-ui'],
        'anton': ['var(--font-anton)', 'sans-serif'],
        'sans': ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'bg': 'var(--color-bg)',
        'fg': 'var(--color-fg)',
        'accent': 'var(--color-accent)',
      },
      spacing: {
        'container': 'var(--spacing-container)',
      },
      borderRadius: {
        'lg': 'var(--radius-lg)',
      },
      fontSize: {
        'title': 'var(--title-size)',
      },
      animation: {
        'fadeIn': 'fadeIn 1.5s ease-out forwards',
        'spinOrganic': 'spinOrganic 6s ease-in-out infinite',
      },
      opacity: {
        '99': '0.99',
      },
      scale: {
        '99': '0.99',
        '103': '1.03',
      },
      keyframes: {
        fadeIn: {
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        spinOrganic: {
          '0%': { transform: 'rotate(0deg)' },
          '40%': { transform: 'rotate(180deg)' },
          '70%': { transform: 'rotate(220deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}