import React from "react";
import { GlobalStyles, Theme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";

function GlobalStyle(theme: Theme) {
  return {
    "*": {
      boxSizing: "border-box",
    },
    ":root": {
      fontSize: "16px",
    },
    body: {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.common.black,
      fontStyle: theme.typography,
      fontWeight: theme.typography.fontWeightRegular,
      backgroundColor: palette.grey[100],
      fontSize: "16px",
      lineHeight: "21px",
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "7px",
        backgroundColor: theme.palette.primary.light,
      },
    },
    main: {
      margin: "0 auto",
      overflow: "clip",
    },
    html: {
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "7px",
        backgroundColor: theme.palette.primary.light,
      },
    },
    a: {
      textDecoration: "none",
      display: "inline-block",
    },
    h1: {
      ...typography.h1,
    },
    h2: {
      ...typography.h2,
    },
    h3: {
      ...typography.h3,
    },
    h4: {
      ...typography.h4,
    },
    h5: {
      ...typography.h5,
    },
    h6: {
      ...typography.h6,
    },
    textarea: {
      resize: "none",
    },
    button: {
      textTransform: "none !important",
    },
    figure: {
      padding: "0",
      margin: "0",
    },
    input: {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      "&[type=number]": { MozAppearance: "textfield" },
    },
    "& .w-100": {
      width: "100%",
    },
  };
}

function AppGlobalStyles({ theme }: { theme: Theme }) {
  const globalStyle = GlobalStyle(theme);

  const otherGlobalStyles = {
    "&.flex": {
      display: "flex",
    },
    "&.hidden": { display: "none" },
    "&.flex-center": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "&.flex-start-align-center": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    "&.flex-end-align-center": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    "&.flex-end-align-start": {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-end",
    },
    "&.flex-start-align-top": {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    "&.flex-center-align-top": {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    "&.flex-center-align-bottom": {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    "&.flex-between-align-top": {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    "&.flex-start-align-bottom": {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-start",
    },
    "&.flex-between-align-bottom": {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
    "&.flex-between-align-center": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "&.flex-between": {
      display: "flex",
      justifyContent: "space-between",
    },
    "&.flex-column-center": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    "&.flex-column-start": {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
    },
    "&.flex-column-justify-start": {
      display: "flex",
      justifyContent: "flex-start !important",
      alignItems: "flex-start !important",
      flexDirection: "column",
    },
    "&.flex-column-end": {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexDirection: "column",
    },
    "&.scrollbar": {
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "7px",
        backgroundColor: theme.palette.primary.light,
      },
    },
    "&.scrollbar-small": {
      "&::-webkit-scrollbar": {
        width: "3px",
        height: "3px",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "7px",
        backgroundColor: theme.palette.primary.light,
      },
    },
  };

  const globalStyles = { ...globalStyle, ...otherGlobalStyles };

  const baseStyles = <GlobalStyles styles={globalStyles} />;

  return baseStyles;
}

export default AppGlobalStyles;
