const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#ff4431'
        },
        blue: {
          600: '#0047ab'
        },
        blueGray: colors.blueGray
      },
      fontFamily: {
        sans: ['Cairo', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
