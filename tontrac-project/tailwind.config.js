/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f68432",
          light: "#374151",
        },
        secondary: {
          DEFAULT: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#D1D5DB",
          light: "#E5E7EB",
        },
        text: {
          DEFAULT: "#F3F4F6",
          secondary: "#9CA3AF",
          light: "#D1D5DB",
        },
        background: {
          DEFAULT: "#282828",
          light: "#2b2b2b",
        },
        border: {
          DEFAULT: "#5c5c5d",
        },
        destructive: {
          DEFAULT: "#e3342f",
          light: "#f9acaa",
        },
        toast: {
          DEFAULT: "#15803d"
        }
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Chrome, Safari, and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },

      });
    },
  ],
};
