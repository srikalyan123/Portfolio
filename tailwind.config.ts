import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"], // Enables dark mode with a "class" strategy
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem", // Adds padding to the container
      screens: {
        "2xl": "1400px", // Customizes the max width for 2xl screens
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Sets the default sans-serif font
      },
      colors: {
        border: "#DEDEDE", // Light gray
        input: "#F9F9F9", // Off-white
        ring: "#3B82F6", // Light blue
        background: "#FFFFFF", // White
        foreground: "#111111", // Near black
        primary: {
          DEFAULT: "#2563EB", // Blue
          foreground: "#FFFFFF", // White for text on primary background
        },
        secondary: {
          DEFAULT: "#9CA3AF", // Gray
          foreground: "#FFFFFF", // White for text on secondary background
        },
        accent: {
          DEFAULT: "#EC4899", // Pink
          foreground: "#FFFFFF", // White for text on accent background
        },
        card: {
          DEFAULT: "#F9FAFB", // Very light gray
          foreground: "#111111", // Near black for card content
        },
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-out": "slide-out 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Adds animation utilities
  ],
} satisfies Config;
