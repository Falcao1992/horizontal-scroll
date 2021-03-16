module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '50': 'repeat(50, 2%)',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '50': 'repeat(50, 2%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
