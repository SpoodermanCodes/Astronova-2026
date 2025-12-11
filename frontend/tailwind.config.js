/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        scan: {
          "0%": { top: "-10%" },
          "100%": { top: "110%" },
        },
        scroll: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(20px)", opacity: "0" },
        },
        grid: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(64px)" },
        },
      },
      animation: {
        gradient: "gradient 3s ease infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        scan: "scan 3s linear infinite",
        scroll: "scroll 1.5s ease-in-out infinite",
        grid: "grid 20s linear infinite",
      },
    },
  },
  plugins: [],
};
