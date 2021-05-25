const defaultTheme = require('tailwindcss/defaultTheme')

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
        }
      },
      fontFamily: {
        sans: ['Cairo', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
