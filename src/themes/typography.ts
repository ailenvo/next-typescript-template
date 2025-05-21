import { TypographyVariantsOptions } from "@mui/material";

const pxToRem = (value?: number) => {
  return value ? `${value / 16}rem` : "1rem";
};

export type SizeProps = {
  fontSize: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    default?: number;
  };
  lineHeight?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    default?: number;
  };
  fontWeight?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    default?: number;
  };
};

const typography: TypographyVariantsOptions = {
  fontFamily: "Mulish",
  fontSize: 14,
  fontWeightRegular: 400,
  fontWeightLight: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: "1.5rem",
    lineHeight: 1.5,
    fontWeight: 400,
    margin: "0 0 .5rem",
  },
  h2: {
    fontSize: "1.4rem",
    lineHeight: 1.5,
    fontWeight: 400,
    margin: "0 0 .5rem",
  },
  h3: {
    fontSize: "1.55rem",
    lineHeight: 1.5,
    fontWeight: 400,
    margin: "0 0 .5rem",
  },
  h4: {
    fontSize: "1.1rem",
    lineHeight: 1.5,
    fontWeight: 400,
    margin: "0 0 .5rem",
  },
  h5: {
    fontSize: "1rem",
    lineHeight: 1.5,
    fontWeight: 400,
    margin: "0 0 .5rem",
  },
  h6: {
    fontSize: ".875rem",
    lineHeight: 1.5,
    fontWeight: 400,
    margin: "0 0 .5rem",
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 1.2,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
  allVariants: {
    listStyleType: "list-item",
  },
};

export default typography;
