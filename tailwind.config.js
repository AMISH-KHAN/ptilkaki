/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:  {
      backgroundSize: {
        '100-auto': '100% auto',
      },
      backgroundPosition: {
        'custom-hero': '100% 50%, 0 0',
      },
      backgroundImage: {
        'custom-hero': "url('/public/assets/home-hero-bg.svg'), linear-gradient(to bottom, #151218 35%, white 73%)",
      },
      LinearGradient:{
  
        'custom-gradient': 'linear-gradient(145deg, rgba(252, 144, 126, 1) 0%, rgba(159, 110, 237, 1) 100%)'
      },
    
  },
  },
  plugins: [],
}