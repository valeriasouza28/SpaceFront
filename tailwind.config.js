/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // para extender as configuraões padrões de font do tailwind
      fontFamily: {
        // cria propriedade sans e passa para ela a variavel da font roboto definida no arquivo **layout.tsx**, fazendo o mesmo para a font bui-jamjuree mas defindo ela como  font alternativa
        sans: "var(--font-roboto)",
        alt: "var(--font-bai-jamjuree)",
      },

      colors: {
        gray: {
          50: "#eaeaea",
          100: "#bebebf",
          200: "#9e9ea0",
          300: "#727275",
          400: "#56565a",
          500: "#2c2c31",
          600: "#28282d",
          700: "#1f1f23",
          800: "#18181b",
          900: "#121215",
        },
        purple: {
          50: "#f3eefc",
          100: "#d8cbf71",
          200: "#c6b2f3",
          300: "#ab8eee",
          400: "#9b79ea",
          500: "#8257e5",
          600: "#764fd0",
          700: "#5c3ea3",
          800: "#48307e",
          900: "#372560",
        },
        green: {
          50: "#e6fbef",
          100: "#b1f1ce",
          200: "#8cebb6",
          300: "#57e295",
          400: "#36dc81",
          500: "#04d361",
          600: "#04c058",
          700: "#039645",
          800: "#027435",
          900: "#025929",
        },
      },

      backgroundImage: {
        stripes:
          // definimos um linear-gradient e o **to-bottom** indica que será aplicado na posição de cima para baixo, começa com uma cor branca opacidade de 0.1% e o segundo rgba é a cor branca novamente opacidade de 0.1% que será aplicada 12.5% apartir da altura do elemento **transparent** 12.5% indica não terá uma cor visivel mas uma listra vazia a partir 12.5% do  elemento, **transparent** indica que as proximas listras do elemento também será vazia

          "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)",
      },

      fontSize: {
        "5xl": "2.5rem",
      },

      backgroundSize: {
        stripes: "100% 8px",
      },

      blur: {
        full: "194px",
      },
    },
  },
  plugins: [],
};
