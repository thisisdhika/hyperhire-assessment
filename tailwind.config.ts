import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '3.5rem',
        '2xl': '5rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primaryText: '#2F2C2D',
        secondaryText: '#5E626F',
        primaryBackground: '#26C2B9',
        primaryBackground2: '#288BE7',
        secondaryBackground: '#FBFBFB',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
