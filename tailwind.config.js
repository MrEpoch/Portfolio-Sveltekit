/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
      extend: {
        fontFamily: {
            'anton': ['Anton', 'sans-serif'],
            "amarante": ['Amarante', 'sans-serif'],
        },
        colors: {
            'main': {
                light: "#3DF8D8",
                DEFAULT: '#2DA8D8',
                dark: '#3DA8D8',
            }
        }
      },
      
  },
  plugins: [],
}

