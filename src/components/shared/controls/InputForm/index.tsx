import { InputLabelProps, TextField } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { safeRead } from "../../../../utils";
import formatNumber from "../../../../utils/formatNumber";

export interface InputFormProps {
  name: string;
  control: Control<any, object>;
  errors: any;
  label?: React.ReactNode;
  InputLabelProps?: Partial<InputLabelProps> | undefined;
  required?: boolean;
  onClick?: () => void;
  onChange?: (value: any) => void;
  disabled?: boolean;
  helperText?: any;
  placeholder?: string;
  classname?: string;
  isFormatNumber?: boolean;
  rules?: any;
  startAdornment?: JSX.Element;
  type?: React.HTMLInputTypeAttribute;
  size?: "small" | "medium" | "large" | "xsmall";
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
}
export default function FormInputText({
  name,
  label,
  control,
  errors,
  InputLabelProps = {
    shrink: true,
  },
  required,
  helperText,
  disabled,
  placeholder,
  onChange,
  onClick,
  isFormatNumber,
  rules,
  startAdornment,
  type,
  size,
  multiline,
  rows,
  maxRows,
}: InputFormProps) {
  const error = safeRead(errors, name);

  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field }) => {
        return (
          <TextField
            {...field}
            id={name}
            size={size}
            onClick={onClick}
            multiline={multiline}
            rows={rows}
            maxRows={maxRows}
            fullWidth
            label={label}
            error={!!error?.message || !!helperText}
            required={required}
            type={type}
            InputLabelProps={InputLabelProps}
            disabled={disabled}
            inputProps={
              startAdornment
                ? {
                    startAdornment: startAdornment,
                  }
                : undefined
            }
            placeholder={placeholder && placeholder}
            value={
              isFormatNumber
                ? formatNumber.fNumber(field.value)
                : field.value ?? undefined
            }
            onChange={e => {
              const value = e.target.value;
              onChange ? onChange(value) : field.onChange(value);
            }}
            helperText={
              helperText
                ? helperText
                : !helperText && error?.message
                ? error?.message
                : null
            }
          />
        );
      }}
      control={control}
    />
  );
}
