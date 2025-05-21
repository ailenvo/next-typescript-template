import { Theme } from "@mui/material";

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {},
        select: {},
      },
    },
  };
}
