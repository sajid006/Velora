/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Tailwind.config.js
// module.exports = {
//   content: ["./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"],
//   presets: [require("@relume_io/relume-tailwind")],
// };

// Tailwind.config.js
// module.exports = {
//   content: [
//     "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   presets: [require("@relume_io/relume-tailwind")],
// };



