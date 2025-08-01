 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./views/**/*.{html,js}"],
   theme: {
     extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
     },
   },
   plugins: [],
 }


