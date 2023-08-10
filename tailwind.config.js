/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {"fontFamily": {nunito: "Nunito Sans"},
    colors: {primary: {
      "dark-blue": "#2B3945",
      "very-dark-blue": "#202C37"
    }},
    gridTemplateColumns: {
      gridCol: "repeat(auto-fill, minmax(300px, 1fr))"
    },
    height: {
      "30": "30rem"
    },
    width: {
      "40": "40rem",
      "45": "45rem"
    }
  },

  },
  plugins: [],
  
}

