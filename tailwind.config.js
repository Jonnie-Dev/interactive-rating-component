/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'fluid-p':"clamp(0.875rem, 1.0357142857142858rem + -0.17857142857142858vw, 1rem);",
      },
      colors: {
        'color-accent': 'hsl(25, 97%, 53%)',
        'color-text': 'hsl(0, 0%, 100%)',
        'bg-light': 'hsl(217, 12%, 63%)',
        'bg-light2': 'hsl(216, 12%, 54%)',
        'bg-dark': 'hsl(213, 19%, 18%)',
        'bg-dark2': 'hsl(216, 12%, 8%)',
      },
    }
  },
  
  plugins: [],
}


