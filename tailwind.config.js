/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
      extend: {
        fontFamily: {
            'anton': ['Anton', 'sans-serif']
        },
        colors: {
            'main': {
                DEFAULT: '#2DA8D8'
            }
        }
      },
      
  },
  plugins: [],
}

