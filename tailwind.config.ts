module.exports = {
  // configure the paths to all of your source files
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
    './src/**/*.{html,js}',
  ],
  

  // enable dark mode via class strategy
  darkMode: 'class',

  theme: {
    extend: {
      backgroundImage: {
        'form-pattern': "url('/public/partner.png')"
      }
    },
    
  },

  // add plugins to your Tailwind CSS project
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ]
}