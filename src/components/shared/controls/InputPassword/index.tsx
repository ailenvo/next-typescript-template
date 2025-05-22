import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import palette from "../../../../themes/palette";

interface FormInputPasswordProps {
  // required by validate
  name: string;
  control: Control<any, object>;
  errors: any;
  // more field
  fullWidth?: boolean;
  label?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  helperText?: any;
  rules?: any;
  infor?: string | null;
  showPassword?: boolean;
  handleShowPassword?: (showPassword: boolean, name: string) => void;
  placeholder?: string;
  className?: string;
  size?: "small" | "medium";
  startAdornment?: React.ReactNode;
}

export default function InputPassword({
  name,
  label,
  control,
  errors,
  rules,
  fullWidth = true,
  required,
  helperText,
  disabled,
  placeholder,
  size,
  startAdornment,
}: FormInputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  const onMouseDownPassword = (e: any) => {
    e.preventDefault();
  };

  const iconAdornment = {
    autoComplete: "new-password",
    endAdornment: (
      <InputAdornment position="end">
        <Box
          component={"div"}
          sx={{
            width: 32,
            height: 32,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          onMouseDown={onMouseDownPassword}
          className="flex-center"
        >
          {showPassword ? (
            <VisibilityIcon width={18} height={18} />
          ) : (
            <VisibilityOffIcon
              width={18}
              height={18}
              htmlColor={palette.action.active}
            />
          )}
        </Box>
      </InputAdornment>
    ),
    startAdornment: startAdornment,
  };

  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field }) => (
        <TextField
          id={name}
          label={label}
          size={size}
          error={!!errors[name] || !!helperText}
          required={required}
          {...field}
          type={showPassword ? "text" : "password"}
          fullWidth={fullWidth}
          disabled={disabled}
          value={field.value || ""}
          placeholder={placeholder}
          slotProps={{ input: iconAdornment }}
          helperText={
            helperText
              ? helperText
              : !helperText && errors[name]?.message
              ? errors[name]?.message
              : null
          }
        />
      )}
      control={control}
    />
  );
}
