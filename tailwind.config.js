/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily:{
      Poppins:['Poppins',' sans-serif'],
      Salsa:['Salsa', 'cursive'],
      Teko:['Teko', 'sans-serif'],
      Agbalumo:[ 'Agbalumo',' system-ui'],
      ChakraPetch:['Chakra Petch', 'sans-serif'],
      Lobster:['Lobster', 'sans-serif'],
      LobsterTwo:['Lobster Two', 'sans-serif'],
      RobotoSlab:['Roboto Slab', 'sans-serif']
    },
    extend: {
      fontSize:{
        'clamp-p':'clamp(0.8rem,0.9vw,1.2rem)',
        'clamp-h6':'clamp(0.6rem,0.8vw,1.2rem)',
        'clamp-h5':'clamp(1rem,1.3vw,1.4rem)',
        'clamp-h4':'clamp(1.2rem,1.4vw,1.6rem)',
        'clamp-h3':'clamp(1.4rem,1.7vw,2rem)',
        'clamp-h2':'clamp(1.6rem,3vw,3rem)',
        'clamp-h1':'clamp(2rem,4vw,3.5rem)',
      },
    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}