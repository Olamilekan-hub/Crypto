/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scrollText: 'scrollText 10s linear infinite', // Name of the animation
      },
      keyframes: {
        scrollText: {
          '0%': { transform: 'translateX(10%)' }, // Start from outside the right
          '100%': { transform: 'translateX(-100%)' }, // Move to outside the left
        },
      },
    },
  },
  plugins: [],
}

