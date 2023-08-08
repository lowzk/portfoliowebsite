/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#c2c2c2',
        background: '#1e1e1e',
        highlight: '#bd7039',
        secondary: '#f2e6d9',
      },
    },
  },
  plugins: [],
}
