import { Popover } from "@mui/material";
import { styled } from "@mui/material/styles";

interface PopoverCustomProps {
  boxref: any;
  popover_width?: number;
}

interface WrapperProps {
  endIcon?: any;
  disabled?: boolean;
}

export const Wrapper = styled("div")<WrapperProps>(({ theme, disabled }) => ({
  "& .select-box": {
    border: `1px solid ${theme.palette.secondary.light}`,
    backgroundColor: theme.palette.background.default,
    borderRadius: "12px",
    padding: "12px",
    position: "relative",
    height: "46px",
    "& input": {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: "14px",
      lineHeight: "19.6px",
      color: theme.palette.primary.dark,
    },
    "&.select-box-error": {
      backgroundColor: "#FBEFEF",
      border: `1px solid ${theme.palette.warning.dark}`,
    },
  },
  "& .select-arrow": {
    position: "absolute",
    right: "12px",
    top: "calc(50% - 2px)",
    transition: "transform .3s ease-in-out",
    transform: "rotate(180deg)",
    "&.active": {
      transform: "rotate(0deg)",
    },
  },
  "& .select-placeholder": {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.secondary.light,
  },
  "& .select-selected-text": {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: "14px",
    lineHeight: "19.6px",
    color: theme.palette.primary.dark,
  },
  "& .error-text": {
    fontFamily: theme.typography.fontFamily,
    fontWeight: `${theme.typography.fontWeightMedium} !important`,
    fontSize: "12px",
    lineHeight: "12px",
    color: `${theme.palette.warning.dark} !important`,
    gap: "4px",
    marginTop: "2px",
  },
}));

export const PopoverWrapper = styled(Popover)<PopoverCustomProps>(
  ({ theme, boxref, popover_width: popoverWidth }) => ({
    "& .MuiPaper-root": {
      width: popoverWidth ? popoverWidth : `${boxref.current?.offsetWidth}px`,
      borderRadius: "12px",
      boxShadow: "0px 5px 16px 0px #0000001F",
      "& .select-list": {
        "& li": {
          "&.active": {
            "& button": {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.secondary.main,
            },
          },
          "& button": {
            fontWeight: theme.typography.fontWeightMedium,
            fontSize: "14px",
            lineHeight: "19.6px",
            color: theme.palette.secondary.light,
            padding: "11px 12px",
            width: "100%",
            justifyContent: "flex-start",
            transition: "all .2s linear",
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.secondary.main,
            },
          },
        },
      },
    },
  })
);
