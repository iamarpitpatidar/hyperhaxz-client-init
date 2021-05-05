const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: false,
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
