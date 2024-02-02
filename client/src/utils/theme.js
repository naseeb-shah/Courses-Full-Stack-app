import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "primary",
        color: "text",
        fontFamily: "body", // Set the default font family
      },
    },
  },
  colors: {
    primary: "rgb(21, 34, 47)",
    text: "rgb(254,254,255)",
  },
  fonts: {
    body: "Roboto, sans-serif", // Set the default font type
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
});

export default theme;
