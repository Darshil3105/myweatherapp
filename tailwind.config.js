module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile-s': '280px',
      'tab' : '640px',
      'lg' : '1024px',
      'xl' : '1240px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
