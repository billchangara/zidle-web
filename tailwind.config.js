/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#58CC02',
        primaryDark: '#46A302',
        secondary: '#1CB0F6',
        secondaryDark: '#1899D6',
        surface: '#F7F7F7',
        border: '#E5E5E5',
        textPrimary: '#3C3C3C',
        textSecondary: '#777777',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      }
    },
  },
  plugins: [],
}

