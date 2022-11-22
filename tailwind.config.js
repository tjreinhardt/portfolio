/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      xxs: '0.6rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: ['1.125rem', {
        lineHeight: '1.75rem',
      }],
      xl: ['1.25rem', {
        lineHeight: '1.75rem',
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
      }],
      '4xl': ['2.25rem', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.02em',
      }],

    }
  },
  plugins: [require("tailwind-scrollbar")],
}
