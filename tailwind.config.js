/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-back': '#594842'
      },
      colors: {
        'custom-start': '#9b8f8a',
        'custom-end': '#3d3c3c',
        'custom-bg': '#594842',
        
      },
      textColor:{
        'custom-text-color': '#d6c6c1',
      },
      // Extend gradients
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #9b8f8a, #3d3c3c)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}

