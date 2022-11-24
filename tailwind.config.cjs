/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      backgroundImage: {
        // if you img file is in public folder just use '/ + img-file-name'
        "HeyCurvys": "url('./public/Web-shopping.svg')",
        "Social": "url('./public/Social-Engagement.svg')"
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};