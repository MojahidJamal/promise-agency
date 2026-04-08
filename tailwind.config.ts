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
          DEFAULT: '#D4A520',
          50: '#FDF8E8',
          100: '#F9EDC4',
          200: '#F3DC8E',
          300: '#EBC95A',
          400: '#DFB830',
          500: '#D4A520',
          600: '#B8900E',
          700: '#8C6D0A',
          800: '#604B07',
          900: '#3A2D04',
        },
        promise: {
          gold: '#D4A520',
          'gold-dark': '#B8900E',
          'gold-light': '#FDF8E8',
          black: '#1A1A1A',
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
        'trust': '0 4px 20px rgba(212, 165, 32, 0.1)',
        'trust-lg': '0 8px 30px rgba(212, 165, 32, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
