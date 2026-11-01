/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sage: { DEFAULT: '#879B83', deep: '#526B59', light: '#B7C5AE' },
        walnut: { DEFAULT: '#594536', deep: '#352A24', light: '#8A705B' },
        glow: { DEFAULT: '#D5A65A', soft: '#E8C78E', muted: '#B98B45' },
        cream: '#F5F2EA',
        offwhite: '#FAF9F5',
        ink: '#222923',
        surface: '#ECEAE1',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
