const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  // Note that purge is already configured OOTD by @nuxt/tailwind:
  // https://tailwindcss.nuxtjs.org/tailwind-config#default-configuration
  purge: [],
  theme: {
    // https://tailwindcss.com/docs/theme#extending-the-default-theme
    extend: {
      fontFamily: {
        serif: ["DM Serif Text", ...defaultTheme.fontFamily.serif],
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // blue-tinged gray, originally from @tailwindcss/ui
        gray: {
          50: "#FDFDFD",
          100: "#F4F5F7",
          200: "#EDEFF2",
          300: "#DADEE4",
          400: "#B6BFCA",
          500: "#929DBO",
          600: "#7D8A9C",
          700: "#5B6777",
          800: "#46505E",
          900: "#323A46",
        },
        // https://javisperez.github.io/tailwindcolorshades/#/?Deep%20Sapphire=232463&tv=1
        navy: {
          DEFAULT: "#232463",
          50: "#FAFBFC",
          100: "#F7F8FA",
          200: "#EFF0F4",
          300: "#D7D7E2",
          400: "#ADADC3",
          500: "#6B6C96",
          600: "#585985",
          700: "#232463",
          800: "#1C1E53",
          900: "#161743",
        },
        mustard: {
          DEFAULT: "#F0B23A",
          50: "#FEFBF5",
          100: "#FDF7EB",
          200: "#E4F3EF",
          300: "#D2EBE4",
          400: "#F5CB7B",
          500: "#F0B23A",
          600: "#CE9B33",
          700: "#967327",
          800: "#755A1F",
          900: "#534117",
        },
        mint: {
          DEFAULT: "#D2EBE4",
          50: "#F6FBFA",
          100: "#EDF7F4",
          200: "#E4F3EF",
          300: "#D2EBE4",
          400: "#80C9BC",
          500: "#42AEA1",
          600: "#39978E",
          700: "#29716D",
          800: "#205856",
          900: "#174040",
        },
        linen: "#F8F7F1",
        outline: "#ABABC3",
        accent: {
          DEFAULT: "#D3D3E0",
          secondary: "#FCF0D8",
          tertiary: "#EDF7F4",
        },
        text: {
          // Ideally this would reference colors.navy via theme(), but that is throwing an error for
          // whatever reason
          primary: "#232463",
          secondary: "#5F608C",
        },
        inactive: "#D7D7E2",

        success: {
          DEFAULT: "#75d279",
          50: "#F8FDF8",
          100: "#F1FAF1",
          200: "#E3F6E3",
          300: "#D0F0D1",
          400: "#A2E1A5",
          500: "#75D279",
          600: "#64B76B",
          700: "#498852",
          800: "#386B41",
          900: "#284D30",
        },
        fail: {
          DEFAULT: "#FF5A79",
          50: "#FFF7F8",
          100: "#FFEFF1",
          200: "#FFDDE3",
          300: "#FFC7D1",
          400: "#FF90A5",
          500: "#FF5A79",
          600: "#DB4E6B",
          700: "#9F3A52",
          800: "#7B2E41",
          900: "#582130",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
