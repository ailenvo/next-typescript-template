import { createTheme } from "@mui/material/styles";
import shape from "./shape";
import palette from "./palette";
import typography from "./typography";
import shadows, { customShadows } from "./shadows";
import breakpoints from "./breakpoints";
import { Theme } from "@mui/material";

// Custom theme: Colors
const themeColors = {
  palette,
  shape,
  typography,
  shadows,
  customShadows,
} as const;

// Update for Typescript
type CustomTheme = {
  [Key in keyof typeof themeColors]: (typeof themeColors)[Key];
};
declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

// Create theme
export const theme: Theme = createTheme({
  ...themeColors,
  breakpoints: breakpoints,
});
