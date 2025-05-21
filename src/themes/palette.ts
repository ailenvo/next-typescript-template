import { Palette, PaletteColor, alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const colorWhite = "#FFFFFF";
const colorBlack = "#000000";
function customAugmentColor(mainColor: string) {
  return {
    main: mainColor,
    light: alpha(mainColor, 0.2),
    dark: alpha(mainColor, 0.48),
    contrastText: colorWhite,
  };
}

// SETUP COLORS
const GREY = {
  50: "#F9FBFB",
  100: "#F1F5F6",
  200: "#E6ECEE",
  300: "#D3DCDF",
  400: "#B5C6CB",
  500: "#9DB1B8",
  600: "#7E969F",
  700: "#697F87",
  800: "#596970",
  900: "#48555B",
  A100: alpha("#0A0B0B", 0.4),
  A200: alpha("#0A0B0B", 0.7),
  A400: alpha("#2D393E", 1),
  A700: alpha("#0A0B0B", 1),
};

const PRIMARY: PaletteColor = {
  light: "#5B68B8",
  main: "#2A3990",
  dark: "#1A2879",
  contrastText: colorWhite,
};
const SECONDARY: PaletteColor = {
  light: "#FFB347",
  main: "#FF9500",
  dark: "#E86C00",
  contrastText: colorWhite,
};
const INFO: PaletteColor = {
  light: "#90CEE9",
  main: "#2E9CC9",
  dark: "#1A648A",
  contrastText: colorWhite,
};
const SUCCESS: PaletteColor = {
  light: "#86EFAD",
  main: "#22C55E",
  dark: "#15803C",
  contrastText: colorWhite,
};
const WARNING: PaletteColor = {
  light: "#FFF838",
  main: "#FDCF00",
  dark: "#AE7000",
  contrastText: colorWhite,
};
const ERROR: PaletteColor = {
  light: "#FAA4A6",
  main: "#ED3E47",
  dark: "#B71221",
  contrastText: colorWhite,
};

export const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  secondary: createGradient(SECONDARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

export const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
  colors: [
    "#f6685e",
    "#ed4b82",
    "#af52bf",
    "#8561c5",
    "#6573c3",
    "#4dabf5",
    "#35baf6",
    "#33c9dc",
    "#33ab9f",
    "#6fbf73",
    "#a2cf6e",
    "#d7e360",
    "#ffef62",
    "#ffcd38",
    "#ffac33",
    "#ff784e",
  ],
};

const palette: Palette = {
  mode: "light",
  common: {
    black: colorBlack,
    white: colorWhite,
  },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  divider: GREY[300],
  text: {
    primary: "#1A1A1A",
    secondary: "#4B5563",
    disabled: GREY[400],
  },
  background: {
    paper: colorWhite,
    default: "#F9F9F9",
  },
  action: {
    active: GREY[500],
    hover: GREY[500],
    selected: GREY[500],
    disabled: GREY.A400,
    disabledBackground: GREY.A400,
    focus: GREY[200],
    hoverOpacity: 0.08,
    disabledOpacity: 0.4,
    activatedOpacity: 0.8,
    focusOpacity: 0.8,
    selectedOpacity: 0.8,
  },
  augmentColor: () => customAugmentColor(PRIMARY.main),
  contrastThreshold: 4.5,
  getContrastText: background => background,
  tonalOffset: {
    dark: 0.2,
    light: 0.4,
  },
};

export default palette;
