/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-purple": "hsl(254, 100%, 60%);",
        "almost-gray": "hsl(240, 3%, 85%)",
        "not-so-gray": "hsl(240, 6.7%, 97.1%)",
      },
    },
  },
  plugins: [],
};
