const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Roboto Mono',
          ...defaultTheme.fontFamily.mono,
        ],
        digi: [
          'VT323',
          ...defaultTheme.fontFamily.mono,
        ]
      }
    },
  },
  plugins: [],
};
