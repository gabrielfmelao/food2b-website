module.exports = {
  // configure the paths to all of your source files
  content: [
    'node_modules/preline/dist/*.js',
    './src/**/*.{html,js}',
    './node_modules/preline/preline.js',
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  

  // enable dark mode via class strategy
  darkMode: 'class',

  theme: {},

  // add plugins to your Tailwind CSS project
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ]
}