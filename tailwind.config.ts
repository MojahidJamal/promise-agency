import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d99e4',
          50: '#e6f7ff',
          100: '#b3e5ff',
          200: '#80d4ff',
          300: '#4dc2ff',
          400: '#26b0ff',
          500: '#0d99e4',
          600: '#0a7ab8',
          700: '#085b8b',
          800: '#053d5e',
          900: '#031e31',
        },
        trust: {
          blue: '#0d99e4',
          'blue-dark': '#0a7ab8',
          'blue-light': '#e6f7ff',
          gold: '#ffd700',
          white: '#ffffff',
          gray: '#6b7280',
          'gray-light': '#f3f4f6',
        },
        black: '#111827',
        gray: '#6b7280',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-tajawal)', 'system-ui', 'sans-serif'],
        primary: ['var(--font-tajawal)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'trust': '0 4px 20px rgba(13, 153, 228, 0.1)',
        'trust-lg': '0 8px 30px rgba(13, 153, 228, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;

