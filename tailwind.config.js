/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Product Sans Regular', 'sans-serif'],
      body: ['Product Sans Regular', 'sans-serif']
    },
    extend: {
      colors: {
        blue: {
          '100': '#C5DBFA',
          '200': '#8FB7ED',
          '300': '#5795E8',
          '400': '#4989DF',
          '500': '#2777E1',
          '600': '#136ADF',
          '700': '#0C55B7',
          '800': '#0A428E',
          '900': '#062C60'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
