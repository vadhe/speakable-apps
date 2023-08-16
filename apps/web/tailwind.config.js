const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3e374d',
        secondary: '#dd477e',
        tertiary :'#e2e8f0'
      },
      fontFamily: {
        'monoton': ['Monoton', 'cursive'],
      }
    },
  },
  plugins: [],
};
