import { Theme } from "@mui/material";

export default function Tooltip(theme: Theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {},
        arrow: {},
      },
    },
  };
}
