/** @type {import('tailwindcss').Config} */
const { radixToTailwind } = require("./src/lib/utils")
const {
  mauve,
  mauveDark,
  orangeDark,
  orange,
  pink,
  pinkDark,
  lime,
  limeDark,
  blackA
} = require("@radix-ui/colors")
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  theme: {
    extend: {
      colors: {
        neutral: radixToTailwind(mauve),
        neutralDark: radixToTailwind(mauveDark),
        orange: radixToTailwind(orange),
        orangeDark: radixToTailwind(orangeDark),
        pink: radixToTailwind(pink),
        pinkDark: radixToTailwind(pinkDark),
        lime: radixToTailwind(lime),
        limeDark: radixToTailwind(limeDark),
        black: radixToTailwind(blackA)
      },
      spacing: {
        popup: "464px"
      }
    }
  }
}
