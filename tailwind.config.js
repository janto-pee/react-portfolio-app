/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f3ff",
          100: "#e8e7ff",
          200: "#d9d8f5",
          300: "#c4c3e0",
          400: "#9e9db9",
          500: "#7c7b96",
          600: "#56556e",
          700: "#43435b",
          800: "#25263c",
          900: "#03001c",
        },
        secondary: {
          50: "#e1f7f1",
          100: "#b6eada",
          200: "#8bdcc4",
          300: "#65ccad",
          400: "#4dbf9c",
          500: "#41b28d",
          600: "#3ba480",
          700: "#359270",
          800: "#2f8262",
          900: "#256547",
        },
        neutral: {
          // 50: "rgb(249, 250, 251)",
          // 100: "rgb(243, 244, 246)",
          // 200: "rgb(229, 231, 235)",
          // 300: "rgb(209, 213, 219)",
          // 400: "rgb(156, 163, 175)",
          // 500: "rgb(107, 114, 128)",
          // 600: "rgb(75, 85, 99)",
          // 700: "rgb(55, 65, 81)",
          // 800: "rgb(31, 41, 55)",
          // 900: "rgb(17, 24, 39)",
          50: "#f7fbff",
          100: "#f2f6fc",
          200: "#edf1f6",
          300: "#dfe3e9",
          400: "#bdc1c6",
          500: "#9ea2a7",
          600: "#75797e",
          700: "#616569",
          800: "#42454a",
          900: "#212428",
        },
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/Hero/img-1-105a64ad.jpg')",
      },
    },
  },
  plugins: [],
};
