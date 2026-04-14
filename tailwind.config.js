/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "sans-serif"],
        display: ["var(--font-heading)", "Outfit", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px rgba(11, 111, 164, 0.08)",
        hover: "0 20px 48px rgba(11, 111, 164, 0.12)",
      },
    },
  },
  plugins: [],
};
