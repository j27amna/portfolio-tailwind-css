/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage : {
        'contact-image': "url('/bgimg.jpg')"
      }
    },
  },
  plugins: [],
}

