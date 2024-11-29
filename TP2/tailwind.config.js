/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/html/*.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f5f7fa",
          100: "#e9eef5",
          200: "#cedae9",
          300: "#a3bad6",
          400: "#7297be",
          500: "#507aa7",
          600: "#3d618c",
          700: "#334e71",
          800: "#2d445f",
          900: "#2a3a50",
          950: "#1e293a",
        },
        lynch: {
          50: "#f5f7fa",
          100: "#ebeef3",
          200: "#d3dbe4",
          300: "#abbcce",
          400: "#7e98b2",
          500: "#5d7a97",
          600: "#4a637f",
          700: "#3d5067",
          800: "#354557",
          900: "#303b4a",
          950: "#202731",
        },
        pink: {
          50: "#fef1f8",
          100: "#fee5f3",
          200: "#ffcaea",
          300: "#ff9fd7",
          400: "#ff63ba",
          500: "#ff2896",
          600: "#f01279",
          700: "#d1055e",
          800: "#ad074d",
          900: "#8f0c43",
          950: "#580024",
        },
        orange: {
          50: "#fff4ed",
          100: "#ffe6d4",
          200: "#ffc9a9",
          300: "#ff9b65",
          400: "#fe7239",
          500: "#fc4d13",
          600: "#ed3209",
          700: "#c52209",
          800: "#9c1d10",
          900: "#7e1a10",
          950: "#440a06",
        },
        aquamarine: {
          50: "#e7fff8",
          100: "#c6ffec",
          200: "#92ffe0",
          300: "#4dffd4",
          400: "#00ffc2",
          500: "#00e8ae",
          600: "#00be90",
          700: "#009878",
          800: "#007860",
          900: "#006250",
          950: "#00382f",
        },
        cyan: {
          50: "#eefffd",
          100: "#c6fffa",
          200: "#8efff7",
          300: "#4dfbf3",
          400: "#19e8e5",
          500: "#00d5d5",
          600: "#00a0a4",
          700: "#027f83",
          800: "#086367",
          900: "#0c5255",
          950: "#002f34",
        },
      },
      skew: {
        7: "7deg",
      },
      backgroundImage: {
        "gradient-to-187": "linear-gradient(-187deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
