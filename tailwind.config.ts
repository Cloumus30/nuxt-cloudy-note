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
      blue2hover: "#558EFF",
      blue2click: "#004EE8",
      red1:"#E01A4F",
      red1hover: "#FF87A7",
      red1click: "#B0002F",
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

