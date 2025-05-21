import { Theme } from "@mui/material";

export default function Input(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {},
      },
    },
    MuiInput: {
      styleOverrides: {},
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {},
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {},
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {},
        sizeLarge: {},
      },
    },
  };
}
