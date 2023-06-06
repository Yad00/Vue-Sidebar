/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#4ade80',
      'primary-alt': '#22c55e',
      grey: '#64748b',
      dark: '#1e293b',
      'dark-alt': '#334155',
      light: '#f1f5f9',
    },
    extend: {},
  },
  plugins: [],
};
