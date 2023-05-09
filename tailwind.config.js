/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: 'hsl(0deg 0% 7.45%)',
        primaryColor: 'hsl(355.8deg 81.71% 34.31%)',
        secondaryColor: 'hsl(0deg 0% 3.41%)',
        cardColor: 'hsl(0deg 0% 6.76%)',
      },
    },
  },
  plugins: [],
}
