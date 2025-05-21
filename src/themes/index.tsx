// material
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
//
import { theme } from "./theme";
import componentsOverride from "./overrides";
import AppGlobalStyles from "./globalStyles";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeConfig({ children }: Props) {
  theme.components = componentsOverride(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppGlobalStyles theme={theme} />
      {children}
    </ThemeProvider>
  );
}
