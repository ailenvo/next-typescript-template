import { IconButton, TextField } from "@mui/material";
import React from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { Search } from "@mui/icons-material";

export interface InputFormProps {
  id?: string;
  fullWidth?: boolean;
  label?: React.ReactNode;
  required?: boolean;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  variant?: "filled" | "outlined" | "standard";
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onKeyPress?: React.KeyboardEventHandler<HTMLDivElement>;
  sx?: SxProps<Theme>;
}
export default function InputSearch({
  id = "input-search",
  fullWidth = true,
  label,
  required,
  value,
  onChange,
  variant = "outlined",
  size = "small",
  placeholder,
  className,
  disabled,
  sx,
  onKeyPress
}: InputFormProps) {
  return (
    <TextField
      id={id}
      required={required}
      disabled={disabled}
      label={label}
      fullWidth={fullWidth}
      className={className}
      onKeyPress={onKeyPress}
      sx={sx}
      size={size}
      value={value}
      placeholder={placeholder}
      variant={variant}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <IconButton size="small" sx={{ borderRadius: 0 }} color="primary">
            <Search />
          </IconButton>
        )
      }}
    />
  );
}
