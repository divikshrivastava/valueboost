/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/pages/**/*.{js,ts,jsx,tsx}',     // Include all files in the pages directory
    './src/app/components/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
    './src/app/**/*.{js,ts,jsx,tsx}',        // Include all files in the app directory (if you use this directory)
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#2C3E50',
        'dark-purple': '#1D1B41',
        'light-blue': '#3498DB',
      },
    },
  },
  plugins: [],
};
