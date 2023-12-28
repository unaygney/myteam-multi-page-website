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
        "about-hero-1": "url(/bg-pattern-about-1.svg)",
        "client-1": "url(/bg-pattern-clients-1.svg)",
        "client-2": "url(/bg-pattern-clients-2.svg)",
        "cards-1": "url(/bg-pattern-cards-1.svg)",
        "cards-2": "url(/bg-pattern-cards-2.svg)",
        "form-1": "url(/bg-pattern-form.svg)",
        "form-2": "url(/bg-pattern-form-2.svg)",
        "top-footer": "url(/bg-top-footer.svg)",
        "manage-section": "url(/bg-manage-section.svg)",
        quotes: "url(/bg-quotes.svg)",
      },
    },
  },
  plugins: [],
};
