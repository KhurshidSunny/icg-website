/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          DEFAULT: '#8AA823', // Primary color
          light: '#A3C238', // Lighter shade
          dark: '#6E8A1C', // Darker shade
        },
        secondary: {
          DEFAULT: '#2C3E50', // Secondary color
          light: '#3B4E5F', // Lighter shade
          dark: '#1A2A3A', // Darker shade
        },
        background: {
          DEFAULT: '#FFFFFF', // Light mode background
          dark: '#1A1A1A', // Dark mode background
        },
        text: {
          DEFAULT: '#333333', // Light mode text
          dark: '#E0E0E0', // Dark mode text
        },
        button: {
          DEFAULT: '#8AA823', // Button background
          hover: '#A3C238', // Button hover state
          text: '#FFFFFF', // Button text
        },
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};