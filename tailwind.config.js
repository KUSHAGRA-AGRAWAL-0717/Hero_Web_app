// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Ensures Tailwind applies styles to your components
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // Ensure the plugin is listed here
  ],
};
