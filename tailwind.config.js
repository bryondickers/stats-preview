/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors:{
      darkBlueMainBg:"hsl(var(--dark-blue-mainbg))",
      cardBgColor:"hsl(var(--desaturated-blue-cardbg))",
      softViolet:"hsl(var(--soft-violet))",
      whiteHeading:"hsl(var(--white-mainheading))",
      mainParagraphColor:"hsla(var(--white-main-paragraph)/0.75)",
      statHeadingColor:"hsla(var(--white-stat-headings)/0.6)"

    },
    extend: {
      fontFamily: {
        inter:"'Inter', sans-serif",
        lexendDeca:"'Lexend Deca', sans-serif"
      }
    },
  },
  plugins: [],
}

