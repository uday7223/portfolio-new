/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ylw-font': '#EDA911',
        'choco-font': '#5A2F27',
        'bg-1-color': '#EAE9E4',
        'bg-primary': '#ffffff',
        'bg-secondary': '#f8f9fa',
        'bg-tertiary': '#e9ecef',
        'text-primary': '#112D4E',
        'text-secondary': '#6c757d',
        'border-color': '#dee2e6',
        'header-bg': 'black',
      },
      backgroundImage: {
         'hero-bg': 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
         'about-bg': 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)',
         'contact-bg': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
         'hero-bg-dark': 'linear-gradient(to top, #1a1a1a 0%, #2d3748 100%)',
         'about-bg-dark': 'linear-gradient(to top, #2d2d2d 0%, #4a5568 99%, #4a5568 100%)',
         'contact-bg-dark': 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)'
      }
    },
  },
  plugins: [],
}
