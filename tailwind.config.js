/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url(/bg-pattern-home-2.svg)",
        "hero-image-1": "url(/bg-pattern-home-1.svg)",
        "manage-section": "url(/bg-manage-section.svg)",
      },
    },
  },
  plugins: [],
};
