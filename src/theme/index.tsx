
import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    seaBlue: "#00A4CCFF",
    islandGreen: "#2BAE66FF",
    islandBrown: "#A07855FF",
    onyx: "#36313D",
    black: "#000000"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children } : any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
