import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import "@fontsource/raleway";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#0D0D0D",
    white: "#F2F2F2",
    gray: {
      //Based on #404040
      50: "#fbf0f2",
      100: "#dcd8d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#282626",
      900: "#150a0d",
    },
    blue: {
      //Based on #80b5f4
      50: "#e2f2ff",
      100: "#b7d6fc",
      200: "#8abbf5",
      300: "#5d9ff0",
      400: "#3384ea",
      500: "#1c6ad1",
      600: "#1353a3",
      700: "#0a3b75",
      800: "#022348",
      900: "#000d1c",
    },
    purple: {
      //Based on #E6E2F0
      50: "#f1eef6",
      100: "#d3cee0",
      200: "#b6accd",
      300: "#998abb",
      400: "#7d6aa9",
      500: "#63508f",
      600: "#4d3e6f",
      700: "#372c4f",
      800: "#211b2f",
      900: "#0b0911",
    },
    pink: {
      //Based on #EBD9D9
      50: "#fceced",
      100: "#e5cdcd",
      200: "#d0acae",
      300: "#bd8b92",
      400: "#ac6b77",
      500: "#925162",
      600: "#723f50",
      700: "#522d3c",
      800: "#321a25",
      900: "#16070f",
    },
  },
  fonts: {
    heading: "",
    body: "Raleway",
  },
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: "0 0 3000 3163",
    },
  },
});

export default theme;
