/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    colors:{
      dark1: "#1E293B",
      dark2: "#191919",
      blue1: "#0C7489",
      blue2: "#1C64F2",
      red1:"#E01A4F",
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

