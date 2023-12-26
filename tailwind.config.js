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
        "hero-image-3": "url(/bg-pattern-home-3.svg)",
        "hero-image-4": "url(/bg-pattern-home-4.svg)",
        "top-footer": "url(/bg-top-footer.svg)",
        "manage-section": "url(/bg-manage-section.svg)",
        quotes: "url(/bg-quotes.svg)",
      },
    },
  },
  plugins: [],
};
